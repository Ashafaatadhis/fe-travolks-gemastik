"use client";

import { useFetchData } from "@/hooks/useFetchData";
import { useUpdateData } from "@/hooks/useUpdateData";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { usersSchema } from "@/schema/schema";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircleIcon } from "lucide-react";

const UpdateFormUsers = ({ id }: any) => {
  const { data: userData, isLoading } = useFetchData({
    queryKey: ["usersData"],
    dataProtected: `users/${id}`,
  });

  const preLoadValues = {
    id: userData?.data.id,
    email: userData?.data.email,
    role: userData?.data.role,
  };

  const form = useForm<z.infer<typeof usersSchema>>({
    resolver: zodResolver(usersSchema),
    defaultValues: preLoadValues || [],
  });

  const mutationUpdateCategory = useUpdateData({
    queryKey: "usersData",
    dataProtected: `users/${id}`,
    backUrl: "/dashboard/users",
  });

  const onSubmit = async (data: FieldValues) => {
    mutationUpdateCategory.mutate(data);
  };

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Users Profile</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ADMINISTRATOR">
                          Administrator
                        </SelectItem>
                        <SelectItem value="TOUR_GUIDE">Tour Guide</SelectItem>
                        <SelectItem value="CUSTOMER">Customer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Save changes</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default UpdateFormUsers;
