"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButtonWithAlert = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      signOut({ callbackUrl: "/" });
    },
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          {mutation.isPending ? (
            <Loader
              className="mr-2"
              size={12}
            />
          ) : (
            <LogOut
              className="mr-2"
              size={12}
            />
          )}
          Déconnexion
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Êtes-vous sûr de vouloir vous déconnecter ?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="secondary">Annuler</Button>
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={() => {
              mutation.mutate();
            }}
            disabled={mutation.isPending}
          >
            Déconnexion
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
