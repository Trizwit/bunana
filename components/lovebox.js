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
        <button className="fixed right-64 top-80  bg-transparent text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-12 h-12">
                      <img
                        className="flex justify-center w-8 h-8"
                        src="heart1.svg"
                        alt="like"
                      />
                      <h6 className="text-xl text-white pt-2">{value}</h6>
                    </button>
     
     </>
  
     );
    
 
 
 
 }

export default LoveBox;