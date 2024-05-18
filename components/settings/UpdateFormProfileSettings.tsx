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
  CardDescription,
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
});

const UpdateFormProfileSettings = () => {
  const userDataFromCookie = retreiveUserDataFromCookie();
  const { data: userData, isLoading } = useFetchData({
    queryKey: ["userData"],
    dataProtected: `users/${userDataFromCookie.sub}`,
  });
  console.log(userDataFromCookie);

  const preLoadValues = {
    name: userData?.data.name,
    email: userData?.data.email,
    password: userData?.data.password,
    role: userData?.data.role,
    address: userData?.data.address,
    phone: userData?.data.phone,
    image: userData?.data.image,
  };

  const mutationUpdateUser = useUpdateData({
    queryKey: "userData",
    dataProtected: `users/${userDataFromCookie.sub}`,
    backUrl: "/dashboard/settings",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: preLoadValues || [],
  });

  const onSubmit = async (data: FieldValues) => {
    mutationUpdateUser.mutate(data);
  };

  return (
    <>
      <div>
        {isLoading && (
          <div className="flex   gap-1 items-center">
            <LoaderCircleIcon className="animate-spin w-5 h-5" />
            <p>Loading...</p>
          </div>
        )}

        {!isLoading && (
          <Form {...form}>
            <form className="mt-3" onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="w-full ">
                <CardHeader>
                  <CardTitle>Update Profile Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between flex-wrap">
                    <div className="w-full max-w-xl">
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-center gap-2 h-full justify-center">
                          <FormLabel>Profile Picture</FormLabel>

                          <div className=" flex flex-col items-center gap-2  ">
                            <img
                              src={field.value}
                              alt="Profile Picture"
                              className="w-32 h-32  border rounded-full  object-cover"
                            />

                            <FormControl>
                              <Input
                                id="picture"
                                className="w-60"
                                type="file"
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    </div>

                    <div className="max-w-4xl w-full">
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Name"
                                {...field}
                              />
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
                              <Input
                                disabled
                                type="text"
                                placeholder="Email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Address"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Phone"
                                {...field}
                              />
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
                            <FormLabel>Gender</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your Role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="user">User</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex  justify-end">
                  <Button type="submit">Update</Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        )}
      </div>
    </>
  );
};

export default UpdateFormProfileSettings;
