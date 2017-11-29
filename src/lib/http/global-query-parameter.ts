/**
 * Interface für alle REST API Services
 */
export interface GlobalQueryParameter {
  sort?: String;
  limit?: Number;
  offset?: Number;
  filter?: String;
  depth?: Number;
  fields?: String;
}
