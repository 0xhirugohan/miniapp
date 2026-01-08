import { useAccount, useConnect } from "wagmi";
import { farcasterMiniApp as miniAppConnector } from "@farcaster/miniapp-wagmi-connector";

export function WagmiTester() {
  const { isConnected, address } = useAccount();
  const { connect, connectors, mutate } = useConnect();

  if (isConnected) {
    return (
      <>
        <div>You're connected</div>
	<div>Address: {address}</div>
      </>
    )
  }

  if (connectors.length > 1) {
    return (
      <div className="dropdown dropdown-bottom dropdown-center">
        <div
	  tabIndex={0}
	  role="button"
	  className="btn btn-neutral m-1"
	>
	  Connect
	</div>
	<ul
	  tabIndex={-1}
	  className="dropdown-content menu w-52 z-1 p-2 rounded-box bg-black shadow-sm flex flex-col gap-y-2"
	>
	  {connectors.map(connector => 
            <li>
	      <button
	        className="btn btn-gray-600"
                onClick={() => connector.connect()}
              >
	        <img
	          className="w-4 rounded-sm"
	          src={connector.icon}
	          alt="image icon"
	        />
                {connector.name}
              </button>
	    </li>
          )}
	</ul>
      </div>
    )
  }

  return (
    <div>
      <button
	className="btn btn-neutral"
        onClick={() => mutate({ connector: miniAppConnector() })}
      >
        <img
	  className="w-4 rounded-sm"
	  src={connectors[0].icon}
	  alt="image icon"
	/>
        Connect {connectors[0].name}
      </button>
    </div>
  );
}
