import { Button, Card, CardContent, Typography } from "@mui/material";

interface Option {
  text: string;
  value: number;
}

interface QuestionProps {
  question: string;
  options: Option[];
  onSelect: (value: number) => void;
}

export const Question = ({ question, options, onSelect }: QuestionProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
        {options.map((opt, idx) => (
          <Button
            key={idx}
            variant="contained"
            sx={{ mt: 1, mr: 1 }}
            onClick={() => onSelect(opt.value)}
          >
            {opt.text}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
