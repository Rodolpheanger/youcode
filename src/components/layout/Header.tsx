import { Typography } from "@/components/ui/typography";
import { ThemeToggle } from "@/components/utils/ThemeToggle";
import { SiteConfig } from "@/lib/site-config";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { AuthButton } from "../features/auth/AuthButton";

export async function Header() {
  const session = await getServerSession(authOptions);
  console.log("session : ", session);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Image
            src="/images/logo.svg"
            width={50}
            height={35}
            alt="app logo"
          />
          <Typography
            variant="h3"
            as={Link}
            href="/"
          >
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
