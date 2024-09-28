import { Collection } from "tinacms";

export const AboutCollection: Collection = {
  name: "about",
  label: "About",
  path: "content/about",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "sliderItems",
      label: "Slider Items",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
      ],
    },
  ],
};
