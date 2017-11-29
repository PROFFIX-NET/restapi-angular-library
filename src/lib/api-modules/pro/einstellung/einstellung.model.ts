import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Einstellung
 */
export interface Einstellung extends RestApiModelInterface {
  Modul?: string;
  Section?: string;
  Einstellung?: string;
}
