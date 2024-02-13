import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User2 } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";
import { LogoutButtonWithAlert } from "./LogoutButtonWithAlert";

export type LoggedInButtonProps = {
  user: Session["user"];
};

export const LoggedInButton = (props: LoggedInButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-base"
        >
          <Avatar className="mr-2 size-6">
            <AvatarFallback>{props.user?.name?.[0]}</AvatarFallback>
            {props.user.image && (
              <AvatarImage
                src={props.user.image}
                alt={props.user.name ?? "user picture"}
              />
            )}
          </Avatar>
          {props.user.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Button variant="ghost">
            <Link
              href="/account"
              className="flex items-center"
            >
              <User2
                className="mr-2 block"
                size={12}
              />
              <p>Mon compte</p>
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutButtonWithAlert />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
