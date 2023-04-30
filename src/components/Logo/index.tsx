import Link from "next/link";
import Image from "next/image";

import sourceImage from "@/assets/logo-full.png";

export function Logo() {
  return (
    <Link href="/">
      <Image
        width={150}
        src={sourceImage}
        alt="Logo oficial do Spotify na cor branca"
      />
    </Link>
  );
}
