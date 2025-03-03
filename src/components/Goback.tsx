import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Goback = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <Button className={className} variant={"ghost"} type="button" onClick={() => router.back()}>
      Go back
    </Button>
  );
};

export default Goback;
