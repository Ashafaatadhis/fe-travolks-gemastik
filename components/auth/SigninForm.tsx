"use client";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { FormInput, SchemaInput } from "@/schema/schema";
import { axiosInstance } from "@/helper/axiosInstance";
import { z } from "zod";
import Cookies from 'js-cookie';

const SigninForm = () => {
  const form = useForm<z.infer<typeof SchemaInput>>({
    resolver: zodResolver(SchemaInput),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = async (data: FieldValues) => {
    try {
      const {email, password} = data;
      const res = await axiosInstance.post("/auth/signin", {
        email,
        password
      });
      console.log(res);
      const {access_token, ...restData} = res.data;
      Cookies.set('access_token', access_token);
      Cookies.set('user', JSON.stringify(restData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Label className="sr-only" htmlFor="email">
                        Email
                      </Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Label className="sr-only" htmlFor="password">
                        Password
                      </Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="*****"
                        type="password"
                        autoCapitalize="none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="bg-custom-Lightish-Blue hover:bg-custom-Fennel-Flower">
              {form.formState.isSubmitting ? (
                <p className="text-xs flex gap-x-2 items-center">
                  <LoaderCircle className="animate-spin h-4 w-4" />
                  loading...
                </p>
              ) : (
                "Signin"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
