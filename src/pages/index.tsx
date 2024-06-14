import { Inter } from "next/font/google";
import { HomeSection } from '../components/Home'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
      <div className="w-[1380px]"> 
    <HomeSection/>
    </div>
    </main>
  );
}
