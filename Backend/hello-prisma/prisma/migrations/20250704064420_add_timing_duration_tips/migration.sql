/*
  Warnings:

  - You are about to drop the column `tags` on the `Attractions` table. All the data in the column will be lost.
  - Added the required column `suggestedDuration` to the `Attractions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timing` to the `Attractions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attractions" DROP COLUMN "tags",
ADD COLUMN     "suggestedDuration" TEXT NOT NULL,
ADD COLUMN     "timing" TEXT NOT NULL,
ADD COLUMN     "tips" TEXT[];

-- AlterTable
ALTER TABLE "PlaceReviews" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
