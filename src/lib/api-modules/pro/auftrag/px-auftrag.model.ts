import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxAdresse } from "../../adr/adresse/px-adresse.model";
import { PxPositionsart } from "../../stu/positionsart/px-positionsart.model";
import { PxArtikel } from "../../lag/artikel/px-artikel.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";
import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";
import { PxKonto } from "../../fib/konto/px-konto.model";

/**
 * Model für /PRO/Auftrag
 */
export interface PxAuftrag extends PxRestApiModelInterface {
  AuftragNr?: string;
  Bezeichnung?: string;
  Kunde?: PxAdresse;
  StartDatum?: string;
  EndDatum?: string;
  Positionsart?: PxPositionsart;
  Artikel?: PxArtikel;
  Kostenstelle?: PxKostenstelle;
  Kostenart?: PxKostenart;
  Ertragskonto?: PxKonto;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
