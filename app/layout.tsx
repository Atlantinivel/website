import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import client from "../tina/__generated__/client";

export const metadata = {
  title: "Atlantinivel",
  description: "A Next.js app with TinaCMS",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const globalQuery = await client.queries.global({
  //   relativePath: "index.json",
  // });
  // const global = globalQuery.data.global;

  // console.log('global', global);

  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>

    </html>
  );
}
