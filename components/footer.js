function Footer(){
    return <footer className="text-gray-600 body-font pt-16">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-gradient-to-r from-[#2EADC540]/25 to-[#2EADC500] rounded-t-[36px] border-[#2EADC5] border-2">
      <div className="w-74 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left bg-transparent">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <span className="ml-3 font-bold text-xl text-white">Get Updates</span>
        </a>
        <p className="ml-3 mt-2 text-lg font-normal text-white">Join our mailing list to get updates four latest
          feature <br/> releases. NFT drops, and tips and tricks for navigating Trizwit.
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:ml-64 md:pl-20  md:mt-0 mt-4 md:text-left text-center flex-row ">
      <div className="grid grid-col-1 gap-4 place-content-center  md:h-48">
       <div> 
      <h2 className=" font-bold text-white  text-xl  ">Join the Community</h2>
      </div>
      <div className="grid grid-cols-7 gap-4"> 
      <div className="bg-red-300 w-12 h-12 rounded-[10px] bg-gradient-to-tr from-[#2991A4] to-[#152022]">
      <a href="#">
        <img src="twitter.svg" className="w-12 h-12"/>
        </a>
      </div>
      <div className="bg-red-300 w-12 h-12 rounded-[10px] bg-gradient-to-tr from-[#2991A4] to-[#152022]">
      <a href="#">
        <img src="insta.svg" className="w-12 h-12"/>
        </a>
      </div>
      
      <div className="bg-red-300 w-12 h-12 rounded-[10px] bg-gradient-to-tr from-[#2991A4] to-[#152022]">
      <a href="#">
        <img src="discord.svg" className="w-12 h-12"/>
        </a>
      </div>

      <div className="bg-red-300 w-12 h-12 rounded-[10px] bg-gradient-to-tr from-[#2991A4] to-[#152022]">
      <a href="#">
        <img src="telegram.svg" className="w-12 h-12"/>
        </a>
      </div>

      <div className="bg-red-300 w-12 h-12 rounded-[10px] bg-gradient-to-tr from-[#2991A4] to-[#152022]">
      <a href="#">
        <img src="yt.svg" className="w-12 h-12"/>
        </a>
      </div>

      

      

      </div>
     </div> 
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start bg-red-300">
         
        </div>
        
        
        
      </div>
    </div>
    <div className="bg-[#152022]">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left text-[#2EADC5] ">© 2022 Trizwit.Inc
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"></a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          
        <p className="text-gray-500 text-sm text-center sm:text-left text-[#2EADC5] mr-6">Privacy Terms
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"></a>
        </p>
        
        <p className="text-gray-500 text-sm text-center sm:text-left text-[#2EADC5] ">Terms of Service
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"></a>
        </p> 
          
        </span>
      </div>
    </div>
  </footer>
}


export default Footer;