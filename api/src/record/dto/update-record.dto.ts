export class UpdateRecordDto {
  GPS_DATETIME?: Date;
  ZDA_DATE?: string;
  GGA_UTC?: string;
  GGA_STATUS?: string;
  GGA_LAT?: number;
  GGA_LOG?: number;
  GGA_ALT?: number;
  GGA_GEOID?: number;
  VTG_SPEED?: number;
  VYG_STATUS?: string;
  AIR_TEMP?: number;
  AIR_HUMIDITY?: number;
  AIR_PRESSURE?: number;
  CYLINDER_TEMP?: number;
  G_X?: number;
  G_Y?: number;
  G_Z?: number;
  TACO?: number;
  THROTTLE?: number;
  VACUUM?: number;
}
