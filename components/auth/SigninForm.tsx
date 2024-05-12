"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { axiosInstance } from "@/helper/axiosInstance";

const SigninForm = () => {
  const testLogin = async () => {
    try {
      const res = await axiosInstance.post("/auth/signin", {
        email: "zidanindratama@travolks.com",
        password: "test123",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
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
            <Input
              id="password"
              placeholder="*****"
              type="password"
              autoCapitalize="none"
            />
          </div>
          <Button onClick={testLogin}>Sign in with Email</Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
