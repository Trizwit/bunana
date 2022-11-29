import Link from "next/link";
function Footer(){
    return <footer className="text-gray-600 body-font pt-4 ">
    
    <div className="bg-[#152022] h-12">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left text-cyan-500">© 2022 Trizwit.Inc
          <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          
        <p className="text-gray-500 text-sm text-center sm:text-left text-cyan-500 mr-6">Privacy Policy
          <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></Link>
        </p>
        
        <p className="text-gray-500 text-sm text-center sm:text-left text-cyan-500 ">Terms of Service

          <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></Link>
        </p> 
          
        </span>
      </div>
    </div>
  </footer>
}


export default Footer;