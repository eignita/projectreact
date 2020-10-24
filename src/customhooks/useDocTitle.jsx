import { useEffect } from "react";

function useDocTitle(count) {

  useEffect(() => {
    document.title = `count: ${count}`;
    return () => {};
  }, [count]);
}

export default useDocTitle;
