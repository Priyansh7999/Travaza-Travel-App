-- CreateTable
CREATE TABLE "Bookmarked" (
    "id" SERIAL NOT NULL,
    "placeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Bookmarked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaceReviews" (
    "id" SERIAL NOT NULL,
    "profileImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "attractionId" INTEGER NOT NULL,

    CONSTRAINT "PlaceReviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attractions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "destination" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "image" TEXT[],
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "category" TEXT[],
    "tags" TEXT[],
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "AgeLimit" INTEGER NOT NULL,

    CONSTRAINT "Attractions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityReview" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "CityReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT[],
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tripDuration" INTEGER NOT NULL,
    "category" TEXT[],
    "ageLimit" INTEGER NOT NULL,
    "peakSeason" TEXT[],
    "moderateSeason" TEXT[],
    "offSeason" TEXT[],
    "history" TEXT NOT NULL,
    "famousFor" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "note" TEXT[],
    "foodToTry" JSONB,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaceReviews" ADD CONSTRAINT "PlaceReviews_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "Attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityReview" ADD CONSTRAINT "CityReview_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
