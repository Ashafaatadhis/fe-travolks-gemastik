import { Earth, PhoneCall, Locate, Printer, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Footer() {
  return (
    <footer className="my-10 ">
      <div className="flex flex-col justify-around h-96">
        <section className="flex flex-wrap justify-between ">
          <div className="desc-detail-container w-full md:w-2/5">
            <div className="flex flex-col gap-y-2 my-3">
              <Earth className="text-custom-Ultra-Indigo w-5 h-5 sm:w-6 sm:h-6" />
              <h1 className="text-2xl font-bold font-sans text-custom-Fly-byNight">
                Destinize
              </h1>
              <p className="text-custom-Bright-Manatee text-sm">
                Destinize adalah website atau layanan aplikasi yang membantu
                kamu memilih atau merekomendasikan tempat yang dijuluki ‘hidden
                gems’ agar lebih dikenal dan ramai.{" "}
                <Button
                  variant={"link"}
                  className="text-custom-BlueOyster-Cult px-0  font-bold">
                  Baca Selengkapnya
                </Button>
              </p>
            </div>
            <ul className="flex flex-col  [&>li]:flex [&>li]:gap-x-2   [&>li]:my-2 [&>li]:text-sm [&>li]:items-center [&>li]:text-custom-Bright-Manatee">
              <li>
                <PhoneCall className="w-5 h-5" />
                <p>0812-3456-789</p>
              </li>
              <li>
                <MailCheck className="w-5 h-5" />
                <p>zidanindratama@travolks.com</p>
              </li>
              <li>
                <Locate className="w-5 h-5" />
                <p>Depok, Jawa Barat, Indonesia</p>
              </li>
              <li>
                <Printer className="w-5 h-5" />
                <p>+1-234-567-890</p>
              </li>
            </ul>
          </div>

          <div className="flex justify-between flex-col sm:flex-row [&>ul]:mx-2 [&>ul]:my-3 [&>ul]:gap-y-3  [&>ul]:flex [&>ul]:flex-col [&>ul]:items-start w-full md:w-2/5">
            <ul className="[&>li]:text-custom-Bright-Manatee [&>li]:text-sm  [&>li]:sm:text-base">
              <h1 className="text-custom-Fly-byNight font-bold text-base sm:text-lg">
                Tentang
              </h1>

              <li>AKMJ</li>
              <li>akmjwda</li>
              <li>lapon</li>
              <li>sepuh</li>
              <li>vuewdaa</li>
              <li>wangsaff</li>
            </ul>
            <ul className="[&>li]:text-custom-Bright-Manatee [&>li]:text-sm  [&>li]:sm:text-base">
              <h1 className="text-custom-Fly-byNight font-bold  text-base sm:text-lg">
                Support
              </h1>

              <li>AKMJ</li>
              <li>akmjdwadda</li>
              <li>lapon</li>
              <li>sepuhwdad</li>
              <li>vue</li>
              <li>wangsaff</li>
            </ul>
            <ul className="[&>li]:text-custom-Bright-Manatee [&>li]:text-sm  [&>li]:sm:text-base">
              <h1 className="text-custom-Fly-byNight font-bold  text-base sm:text-lg">
                FAQ
              </h1>

              <li>AKMJ</li>
              <li>akmj</li>
              <li>lapon</li>
              <li>sepuh</li>
              <li>vueaaaaaaaa</li>
              <li>wangsaff</li>
            </ul>
          </div>
        </section>

        <div className="flex justify-between gap-3 py-2 flex-col-reverse sm:flex-row items-center text-xs sm:text-sm">
          <p className="text-custom-Bright-Manatee">
            © 2022-2024, Allright Reserved
          </p>
          <ul className="flex  gap-x-5 flex-row text-custom-Bright-Manatee">
            <li>Privacy&Policy</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
