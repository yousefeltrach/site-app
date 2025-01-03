import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="z-[99] -m-1.5 p-1.5">
      <Image
        src="/xsaas-logo-dark.png"
        alt="DevOps Crowd"
        width={150}
        height={120}
        className="dark:hidden"
      />
      <Image
        src="/xsaas-logo-light.png"
        alt="DevOps Crowd"
        width={150}
        height={120}
        className="hidden dark:block"
      />
    </Link>
  );
}
