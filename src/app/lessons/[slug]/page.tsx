import React from "react";
import { notFound } from "next/navigation";
import { getAllLessons, getLessonBySlug } from "@/data/lessons";
import { LessonView } from "@/components/lesson/LessonView";
import type { Metadata } from "next";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((l) => ({
    slug: l.slug,
  }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) {
    return {
      title: "درس یافت نشد | Java-first Academy",
    };
  }

  return {
    title: `هفته ${lesson.week} روز ${lesson.day}: ${lesson.title} | Java-first Academy`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return <LessonView lesson={lesson} />;
}
