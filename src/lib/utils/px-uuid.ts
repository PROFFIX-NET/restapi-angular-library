export class PxUuid {
  /**
   * Erzeugt eine UUID nach RFC 4122
   */
  public static newUuid(): string {
    const regEx = /[xy]/g; // muss so umgesetzt werden sonst funktioniert der library build nicht. ngc error
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(regEx, (char) => {
      const random = Math.floor(Math.random() * 16);
      // tslint:disable:max-line-length
      const value = char === "x" ? random : random % 4 + 8; // Bei x Random 0-15 (0-F), bei y Random 0-3 bei ungekehrtem 4. Bit = 8-11 (8-b) gemäss RFC 4122
      return value.toString(16); // Hexadezimales Zeichen zurückgeben
    });
  }
}
