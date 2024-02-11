import { getServerSession } from "next-auth";
import { authOptions } from "../../../../app/api/auth/[...nextauth]/route";
import { LoggedInButton } from "./LoggedInButton";
import { LoginButton } from "./LoginButton";

export const AuthButton = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return <LoginButton />;
  }

  return <LoggedInButton user={user} />;
};
