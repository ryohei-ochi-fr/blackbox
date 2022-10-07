/*
  Warnings:

  - You are about to alter the column `AIR_HUMIDITY` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `AIR_PRESSURE` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `AIR_TEMP` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `CYLINDER_TEMP` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `GGA_ALT` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `GGA_GEOID` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `GGA_LAT` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `GGA_LOG` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `G_X` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `G_Y` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `G_Z` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `THROTTLE` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `VACUUM` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `VTG_SPEED` on the `record` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_record" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "GPS_DATETIME" DATETIME NOT NULL,
    "ZDA_DATE" TEXT NOT NULL,
    "GGA_UTC" TEXT NOT NULL,
    "GGA_STATUS" TEXT,
    "GGA_LAT" REAL,
    "GGA_LOG" REAL,
    "GGA_ALT" REAL,
    "GGA_GEOID" REAL,
    "VTG_SPEED" REAL,
    "VYG_STATUS" TEXT,
    "AIR_TEMP" REAL,
    "AIR_HUMIDITY" REAL,
    "AIR_PRESSURE" REAL,
    "CYLINDER_TEMP" REAL,
    "G_X" REAL,
    "G_Y" REAL,
    "G_Z" REAL,
    "TACO" INTEGER,
    "THROTTLE" INTEGER,
    "VACUUM" REAL,
    "CREATE_AT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_record" ("AIR_HUMIDITY", "AIR_PRESSURE", "AIR_TEMP", "CREATE_AT", "CYLINDER_TEMP", "GGA_ALT", "GGA_GEOID", "GGA_LAT", "GGA_LOG", "GGA_STATUS", "GGA_UTC", "GPS_DATETIME", "G_X", "G_Y", "G_Z", "ID", "TACO", "THROTTLE", "VACUUM", "VTG_SPEED", "VYG_STATUS", "ZDA_DATE") SELECT "AIR_HUMIDITY", "AIR_PRESSURE", "AIR_TEMP", "CREATE_AT", "CYLINDER_TEMP", "GGA_ALT", "GGA_GEOID", "GGA_LAT", "GGA_LOG", "GGA_STATUS", "GGA_UTC", "GPS_DATETIME", "G_X", "G_Y", "G_Z", "ID", "TACO", "THROTTLE", "VACUUM", "VTG_SPEED", "VYG_STATUS", "ZDA_DATE" FROM "record";
DROP TABLE "record";
ALTER TABLE "new_record" RENAME TO "record";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
