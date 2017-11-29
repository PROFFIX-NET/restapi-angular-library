import { RestApiModelInterface, Adresse, Positionsart, Artikel, Kostenstelle, Kostenart, Konto } from '../../';

/**
 * Model für /PRO/Auftrag
 */
export interface Auftrag extends RestApiModelInterface {
  AuftragNr?: string;
  Bezeichnung?: string;
  Kunde?: Adresse;
  StartDatum?: Date;
  EndDatum?: Date;
  Positionsart?: Positionsart;
  Artikel?: Artikel;
  Kostenstelle?: Kostenstelle;
  Kostenart?: Kostenart;
  Ertragskonto?: Konto;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
