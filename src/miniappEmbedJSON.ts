const miniapp = {
  version: "0.0.1",
  imageUrl: "https://yoink.party/framesV2/opengraph-image",
  button: {
    title: "Launch",
    action: {
      type: "launch_miniapp",
      url: "https://miniapp.fbrns.co",
      name:"Hay NFT",
      splashImageUrl: "https://yoink.party/logo.png",
      splashBackgroundColor:"#f5f0ec"
    }
  }
}

console.log(JSON.stringify(miniapp));
