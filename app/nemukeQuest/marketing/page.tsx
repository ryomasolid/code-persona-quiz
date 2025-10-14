'use client';
import { AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Link as MuiLink, Toolbar, Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import Link from "next/link";
import React from 'react';

// このページ専用のMUIテーマを作成
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F59E0B' }, // Amber/Gold for a fantasy feel
    secondary: { main: '#EF4444' }, // Red for alerts/demons
    background: { default: '#111827', paper: '#1F2937' },
    text: { primary: '#F9FAFB', secondary: '#9CA3AF' },
  },
  typography: {
    fontFamily: '"Press Start 2P", "system-ui", "sans-serif"', // Pixel-art style font
    h1: { fontWeight: 700, fontFamily: '"Orbitron", "sans-serif"' }, // Sci-fi/Game style font for titles
    h2: { fontWeight: 700, fontFamily: '"Orbitron", "sans-serif"' },
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

// マーケティングページのメインコンポーネント
export default function MarketingPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Google Fonts for game-like typography */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Press+Start+2P&display=swap" rel="stylesheet" />

      <CssBaseline />
      <Box>
        <Header />
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          {/* --- ヒーローセクション --- */}
          <Box py={10}>
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '3rem', md: '4.5rem' } }}>
              レベルアップして、睡魔を倒せ。
            </Typography>
            <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
              毎日の眠気対策を、楽しいゲームに変えよう。
              「Nemuke Quest」は、あなたを主人公にする新しい健康アドベンチャーです。
            </Typography>
            <Box mt={4} display="flex" justifyContent="center" gap={2}>
              <Button variant="contained" size="large" color="primary" href="#appstore-link">冒険を始める (App Store)</Button>
              <Button variant="outlined" size="large" color="primary" href="#googleplay-link">Google Play</Button>
            </Box>
          </Box>

          {/* --- 機能紹介セクション --- */}
          <Box mt={10}>
            <Typography variant="h2" gutterBottom>ゲームの遊び方</Typography>
            <Grid container spacing={4} mt={4} justifyContent="center">
              <Grid>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Typography fontSize="3rem">👹</Typography>
                  <Typography variant="h5" gutterBottom>睡魔がモンスターに！</Typography>
                  <Typography color="text.secondary">眠気を感じたら「スリープデーモン」を召喚！あなたの目の前に、倒すべき敵が現れます。</Typography>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Typography fontSize="3rem">✨</Typography>
                  <Typography variant="h5" gutterBottom>クエストでEXP獲得</Typography>
                  <Typography color="text.secondary">「聖なる水を飲む」「5分間のウォーキング」など、簡単なクエストを達成して経験値を稼ぎます。</Typography>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Typography fontSize="3rem">🚀</Typography>
                  <Typography variant="h5" gutterBottom>レベルアップで最強の自分へ</Typography>
                  <Typography color="text.secondary">EXPが貯まるとレベルアップ！日々の眠気に打ち勝つことで、あなたはもっと強く、健康的になります。</Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}