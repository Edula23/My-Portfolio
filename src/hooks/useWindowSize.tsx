import React from "react";
export default function useWindowSize() {
  const [width, setWidth] = React.useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024);
  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return { width, isMobile: width < 768 };
}