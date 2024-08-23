"use client";


import { useTina, tinaField } from "tinacms/dist/react";
import { Footer } from "../footer";
import { Header } from "../header";
import { PageTop } from "../utils/pageTop";
import { PageQuery } from "@/tina/__generated__/types";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data} variables={props.variables} query={props.query} />

      <PageTop data={data} variables={props.variables} query={props.query} imageURL="/portfolio/serviceTop.jpeg" title="Crescer e Ser Melhor"
      text="A Atlântinível tem hoje em dia diversas competências, que lhe permitem actuar nas diferentes áreas da construção civil."
      isImageLeft={true} />
      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}
