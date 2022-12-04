import React, { useState } from "react";
import { details } from "../data/details";
import { connect } from "@tableland/sdk";

function Exploreall() {
  const [data, setData] = useState(details);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container  px-32 py-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-1">
          <div className="p-2 lg:w-full md:w-full">
            <div className="py-12">
              <h1 className="font-bold text-3xl text-[#FFFFFF]">
                Explore by Category
              </h1>
            </div>

            <div className=" grid grid-cols-3 gap-14 bg-[#2EADC51A] rounded-[24px]">
              {/* card1 start */}
              {data.map((dObj) => (
                <div
                  key={dObj.id}
                  className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out"
                >
                  <a href="#!">
                    <div className="relative  ">
                      <div className="h-72 bg-transparent rounded-t-[32px] ">
                        <img
                          className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out"
                          src={dObj.img}
                          alt=""
                        />
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
                    <button className="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32">
                      0.25 ETH
                    </button>
                    <p className="text-white text-base font-bold mb-4">
                      {dObj.sub}
                    </p>
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

              {/* card10 start */}
              <div className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out">
                <a href="#!">
                  <div className="relative  ">
                    <div className="h-72 bg-transparent rounded-t-[32px] ">
                      <img
                        className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out"
                        src="nft10.svg"
                        alt=""
                      />
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
                  <button className="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32">
                    0.25 ETH
                  </button>
                  <p className="text-white text-base font-bold mb-4">
                    by Biker
                  </p>
                </div>
              </div>
              {/* card end */}

              {/* card11 start */}
              <div className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out">
                <a href="#!">
                  <div className="relative  ">
                    <div className="h-72 bg-transparent rounded-t-[32px] ">
                      <img
                        className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out"
                        src="nft11.svg"
                        alt=""
                      />
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
                  <button className="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32">
                    0.25 ETH
                  </button>
                  <p className="text-white text-base font-bold mb-4">
                    by Biker
                  </p>
                </div>
              </div>
              {/* card end */}

              {/* card12 start */}
              <div className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out">
                <a href="#!">
                  <div className="relative ">
                    <div className="h-72 bg-transparent rounded-t-[32px]">
                      <img
                        className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out"
                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                        alt=""
                      />
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
                  <button className="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32">
                    0.25 ETH
                  </button>
                  <p className="text-white text-base font-bold mb-4">
                    by Biker
                  </p>
                </div>
              </div>
              {/* card end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exploreall;
