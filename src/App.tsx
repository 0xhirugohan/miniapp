import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

import { APITester } from "./APITester";
import { getGitCommitHash } from "./getGitCommitHash.ts" with { type: "macro" };
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

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
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
      </div>

      <h1>Hay!</h1>
      <APITester />
      { gitCommitHash &&
        <p>
          Version {gitCommitHash}
        </p>
      }
    </div>
  );
}

export default App;
