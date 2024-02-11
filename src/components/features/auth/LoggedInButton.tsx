import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";

export type LoggedInButtonProps = {
  user: Session["user"];
};

export const LoggedInButton = (props: LoggedInButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
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
  );
};
