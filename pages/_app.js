// import GoogleAnalytics from "@/components/GoogleAnalytics";
// import "../components/styles/tailwind.css";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const GA_TRACKING_ID = "G-6Z6TBTKXMQ"; // replace with your Google Analytics tracking ID

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       window.gtag("config", GA_TRACKING_ID, {
//         page_path: url,
//       });
//     };

//     router.events.on("routeChangeComplete", handleRouteChange);

//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, [router.events]);
//   return (
//     <>
//       <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import * as fbq from "../lib/fpixel";
import "../components/styles/tailwind.css";
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = (url) => {
      gtag.pageview(url);
      fbq.pageview();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_TRACKING_ID}');
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script strategy="afterInteractive">
        {`
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3599141,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
