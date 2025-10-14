'use client';
import { AppBar, Box, Button, Container, CssBaseline, Link as MuiLink, Toolbar, Typography, ThemeProvider, createTheme } from "@mui/material";
import Link from "next/link";
import React from 'react';

// このページ専用のMUIテーマを作成
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F59E0B' },
    background: { default: '#111827', paper: '#1F2937' },
    text: { primary: '#F9FAFB', secondary: '#9CA3AF' },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "sans-serif"',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' },
    body1: { lineHeight: 1.7 },
  },
});

// ヘッダーコンポーネント
const Header = () => (
  <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'grey.800' }}>
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: '"Press Start 2P"', color: '#F59E0B' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Nemuke Quest</Link>
        </Typography>
        <Button color="inherit" component={Link} href="/support">サポート</Button>
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

export default function PrivacyPolicyPage() {
  const contactEmail = "ryomasolid@yahoo.co.jp";
  const effectiveDate = "2025年10月15日"; // 現在の日付に設定

  return (
    <ThemeProvider theme={darkTheme}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&family=Press+Start+2P&display=swap" rel="stylesheet" />

      <CssBaseline />
      <Box>
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
            プライバシーポリシー
          </Typography>
          <Typography color="text.secondary" textAlign="center">
            最終更新日: {effectiveDate}
          </Typography>

          <Box mt={6}>
            <Typography variant="body1" paragraph>
              [開発者名またはサービス名]（以下、「当方」といいます）は、提供するアプリケーション「Nemuke Quest」（以下、「本アプリ」といいます）における、ユーザーの情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
            </Typography>

            <Typography variant="h2" component="h2">1. 収集する情報</Typography>
            <Typography variant="body1" paragraph>
              本アプリでは、広告配信を目的として、第三者サービスであるGoogle AdMobが以下の情報を自動的に収集する場合があります。
            </Typography>
            <ul>
              <li><Typography variant="body1">広告識別子（IDFA / AAID）</Typography></li>
              <li><Typography variant="body1">IPアドレス</Typography></li>
              <li><Typography variant="body1">端末情報（OS、機種名など）</Typography></li>
              <li><Typography variant="body1">本アプリの利用状況に関する情報</Typography></li>
            </ul>
            <Typography variant="body1" paragraph mt={2}>
              なお、本アプリは、ユーザーの氏名、メールアドレス、電話番号などの個人情報を登録いただくことなくご利用いただけます。
            </Typography>

            <Typography variant="h2" component="h2">2. 情報の利用目的</Typography>
            <Typography variant="body1" paragraph>
              当方は、収集した情報を以下の目的で利用します。
            </Typography>
            <ul>
              <li><Typography variant="body1">ユーザーの興味関心に合わせた広告を配信するため</Typography></li>
              <li><Typography variant="body1">広告の効果測定および分析を行うため</Typography></li>
              <li><Typography variant="body1">本アプリのサービス品質向上および不具合改善のための分析を行うため</Typography></li>
            </ul>

            <Typography variant="h2" component="h2">3. 第三者サービスの利用について</Typography>
            <Typography variant="body1" paragraph>
              本アプリでは、広告配信のためにGoogle社の提供するサービス「Google AdMob」を利用しています。Google AdMobが収集する情報、利用目的、および第三者への提供等の詳細については、以下のGoogle社のポリシーと規約をご確認ください。
            </Typography>
            <MuiLink href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              Google ポリシーと規約 – 広告
            </MuiLink>

            <Typography variant="h2" component="h2">4. プライバシーポリシーの変更</Typography>
            <Typography variant="body1" paragraph>
              当方は、法令の改正やサービス内容の変更に伴い、本ポリシーを改定することがあります。重要な変更がある場合には、本アプリ内または本ウェブページにて通知いたします。
            </Typography>

            <Typography variant="h2" component="h2">5. お問い合わせ先</Typography>
            <Typography variant="body1" paragraph>
              本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
            </Typography>
            <MuiLink href={`mailto:${contactEmail}`} sx={{ fontWeight: 'bold' }}>
              {contactEmail}
            </MuiLink>

            <Typography variant="body1" mt={4}>
              以上
            </Typography>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}