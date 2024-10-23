import { useEffect } from "react";

const useDisableScroll = (item: boolean) => {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);
};
export default useDisableScroll;
