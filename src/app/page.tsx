import './globals.css';
import Bubble from './components/Bubble';
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{ backgroundColor: "#030026" }}
    >
      <main className="flex flex-col items-center justify-center flex-1">
        <h1
          className={`${lato.className} font-extrabold text-8xl bg-clip-text text-transparent text-center animate-text bg-gradient-to-r from-[#DBFF00] to-[#00FF47] p-4 rounded-lg`}
        >
          Theory of Knowledge
        </h1>
        <Bubble />
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full"
      >
        <path
          fill="#00FF47"
          fillOpacity="1"
          d="M0,32L21.8,48C43.6,64,87,96,131,117.3C174.5,139,218,149,262,154.7C305.5,160,349,160,393,144C436.4,128,480,96,524,106.7C567.3,117,611,171,655,202.7C698.2,235,742,245,785,245.3C829.1,245,873,235,916,224C960,213,1004,203,1047,213.3C1090.9,224,1135,256,1178,245.3C1221.8,235,1265,181,1309,149.3C1352.7,117,1396,107,1418,101.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
