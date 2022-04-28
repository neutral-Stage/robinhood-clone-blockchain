import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { RobinhoodProvider } from "../context/RobinhoodContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl="https://8f19b9giadhj.usemoralis.com:2053/server"
      appId="RJi1mzCDHNYl36wMh4M9UbL1FInXi0pRyWlmI5N4"
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
