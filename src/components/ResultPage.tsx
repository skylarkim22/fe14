"use client";

import { motion } from "motion/react";

export default function ResultPage({ answers }: { answers: string[] }) {
  return (
    <motion.div className="text-center">
      <motion.h2
        className="mb-6 text-3xl font-bold"
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
      >
        테스트 결과
      </motion.h2>
      <motion.div className="rounded-lg bg-white p-6 shadow-lg">
        {answers.map((answer, index) => (
          <motion.p
            key={index}
            className="mb-2"
            initial={{
              x: -20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ delay: index * 0.1 }}
          >
            질문 {index + 1}: {answer}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
