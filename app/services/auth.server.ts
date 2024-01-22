import { Authenticator } from "remix-auth";
import { UserType } from "~/lib/schemas/user";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";
import { createUser, getUserWithEmailAndPassword } from "~/lib/controllers/user";



export let authenticator = new Authenticator<UserType>(sessionStorage, {
  sessionKey: "accessToken"
});

authenticator.use(
    new FormStrategy(async ({ form }) => {
      let email = form.get("email") as string;
      let password = form.get("password") as string;
      //   
      const user = await createUser({email, password})!
      return user
    }),
    "form-signup"
  );

  authenticator.use(
    new FormStrategy(async ({ form }) => {
      let email = form.get("email") as string;
      let password = form.get("password") as string;
      //   
      const user = await getUserWithEmailAndPassword({email, password})!
      return user
    }),
    "form-login"
  );