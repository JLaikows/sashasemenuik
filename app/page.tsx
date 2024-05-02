import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

export const images = [
  "https://iili.io/mZUhJf.jpg",
  "https://iili.io/mZUjR4.jpg",
  "https://iili.io/mZUwOl.jpg",
  "https://iili.io/mZUNb2.jpg",
  "https://iili.io/mZUkW7.jpg",
  "https://iili.io/mZUvs9.jpg",
  "https://iili.io/mZUU0u.jpg",
  "https://iili.io/mZU4Jj.jpg",
  "https://iili.io/mZU65x.jpg",
  "https://iili.io/mZUPOQ.jpg",
  "https://iili.io/mZUQWP.jpg",
  "https://iili.io/mZUZs1.jpg",
  "https://iili.io/mZUDqF.jpg",
  "https://iili.io/mZUb0g.jpg",
  "https://iili.io/mZUmga.jpg",
  "https://iili.io/mZg95v.jpg",
  "https://iili.io/mZgHeR.jpg",
  "https://iili.io/mZgJbp.jpg",
  "https://iili.io/mZg2zN.jpg",
  "https://iili.io/mZg3XI.jpg",
];
export default function Home() {
  function imagesList(images: string[]) {
    return images.map((imgUrl, i) => {
      return (
        <ImageListItem key={i} className="overflow-hidden  rounded-lg">
          <Image alt="" className="example-imgs" loading="lazy" src={imgUrl} />
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
