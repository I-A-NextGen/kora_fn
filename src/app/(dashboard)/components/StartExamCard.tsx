import Image from "next/image";
import Link from "next/link";
import ExamIcon from "/exam-icon.png";
import GetStarted from "@/app/(home)/_components/GetStarted";

const StartExamCard = () => {
  return (
    <div className="relative flex h-56 w-full flex-row items-end gap-4 rounded-2xl bg-primary p-6 text-white shadow-xl md:h-60 md:shadow-xl">
      <p className="absolute right-4 top-4 rounded-3xl bg-white px-3 py-1 text-sm font-medium text-primary">
        18 min
      </p>
      <div className="flex flex-col gap-3">
        <p className="w-[90%] text-sm tracking-tight sm:leading-4 md:leading-5">
          Itoze buri munsi, wongere ubumenyi n&apos;amahirwe, biguhesha
          intsinzi.
        </p>
        <p className="font-semibold">Tangira aka kanya! </p>

        <GetStarted
          triggerIcon={false}
          triggerStyle="h-fit mt-2 sm:mt-1 md:mt-2 w-fit rounded-xl bg-white px-4 py-2 !text-sm font-medium text-primary hover:bg-gray-200"
          readyToStartProp
        />
      </div>
      <Image
        src="/exam-icon.png"
        className="absolute -right-2 bottom-2 rotate-[10deg] opacity-35"
        width={130}
        height={130}
        alt="exam-icon"
      />
    </div>
  );
};

export default StartExamCard;
