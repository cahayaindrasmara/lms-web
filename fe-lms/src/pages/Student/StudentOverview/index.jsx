import React from "react";
import CardCourse from "./cardCourse";

export default function StudentPage() {
  return (
    <>
      <section
        id="LatestCourse"
        className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <h2 className="font-extrabold text-[22px] leading-[33px]">
          Latest Courses
        </h2>
        <CardCourse />
      </section>
    </>
  );
}
