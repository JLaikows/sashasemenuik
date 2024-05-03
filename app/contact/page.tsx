import { Box } from "@mui/material";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <main className="transition faded-element-fast relative top-32 md:-top-10 lg:top-0 flex items-center flex-col md:flex-row items-center justify-between p-2 md:p-2 lg:p-64 lg:pt-0">
      <img
        alt=""
        src="https://iili.io/mZg95v.jpg"
        className="absolute w-96 h-96 object-cover rounded-lg top-14 left-44 hidden lg:block"
      />
      <Box className="flex flex-col justify-center items-center p-10 pt-56 md:pt-32 accent lg:p-20 lg:pl-96 rounded-lg">
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
            href="https://twitter.com/sashasaythat"
            network="soundcloud"
            target="_blank"
            bgColor="black"
          />
        </div>
        <img
          alt=""
          src="https://iili.io/mZg95v.jpg"
          className="absolute w-80 h-80 object-cover rounded-lg -top-32 md:top-10 block lg:hidden mt-2"
        />
      </Box>
    </main>
  );
}
