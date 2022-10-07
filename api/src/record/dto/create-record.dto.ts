import { ApiProperty } from '@nestjs/swagger';

enum GAA_STATUS {
  No_Fix = 0,
  GNSS_Fix = 1,
}

enum VTG_STATUS {
  No_Fix = 'N',
  GNSS_Fix = 'A',
}

export class CreateRecordDto {
  @ApiProperty()
  GPS_DATETIME: Date;

  @ApiProperty({
    required: false,
    description: '年月日',
    example: '2022/10/07',
  })
  ZDA_DATE: string;

  @ApiProperty({
    required: false,
    description: '時間(UTC)',
    example: '23:59:59.000',
  })
  GGA_UTC: string;

  @ApiProperty({
    required: false,
    description: '測位モードステータス',
    enum: GAA_STATUS,
    example: GAA_STATUS.GNSS_Fix,
  })
  GGA_STATUS?: string;

  @ApiProperty({
    required: false,
    description: '緯度',
    example: 3522.5012666,
  })
  GGA_LAT?: number;

  @ApiProperty({
    required: false,
    description: '経度',
    example: 13942.1022598,
  })
  GGA_LOG?: number;

  @ApiProperty({
    required: false,
    description: '高度(m) 標高 = 高度 - ジオイド高',
    example: 4174.8064,
  })
  GGA_ALT?: number;

  @ApiProperty({
    required: false,
    description: 'ジオイド高(m)',
    example: 39.6262,
  })
  GGA_GEOID?: number;

  @ApiProperty({
    required: false,
    description: '対地速度(km/h)',
    example: 578.09,
  })
  VTG_SPEED?: number;

  @ApiProperty({
    required: false,
    description: '測位モードステータス',
    example: VTG_STATUS.GNSS_Fix,
  })
  VYG_STATUS?: string;

  @ApiProperty({
    required: false,
    description: '気温',
    example: 20,
  })
  AIR_TEMP?: number;

  @ApiProperty({
    required: false,
    description: '湿度',
    example: 50,
  })
  AIR_HUMIDITY?: number;

  @ApiProperty({
    required: false,
    description: '大気圧',
    example: 1013,
  })
  AIR_PRESSURE?: number;

  @ApiProperty({
    required: false,
    description: 'シリンダー温度',
    example: 2000,
  })
  CYLINDER_TEMP?: number;

  @ApiProperty({
    required: false,
    description: '加速度(X)',
    example: '1.00',
  })
  G_X?: number;

  @ApiProperty({
    required: false,
    description: '加速度(Y)',
    example: '1.00',
  })
  G_Y?: number;

  @ApiProperty({
    required: false,
    description: '加速度(Z)',
    example: '1.00',
  })
  G_Z?: number;

  @ApiProperty({
    required: false,
    description: 'エンジン回転数(rpm)',
    example: 2000,
  })
  TACO?: number;

  @ApiProperty({
    required: false,
    description: 'スロットル開度(%)',
    example: '100',
  })
  THROTTLE?: number;

  @ApiProperty({
    required: false,
    description: '吸気負圧(mBar)',
    example: '-236',
  })
  VACUUM?: number;
}
