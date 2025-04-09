export const HowItWorkCard = ({
  num,
  title,
  content,
}: {
  num: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex h-fit max-w-[32rem] flex-col gap-4 rounded-md bg-primary/10 px-6 py-8 even:ml-auto md:p-8 lg:even:ml-0 lg:even:mt-12">
      <h4>{num}.</h4>
      <h5 className="-mb-2 font-medium">{title}</h5>
      <p className="font-light leading-6">{content}</p>
    </div>
  );
};
