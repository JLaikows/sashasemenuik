"use client";

import { ImageList } from "@mui/material";
import { FC, useEffect, useState } from "react";

interface INewImageList {
  children: any;
}

const NewImageList: FC<INewImageList> = ({ children }) => {
  // avoiding window not defined errors
  // I dont believe this is the best way to do this, should be updated later
  if (typeof window === "undefined") {
    return null;
  }
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <ImageList
      variant="masonry"
      className="w-90 hidden md:block"
      cols={isMobile ? 1 : 5}
    >
      {children}
    </ImageList>
  );
};

export default NewImageList;
