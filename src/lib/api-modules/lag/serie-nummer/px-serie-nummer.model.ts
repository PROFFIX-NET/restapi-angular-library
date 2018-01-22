import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxArtikel } from "../artikel/px-artikel.model";
import { PxLagerort } from "../lagerort/px-lagerort.model";
import { PxLagerplatz } from "../lagerplatz/px-lagerplatz.model";
import { PxCharge } from "../charge/px-charge.model";

/**
 * Model für /LAG/SerieNummer
 */
export interface PxSerieNummer extends PxRestApiModelInterface {
  SerieNr?: string;
  Artikel?: PxArtikel;
  Lagerort?: PxLagerort;
  Lagerplatz?: PxLagerplatz;
  Charge?: PxCharge;
  Geloescht?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
