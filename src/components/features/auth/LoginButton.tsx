"use client";

import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "../../ui/button";

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn(),
  });
  return (
    <Button
      variant="ghost"
      onClick={() => {
        mutation.mutate();
      }}
    >
      {mutation.isPending ? (
        <Loader
          className="mr-2"
          size={12}
        />
      ) : (
        <LogIn
          className="mr-2"
          size={12}
        />
      )}
      Connexion
    </Button>
  );
};
