"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/@/components/ui/card";
import { Textarea } from "@/@/components/ui/textarea";
import { PageQuery } from "@/tina/__generated__/types";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Input, Button } from "tinacms";
import { useTina } from "tinacms/dist/react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { PageTop } from "../page-top/pageTop";




export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

  const { data } = useTina(props);


  return (

    <main className="flex min-h-screen flex-col items-center justify-between">

    <Header data={data} variables={props.variables} query={props.query} />

      <PageTop data={data} variables={props.variables} query={props.query} imageURL="/contacts/contactTop.jpeg" title="Contacte-nos!"
      text="A Atlântinível apresenta-se em grande expansão no mercado, sendo já uma referência na sua área de domínio, revelando elevados valores como a qualidade e profissionalismo que coloca ao seu dispor."
      isImageLeft={false} />
      
      <div className="container mx-auto my-20 p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Sede</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Atlântinível – Engenharia e Construção</p>
              <p>Rua Alto da Ribeira, 570</p>
              <p>4440-104 Campo, Valongo</p>
              <p className="mt-4">
                <strong>Phone:</strong> +351 224 151 167
              </p>
              <p>
                <strong>Email:</strong> geral@atlantinivel.pt
              </p>
            </CardContent>
          </Card>

        <div className="flex flex-col gap-8 border-t-2 border-atlantiBlue"/>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Departamento Comercial/ Orçamentação</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Phone:</strong> +351 224 151 167
              </p>
              <p>
                <strong>Email:</strong> orcamentos@atlantinivel.pt
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="md:w-2/3 p-6">
          <CardHeader>
            <CardTitle>Contacte-nos</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Nome" required />
              <Input type="email" placeholder="Email" required />
              <Input placeholder="Assunto" />
              <Textarea placeholder="Mensagem" required />
              <div className="flex items-center space-x-2">
                
                <label htmlFor="privacy" className="text-sm">
                  Li e aceito a <a href="#" className="text-atlantiBlue underline">Política de Privacidade</a>
                </label>
              </div>
              <Button type="submit" className="w-full bg-atlantiBlue text-white bg-opacity-70 hover:bg-opacity-100">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  <Footer data={data} variables={props.variables} query={props.query} />
  </main>
  );
};