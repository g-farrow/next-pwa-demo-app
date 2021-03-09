import Link from "next/link";

export default function Audio() {
  return (
    <div>
      <audio
        controls
        src="https://next-pwa-demo-app.s3-eu-west-1.amazonaws.com/file_example_MP3_1MG.mp3"
        // preload="none"
        // ref={audioPlayer}
        onLoadedMetadata={(e) => console.log("onLoadedMetadata", e)}
        onCanPlayThrough={(e) => console.log("onCanPlayThrough", e)}
        onLoadStart={(e) => console.log("onLoadStart", e)}
        onTimeUpdate={(e) => {
          console.log("onTimeUpdate", e);
        }}
      />
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </div>
  );
}
