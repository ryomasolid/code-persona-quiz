"use client";

import { Container, Typography, Box, Divider } from "@mui/material";

export default function PrivacyPage() {
  return (
    <Container sx={{ mt: 8, maxWidth: 600, mx: "auto", px: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
        プライバシーポリシー
      </Typography>

      <Typography sx={{ mb: 3 }}>
        本サイトでは、Google AdSense による広告配信を行っています。Google およびそのパートナーは Cookie を使用し、
        ユーザーの興味に基づいた広告を表示する場合があります。
      </Typography>

      <Typography sx={{ mb: 3 }}>
        本サイトは、ユーザーの個人を特定できる情報を収集することはありません。
        アクセス解析や広告配信において収集される情報（Cookie、IP アドレスなど）は、
        サイトの運営改善や広告の最適化のみに利用されます。
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Cookie を無効にしたい場合は、ご利用のブラウザ設定からいつでも変更することができます。
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          お問い合わせ
        </Typography>
        <Typography sx={{ mb: 1 }}>
          本プライバシーポリシーに関するお問い合わせは、以下のメールアドレスまでお願いいたします。
        </Typography>
        <Typography
          component="a"
          href="mailto:ryomasolid@yahoo.co.jp"
          sx={{ color: "primary.main", textDecoration: "none", fontWeight: "bold" }}
        >
          ryomasolid@yahoo.co.jp
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 6, textAlign: "center" }}>
        最終更新日：2025年10月10日
      </Typography>
    </Container>
  );
}
