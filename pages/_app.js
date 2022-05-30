import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  var _bsq = _bsq || [];
                  _bsq.push(['init', '2277']);
                  _bsq.push(['track', 'PageView']);

                  (function(w, d, s, id){
                      var js, fjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) { return; }
                      js = d.createElement(s); js.id = id; 
                      js.src = 'https://cdn.birdsend.co/assets/static/js/pixel/main.js';
                      fjs.parentNode.insertBefore(js, fjs);
                  }(window, document, 'script', 'birdsend-pixel-js'));

            `,
            }}
          />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
