"use client";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { FormInput, SchemaInput } from "./Validation";
import { axiosInstance } from "@/helper/axiosInstance";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SchemaInput),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit: SubmitHandler<FormInput> = async () => {
    try {
      const res = await axiosInstance.post("/auth/signin", {
        email: "zidanindratama@travolks.com",
        password: "test123",
      });
      console.log(res.data);
      
    } catch (error) {
      setError("root", {
        type: "custom",
        message: "Invalid email or password",
      })
    }
  };
  
  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email?.message}</p>
            )}
            <Input
              {...register("email")}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
           
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            {errors.password && (
              <p className="text-red-400 text-xs">
                {errors.password?.message}
              </p>
            )}
            <Input
              {...register("password")}
              id="password"
              placeholder="*****"
              type="password"
              autoCapitalize="none"
            />
            
          </div>
          <Button className="bg-custom-Lightish-Blue hover:bg-custom-Fennel-Flower">
            {isSubmitting ? (
              <p className="text-xs  flex gap-x-2 items-center">
                <LoaderCircle className="animate-spin h-4 w-4" />
                loading...
              </p>
            ) : (
              "Signin"
            )}
          </Button>
        </div>
        {errors.root && (
          <p className="text-red-400 mt-1 ml-2 text-xs">
            {errors.root?.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default SigninForm;
