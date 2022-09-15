import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import Layout from "../layout/layout";

const alchemyId = process.env.ALCHEMY_ID;

const chains = [
  chain.mainnet,
  chain.polygon,
  chain.optimism,
  chain.arbitrum,
  chain.goerli,
  chain.ropsten,
  chain.rinkeby,
];

const client = createClient(
  getDefaultClient({
    appName: "Auction DApp",
    alchemyId,
    chains,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
