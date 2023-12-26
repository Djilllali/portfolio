"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Armed with a <span className="font-medium">Master's</span> in Computer
        Science, I've dived into{" "}
        <span className="font-medium">full-stack web development</span>,
        mastering <span className="font-medium">ReactJS, NodeJS, MongoDB,</span>{" "}
        and navigating GitLab and AWS for CI/CD. My thrill for problem-solving
        fuels ongoing learning. Beyond coding, I explore{" "}
        <span className="italic">
          nature, hike, and indulge in table tennis, evolutionary biology, and
          philosophy
        </span>
        . Eager to bring my skills and enthusiasm to a vibrant software
        development role. After earning a{" "}
      </p>
    </motion.section>
  );
}
