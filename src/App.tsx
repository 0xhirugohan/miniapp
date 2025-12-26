import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { APITester } from "./APITester";
import { WagmiTester} from "./WagmiTester";
import { config } from "./config";
import { getGitCommitHash } from "./getGitCommitHash.ts" with { type: "macro" };
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

const queryClient = new QueryClient();

export function App() {
  const gitCommitHash = getGitCommitHash();

  const initiateFarcasterSDK = async () => {
    try {
      await sdk.actions.ready();
    } catch (err) {
      console.error("Fail to initiate Farcaster SDK");
    }
  }

  useEffect(() => {
    initiateFarcasterSDK();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="app flex flex-col gap-y-8">
	  <div>
            <img
	      src={logo}
	      alt="Bun Logo"
	      className="w-20 mx-auto"
	    />
            <h1 className="text-xl font-semibold">
	      <span>Hay!</span>
	    </h1>
	  </div>
	  
	  <WagmiTester />
          <APITester />
          { gitCommitHash &&
            <p>
              Version {gitCommitHash}
            </p>
          }
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
