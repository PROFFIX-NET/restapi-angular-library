import { RestApiModelInterface, Mitarbeiter, Stundenart } from '../../';

/**
 * Model für /ZEI/Stunden
 */
export interface Stunden extends RestApiModelInterface {
  StundenNr?: number;
  Mitarbeiter?: Mitarbeiter;
  Stundenart?: Stundenart;
  Datum?: Date;
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
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
