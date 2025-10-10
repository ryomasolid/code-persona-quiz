"use client";

import { Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import questions from "../../../jsonData/questions.json";
import { AdBanner } from "../../components/AdBanner";
import { Question } from "../../components/Question";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleSelect = (value: number) => {
    const newScore = score + value;
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setScore(newScore);
    } else {
      router.push(`/features/result?score=${newScore}`);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        性格診断
      </Typography>
      <Question
        question={questions[current].question}
        options={questions[current].options}
        onSelect={handleSelect}
      />
      <AdBanner />
    </Container>
  );
}
