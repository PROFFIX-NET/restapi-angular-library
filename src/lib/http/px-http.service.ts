import { Injectable } from "@angular/core";
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
    return PxUrlFormatter.getAbsolutUrl(urlOrEndpoint, this.connectionSettingsService.load().WebserviceUrl);
  }

  /**
   * GET-Request auf die REST API inklusive PxMetaData
   * @param T Typ der erwartet wird und in den die Antwort gemappt wird
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse oder ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getWithMetaData<T>(endpoint: string, params?: object): Observable<{ metadata?: any, data: T }> {
    return this.http.get<HttpResponse<T>>(this.getAbsolutUrl(endpoint), this.createRequestOption(params, 'response'))
      .pipe(map(response => {
        const metaData = response.headers ? JSON.parse(response.headers.get("pxmetadata")) : null;
        return { metadata: metaData, data: response.body };
      }));
  }

  /**
   * GET-Request auf die REST API
   * @param T Typ der erwartet wird und in den die Antwort gemappt wird
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse oder ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get<T>(endpoint: string, params?: object): Observable<T> {
    return this.getWithMetaData<T>(endpoint, params)
      .pipe(map(response => response.data));
  }

  /**
   * POST-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse
   * @param body Daten-Objekt welches zum Server transportiert wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public post(endpoint: string, body: any, params?: object): Observable<string> {
    return this.http.post<HttpResponse<any>>(
      this.getAbsolutUrl(endpoint),
      JSON.stringify(body),
      this.createRequestOption(params, 'response')
    ).pipe(
      map(response => {
        return response.headers.get("Location");
      })
    );
  }

  /**
   * PUT-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse/1
   * @param body Daten-Objekt welches zum Server transportiert wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public put(endpoint: string, body: any, params?: object): Observable<void> {
    return this.http.put<void>(
      this.getAbsolutUrl(endpoint),
      JSON.stringify(body),
      this.createRequestOption(params)
    );
  }

  /**
   * DELETE-Request auf die REST API
   * @param endpoint Endpunkt der aufgerufen wird z.B ADR/Adresse/1
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public delete(endpoint: string, params?: object): Observable<void> {
    return this.http.delete<void>(this.getAbsolutUrl(endpoint), this.createRequestOption(params));
  }

  /**
   * Erstellt RequestOptions mit URL-Parametern und Body
   * @param params URL-Parameter
   * @param body Body
   */
// tslint:disable-next-line: max-line-length
  private createRequestOption(params?: object, observe: 'body' | 'response' = 'body'): { headers?: HttpHeaders, params?: HttpParams, observe?: any } {
    const requestOptions: { headers?: HttpHeaders, params?: HttpParams, observe?: any } = { observe: observe };

    // URL-Parameter hinzufügen, wenn vorhanden
    if (params) {
      for (const param in params) {
        if (params.hasOwnProperty(param) && params[param]) {
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
