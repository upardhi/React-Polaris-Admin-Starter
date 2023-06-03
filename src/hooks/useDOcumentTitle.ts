// useDocumentTitle.js
import { useEffect } from "react";
export const useDocumentTitle = (title: any, prevailOnUnmount: any = "") => {
  useEffect(() => {
    document.title = title;
    let ele = document.getElementById("page-title") as any;
    if (ele) {
      ele.innerHTML = title;
    }
  }, [title]);
};
