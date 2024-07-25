import { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" },
      ],
    },

    {
      type: 'string',
      name: 'footerText',
      label: 'Footer Text',
    },
    {
      type: 'object',
      name: 'footerImage',
      label: 'Footer Image',
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: 'object',
      name: 'footerLinks',
      label: 'Footer Links',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'text',
          label: 'Link Text',
        },
        {
          type: 'string',
          name: 'url',
          label: 'Link URL',
        },
      ],
    },


  ],
};
