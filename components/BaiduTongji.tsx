import Script from 'next/script'

const BAIDU_TONGJI_ID = '328ba2b9c162a3e1e011494cc35f3c39'

export default function BaiduTongji() {
  return (
    <>
      {/* Init _hmt before scripts execute */}
      <Script
        id="baidu-hmt-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: 'window._hmt = window._hmt || [];' }}
      />
      {/* Load hm.js via next/script so Next adds preload */}
      <Script
        id="baidu-analytics"
        strategy="afterInteractive"
        src={`https://hm.baidu.com/hm.js?${BAIDU_TONGJI_ID}`}
      />
    </>
  )
}

