import Image from "next/image";
import Gallery from "./gallery/page";
import Hero from "@/components/Hero";


export interface Upload {
  event: "success"
  info: { public_id: string }
}
export default function Home() {
  return (
    <>
    <Hero />
    <Gallery />
    </>
  );
}
