import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <ToastContainer />
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
