// app/components/AdBanner.tsx
"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

export function AdBanner() {
  const adLoaded = useRef(false);

  useEffect(() => {
    // すでに広告が読み込まれている場合は何もしない
    if (adLoaded.current) {
      return;
    }

    try {
      // @ts-expect-error: adsbygoogle は存在しない場合もある
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adLoaded.current = true; // 広告読み込みフラグを立てる
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // ← 自分のIDに変更
        data-ad-slot="1234567890"
        data-ad-format="auto"
      />
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
    </div>
  );
}
