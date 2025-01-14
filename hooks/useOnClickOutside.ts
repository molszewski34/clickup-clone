import { RefObject, useEffect } from "react";

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (event: Event) => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};
