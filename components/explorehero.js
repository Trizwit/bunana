function Explorehero(){
    return <div className="container w-full h-48 bg-transparent sticky top-0 z-50 ">

    <div className="grid grid-row-2 gap-4  bg-[#152022] sticky">
     <div>   
    <h1 className="mx-8 text-white font-bold text-2xl">Explore @rvs_bunana Collections</h1>
    </div>
    <div className="mx-8 mt-12  h-24 rounded-t-[12px] bg-gradient-to-b from-[#2EADC5] to-[#2EADC500]">
        {/* category */}
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-16 mt-4">
        <a href="#">
       <div className="  my-2 mx-8 w-32 h-8 bg-[#152022] rounded-[12px] text-center flex items-center justify-center">
        
        <h1 className="text-white hover:text-[#2EADC5]  text-base font-normal ">Category</h1>
        
       </div>
       </a>

       <a href="#">
       <div className="my-2  absolute lg:right-56  w-32 h-8 bg-[#152022] rounded-[12px] text-center flex items-center justify-center">
        <img src="bitcoin.svg" className="pr-2 left-0"/>
        <h1 className="text-white hover:text-[#2EADC5]  text-base font-normal ">All Chains</h1>
       </div>
       </a>

       <a href="#">
       <div className="absolute right-16  my-2  w-32 h-8 bg-[#152022] rounded-[12px] text-center flex items-center justify-center">
       
       <img src="clk.svg" className="pr-2 left-0"/>
        <h1 className="text-white  hover:text-[#2EADC5] text-base font-normal ">24 hours</h1>
       
       </div>
       </a>
       
     </div>
     
    
     <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-2 mt-4 bg-[#152022]">
        <a href="#">
       <div className="  my-2 mx-8 w-32 h-8 bg-transparent  text-center flex items-center justify-center">
        
        <h1 className="text-white hover:text-[#2EADC5]  text-base font-normal ">All</h1>
        
       </div>
       </a>

       <a href="#">
       <div className="my-2  w-32 h-8 bg-transparent  text-center flex items-center justify-center">
        
        <h1 className="text-white hover:text-[#2EADC5]  text-base font-normal ">Top</h1>
       </div>
       </a>

       <a href="#">
       <div className="  my-2  w-32 h-8 bg-transparent text-center flex items-center justify-center">
       
       
        <h1 className="text-white  hover:text-[#2EADC5] text-base font-normal ">Trending</h1>
       
       </div>
       </a>
       
     </div>

     

    </div>
    

    

    </div> 
    </div>
}

export default Explorehero;