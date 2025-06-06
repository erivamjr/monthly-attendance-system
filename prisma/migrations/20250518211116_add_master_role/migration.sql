/*
  Warnings:

  - You are about to drop the column `organization_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `event_codes` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `frequency_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `logs` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `salary_floors` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `units` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `master_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[event_type_id,contract_type]` on the table `event_codes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[position]` on the table `salary_floors` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "event_codes" DROP CONSTRAINT "event_codes_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "frequency_sheets" DROP CONSTRAINT "frequency_sheets_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "logs" DROP CONSTRAINT "logs_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "salary_floors" DROP CONSTRAINT "salary_floors_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_organization_id_fkey";

-- DropIndex
DROP INDEX "event_codes_organization_id_event_type_id_contract_type_key";

-- DropIndex
DROP INDEX "salary_floors_organization_id_position_key";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "organization_id";

-- AlterTable
ALTER TABLE "event_codes" DROP COLUMN "organization_id";

-- AlterTable
ALTER TABLE "frequency_sheets" DROP COLUMN "organization_id";

-- AlterTable
ALTER TABLE "logs" DROP COLUMN "organization_id";

-- AlterTable
ALTER TABLE "salary_floors" DROP COLUMN "organization_id";

-- AlterTable
ALTER TABLE "units" DROP COLUMN "organization_id";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "organization_id";

-- DropTable
DROP TABLE "master_users";

-- DropTable
DROP TABLE "organizations";

-- CreateIndex
CREATE UNIQUE INDEX "event_codes_event_type_id_contract_type_key" ON "event_codes"("event_type_id", "contract_type");

-- CreateIndex
CREATE UNIQUE INDEX "salary_floors_position_key" ON "salary_floors"("position");
