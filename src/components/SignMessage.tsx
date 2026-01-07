import { useSignMessage } from "wagmi";
import { sdk } from "@farcaster/miniapp-sdk";

export function SignMessage() {
  const signMessage = useSignMessage();

  const signManifest = async () => {
    try {
      const result = await sdk.experimental.signManifest({
        domain: 'miniapp.fbrns.co',
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex gap-x-4">
      <button
        onClick={() => signManifest()}
	className="btn btn-neutral"
      >
        Sign with Farcaster
      </button>
      <button
        onClick={() => signMessage.mutate({ message: "hay world!" })}
	className="btn btn-neutral"
      >
        Sign with Wagmi
      </button>
    </div>
  );
}
