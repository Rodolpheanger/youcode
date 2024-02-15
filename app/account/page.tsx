import { LogoutButton } from "@/components/features/auth/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Account() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("No session found");
  }

  const user = session?.user;

  return (
    <Card className="m-auto mt-8 max-w-3xl p-6">
      <CardHeader className="flex flex-row gap-6 space-y-0">
        <Avatar className="mr-2 size-20">
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
          {user?.image && (
            <AvatarImage
              src={user.image}
              alt={user.name ?? "user picture"}
            />
          )}
        </Avatar>
        <div className="flex flex-col justify-center gap-2">
          <p className="text-lg font-semibold">{user?.email}</p>
          <p className="font-light">{user?.name}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/account/settings"
        >
          Modifier mes informations
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={`/admin`}
        >
          Administrateur
        </Link>
      </CardContent>
      <CardFooter className="flex flex-row justify-end">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
