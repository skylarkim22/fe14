"use client";

import { motion } from "motion/react";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <motion.h2
        className="mb-8 text-center text-2xl font-bold"
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {question.question}
      </motion.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(option)}
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "5px 5px gray",
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="w-full rounded-lg bg-white p-4 text-left shadow"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
