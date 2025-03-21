import Link from "next/link";

const StartExamCard = () => {
  return (
    <div className="relative flex h-60 flex-row items-end gap-4 rounded-2xl bg-primary p-6 text-white shadow-xl md:h-60 md:shadow-xl">
      <p className="absolute right-4 top-4 rounded-xl bg-white px-3 py-1 text-sm font-medium text-primary">
        20 min
      </p>
      <div className="flex flex-col gap-3">
        <p className="w-[90%] text-sm tracking-tight">
          Itoze buri munsi, wongere ubumenyi n&apos;amahirwe, biguhesha insinzi.
        </p>
        <p className="font-semibold">Tangira aka kanya! </p>
        <Link
          href={""}
          className="mt-2 w-fit rounded-xl bg-white px-4 py-2 text-sm font-medium text-blue-700"
        >
          Tangira imyitozo
        </Link>
      </div>
    </div>
  );
}

export default StartExamCard
