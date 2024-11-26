"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const dataList: Course[] = courseData.courses
    .filter((course) => course.isFeatured)
    .map((course) => ({
      ...course,
      price: parseFloat(course.price),
    }));

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2
          className="text-base text-teal-600
                font-semibold tracking-wide uppercase"
        >
          Featured Courses
        </h2>
        <p
          className="mt-2 text-3xl leading-8
                font-extrabold tracking-tight text-white
                sm:text-4xl "
        >
          Learn with the Best
        </p>
      </div>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 gap-8 justify-center"
        >
          {dataList.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient 
              className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-nutral-200">{course.title}</p>
                    <p>{course.description}</p>
                    <Link href={'/courses/${course.slug}'}>
                        Learn more
                    </Link>
                    
                    </div></BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/corses"}
          className="px-4 py-2 rounded border
            border-neutral-600 text-neutral 700 
            hover:bg-gray-600 transition duration-200"
        >
          view all courses
        </Link>
      </div>
    </div>
  );
}
export default FeaturedCourses;
