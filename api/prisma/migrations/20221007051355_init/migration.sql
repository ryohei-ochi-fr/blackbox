/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "record" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "GPS_DATETIME" DATETIME NOT NULL,
    "ZDA_DATE" TEXT NOT NULL,
    "GGA_UTC" TEXT NOT NULL,
    "GGA_STATUS" INTEGER,
    "GGA_LAT" DECIMAL,
    "GGA_LOG" DECIMAL,
    "GGA_ALT" DECIMAL,
    "GGA_GEOID" DECIMAL,
    "VTG_SPEED" DECIMAL,
    "VYG_STATUS" INTEGER,
    "AIR_TEMP" DECIMAL,
    "AIR_HUMIDITY" DECIMAL,
    "AIR_PRESSURE" DECIMAL,
    "CYLINDER_TEMP" DECIMAL,
    "G_X" DECIMAL,
    "G_Y" DECIMAL,
    "G_Z" DECIMAL,
    "TACO" INTEGER NOT NULL,
    "THROTTLE" DECIMAL,
    "VACUUM" DECIMAL,
    "CREATE_AT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
