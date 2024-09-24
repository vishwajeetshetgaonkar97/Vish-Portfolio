import Image from "next/image";
import localFont from "next/font/local";
import SplineBg from "@/components/SplineBg/SplineBg";
import Navbar from "@/components/Navbar/Navbar";
import Work from "@/components/Work/Work";
import Head from "next/head";

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
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
