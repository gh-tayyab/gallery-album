import Gallery from "./gallery/page";
export interface Upload {
  event: "success"
  info: { public_id: string }
}
export default function Home() {
  return (
    <Gallery />

  );
}
