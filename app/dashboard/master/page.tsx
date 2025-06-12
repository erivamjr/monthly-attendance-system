/*import { useState, useEffect } from "react";*/
import {
  Plus,
  Pencil,
  Trash2,
  Building2,
  Users,
  LayoutGrid,
} from "lucide-react";
/*import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";*/
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";

type Organization = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  _count: {
    units: number;
    users: number;
    employees: number;
  };
};

async function getMasterStats() {
  const [totalOrganizations, totalUsers, totalUnits] = await Promise.all([
    prisma.organization.count(),
    prisma.user.count(),
    prisma.unit.count(),
  ]);

  return {
    totalOrganizations,
    totalUsers,
    totalUnits,
  };
}

export default async function MasterDashboard() {
  const stats = await getMasterStats();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Master Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Organizations</p>
              <p className="text-2xl font-bold">{stats.totalOrganizations}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <LayoutGrid className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Units</p>
              <p className="text-2xl font-bold">{stats.totalUnits}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
