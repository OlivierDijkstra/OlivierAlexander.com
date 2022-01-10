
import CommandBar from "../components/CommandBar/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CommandBar>
      <Component {...pageProps} />
    </CommandBar>
  );
}

export default MyApp;
