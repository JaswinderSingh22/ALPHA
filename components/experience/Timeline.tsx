"use client";
import React from "react";
import styles from "./styles.module.css";
import { Experience } from "@/interfaces/Experience";

type timelineProps = {
  expericeDetails: Experience[];
};
export default function Timeline({ expericeDetails }: timelineProps) {
  console.log("expericeDetails:", expericeDetails);

  return (
    <div
      className={`${styles.timeline} p-4 h-3/5 w-3/4 flex flex-col justify-center`}
    >
      {expericeDetails.map((experience: Experience, index: number) => (
        <div
          key={index}
          className={`${styles.container} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
        >
          <div className={styles.content}>
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-sm text-gray-500 mt-2">{experience.duration}</p>
            <p className="text-gray-700 mt-2">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
