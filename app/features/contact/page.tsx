"use client";

import { Container, Typography, Box, Divider } from "@mui/material";

export default function ContactPage() {
  return (
    <Container sx={{ mt: 8, maxWidth: 600, mx: "auto", px: 3 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
      >
        お問い合わせ
      </Typography>

      <Typography sx={{ mb: 3 }}>
        本サイトに関するご質問やご意見などがございましたら、
        下記のメールアドレス宛にご連絡ください。
      </Typography>

      <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        <Typography
          component="a"
          href="mailto:ryomasolid@yahoo.co.jp"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          ryomasolid@yahoo.co.jp
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="body2" color="text.secondary">
        いただいたお問い合わせには、内容を確認のうえ順次対応させていただきます。
        回答までにお時間をいただく場合がありますので、あらかじめご了承ください。
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 6, textAlign: "center" }}
      >
        最終更新日：2025年10月10日
      </Typography>
    </Container>
  );
}
