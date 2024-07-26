import { Collection } from "tinacms";

export const AboutCollection: Collection = {
  name: "about",
  label: "About",
  path: "content/about",
  format: "md",
  ui: {
    router: () => "/about",
  },
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
  ],
};
