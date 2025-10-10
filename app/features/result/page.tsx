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

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get("score"); // ← router.query.score の代わり
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!score) return;
    const s = Number(score);
    if (s <= 3) setMessage("あなたはのんびり屋タイプです！");
    else if (s <= 6) setMessage("あなたは社交的タイプです！");
    else setMessage("あなたはアクティブタイプです！");
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
        <TwitterShareButton url={shareUrl} title={`診断結果: ${message}`}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <FacebookShareButton url={shareUrl}>
          {/* react-share v5 では quote は使えないので削除 */}
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </Box>

      <Button variant="contained" onClick={() => router.push("/quiz")}>
        もう一度診断
      </Button>

      <AdBanner />
    </Container>
  );
}
