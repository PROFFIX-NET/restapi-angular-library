import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Recht
 */
export interface Recht extends RestApiModelInterface {
  Modul?: string;
  Form?: string;
  Menu?: string;
  Recht?: string;
}
