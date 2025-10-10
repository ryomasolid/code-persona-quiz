"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { AdBanner } from "../../components/AdBanner";

export default function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!score) return;
    const s = Number(score);
    if (s <= 9) {
      setMessage("あなたは技術探求者タイプ！");
    } else if (s <= 13) {
      setMessage("あなたは協調型リーダータイプ！");
    } else {
      setMessage("あなたは多才なジェネラリストタイプ！");
    }
  }, [score]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        診断結果
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {message}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TwitterShareButton
          url={shareUrl}
          title={`エンジニアキャリア診断の結果は…\n\n${message}`}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </Box>

      <Button variant="contained" onClick={() => router.push("/features/quiz")}>
        もう一度診断
      </Button>

      <AdBanner />
    </Container>
  );
}
