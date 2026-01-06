import logo from "../logo.svg";

export function NotMiniApp() {
  return (
    <div className="app flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-8">
        <img
	  src={logo}
	  alt="Bun Logo"
	  className="w-20 mx-auto"
	/>
	<div className="flex flex-col gap-y-8">
          <h1 className="text-xl font-semibold">
	    <span>Hay!</span>
	  </h1>
	  <p>
	    You need to access this site from <strong>Farcaster</strong> or <strong>Baseapp</strong>.
	  </p>
	</div>

      </div>
    </div>
  );
}
