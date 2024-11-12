// Refer to https://github.com/sergiodxa/remix-auth-form for more information
import { User } from "@prisma/client";
import { FormStrategy } from "remix-auth-form";
import invariant from "tiny-invariant";

import {verifyLogin} from "~/models/user.server";
import {validateEmail} from "~/services/utils";

export const formStrategy = new FormStrategy<User>(
  async ({ form, context }) => {
    // Do something with the tokens and profile
    // Get form values
    const email = form.get("email");
    const password = form.get("password");
    //const remember = form.get("remember");

    // You can validate the inputs however you want
    invariant(typeof email === "string", "Email must be a string");
    invariant(email.length > 0, "Email must not be empty");
    invariant(email.indexOf('@') > 1, "Email must be a valid email");
    invariant(validateEmail(email), "Email must be a valid");


    invariant(typeof password === "string", "Password must be a string");
    invariant(password.length > 0, "Password must not be empty");
    invariant(password.length < 8, "Password is too short");

    const user = await verifyLogin(email, password);
    invariant(user != null, "User must be a valid");
    return user;
  },
);
