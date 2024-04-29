import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "react-oidc-context";
import oidcConfig from "./oidc";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider {...oidcConfig}>
      <Component {...pageProps} />
  </AuthProvider>
  )
}
