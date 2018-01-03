import { RestApiModelInterface, Mitarbeiter, Stundenart } from '../../';

/**
 * Model für /ZEI/Stunden
 */
export interface Stunden extends RestApiModelInterface {
  StundenNr?: number;
  Mitarbeiter?: Mitarbeiter;
  Stundenart?: Stundenart;
  Datum?: string;
  StartZeit?: string;
  EndZeit?: string;
  Stunden?: number;
  Pause?: number;
  KaWo?: string;
  Quelle?: string;
  QuelleStop?: string;
  Bemerkungen?: string;
  Longitude?: number;
  Latitude?: number;
  Accuryca?: number;
  LongitudeStop?: number;
  LatitudeStop?: number;
  AccurycaStop?: number;
  Kuerzung?: boolean;
  KuerzungMonat?: boolean;
  gesperrt?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
