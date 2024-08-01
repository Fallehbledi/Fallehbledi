-- CreateEnum
CREATE TYPE "status" AS ENUM ('pending', 'free', 'Standard', 'Premium');

-- CreateTable
CREATE TABLE "farmer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "profileImage" TEXT,
    "status" "status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experts" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "certificate" TEXT NOT NULL,

    CONSTRAINT "experts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmtools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "farmtools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currentWeather" (
    "id" SERIAL NOT NULL,
    "temperature" INTEGER NOT NULL,
    "weather" TEXT NOT NULL,
    "humidity" INTEGER NOT NULL,
    "windspeed" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "currentWeather_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherForecast" (
    "id" SERIAL NOT NULL,
    "lowTemperature" INTEGER NOT NULL,
    "highTemperature" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "WeatherForecast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "farmer_email_key" ON "farmer"("email");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
