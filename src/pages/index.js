import Image from "next/image";
import localFont from "next/font/local";
import SplineBg from "@/components/SplineBg/SplineBg";
import Navbar from "@/components/Navbar/Navbar";
import Work from "@/components/Work/Work";
import Head from "next/head";
import About from "@/components/About/About";
import Certificate from "@/components/Certificates/Certificate";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonker Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <SplineBg />
        <Navbar />

        <main className={` flex flex-col relative z-1 `}>
          <Work />
          <About/>
          <Certificate/>
          
        </main>
        <Contact/>
      </div>
    </>
  );
}
