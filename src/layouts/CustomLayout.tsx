import { useTina } from "tinacms/dist/react";
import siteData from "../content/site-settings/index.json";
import type { TinaProps } from "../types";
import type { ReactNode } from "react";
import { Bands } from "../components/bands";

export default function Layout({ props }: { props: TinaProps }) {
  const { data } = useTina(props);

  return (
    <html lang="en">
      <head>
        <title>
          {`${data.page.title} | ${siteData.siteTitle}`}
        </title>
      </head>
      <body>
        <h1>{data.page.title}</h1>
        <main><Bands {...data.page}></Bands></main>
      </body>
    </html>
  );
}
