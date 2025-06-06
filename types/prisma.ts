import type { Prisma } from "@/lib/generated/prisma";

export type UnitWithUsers = Prisma.UnitGetPayload<{
  include: {
    users: {
      where: {
        role: "responsible";
      };
      select: {
        name: true;
      };
    };
  };
}>;

export type FrequencySheetWithSubmitter = Prisma.FrequencySheetGetPayload<{
  include: {
    submitter: {
      select: {
        name: true;
      };
    };
  };
}>;
