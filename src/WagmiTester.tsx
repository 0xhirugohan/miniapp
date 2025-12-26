import { useAccount, useConnect } from "wagmi";

export function WagmiTester() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  const connectWallet = () => {
    try {
      connect({ connector: connectors[0] });
    } catch (err) {
      console.log(err);
    }
  }

  if (isConnected) {
    return (
      <>
        <div>You're connected</div>
	<div>Address: {address}</div>
      </>
    )
  }

  return (
    <div>
      {connectors.map(connector => 
        <button
          type="button"
          onClick={() => connector.connect()}
        >
          Connect {connector.name}
        </button>
      )}
    </div>
  );
}
