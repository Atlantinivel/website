"use client";


import { useTina } from "tinacms/dist/react";
import { PageQuery } from "@/tina/__generated__/types";
import { Card, CardHeader, CardContent } from "@/@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "tinacms";
import React from "react";


export function ServiceRowHome(props: {
  data: PageQuery;
  variables: object;
  query: string;
  services: { title: string; description: string }[];
}) {
  const { data } = useTina(props);


  return (
    <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
    {props.services.map((service, index) => (
      <React.Fragment key={index}>
        <Card className="flex flex-col border-0 shadow-none relative">
          <CardHeader>
            <h2 className="text-2xl font-bold text-atlantiBlue">{service.title}</h2>
            <div className="h-1 w-12 bg-atlantiBlue mt-2"></div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-gray-600">{service.description}</p>
          </CardContent>
          <div className="p-4">
            <Button variant="secondary" className="text-white bg-atlantiBlue bg-opacity-70 hover:bg-opacity-100">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
        {index < props.services.length - 1 && (
          <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-blue-300" style={{left: `calc(${(index + 1) * 25}% - 1px)`}} />
        )}
      </React.Fragment>
    ))}
  </div>
</div>
  );
}