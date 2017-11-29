import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Datenbank
 */
export interface Datenbank extends RestApiModelInterface {
  Name?: string;
  Bezeichnung?: string;
}
