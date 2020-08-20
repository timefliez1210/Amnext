import "../styles/globals.css";
import { AccountProvider } from "../components/AccountContext";

function MyApp({ Component, pageProps }) {
  const account = {
    address: "0xf2aA26723ed7b099845afE69FA4929A46BC00245",
  };
  return (
    <AccountProvider value={account}>
      <Component {...pageProps} />
    </AccountProvider>
  );
}

export default MyApp;
