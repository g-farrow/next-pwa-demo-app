import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/audio">
        <a>To Audio</a>
      </Link>
      <button
        onClick={() => {
          fetch(
            "https://next-pwa-demo-app.s3-eu-west-1.amazonaws.com/file_example_MP3_1MG.mp3"
          );
        }}
      >
        Fetch Audio File
      </button>
    </div>
  );
}
