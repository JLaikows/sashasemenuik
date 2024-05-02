import { ImageList, ImageListItem } from "@mui/material";
import { images } from "../utils/images-temp";
import Image from "next/image";

export default function Home() {
  function imagesList(images: string[]) {
    return images.map((imgUrl, i) => {
      return (
        <ImageListItem key={i} className="overflow-hidden  rounded-lg">
          <img alt="" className="example-imgs" loading="lazy" src={imgUrl} />
        </ImageListItem>
      );
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-64 lg:pt-4 faded-element-slow">
      {/* for viewing on desktop */}
      <ImageList variant={"masonry"} className="w-90 hidden md:block" cols={5}>
        {imagesList(images)}
      </ImageList>
      {/* for viewing on mobile */}
      <ImageList variant={"masonry"} className="w-90 block md:hidden" cols={1}>
        {imagesList(images)}
      </ImageList>
    </main>
  );
}
