import { Box, SvgIcon } from "@mui/material";
import Image from "next/image";

function textConvert(text: string) {
  const obj: any = {};
  const textPairs = text.split(";");
  const arrayPairs = textPairs.map((pair) => pair.split(":"));
  for (const pair in arrayPairs) {
    obj[pair[0]] = pair[1];
  }
  return obj;
}

export default function Contact() {
  return (
    <main className="transition faded-element-fast relative top-32 md:-top-10 lg:top-0 flex items-center min-h-screen flex-col md:flex-row items-center justify-between p-2 md:p-2 lg:p-64 lg:pt-0">
      <img
        alt=""
        src="https://iili.io/mZg95v.jpg"
        className="absolute w-96 h-96 object-cover rounded-lg top-14 left-44 hidden lg:block"
      />
      <Box className="flex flex-col justify-center items-center p-10 pt-56 md:pt-32 accent lg:p-20 lg:pl-96 rounded-lg">
        <div className="pb-10 text-3xl bold">Contact Info</div>
        <a className="pb-10 text-2xl" href="mailto:sashasaythat@gmail.com">
          sashasaythat@gmail.com
        </a>
        <div>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-instagram"></a>
        </div>
        <div>Instagram - __sashadoll__</div>
        <div>TikTok - czarsashaa</div>
        <div>X - sashasaythat</div>
        <img
          alt=""
          src="https://iili.io/mZg95v.jpg"
          className="absolute w-80 h-80 object-cover rounded-lg -top-32 md:top-10 block lg:hidden mt-2"
        />
      </Box>
    </main>
  );
}
