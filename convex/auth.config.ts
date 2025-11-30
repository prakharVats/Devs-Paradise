import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://neutral-deer-39.clerk.accounts.dev/",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;