import { Injectable } from "@angular/core";
import { RequestOptionsArgs, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import { RequestInterceptor, ResponseInterceptor, HttpService } from "../http";

/**
 * HTTP Response- und Request-Interceptor um die Session-ID (PxSessionId) automatisch aus dem Header zu lesen und einzufügen
 */
@Injectable()
export class SessionIdInterceptor implements RequestInterceptor, ResponseInterceptor {
  private static SESSION_ID_HEADER = "PxSessionId";
  private sessionId: string;

  /**
   * Setzt die Session-ID im Request-Header
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  public processRequest(httpService: HttpService, observable: Observable<RequestOptionsArgs>): Observable<RequestOptionsArgs> {
    return observable.do((req: RequestOptionsArgs) => {
      if (this.sessionId) {
        req.headers = req.headers || new Headers();
        req.headers.set(SessionIdInterceptor.SESSION_ID_HEADER, this.sessionId);
      }
    });
  }

  /**
   * Liest die Session-ID aus der Response aus
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  public processResponse(httpService: HttpService, observable: Observable<Response>): Observable<Response> {
    return observable.do((res: Response) => this.retrieveSessionId(res), (res: Response) => this.retrieveSessionId(res));
  }

  /**
   * Hilfsfunktion um die Session-ID aus der Response auszulesen
   * @param res Response
   */
  private retrieveSessionId(res: Response) {
    if (res.headers && res.headers.has(SessionIdInterceptor.SESSION_ID_HEADER)) {
      this.sessionId = res.headers.get(SessionIdInterceptor.SESSION_ID_HEADER);
    }
  }
}
