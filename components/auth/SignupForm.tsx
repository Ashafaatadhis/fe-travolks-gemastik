"use client";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, LoaderCircle } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, SchemaInput } from "./Validation";

const SignupForm = () => {
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

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error("");
    } catch (error) {
      console.log(error);
      setError("root", {
        type: "custom",
        message: "Email already exists",
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
            <Input
              {...register("email")}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />

            {errors.email && (
              <h1 className="text-red-400 text-xs">{errors.email?.message}</h1>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...register("password")}
              id="password"
              placeholder="*****"
              type="password"
              autoCapitalize="none"
            />

            {errors.password && (
              <h1 className="text-red-400 text-xs">
                {errors.password?.message}
              </h1>
            )}
          </div>
          <Button disabled={isSubmitting} className="bg-custom-Lightish-Blue hover:bg-custom-Fennel-Flower"> {/* Mengubah warna tombol */}
          {isSubmitting ? (
              <p className="text-xs flex gap-x-2 items-center">
                <LoaderCircle className="animate-spin h-4 w-4" />
                loading...
              </p>
            ) : (
              "Signup"
            )}
          </Button>
        </div>
      {errors.root && <h1 className="text-red-400 mt-1 ml-2 text-xs">{errors.root?.message}</h1>}
      </form>
    </div>
  );
};

export default SignupForm;
