import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptionsArgs, RequestOptions, RequestMethod, Headers, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/mergeMap";
import { ConnectionSettingsService } from '../connection-settings';
import { RESPONSE_INTERCEPTORS, ResponseInterceptor } from "./response-interceptor";
import { REQUEST_INTERCEPTORS, RequestInterceptor } from "./request-interceptor";


/**
 * HTTP Server welcher die Verbindung zur REST API sicherstellt.
 * Die Basis-URL der REST API wird aus dem ConnectionSettingsService geladen.
 * Es werden alle Interceptors durchlaufen, welche in den Opaque Token REQUEST_INTERCEPTORS und RESPONSE_INTERCEPTORS registriert sind.
 */
@Injectable()
export class HttpService {

  public constructor(
    private http: Http,
    private connectionSettingsService: ConnectionSettingsService,
    @Inject(REQUEST_INTERCEPTORS) private requestInterceptors: RequestInterceptor[],
    @Inject(RESPONSE_INTERCEPTORS) private responseInterceptors: ResponseInterceptor[]
  ) { }

  /**
   * Erstellt die komplette URL für einen Endpunkt
   * @param string urlOrEndpoint Endpunkt (z.B PRO/Info) oder komplette URL (wird unverändert zurückgegeben), "/" werden getrimmt
   */
  public getAbsolutUrl(urlOrEndpoint: string): string {
    if (urlOrEndpoint.startsWith("http")) {
      return urlOrEndpoint;
    }

    const baseUrl: string = this.connectionSettingsService.current.WebserviceUrl;
    return this.trim(baseUrl, "/") + "/" + this.trim(urlOrEndpoint, "/");
  }

  /**
   * Extrahiert den Endpunkt aus einer kompletten URL
   * @param string urlOrEndpoint Endpunkt (z.B PRO/Info) oder komplette URL, "/" werden getrimmt
   */
  public getEndpoint(urlOrEndpoint: string): string {
    let baseUrl: string = this.connectionSettingsService.current.WebserviceUrl;
    baseUrl = this.trim(baseUrl, "/");
    urlOrEndpoint = this.trim(urlOrEndpoint, "/");

    return this.trimStart(this.trimStart(urlOrEndpoint, baseUrl), "/");
  }

  /**
   * Führt einen HTTP-Request auf die REST API aus
   * @param method HTTP Methode: GET, POST, PUT, DELETE
   * @param endpoint Endpunkt der aufgerufen wird z.B PRO/Info
   * @param options Request Options
   */
  public request(method: RequestMethod, endpoint: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log("HTTP Request: " + RequestMethod[method] + " " + endpoint);

    // RequestOptions setzen und mit allfällig übergebenen RequestOptions zusammenführen
    options = new RequestOptions({
      method: method,
      url: this.getAbsolutUrl(endpoint)
    }).merge(options);

    const subject: ReplaySubject<RequestOptionsArgs> = new ReplaySubject<RequestOptionsArgs>();
    subject.next(options);
    subject.complete();

    // Durchlaufe alle Request-Interceptors
    let requestObservable: Observable<RequestOptionsArgs> = subject.asObservable();
    for (const interceptor of this.requestInterceptors) {
      requestObservable = interceptor.processRequest(this, requestObservable);
    }

    // Durchlaufe alle Response-Interceptors
    let responseObservable: Observable<Response> = requestObservable.flatMap(o => this.http.request(o.url, o)); // Request ausführen
    for (const interceptor of this.responseInterceptors) {
      responseObservable = interceptor.processResponse(this, responseObservable);
    }

    return responseObservable;
  }

  /**
   * GET-Request auf die REST API
   * @param T Typ der erwartet wird und in den die Antwort gemappt wird
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse oder ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get<T>(endpoint: string, params?: object): Observable<T> {
    return this.request(RequestMethod.Get, endpoint, this.createRequestOption(params)).map(
      (response: Response) => response.json() as T
    );
  }

  /**
   * POST-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse
   * @param body Daten-Objekt welches zum Server transportiert wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public post(endpoint: string, body: any, params?: Object): Observable<string> {
    return this.request(RequestMethod.Post, endpoint, this.createRequestOption(params, body)).map(
      (response: Response) => response.headers.get("Location")    // extrahiere Location aus Header
    );
  }

  /**
   * PUT-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse/1
   * @param body Daten-Objekt welches zum Server transportiert wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public put(endpoint: string, body: any, params?: Object): Observable<void> {
    return this.request(RequestMethod.Put, endpoint, this.createRequestOption(params, body)).map(
      (response: Response) => undefined     // mappe zu "nichts"
    );
  }

  /**
   * DELETE-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public delete(endpoint: string, params?: Object): Observable<void> {
    return this.request(RequestMethod.Delete, endpoint, this.createRequestOption(params)).map(
      (response: Response) => undefined     // mappe zu "nichts"
    );
  }

  /**
   * Trimmt eine Zeichenkette am Anfang eines Strings weg
   * @param str String der getrimmt wird
   * @param separator Zeichen die getrimmt werden
   */
  private trimStart(str: string, separator: string): string { // TODO Stringfunktionen in eine Utils-Klasse
    if (str && separator) {
      while (str.startsWith(separator)) {
        str = str.substr(separator.length);
      }
    }

    return str;
  }

  /**
   * Trimmt eine Zeichenkette am Ende eines Strings weg
   * @param str String der getrimmt wird
   * @param separator Zeichen die getrimmt werden
   */
  private trimEnd(str: string, separator: string): string { // TODO Stringfunktionen in eine Utils-Klasse
    if (str && separator) {
      while (str.endsWith(separator)) {
        str = str.substr(0, str.length - separator.length);
      }
    }

    return str;
  }

  /**
   * Trimmt eine Zeichenkette am Anfang und Ende eines Strings weg
   * @param str String der getrimmt wird
   * @param separator Zeichen die getrimmt werden
   */
  private trim(str: string, separator: string): string { // TODO Stringfunktionen in eine Utils-Klasse
    return this.trimEnd(this.trimStart(str, separator), separator);
  }

  /**
   * Erstellt RequestOptions mit URL-Parametern und Body
   * @param params URL-Parameter
   * @param body Body
   */
  private createRequestOption(params?: Object, body?: any): RequestOptions {
    const requestOptions = new RequestOptions();

    // URL-Parameter hinzufügen, wenn vorhanden
    if (params) {
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          if (requestOptions.search == null) {
            requestOptions.search = new URLSearchParams();
          }
          requestOptions.search.append(param, params[param]);
        }
      }
    }

    // Body hinzufügen, wenn vorhanden
    if (body) {
      requestOptions.headers = new Headers({ "Content-Type": "application/json" });
      requestOptions.body = JSON.stringify(body);
    }

    return requestOptions;
  }
}
