'use client';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Link as MuiLink, Toolbar, Typography, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import React from 'react';

// このページ専用のMUIテーマを作成
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F59E0B' },
    background: { default: '#111827', paper: '#1F2937' },
    text: { primary: '#F9FAFB' },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "sans-serif"',
    h2: { fontWeight: 700 },
  },
});

// ヘッダーコンポーネント
const Header = () => (
  <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'grey.800' }}>
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: '"Press Start 2P"', color: '#F59E0B' }}>
          <Link href="/nemukeQuest/marketing" style={{ textDecoration: 'none', color: 'inherit' }}>Nemuke Quest</Link>
        </Typography>
        <Button color="inherit" component={Link} href="/nemukeQuest/support">サポート</Button>
      </Toolbar>
    </Container>
  </AppBar>
);

// フッターコンポーネント
const Footer = () => (
  <Box component="footer" sx={{ mt: 10, py: 4, borderTop: 1, borderColor: 'grey.800', textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      &copy; {new Date().getFullYear()} Nemuke Quest. All rights reserved.
    </Typography>
  </Box>
);

export default function SupportPage() {
  const contactEmail = "ryomasolid@yahoo.co.jp";

  return (
    <ThemeProvider theme={darkTheme}>
      {/* Google Fonts for game-like typography */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&family=Press+Start+2P&display=swap" rel="stylesheet" />

      <CssBaseline />
      <Box>
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
            冒険者のためのサポートギルド
          </Typography>

          {/* --- よくある質問 --- */}
          <Box mt={6}>
            <Typography variant="h4" component="h2" gutterBottom>よくある質問 (FAQ)</Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>クエストとは何ですか？</Typography></AccordionSummary>
              <AccordionDetails><Typography color="text.secondary">クエストは、眠気を撃退するための具体的なアクションです。「水を飲む」「ストレッチする」など、簡単なミッションをクリアすると経験値(EXP)が手に入ります。</Typography></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>EXPやレベルが保存されません。</Typography></AccordionSummary>
              <AccordionDetails><Typography color="text.secondary">ご不便をおかけし申し訳ありません。データは端末内に保存されます。アプリを再インストールするとデータが消えてしまうためご注意ください。問題が解決しない場合は、お手数ですが下記までご連絡ください。</Typography></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>新しいクエストを提案したいです。</Typography></AccordionSummary>
              <AccordionDetails><Typography color="text.secondary">素晴らしいアイデアをありがとうございます！ぜひ下記のお問い合わせ先まで、あなたの考えた最強のクエストを教えてください。</Typography></AccordionDetails>
            </Accordion>
          </Box>

          {/* --- お問い合わせ --- */}
          <Box mt={8}>
            <Typography variant="h4" component="h2" gutterBottom>ギルドへの伝言（お問い合わせ）</Typography>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  不具合という名のモンスターを発見した場合や、ご意見・ご感想は、以下の伝書鳩（メール）にてご連絡ください。
                </Typography>
                <MuiLink href={`mailto:${contactEmail}`} variant="h6" display="block" mt={1} sx={{ fontWeight: 'bold' }}>
                  {contactEmail}
                </MuiLink>
                <Typography variant="body2" color="text.secondary" mt={2}>
                  ※不具合報告の際は、お使いの機種名やOSのバージョン、どのような状況で問題が発生したかを詳しくお書きいただくと、討伐（解決）がスムーズになります。
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}