import { RestApiModelInterface, Artikel, Lagerort, Lagerplatz, Charge } from '../../';

/**
 * Model für /LAG/SerieNummer
 */
export interface SerieNummer extends RestApiModelInterface {
  SerieNr?: string;
  Artikel?: Artikel;
  Lagerort?: Lagerort;
  Lagerplatz?: Lagerplatz;
  Charge?: Charge;
  Geloescht?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
