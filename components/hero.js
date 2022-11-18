

function Hero(){
    return <section className="bg-transparent">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Discover some of the BEST NFTs here at Trizwit</h1>
            {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
            <a href="#" className="inline-flex items-center justify-center mt-3 px-7 py-2 text-base bg-transparent font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[#2BA3BA] dark:hover:bg-[#2BA3BA] dark:focus:ring-gray-800">
               Get Started
            </a> 
            <a href="#" className="inline-flex items-center justify-center ml-3 px-7 py-2 text-base bg-transparent font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[#2BA3BA] dark:hover:bg-[#2BA3BA] dark:focus:ring-gray-800">
                Know More
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="hero1.svg" alt="mockup"/>
        </div>  
       </div>

       
  <div className="container  px-32 py-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-1">
      <div className="p-2 lg:w-full md:w-full">
        <div className="flex border-2 rounded-lg border-[#2EADC5] border-opacity-50 px-24 py-16 sm:flex-row flex-col">
        <div className=" grid grid-cols-3 gap-6 divide-x divide-[#2EADC5]">
         <div className="flex justify-center flex-col w-52 ">
          <h2 className="flex  justify-center text-2xl text-[#f8fafc] font-semibold">Artwork </h2>
        
             <p className=" flex  justify-center text-[#f8fafc] text-5xl font-semibold  py-16"> 25k+</p>
          
          
         </div>
       
          <div className="flex justify-center flex-col  ">
          <h2 className="flex  justify-center text-2xl text-[#f8fafc] font-semibold ">Auction</h2>
        
             <p className="flex  justify-center text-[#f8fafc] text-5xl font-semibold  py-16">10k+</p>         
    </div>
          <div className="flex justify-center flex-col ">
          <h2 className="flex  justify-center text-2xl text-[#f8fafc] font-semibold">Artist</h2>
        
        <p className="flex  justify-center text-[#f8fafc] text-5xl font-semibold  py-16">40k+</p>
          </div>
         </div>


          
          <div className=" w-96 h-48 sm:ml-16 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-transparent text-indigo-500 flex-shrink-0">
           <img src="colg.svg" alt="collage"/>
          </div>
         
 
        </div>
      </div>
      
    </div>
  </div>
 


</section>

}


export default Hero;