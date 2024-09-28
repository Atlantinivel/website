import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";

import { PageCollection } from "./collections/page";
import { AboutCollection } from "./collections/about";


const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD;

export default defineConfig({
  // authProvider: isLocal
  //   ? new LocalAuthProvider()
  //   : new UsernamePasswordAuthJSProvider(),
  // contentApiUrlOverride: "/api/tina/gql",
  // contentApiUrlOverride: process.env.NEXT_PUBLIC_TINA_CONTENT_URL,
  // branch: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "",
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null, // ou "" se preferir
  // token: process.env.TINA_TOKEN || null,
  // authProvider: isLocal
  //   ? new LocalAuthProvider()
  //   : new UsernamePasswordAuthJSProvider(),
  // contentApiUrlOverride: "/api/tina/gql",
  branch,
  token: process.env.TINA_TOKEN, // This should match the value in your .env file
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // This should match the value in 
  // build: {
  //   publicFolder: "public",
  //   outputFolder: "admin"
  // },
  // media: {
  //   tina: {
  //     publicFolder: "public",
  //     mediaRoot: "uploads"
  //   }
  // },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [TinaUserCollection, PageCollection, AboutCollection],
  },
  // config: {
  //   allowLocalStorage: true,
  //   admin: {
  //     basePath: "/admin", // Ajuste conforme necessário
  //   }
  // }
  // cmsCallback: (cms) => {
  //   cms.flags.set("branch-switcher", true);
  //   return cms;
  // }
});