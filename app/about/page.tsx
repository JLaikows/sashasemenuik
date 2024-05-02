import { Box } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <main className="transition faded-element-fast relative top-32 md:-top-10 lg:top-0 flex min-h-screen flex-col md:flex-row items-center justify-between p-2 md:p-2 lg:p-64 lg:pt-0">
      <Image
        alt=""
        src="https://iili.io/mZg2zN.jpg"
        className="absolute w-96 h-96 object-cover rounded-lg top-14 left-44 hidden lg:block"
      />
      <Box className="flex flex-col justify-center items-center p-10 pt-56 md:pt-32 accent lg:p-20 lg:pl-96 rounded-lg">
        <div className="text-center pb-2">
          Sasha Semenuik is a model, actress, and singer based in the Tri State
          area. She has experience in bridal, swimwear, lingerie,
          commercial/print, runway, acting, and music video modeling. With
          various published photos, working alongside reputable brands and
          companies, and walking in NYFW 2024, she continues to strive towards
          excellence and proffessionalism.{" "}
        </div>
        <div className="font-bold">Measurments</div>
        <div>5’4{'"'}</div>
        <div>32 in bust</div>
        <div>25 in waist</div>
        <div>34 in hips</div>
        <div>Shoe size - 6 - 6 1/2</div>
        <div>Dress - 0/1</div>
        <div>Pants - 0/1</div>
        <Image
          alt=""
          src="https://iili.io/mZg2zN.jpg"
          className="absolute w-80 h-80 object-cover rounded-lg -top-32 md:top-10 block lg:hidden mt-2"
        />
      </Box>
    </main>
  );
}
