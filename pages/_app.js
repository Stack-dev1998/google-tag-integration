import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../components/styles/tailwind.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const GA_TRACKING_ID = "5965230905"; // replace with your Google Analytics tracking ID

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
