import { Inter } from "next/font/google";
import {Header} from '../components/Header'
import { HomeSection } from '../components/Home'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
      <div className="max-w-[1380px]"> 
    <Header/>
    <HomeSection/>
    </div>
    </main>
  );
}
