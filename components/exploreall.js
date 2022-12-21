import React, { useState, useEffect } from "react";
import { details } from "../data/details";
import ReactPlayer from "react-player";
import { useCreateAsset, useLivepeerProvider, Player } from "@livepeer/react";

function Exploreall() {
  const [update, setupdate] = useState([]);

  const playbackId =
    "5013zil3ezqjhxbm";
  const livepeerProvider = useLivepeerProvider();

  useEffect(() => {
    console.log("lets start");
    fetch("https://api.npoint.io/c23b6f72ea47792deaa3")
      .then((response) => response.text())
      .then((data) => {
        var temp = JSON.parse(data);
        setupdate(temp);
      });
  }, []);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container  px-32 py-5 mx-auto flex flex-row min-h-screen justify-center items-center">
        <div className="flex flex-wrap -m-1">
          <div className="p-2 lg:w-full md:w-full">
            <div className="py-12">
              <h1 className="font-bold text-3xl text-[#FFFFFF]">
                Explore by Category
              </h1>
            </div>

            {/* <Player
              title="Waterfalls"
              playbackId={playbackId}
              showPipButton
              showTitle={false}
              aspectRatio="16to9"
              controls={{
                autohide: 3000,
              }}
              theme={{
                borderStyles: { containerBorderStyle: "hidden" },
                radii: { containerBorderRadius: "10px" },
              }}
            /> */}

            {/* <div className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-64 md:w-58 max-h-72 hover:scale-105 transition duration-300 ease-in-out mb-32">
                <a href="#!">
                  <div className="relative">
                    <div className="h-72 bg-transparent rounded-t-[32px]">
                     
                      <div className= "">
                      <h2 className="text-white pt-2">Bunana</h2>
                      <ReactPlayer 
                      width="100%"
                      url='https://youtube.com/shorts/5c-zJNG8TOQ?feature=share'
                      
                    />
                      </div>
                    </div>
                    <button className="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-transparent">
                      <img
                        className="flex justify-center w-10 h-10"
                        src="heart1.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </a>
                <div className="p-2 relative">
                  <h5 className="text-white text-2xl font-extrabold mb-2">
                    Fancy Boy
                  </h5>
                  <button className="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-24">
                    TIP
                  </button>
                  <p className="text-white text-base font-bold mb-4">
                    by Biker
                  </p>
                </div>
              </div> */}

            <div className=" grid grid-cols-1 gap-32 bg-[#2EADC51A] rounded-[24px]  ">
              {/* card1 start */}
              {update.map((dObj) => (
                <div
                  key={dObj.id}
                  className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-80 md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out"
                >
                  <a href="#!">
                    <div className="relative">
                      <div className="h-96 bg-transparent rounded-t-[32px] ">
                        <div className="">
                          <h2 className="text-2xl text-[#2BA3BA] font-bold pt-2 pl-2 animate-pulse">
                            Bunana
                          </h2>
                          {/* <ReactPlayer width="100%" url={dObj.img} /> */}
                          <button className="absolute top-2 right-2 bg-transparent text-white p-2 rounded-[12px] hover:bg-transparent">
                        <img
                          className="flex justify-center w-10 h-10"
                          src="Logo.svg"
                          alt=""
                        />
                      </button>
                          <div className="container mt-4 pb-2  w-80 h-96 overflow-hidden rounded-[24px] ">
                          <Player
                            playbackId={playbackId}
                            showPipButton
                            showTitle={false}
                            aspectRatio="4to6"
                            width="30%"
                            controls={{
                            autohide: 3000,
                            }}
                          />
                          </div>


                        </div>
                        {/* <img
                          className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out"
                          src={dObj.img}
                          alt=""
                        /> */}
                      </div>
                     
                    </div>
                  </a>
                  <div className=" text-white p-2 relative ">
                    <h5 className="text-2xl font-extrabold mb-2">Title</h5>
                    <button className="absolute top-12 right-2 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
                      <img
                        className="flex justify-center w-8 h-8"
                        src="tipicon.png"
                        alt="TIP"
                      />
                    </button>

                    <button className="absolute top-12 left-2 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
                      <img
                        className="flex justify-center w-8 h-8"
                        src="comment.png"
                        alt="Comment"
                      />
                    </button>
                    <button className="absolute top-12 left-20 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
                      <img
                        className="flex justify-center w-8 h-8"
                        src="share.png"
                        alt="Comment"
                      />
                    </button>

                    <button className="absolute top-12 right-20 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
                      <img
                        className="flex justify-center w-8 h-8"
                        src="heart1.svg"
                        alt="Comment"
                      />
                    </button>
                  </div>
                </div>
              ))}

              {/* card end */}

              {/* card2  start */}

              {/* card end */}

              {/* card3 start */}

              {/* card end */}

              {/* card4 start */}

              {/* card end */}

              {/* card5 start */}
              {/* card end */}

              {/* card6 start */}
              {/* card end */}

              {/* card7 start */}

              {/* card end */}

              {/* card8 start */}

              {/* card end */}

              {/* card9 start */}

              {/* card end */}

              {/* card10 star */}

              {/* card end */}

              {/* card11 start */}

              {/* card end */}

              {/* card12 start */}

              {/* card end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exploreall;
