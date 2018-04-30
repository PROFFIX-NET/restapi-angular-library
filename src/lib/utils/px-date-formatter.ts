/**
 * TODO Bastel! Wird für Moment JS aktuell benötigt.
 * Vielleicht gehts in Zukunft schöner.
*/
declare var require: any;

/**
 * Formathelfer für die Datumsformatierung
*/
export class PxDateFormatter {
  /**
   * Funktion für die PROFFIX Datumsstring Formatierung.
   */
  public static toPxDateString(date: Date | string): string {
    /**
     * TODO Bastel! Aktuell nicht anders moglich da immer die warning
     * Compiling to FESM15
     * 'utc' is not exported by 'node_modules\moment\src\moment.js'
     * beim Builden der Library vorhanden ist und ein Compiler Fehler beim
     * Projekt welches die restapi-angular-library verwendet auftritt.
     * Vielleicht gehts in Zukunft schöner.
     */
    const moment = require('moment');
    if (typeof date === 'string') {
      if (moment.utc(date, "L", true).isValid()) {
        // Der Input ist im lokalen Datumsformat.
        date = moment.utc(date, "L", true).toDate() as Date;
      } else if (moment.utc(date, moment.ISO_8601, true).isValid()) {
        // Der Input ist im ISO_8601 Datumsformat.
        date = moment.utc(date, moment.ISO_8601, true).toDate() as Date;
      } else {
        throw new Error('Die Konvertierung konnte nicht durchgeführt werden da das übergebene Format nicht unterstützt wird.' +
          'Input: ' + date);
      }
    }
    return moment.utc(date.toISOString()).format('YYYY-MM-DD HH:mm:ss');
  }
}
