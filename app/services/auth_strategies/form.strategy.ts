// Refer to https://github.com/sergiodxa/remix-auth-form for more information
import { User } from "@prisma/client";
import { FormStrategy } from "remix-auth-form";

export const formStrategy = new FormStrategy<User>(
  async ({ form, context }) => {
    // Do something with the tokens and profile
    // Get form values
    const username = form.get("email")
    const password = form.get("password")
    return {} as User;
  }
);
