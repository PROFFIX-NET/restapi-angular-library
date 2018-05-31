import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";


import { PxConnectionSettingsService } from '../connection-settings/px-connection-settings.service';
import { PxUrlFormatter } from "../utils/px-url-formatter";
import { map } from "rxjs/operators";

/**
 * HTTP Server welcher die Verbindung zur REST API sicherstellt.
 * Die Basis-URL der REST API wird aus dem ConnectionSettingsService geladen.
 * Es werden alle Interceptors durchlaufen, welche in den Opaque Token REQUEST_INTERCEPTORS und RESPONSE_INTERCEPTORS registriert sind.
 */
@Injectable()
export class PxHttpService {

  public constructor(
    private http: HttpClient,
    private connectionSettingsService: PxConnectionSettingsService
  ) { }

  /**
   * Erstellt die komplette URL für einen Endpunkt
   * @param string urlOrEndpoint Endpunkt (z.B PRO/Info) oder komplette URL (wird unverändert zurückgegeben), "/" werden getrimmt
   */
  private getAbsolutUrl(urlOrEndpoint: string): string {
    return PxUrlFormatter.getAbsolutUrl(urlOrEndpoint, this.connectionSettingsService.current.WebserviceUrl);
  }

  /**
   * GET-Request auf die REST API
   * @param T Typ der erwartet wird und in den die Antwort gemappt wird
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse oder ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get<T>(endpoint: string, params?: object): Observable<T> {
    return this.http.get<T>(this.getAbsolutUrl(endpoint), this.createRequestOption(params));
  }

  /**
   * POST-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse
   * @param body Daten-Objekt welches zum Server transportiert wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public post(endpoint: string, body: any, params?: Object): Observable<string> {
    const option = this.createRequestOption(params);
    return this.http.post<HttpResponse<any>>(this.getAbsolutUrl(endpoint),
      JSON.stringify(body), { headers: option.headers, params: option.params, observe: 'response' }).pipe(
        map(response => {
          return response.headers.get("Location");
        }));
  }

  /**
   * PUT-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse/1
   * @param body Daten-Objekt welches zum Server transportiert wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public put(endpoint: string, body: any, params?: Object): Observable<void> {
    return this.http.put<void>(this.getAbsolutUrl(endpoint),
      JSON.stringify(body), this.createRequestOption(params));
  }

  /**
   * DELETE-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public delete(endpoint: string, params?: Object): Observable<void> {
    return this.http.delete<void>(this.getAbsolutUrl(endpoint), this.createRequestOption(params));
  }

  /**
   * Erstellt RequestOptions mit URL-Parametern und Body
   * @param params URL-Parameter
   * @param body Body
   */
  private createRequestOption(params?: Object): { headers?: HttpHeaders, params?} {
    const requestOptions: { headers?: HttpHeaders, params?: HttpParams } = {};

    // URL-Parameter hinzufügen, wenn vorhanden
    if (params) {
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          if (requestOptions.params == null) {
            requestOptions.params = new HttpParams();
          }
          requestOptions.params = requestOptions.params.set(param, params[param]);
        }
      }
    }

    requestOptions.headers = new HttpHeaders({ "Content-Type": "application/json" });

    return requestOptions;
  }
}
