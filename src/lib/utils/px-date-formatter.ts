import * as moment from 'moment';

export class PxDateFormatter {
  /**
   * Funktion für die PROFFIX Datumsstring Formatierung.
   */
  public static toPxDateString(date: Date|string): string {
    return moment.utc(date).format("YYYY-MM-DD hh:mm:ss");
  }
}
