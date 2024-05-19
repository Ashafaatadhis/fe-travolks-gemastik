import FormDeleteCategory from "@/components/categories/delete/FormDeleteCategory";
import UpdateFormCategory from "@/components/categories/update/UpdateFormCategory";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UpdateFormProfileUser from "@/components/users/update/UpdateFormProfileUser";
import UpdateFormUsers from "@/components/users/update/UpdateFormUsers";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/users">
              Users
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Detail</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
     <UpdateFormUsers id={params.id} />
      <UpdateFormProfileUser id={params.id} />
     </div>
    </div>
  );
};

export default page;
