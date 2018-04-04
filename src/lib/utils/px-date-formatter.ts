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
  public static toPxDateString(date: Date|string): string {
    /**
     * TODO Bastel! Aktuell nicht anders moglich da immer die warning
     * Compiling to FESM15
     * 'utc' is not exported by 'node_modules\moment\src\moment.js'
     * beim Builden der Library vorhanden ist und ein Compiler Fehler beim
     * Projekt welches die restapi-angular-library verwendet auftritt.
     * Vielleicht gehts in Zukunft schöner.
     */
    const moment = require('moment');
    if (typeof  date === 'string') {
      date = new Date(date);
    }
    return moment.utc(date.toISOString()).format('YYYY-MM-DD HH:mm:ss');
  }
}
