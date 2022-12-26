import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player'

 function LoveBox({onMount}){
    const[value,SetValue]=useState(0);
    useEffect(()=>{
     onMount([value,SetValue]);
    },[onMount,value]);
   return(
     <>
       <button className="fixed right-20 top-90  bg-transparent text-white ">
         {/* rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12 */}
              <img
                // className="flex justify-center w-13 h-13"
                src="heartup.gif"
                alt="like"
                width="300"
                height="200"
              />
              {/* <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=BQwj6A99oVc' /> */}
              <h1 className="text-lg pt-2">
               {value}
              </h1>
            </button>
     
     </>
  
     );
    
 
 
 
 }

export default LoveBox;