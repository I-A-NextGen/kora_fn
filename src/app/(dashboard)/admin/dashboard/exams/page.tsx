import { Suspense } from "react";
import DashHeader from "@/app/(dashboard)/components/DashHeader";
import AddNewQuestion from "@/app/(dashboard)/components/AddNewQuestion";
import ExamList from "@/app/(dashboard)/components/ExamList";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <DashHeader title="EXAMS" />
      <Suspense fallback={<div>Loading...</div>}>
        <ExamList />
        <AddNewQuestion />
      </Suspense>
    </div>
  );
};

export default Page;
