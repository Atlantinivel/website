import { PageAbout } from "../../components/about";
import { client } from "../../tina/__generated__/databaseClient";

export default async function About() {
  const res = await client.queries.about({ relativePath: "about.md" });

  console.log(res);


  return (
    <PageAbout
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
