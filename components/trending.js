function Trending(){
    return <section className="text-center text-gray-600 body-font py-16">
         <div className="container  px-32 py-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-1">
           <div className="p-2 lg:w-full md:w-full">
           <div className=" py-16 ">
            <h1 className="font-bold text-3xl text-[#FFFFFF]">TO GET STARTED..</h1>
        </div>

        {/* col start */}
        <div className="flex justify-center mx-auto grid grid-cols-3 gap-24 md:gap-36">

        <div className="flex justify-center flex-col  h-72 bg-transparent border-2    shadow border-[#2EADC5] rounded-[30px]  ">
        <div className="grid grid-row-2 gap-3 flex">
            <div className="bg-transparent justify-center flex-row w-80 h-52 rounded-[28px]">
                <div className="flex justify-center bg-white shadow-lg shadow-[#2EADC5] w-44 h-44 rounded-full mx-auto">
                    <img src="crypto1.svg" className="flex justify-center mx-auto w-44 h-44"/>
                </div>
          {/* <h2 className="flex  justify-center text-2xl text-[#f8fafc] font-semibold">Artwork </h2> */}
          </div>
          <div className="bg-transparent justify-center flex-row mb-16">
             <p className="flex justify-center text-[#FFFFFF] text-xl text-center font-normal mx-auto">Connect your wallet<br/> with BunanA</p>
             </div>
             </div>
             <a></a>
         </div>

         <div className="flex justify-center flex-col  h-72 bg-transparent border-2    shadow border-[#2EADC5] rounded-[30px]  ">
        <div className="grid grid-row-2 gap-3 flex">
            <div className="bg-transparent justify-center flex-row w-80 h-52 rounded-[28px]">
                <div className="flex justify-center bg-white shadow-lg shadow-[#2EADC5] w-44 h-44 rounded-full mx-auto">
                    <img src="tr2.svg" className="flex justify-center mx-auto w-44 h-44"/>
                </div>
          {/* <h2 className="flex  justify-center text-2xl text-[#f8fafc] font-semibold">Artwork </h2> */}
          </div>
          <div className="bg-transparent justify-center flex-row mb-16">
             <p className="flex justify-center text-[#FFFFFF] text-xl text-center font-normal mx-auto">Own NFTs of <br/>your fav creators</p>
             </div>
             </div>
             <a></a>
         </div>


         <div className="flex justify-center flex-col  h-72 bg-transparent border-2    shadow border-[#2EADC5] rounded-[30px]  ">
        <div className="grid grid-row-2 gap-3 flex">
            <div className="bg-transparent justify-center flex-row w-80 h-52 rounded-[28px]">
                <div className="flex items-center bg-white shadow-lg shadow-[#2EADC5] w-44 h-44 rounded-full mx-auto">
                    <img src="tr3.svg" className="flex justify-center mx-auto w-44 h-44 "/>
                </div>
          {/* <h2 className="flex  justify-center text-2xl text-[#f8fafc] font-semibold">Artwork </h2> */}
          </div>
          <div className="bg-transparent justify-center flex-row mb-16">
             <p className="flex justify-center text-[#FFFFFF] text-xl text-center font-normal mx-auto">Watch contents<br/>hassle free!</p>
             </div>
             </div>
             <a></a>
         </div>
       
            </div>
            
         

            </div>
            </div>
         </div>
         <h1 className="font-bold text-3xl text-[#FFFFFF] pt-4">
            Featured Stars for you         </h1>
    </section>
}

export default Trending;