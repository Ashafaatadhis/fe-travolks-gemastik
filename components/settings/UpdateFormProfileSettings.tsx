"use client";
import React from "react";
import retreiveUserDataFromCookie from "@/helper/retriveUserDataFromCookie";
import { useFetchData } from "@/hooks/useFetchData";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateData } from "@/hooks/useUpdateData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  // email: z.string().email("Invalid email address"),
  role: z.enum(["ADMINISTRATOR", "TOUR_GUIDE", "CUSTOMER"], "Invalid role"),
  // Add other fields here as needed
});

const UpdateFormProfileSettings = () => {
  const userDataFromCookie = retreiveUserDataFromCookie();
  const { data: userData, isLoading } = useFetchData({
    queryKey: ["userData"],
    dataProtected: `users/${userDataFromCookie.sub}`,
  });
  
  const preLoadValues = {
    name: userData?.data.name,
    email: userData?.data.email,
    role: userData?.data.role,
    // Add other preloaded values here
  };

  const mutationUpdateUser = useUpdateData({
    queryKey: "userData",
    dataProtected: `users/${userDataFromCookie.sub}`,
    backUrl: "/dashboard/settings",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: preLoadValues,
  });

  const onSubmit = async (data: FieldValues) => {
    mutationUpdateUser.mutate(data);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="w-2/5">
          {isLoading ? (
            <div className="flex gap-1 items-center">
              <LoaderCircleIcon className="animate-spin w-5 h-5" />
              <p>Loading...</p>
            </div>
          ) : (
            <Form {...form}>
              <form className="mt-3" onSubmit={form.handleSubmit(onSubmit)}>
                <Card>
                  <CardHeader>
                    <CardTitle>Update Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input disabled placeholder="Email" {...field} />
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
                          <FormLabel>Role</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your Role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ADMINISTRATOR">Admin</SelectItem>
                              <SelectItem value="TOUR_GUIDE">Tour Guide</SelectItem>
                              <SelectItem value="CUSTOMER">Customer</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Add other form fields as needed */}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit">Update</Button>
                  </CardFooter>
                </Card>
              </form>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateFormProfileSettings;
