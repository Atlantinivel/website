"use client";

import { PageQuery } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";
import { Footer } from "../footer";
import { Header } from "../header";
import { useState, useEffect } from "react";
import { PageTop } from "../utils/pageTop";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data} variables={props.variables} query={props.query} />

      <PageTop data={data} variables={props.variables} query={props.query} imageURL="/portfolio/companyTop.jpg" title="Especialistas em Construção e Engenharia"
      text="A Atlântinível apresenta-se em grande expansão no mercado, sendo já uma referência na sua área de domínio, revelando elevados valores como a qualidade e profissionalismo que coloca ao seu dispor."
      isImageLeft={false} />
      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}
