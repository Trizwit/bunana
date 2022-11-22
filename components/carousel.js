 
 
 function Carousel() {

   
    return <div className="flex justify-center py-16 bg-[#2EADC5]/10">
     <div className="inline-flex bg-red-200 w-auto h-10">
      <h1 className=""> Hello</h1>
     </div>
<div className="relative z-30 scale-75 rounded-lg shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-1/2 max-h-1/6">
      <a href="#!">
        <div className= "relative">
         
        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-blue-800">
            <img className="flex justify-center w-10 h-10" src="heart.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Fancy Boy</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 ">0.25   ETH</button>
        <p className="text-white text-base font-bold mb-4">
         by Biker
        </p>
       
      </div>
    </div>
    
       
    <div className="relative z-40 rounded-lg shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-1/2 max-h-1/6">
      <a href="#!">
        <div className= "relative">
        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-blue-800">
            <img className="flex justify-center w-10 h-10" src="heart.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Fancy Boy</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 ">0.25   ETH</button>
        <p className="text-white text-base font-bold mb-4">
         by Biker
        </p>
       
      </div>
    </div>

    <div className="relative z-30 scale-75 rounded-lg shadow-md shadow-[#2EADC5]/50 bg-[#152022] max-w-sm md:w-1/2 max-h-1/6">
      <a href="#!">
        <div className= "relative">
        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-blue-800">
            <img className="flex justify-center w-10 h-10" src="heart.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Fancy Boy</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 ">0.25   ETH</button>
        <p className="text-white text-base font-bold mb-4">
         by Biker
        </p>
       
      </div>
    </div>
  </div>
    
 }
 

 export default Carousel;