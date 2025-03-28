import { format } from "date-fns";

const DashHeader = ({ title }: { title: string }) => {
  const formattedDate = format(new Date(), "EEEE dd, LLLL yyy");
  return (
    <div>
      <p className="text-lg font-semibold leading-3 md:text-xl">
        {title}
      </p>
      <p className="text-[.85rem] text-gray-500 md:text-[.9rem]">
        {formattedDate}
      </p>
    </div>
  );
};

export default DashHeader;
