/*
  Warnings:

  - You are about to drop the column `floor_code` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `pis` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `employees` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registration]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "floor_code",
DROP COLUMN "pis",
DROP COLUMN "role",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "registration" TEXT,
ADD COLUMN     "rg" TEXT,
ADD COLUMN     "rg_state" TEXT;

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'changeme123';

-- CreateTable
CREATE TABLE "master_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "master_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "master_users_email_key" ON "master_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_registration_key" ON "employees"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_slug_key" ON "organizations"("slug");
