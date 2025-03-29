"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

const itemlist = [
  {
    icon: <Check />,
    content: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <Check />,
    content: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <Check />,
    content: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <Check />,
    content: "Lorem ipsum dolor sit amet",
  },
];
const PricingCard = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      toast.dismiss();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-80 flex-col items-center gap-6 rounded-2xl border border-black px-4 py-8 text-center">
      <h4>Ibizamini 2</h4>
      <p>Lorem ipsum dolor sit amet consecte</p>
      <h2 className="font-semibold">300 RWF</h2>
      <div className="size-fit">
        {itemlist.map((item, i) => {
          return (
            <div key={i} className="inline-flex gap-2 text-green-500">
              {item.icon}
              <span className="text-sm text-black lg:text-sm">
                {item.content}
              </span>
            </div>
          );
        })}
      </div>
      <Button size={"lg"} className="h-12 rounded-3xl bg-primary">
        <Link href={"/"}>Tangira Isuzuma</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
