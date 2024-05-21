"use client";

import { Button } from "@/components/ui/button";
import { useDeleteData } from "@/hooks/useDeleteData";
import { Trash } from "lucide-react";
import React from "react";

const FormDeleteUser = ({ id }: any) => {
  const mutationDeleteUser = useDeleteData({
    queryKey: "usersData",
    dataProtected: `users/${id}`,
    backUrl: "/dashboard/users",
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDeleteUser.mutate();
  };

  return (
    <div className="flex flex-row justify-end mt-6">
      <Button
        variant={"destructive"}
        className="flex flex-row gap-2"
        onClick={handleDelete}
      >
        <Trash className="w-4 h-4" />
        Delete Category
      </Button>
    </div>
  );
};

export default FormDeleteUser;