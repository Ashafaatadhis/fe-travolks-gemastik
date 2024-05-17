import React from "react";
import Image from "next/image";
import reserve from "@/public/reserve.png";

const Reservation = () => {
  return (
    <section className="flex items-center flex-col-reverse md:flex-row">
      <div>
        <div className="min-w-0">
          <p className="text-xs text-center md:text-xl md:text-left font-sans text-custom-Ultra-Indigo font-bold">
            RESERVASI TEMPAT
          </p>
        </div>

        <div className="kiri m-auto ">
          <h1 className="font-bold text-center md:text-left text-2xl md:text-5xl w-fit">
            Gak mau ngantri? reservasi aja 🤙🏻
          </h1>

          <div className="flex flex-col gap-10 my-10 max-w-md">
            <div className="flex items-center gap-5 my-1">
              <div className="">
                <h1 className="p-3 text-lg bg-custom-Sky-High rounded-lg">
                  🔎
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" font-semibold">Cari tempat yang kamu mau</h2>
                <p className="text-xs md:text-base">
                  Temukan destinasi selanjutnya yang akan kamu kunjungi dengan
                  Destinize
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 my-1">
              <div className="">
                <h1 className="p-3 text-lg bg-custom-Sky-High rounded-lg">
                  ✏️
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" font-semibold">Cari tempat yang kamu mau</h2>
                <p className="text-xs md:text-base">
                  Temukan destinasi selanjutnya yang akan kamu kunjungi dengan
                  Destinize
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 my-1">
              <div className="">
                <h1 className="p-3 text-lg bg-custom-Sky-High rounded-lg">
                  😍
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" font-semibold">Cari tempat yang kamu mau</h2>
                <p className="text-xs md:text-base">
                  Temukan destinasi selanjutnya yang akan kamu kunjungi dengan
                  Destinize
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kanan">
        <Image src={reserve} width={1000} height={1000} alt="reserve card" />
      </div>
    </section>
  );
};

export default Reservation;
