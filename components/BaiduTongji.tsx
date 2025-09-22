import Script from 'next/script'

const BAIDU_TONGJI_ID = '40fb4d247ad6803abcc46358c1cc3d67'

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

