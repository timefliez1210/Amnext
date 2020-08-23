import "../styles/globals.css";
import { AccountProvider } from "../components/AccountContext";

function MyApp({ Component, pageProps }) {
  const account = {
    address: "",
  };
  return (
    <AccountProvider value={account}>
      <Component {...pageProps} />
    </AccountProvider>
  );
}

export default MyApp;
