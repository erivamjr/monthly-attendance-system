/*
  Warnings:

  - The `status` column on the `frequency_sheets` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('MASTER', 'ADMIN', 'COORDINATOR', 'RESPONSIBLE', 'VIEWER');

-- CreateEnum
CREATE TYPE "SheetStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "base_salary" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "frequency_entries" ADD COLUMN     "salary_floor_amount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "frequency_sheets" DROP COLUMN "status",
ADD COLUMN     "status" "SheetStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'VIEWER';

-- CreateTable
CREATE TABLE "salary_floors" (
    "id" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "base_value" DOUBLE PRECISION NOT NULL,
    "hour_value" DOUBLE PRECISION NOT NULL,
    "floor_quantity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salary_floors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "details" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "salary_floors_organization_id_position_key" ON "salary_floors"("organization_id", "position");

-- AddForeignKey
ALTER TABLE "salary_floors" ADD CONSTRAINT "salary_floors_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
