import { DefaultSeo } from "next-seo";
import SEO from "../../seo.config";
import CommandBar from "../components/CommandBar/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CommandBar>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </CommandBar>
  );
}

export default MyApp;
