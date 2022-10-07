export class Record {
  ID: number;
  GPS_DATETIME: Date;
  ZDA_DATE: string;
  GGA_UTC: string;
  GGA_STATUS: string | null;
  GGA_LAT: number | null;
  GGA_LOG: number | null;
  GGA_ALT: number | null;
  GGA_GEOID: number | null;
  VTG_SPEED: number | null;
  VYG_STATUS: string | null;
  AIR_TEMP: number | null;
  AIR_HUMIDITY: number | null;
  AIR_PRESSURE: number | null;
  CYLINDER_TEMP: number | null;
  G_X: number | null;
  G_Y: number | null;
  G_Z: number | null;
  TACO: number | null;
  THROTTLE: number | null;
  VACUUM: number | null;
  CREATE_AT: Date;
}
