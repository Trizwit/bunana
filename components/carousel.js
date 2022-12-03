 
 
 function Carousel() {

   
    return <div className="flex justify-center py-4 bg-gradient-to-tr from-[#2EADC500] to-[#2EADC558]/40">
     
      
      {/* <h1 className="block"> Hello</h1>   */}
     
     
<div className="relative z-30 scale-75 rounded-t-[32px] shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-1/2 max-h-1/6 ">
      <a href="#!">
        <div className= "relative">
         
        <img className="object-cover h-72 w-full rounded-t-[32px]" src="pbd.jpg" alt=""/>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-[#2EADC5]">
            <img className="flex justify-center w-10 h-10" src="heart.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Prabhu Deva</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 hover:bg-[#2EADC5] ">Follow</button>
        <p className="text-white text-base font-bold mb-4">
        @pdv_bunana
        </p>
       
      </div>
    </div>
    
       
    <div className="relative z-40 rounded-t-[32px] shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-1/2 max-h-1/6">
      <a href="#!">
        <div className= "relative">
        <img className="object-cover h-72 w-full rounded-t-[32px]" src="rvs.jpg" alt=""/>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-[#2EADC5]">
            <img className="flex justify-center w-10 h-10" src="heart.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Ranveer Singh</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 hover:bg-[#2EADC5]">Follow</button>
        <p className="text-white text-base font-bold mb-4">
         @rvs_bunana
        </p>
       
      </div>
    </div>

    <div className="relative z-30 scale-75 rounded-t-[32px] shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-1/2 max-h-1/6 ">
      <a href="#!">
        <div className= "relative">
         
        <img className="object-cover h-72 w-full rounded-t-[32px]" src="pcp.jpg" alt=""/>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-[#2EADC5]">
            <img className="flex justify-center w-10 h-10" src="heart.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Priyanka Chopra</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 hover:bg-[#2EADC5] ">Follow</button>
        <p className="text-white text-base font-bold mb-4">
        @pcp_bunana
        </p>
       
      </div>
    </div>
  </div>
    
 }
 

 export default Carousel;