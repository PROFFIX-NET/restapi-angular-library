import { RestApiModelInterface, Adresse, Positionsart, Artikel, Kostenstelle, Kostenart, Konto } from '../../';

/**
 * Model für /PRO/Auftrag
 */
export interface Auftrag extends RestApiModelInterface {
  AuftragNr?: string;
  Bezeichnung?: string;
  Kunde?: Adresse;
  StartDatum?: string;
  EndDatum?: string;
  Positionsart?: Positionsart;
  Artikel?: Artikel;
  Kostenstelle?: Kostenstelle;
  Kostenart?: Kostenart;
  Ertragskonto?: Konto;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
