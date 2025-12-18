const miniapp = {
  version: "1",
  imageUrl: "https://miniapp.fbrns.co/framesV2/opengraph-image",
  button: {
    title: "Hay!",
    action: {
      type: "launch_miniapp",
      url: "https://miniapp.fbrns.co",
      name:"Hay NFT",
      splashImageUrl: "https://miniapp.fbrns.co/logo.png",
      splashBackgroundColor:"#f5f0ec"
    }
  }
}

console.log(JSON.stringify(miniapp));
