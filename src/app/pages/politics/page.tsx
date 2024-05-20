import { Inter } from "next/font/google";
import { Lato } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const Politics = () => {
  return (
    <div className="bg-[#030026] min-h-screen pt-12 flex flex-col items-center justify-start">
      <h1
        className={`${inter.className} bg-gradient-to-t from-[#009dff] to-[#00f2ff] font-extrabold text-5xl bg-clip-text text-transparent text-center`}
      >
        Politics and Religion
      </h1>
      <main>
        <h2
          style={{
            color: "white",
            textShadow: "0 0 10px white",
            transition: "textShadow 0.3s ease-in-out",
          }}
          className="text-white font-bold text-3xl text-center mt-12 mb-8"
        >
          Political Spectrum:{" "}
        </h2>

        <svg
          id="wave"
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(0, 157, 255, 1)" offset="0%"></stop>
              <stop stop-color="rgba(0, 242, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,30L12,30C24,30,48,30,72,26.7C96,23,120,17,144,20C168,23,192,37,216,48.3C240,60,264,70,288,73.3C312,77,336,73,360,70C384,67,408,63,432,53.3C456,43,480,27,504,16.7C528,7,552,3,576,11.7C600,20,624,40,648,53.3C672,67,696,73,720,78.3C744,83,768,87,792,76.7C816,67,840,43,864,30C888,17,912,13,936,18.3C960,23,984,37,1008,43.3C1032,50,1056,50,1080,50C1104,50,1128,50,1152,41.7C1176,33,1200,17,1224,13.3C1248,10,1272,20,1296,25C1320,30,1344,30,1368,33.3C1392,37,1416,43,1440,40C1464,37,1488,23,1512,28.3C1536,33,1560,57,1584,70C1608,83,1632,87,1656,88.3C1680,90,1704,90,1716,90L1728,90L1728,100L1716,100C1704,100,1680,100,1656,100C1632,100,1608,100,1584,100C1560,100,1536,100,1512,100C1488,100,1464,100,1440,100C1416,100,1392,100,1368,100C1344,100,1320,100,1296,100C1272,100,1248,100,1224,100C1200,100,1176,100,1152,100C1128,100,1104,100,1080,100C1056,100,1032,100,1008,100C984,100,960,100,936,100C912,100,888,100,864,100C840,100,816,100,792,100C768,100,744,100,720,100C696,100,672,100,648,100C624,100,600,100,576,100C552,100,528,100,504,100C480,100,456,100,432,100C408,100,384,100,360,100C336,100,312,100,288,100C264,100,240,100,216,100C192,100,168,100,144,100C120,100,96,100,72,100C48,100,24,100,12,100L0,100Z"
          ></path>
        </svg>

        <div
          className={`${lato.className} bg-gradient-to-b from-[#009dff] to-[#00f2ff] text-white px-auto w-screen flex align-top justify-center`}
        >
          <ul className="timeline text-white pb-24">
            <li>
              <div className="timeline-start font-bold">Far-Left</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box  bg-white">
                <ul className="text-[#030026]">
                  <li>Anarcho-Communism</li>
                  <li>Left Libertarianism</li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-bold">Left Wing</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-white">
                <ul className="text-[#030026]">
                  <li>Democratic Socialism</li>
                  <li>Social Democracy</li>
                  <li>Social freedom</li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-bold">Center Left</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-white">
                <ul className="text-[#030026]">
                  <li>Social Liberalism</li>
                  <li>Social Freedom</li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-bold">Center-Right</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end bg-white timeline-box">
                <ul className="text-[#030026]">
                  <li>Economic Liberalism</li>
                  <li>Economic Freedom</li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-bold">Right Wing</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end bg-white timeline-box">
                <ul className="text-[#030026]">
                  <li>Neo-conservatism</li>
                  <li>Economic Liberalism</li>
                  <li>Social Conservatism</li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-bold">Far-Right</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end bg-white timeline-box">
                <ul className="text-[#030026]">
                  <li>Neo-fascism</li>
                  <li>Neo-nazism</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Politics;
