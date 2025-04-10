import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";

const PlanAndUpgrade = ({ className }: { className?: string }) => {
  return (
    <>
      <span className="inline-flex gap-2">
        <Box />
        <span>2/5</span>
      </span>
      <Button
        className={`hidden px-5 py-5 md:flex ${className}` }
        variant="default"
      >
        <span className="text-sm font-normal">Upgrade</span>
        <IoStarSharp className="text-xl text-yellow-500" />
      </Button>
    </>
  );
};

export default PlanAndUpgrade;
