"use client";


import { useTina, tinaField } from "tinacms/dist/react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { PageTop } from "../page-top/pageTop";
import { PageQuery } from "@/tina/__generated__/types";
import { TextAndLink } from "../text-and-link/textAndLink";
import Image from "next/image";
import { Test } from "../test/test";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/@/components/ui/card";
import { Button } from "tinacms";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data} variables={props.variables} query={props.query} />

      
      <Card
                className="m-32 border-l-4 border-l-atlantiBlue sm:col-span-2   " x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Engenheiro</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed "><div className="flex flex-row">
                    <h1 className="font-bold mr-2">Categoria:</h1><p>Engenharia</p></div></CardDescription>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Ver Oportunidade</Button>
                </CardFooter>
              </Card>


      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}
