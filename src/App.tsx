import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NotMiniApp } from "./components/NotMiniApp";
import { APITester } from "./APITester";
import { WagmiTester} from "./WagmiTester";
import { config } from "./config";
import { getGitCommitHash } from "./getGitCommitHash.ts" with { type: "macro" };
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

const queryClient = new QueryClient();

export function App() {
  const [isMiniApp, setIsMiniApp] = useState(false);
  const gitCommitHash = getGitCommitHash();

  const initiateFarcasterSDK = async () => {
    try {
      const isRunningOnMiniApp = await sdk.isInMiniApp();
      if (isRunningOnMiniApp) {
        setIsMiniApp(true);
        await sdk.actions.ready();
      }
    } catch (err) {
      console.error("Fail to initiate Farcaster SDK");
    }
  }

  const composeCast = async () => {
    const result = await sdk.actions.composeCast({
      text: "Hay World!",
    });
    
    if (result?.cast) {
      console.log("Successfully Casted!");
    } else {
      console.log("Cast failed");
    }
  };

  const onCastClick = () => {
    composeCast();
  };

  useEffect(() => {
    initiateFarcasterSDK();
  }, []);

  if (!isMiniApp && process.env.NODE_ENV == "production") return (
    <NotMiniApp />
  );

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
	    <div className="flex flex-col gap-y-8">
              <h1 className="text-xl font-semibold">
	        <span>Hay!</span>
	      </h1>
	      <button
	        onClick={onCastClick}
	        className="btn btn-neutral"
	      >
	        Cast
	      </button>
	    </div>
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
