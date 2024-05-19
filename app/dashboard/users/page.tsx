import CategoriesDataTable from "@/components/categories/data-table/CategoriesDataTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import UsersDataTable from "@/components/users/data-table/UserDataTable";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Users</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Suspense>
        <UsersDataTable />
      </Suspense>
    </div>
  );
};

export default page;
