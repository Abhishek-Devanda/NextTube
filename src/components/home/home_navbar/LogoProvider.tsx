import Image from "next/image";
import Link from "next/link";

export const LogoProvider = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">

        <Image
          src={"/YouTube.svg"}
          alt="logo"
          priority={true}
          width={35}
          height={32}
          style={{ height: "auto" }}
        />
        <p className="text-xl font-semibold tracking-tight">NextTube</p>
      </div>
    </Link>
  )
}