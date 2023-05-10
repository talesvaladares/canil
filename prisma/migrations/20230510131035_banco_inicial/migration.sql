-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "dogs" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "sex" "Sex" NOT NULL,
    "race" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "birth" TIMESTAMP(3),
    "microchip" TEXT,
    "price" INTEGER NOT NULL,
    "breeder" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "father_litter_id" TEXT[],
    "mother_litter_id" TEXT[],
    "litter_id" TEXT,

    CONSTRAINT "dogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "litters" (
    "id" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "males" INTEGER NOT NULL,
    "females" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "father_id" TEXT NOT NULL,
    "mother_id" TEXT NOT NULL,

    CONSTRAINT "litters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone" TEXT,
    "city" TEXT,
    "street" TEXT,
    "state" TEXT,
    "number_house" TEXT,
    "district" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservations" (
    "id" TEXT NOT NULL,
    "delivered" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,
    "dog_id" TEXT NOT NULL,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dogId" TEXT,
    "litter_id" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dogs_microchip_key" ON "dogs"("microchip");

-- CreateIndex
CREATE UNIQUE INDEX "litters_father_id_key" ON "litters"("father_id");

-- CreateIndex
CREATE UNIQUE INDEX "litters_mother_id_key" ON "litters"("mother_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "reservations_user_id_key" ON "reservations"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "reservations_dog_id_key" ON "reservations"("dog_id");

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_litter_id_fkey" FOREIGN KEY ("litter_id") REFERENCES "litters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "litters" ADD CONSTRAINT "litters_father_id_fkey" FOREIGN KEY ("father_id") REFERENCES "dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "litters" ADD CONSTRAINT "litters_mother_id_fkey" FOREIGN KEY ("mother_id") REFERENCES "dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_litter_id_fkey" FOREIGN KEY ("litter_id") REFERENCES "litters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
