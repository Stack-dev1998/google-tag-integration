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
import "../components/styles/tailwind.css";
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
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
      <script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    <!-- Hotjar Tracking Code for https://integrations-ten.vercel.app/ -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3599141,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    `}
        </Script>
      </script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
