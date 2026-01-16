import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tenure-logo.svg"
            alt="Tenure logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* CTA */}
        <a
          href="#waitlist"
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition"
        >
          Get Covered
        </a>
      </div>
    </header>
  );
}
