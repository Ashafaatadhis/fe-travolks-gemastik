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

const UpdateFormUsers = ({ id }: any) => {
  const { data: userData, isLoading } = useFetchData({
    queryKey: ["usersData"],
    dataProtected: `users/${id}`,
  });

  const preLoadValues = {
    id: userData?.data.id,
    email: userData?.data.email,
    role: userData?.data.role,
    profile: {
      gender: userData?.data.profile.gender,
      fullname: userData?.data.profile.fullname,
      address: userData?.data.profile.address,
      phoneNumber: userData?.data.profile.phoneNumber,
      image: userData?.data.profile.image,
      createdAt: userData?.data.profile.createdAt,
      updatedAt: userData?.data.profile.updatedAt,
    },
  };

  const form = useForm<z.infer<typeof usersSchema>>({
    resolver: zodResolver(usersSchema),
    values: preLoadValues || [],
  });

  const mutationUpdateCategory = useUpdateData({
    queryKey: "usersData",
    dataProtected: `users/${id}`,
    backUrl: "/dashboard/users",
  });

  const imageRef = form.register("profile.image");

  const onSubmit = async (data: FieldValues) => {
    const form = new FormData();
    form.append("email", data.email);
    form.append("role", data.role);
    form.append("profile.fullname", data.profile.fullname);
    form.append("profile.address", data.profile.address);
    form.append("profile.phoneNumber", data.profile.phoneNumber);
    form.append("profile.gender", data.profile.gender);

    if (data.profile.image[0] !== undefined) {
      form.append("profile.image", data.profile.image[0]);
    }
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
                name="profile.fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Fullname</FormLabel>
                    <FormControl>
                      <Input placeholder="fullname" {...field} />
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

              <FormField
                control={form.control}
                name="profile.address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profile.gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Gender</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="MALE">Male</SelectItem>
                        <SelectItem value="FEMALE">Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profile.image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input type="file" placeholder="Image" {...imageRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profile.phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
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
