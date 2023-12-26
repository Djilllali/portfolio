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
        After earning a <span className="font-medium">Master's degree</span> in
        Computer Science, my journey into programming began. I delved into the
        realm of <span className="font-medium">full-stack web development</span>
        . through immersive experiences, mastering{" "}
        <span className="font-medium">ReactJS, NodeJS, and MongoDB,</span>
        while also navigating CI/CD with GitLab and AWS.{" "}
        <span className="italic">My passion lies in problem-solving</span>, the
        thrill of unraveling complex challenges fuels my dedication to continual
        learning. In addition to my technical prowess,{" "}
        <span className="italic">I find joy in the serenity of nature,</span>{" "}
        exploring landscapes from mountains to deserts and embracing outdoor
        activities like <span className="italic">hiking and trekking </span>.
        Beyond coding, I unwind by playing table tennis, absorbing knowledge
        about evolutionary biology, and delving into{" "}
        <span className="font-medium">philosophical explorations</span>. I am
        eager to contribute my skills and enthusiasm to a dynamic software
        development role.
      </p>
    </motion.section>
  );
}
