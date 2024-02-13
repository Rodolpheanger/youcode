"use client"; // Error components must be Client Components

import { LoginButton } from "@/components/features/auth/LoginButton";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card className="m-auto mt-8 max-w-3xl p-6 text-center">
      <CardHeader>
        <CardTitle>Vous devez être connecté pour voir cette page</CardTitle>{" "}
      </CardHeader>
      <CardFooter className="flex flex-row justify-center">
        <LoginButton />
      </CardFooter>
    </Card>
  );
}
