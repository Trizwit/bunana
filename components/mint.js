// import React, { useState } from "react";
// import { details } from "../data/details";
// import ReactPlayer from 'react-player'
// import Image from "next/image";


// function Mint() {
//   const [data, setData] = useState(details);

//   return (
//     <section className="text-gray-600 body-font h-full">
//       <div className="container  px-32 py-5 mx-auto flex flex-row min-h-screen justify-center items-center overflow-auto">
//         <div className="flex flex-wrap ">
//           <div className="p-2 lg:w-full md:w-full">
//             <div className="py-12">
//               <h1 className="font-bold text-3xl text-[#FFFFFF]">
//                 Explore by Category
//               </h1>
//             </div>

  
          
 
            
//             <div className="grid grid-cols-1 gap-32 bg-[#2EADC51A] rounded-[24px]  ">
              
//               {data.map((dObj) => (
//                 <div
//                   key={dObj.id}
//                   className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-80 md:w-58 max-h-1/4 hover:scale-105 transition duration-300 ease-in-out"
//                 >
//                   <a href="#!">
//                     <div className="relative">
//                       <div className="h-84 bg-transparent rounded-t-[36px] ">
//                       <div className= "">
//                       <h2 className="text-2xl text-[#2BA3BA] font-bold pt-2 pl-2 animate-pulse">Bunana</h2>
//                       <ReactPlayer 
//                       width="100%"
//                       url={dObj.img}
                      
//                     />
//                       </div>
                       
//                       </div>
//                       <button className="absolute top-2 right-2 bg-transparent text-white p-2 rounded-[12px] hover:bg-transparent">
//                         <img
//                           className="flex justify-center w-10 h-10"
//                           src="Logo.svg"
//                           alt=""
//                         />
                        
//                       </button>
//                     </div>
//                   </a>
//                   <div className=" text-white p-2 relative ">
//                     <h5 className="text-2xl font-extrabold mb-2">
//                       {dObj.title}
//                     </h5>
//                     <button className="absolute top-16 right-2 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
//                       <img 
//                       className="flex justify-center w-8 h-8"
//                       src="tipicon.png"
//                       alt="TIP"
//                       />
//                     </button>
                   
//                     <button className="absolute top-16 left-2 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
//                       <img 
//                       className="flex justify-center w-8 h-8"
//                       src="comment.png"
//                       alt="Comment"
//                       />
//                       <h4 className="text-l font-bold pt-2">{dObj.comm}</h4>
//                     </button>
//                     <button className="absolute top-16 left-20 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
//                       <img 
//                       className="flex justify-center w-8 h-8"
//                       src="share.png"
//                       alt="Share"
//                       />
                      
//                     </button>

//                     <button className="absolute top-16 right-20 bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
//                       <img 
//                       className="flex justify-center w-8 h-8"
//                       src="heart1.svg"
//                       alt="Like"
//                       />
//                        <h4 className="text-l font-bold pt-2">{dObj.like}</h4>
//                     </button>
//                   </div>
//                 </div>
//               ))}

//               {/* card end */}

//               {/* card2  start */}

//               {/* card end */}

//               {/* card3 start */}

//               {/* card end */}

//               {/* card4 start */}

//               {/* card end */}

//               {/* card5 start */}
//               {/* card end */}

//               {/* card6 start */}
//               {/* card end */}

//               {/* card7 start */}

//               {/* card end */}

//               {/* card8 start */}

//               {/* card end */}

//               {/* card9 start */}

//               {/* card end */}

//               {/* card10 star */}
              
//               {/* card end */}

//               {/* card11 start */}
              
//               {/* card end */}

//               {/* card12 start */}
              
//               {/* card end */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Mint;
 import React, { useState } from "react";
 
import { details } from "../data/details";
function Exploreall(){
  const [data, setData] = useState(details);
    return <section className="text-gray-600 body-font ">
    <div className="container  px-32 py-5 mx-auto flex flex-wrap">
<div className="flex flex-wrap -m-1">
<div className="p-2 lg:w-full md:w-full">
  <div className="py-12">
      <h1 className="font-bold text-3xl text-[#FFFFFF]">Mint NFTs</h1>
  </div>
  
  <div className=" grid grid-cols-3 gap-32 bg-[#2EADC51A] rounded-[24px]">
      {/* card1 start */}
      {data.map((dObj) => (
      <div key={dObj.id} 
      className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out">
      <a href="#!">
        <div className= "relative flex justify-center  bg-white rounded-[32px]">
        <div className="h-72 bg-transparent rounded-t-[32px]">
        <img className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out" src={dObj.img} alt="NFT1"/>
        </div>
        
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-transparent">
            <img className="flex justify-center w-10 h-10" src="heart1.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">{dObj.title}</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32 ">0.25   ETH</button>
        <p className="text-white text-base font-bold mb-4">
         by Biker
        </p>
       
      </div>
    </div>
      ))}
   {/* card end */}


   {/* card2  start */}
   <div className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out">
      <a href="#!">
        <div className= "relative  ">
          <div className="h-72 bg-transparent rounded-t-[32px] ">
        <img className="object-cover h-72 w-full rounded-t-[32px] hover:scale-105 transition duration-300 ease-in-out" src="nft2.svg" alt=""/>
        </div>
        <button class="absolute top-2 right-2 bg-[#152022] text-white p-2 rounded-[12px] hover:bg-transparent">
            <img className="flex justify-center w-10 h-10" src="heart1.svg" alt=""fav/>
        </button>
        </div>
      </a>
      <div className="p-2 relative">
        <h5 className="text-white text-2xl font-extrabold mb-2">Fancy Boy</h5>
        <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32">0.25   ETH</button>
        <p className="text-white text-base font-bold mb-4">
         by Biker
        </p>
       
      </div>
    </div>
   {/* card end */}


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

}


export default Exploreall;