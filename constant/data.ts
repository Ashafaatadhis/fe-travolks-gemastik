import Lapon from "@/public/Lapon.png.jpg"
import type {StaticImageData} from "next/image"
type DataTesti = {
  img: StaticImageData;
  review: string;
  reviewer: string;
  job: string;
}
type DataQuestion = {
  question: string;
  answer: string;
}

export const dataTesti: DataTesti[] = [
  {
    img:Lapon,
    review: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    reviewer: "Sandhika Galih",
    job: "Dosen di WPU",
  },
  {
    img:Lapon,
    review: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    reviewer: "Sandhika Galih",
    job: "Dosen di WPU",
  },
  {
    img:Lapon,
    review: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    reviewer: "Sandhika Galih",
    job: "Dosen di WPU",
  },
]

export const dataQuestion: DataQuestion[] = [
  {
    question: "Bagaimana cara menggunakan Destinize?",
    answer: "Destinize membandawtu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah"
  },
  
  {
    question: "Bagaimana cara menggunakan Destinize?",
    answer: "Destinize memdabantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah"
  },
  
  {
    question: "Bagaimana cara menggunakan Destinize?",
    answer: "Destinize membdawantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah"
  },
  
]