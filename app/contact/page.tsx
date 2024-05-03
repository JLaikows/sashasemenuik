import { Box } from "@mui/material";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <main className="transition faded-element-fast sm:right-0 lg:-right-32 top-32 flex items-center md:justify-center flex-col md:flex-row items-center p-2 md:p-2 lg:p-64 lg:pt-0">
      <Box className="relative mt-32 lg:mt-0 flex flex-col justify-center items-center p-10 pt-56 md:pt-32 accent lg:p-20 lg:pl-96 rounded-lg">
        <img
          alt=""
          src="https://iili.io/mZg95v.jpg"
          className="absolute lg:w-96 lg:h-96 md:w-56 md:h-56 object-cover rounded-lg lg:top-14 lg:-left-10 md:left-70 md:-top-32 hidden md:block lg:block"
        />
        <div className="pb-10 text-3xl bold">Contact Info</div>
        <a
          className="pb-10 text-2xl underline"
          href="mailto:sashasaythat@gmail.com"
        >
          sashasaythat@gmail.com
        </a>
        <div className="flex justify-between w-full">
          <SocialIcon
            href="https://instagram.com/__sashadoll__/"
            network="instagram"
            target="_blank"
            bgColor="black"
          />
          <SocialIcon
            href="https://www.facebook.com/michele.semeniuk"
            network="facebook"
            target="_blank"
            bgColor="black"
          />
          <SocialIcon
            href="https://www.tiktok.com/@czarsashaa"
            network="tiktok"
            target="_blank"
            bgColor="black"
          />
          <SocialIcon
            href="https://twitter.com/sashasaythat"
            network="x"
            target="_blank"
            bgColor="black"
          />
          <SocialIcon
            href="https://soundcloud.com/user-889254352"
            network="soundcloud"
            target="_blank"
            bgColor="black"
          />
        </div>
        <img
          alt=""
          src="https://iili.io/mZg95v.jpg"
          className="absolute w-80 h-80 object-cover rounded-lg -top-32 md:top-10 block lg:hidden md:hidden mt-2"
        />
      </Box>
    </main>
  );
}
