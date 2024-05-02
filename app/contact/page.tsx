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
    <main className="transition faded-element-fast relative top-32 md:-top-10 lg:top-0 flex min-h-screen flex-col md:flex-row items-center justify-between p-2 md:p-2 lg:p-64 lg:pt-0">
      <Image
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
          <a href="www.facebook.com/">
            <svg
              height="100%"
              style={textConvert(
                "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              )}
              version="1.1"
              viewBox="0 0 512 512"
              width="100px"
            >
              <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
            </svg>
          </a>
        </div>
        <div>Instagram - __sashadoll__</div>
        <div>TikTok - czarsashaa</div>
        <div>X - sashasaythat</div>
        <Image
          alt=""
          src="https://iili.io/mZg95v.jpg"
          className="absolute w-80 h-80 object-cover rounded-lg -top-32 md:top-10 block lg:hidden mt-2"
        />
      </Box>
    </main>
  );
}
