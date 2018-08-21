// https://github.com/dherges/ng-packagr/issues/775
import * as momentImported from 'moment'; const moment = momentImported;

/**
 * Formathelfer für die Datumsformatierung
*/
export class PxDateFormatter {

  public static PxDateFormat = 'YYYY-MM-DD HH:mm:ss';
  /**
   * Funktion für die PROFFIX Datumsstring Formatierung.
   */
  public static toPxDateString(date: Date | string): string {
    if (typeof date === 'string') {
      if (moment.utc(date, "L", true).isValid()) {
        // Der Input ist im lokalen Datumsformat.
        date = moment.utc(date, "L", true).toDate() as Date;
      } else if (moment.utc(date, PxDateFormatter.PxDateFormat, true).isValid()) {
        // Der Input ist im ISO_8601 Datumsformat.
        date = moment.utc(date, PxDateFormatter.PxDateFormat, true).toDate() as Date;
      } else {
        throw new Error('Die Konvertierung konnte nicht durchgeführt werden da das übergebene Format nicht unterstützt wird.' +
          'Input: ' + date);
      }
    }
    return moment.utc(date.toISOString()).format(PxDateFormatter.PxDateFormat);
  }
}
