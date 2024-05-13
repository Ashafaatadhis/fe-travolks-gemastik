import { z, ZodError, ZodIssue } from "zod";

export const SchemaInput = z.object({
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export type FormInput = z.infer<typeof SchemaInput>;

// const formatZodIssue = (issue: ZodIssue): string => {
//   const { path, message } = issue;
//   const formattedPath = path.join(".");

//   return `${formattedPath}: ${message}`;
// };

// export const formatZodError = (error: ZodError): string => {
//   const { issues } = error;

//   if (issues.length) {
//     const currentIssue = issues[0];
//     return formatZodIssue(currentIssue);
//   }
// };
