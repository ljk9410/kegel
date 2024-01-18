import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(true);
  const isMobileWidth = useMediaQuery({
    query: "(max-width: 750px)",
  });

  useEffect(() => {
    setIsMobileView(isMobileWidth);
  }, [isMobileWidth]);

  return isMobileView;
};

export default useIsMobileView;
