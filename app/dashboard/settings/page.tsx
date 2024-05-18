import UpdateFormProfileSettings from "@/components/settings/UpdateFormProfileSettings";
import UpdateFormUser from "@/components/settings/UpdateFormUser";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Profile Settings</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <UpdateFormProfileSettings />
        <UpdateFormUser />
      </div>
    </div>
  );
};

export default page;
