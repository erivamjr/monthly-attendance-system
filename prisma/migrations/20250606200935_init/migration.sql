/*
  Warnings:

  - A unique constraint covering the columns `[organization_id,event_type_id,contract_type]` on the table `event_codes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organization_id,position]` on the table `salary_floors` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organization_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `event_codes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `frequency_sheets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `salary_floors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `units` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "event_codes_event_type_id_contract_type_key";

-- DropIndex
DROP INDEX "salary_floors_position_key";

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "event_codes" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "frequency_sheets" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "logs" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "salary_floors" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "units" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "organization_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_slug_key" ON "organizations"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "event_codes_organization_id_event_type_id_contract_type_key" ON "event_codes"("organization_id", "event_type_id", "contract_type");

-- CreateIndex
CREATE UNIQUE INDEX "salary_floors_organization_id_position_key" ON "salary_floors"("organization_id", "position");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frequency_sheets" ADD CONSTRAINT "frequency_sheets_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_codes" ADD CONSTRAINT "event_codes_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_floors" ADD CONSTRAINT "salary_floors_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
