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
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
