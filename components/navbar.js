import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Exploreall from "./exploreall";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";

export default function NavBar() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change network to Goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    window.alert("Press ok to Connect Wallet");
    if (walletConnected == true) {
      alert("Wallet already connected");
    }
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
    }
  }, [walletConnected]);

  return (
    <nav className="container sticky top-o z-50  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center backdrop-blur-sm md:backdrop-blur-lg ">
      <div className="flex justify-start  lg:max-w-full md:items-center ">
        <div>
          <div className="flex items-center justify-between px-16 py-3 md:py-5 md:block ">
            <div className="inline-flex">
              <img
                src="Logo.svg"
                alt=""
                className="self-center  rounded-full mx-2"
              />
              <Link href="/">
                <h2 className="text-2xl text-[#2BA3BA] font-bold">Bunana.</h2>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-center  ">
          <div
            className={`flex-1 justify-self-center px-16 py-4 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-16 md:space-y-0">
              <li className="text-white hover:text-[#2BA3BA] ">
                <Link href="explore">Explore</Link>
              </li>
              <li className="text-white hover:text-[#2BA3BA]">
                <a href="#">Stats</a>
              </li>
              <li className="text-white hover:text-[#2BA3BA]">
                <a href="#">Resources</a>
              </li>
              <li className="text-white hover:text-[#2BA3BA]">
                <Link href="create">Create</Link>
              </li>
            </ul>
          </div>
          <div className="container mx-auto  h-12  px-8 py-2 ">
            <input
              className="mb-4 border-2 inline py-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#1E545D] focus:ring-gray-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search arts, music..."
              id="name"
              name="name"
              type="search"
              required
            />
          </div>
          <div className="basis-1/2  ml-2 h-12   pt-3 px-1 ">
            <button
              className=" bg-[#2BA3BA] h-8 px-2 pb-1 text-white rounded-[6px] hover:bg-transparent hover:text-[#2BA3BA] hover:shadow-xl"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          </div>
          <div className="basis-1/6   ml-32  h-12 ">
            <button className="rounded-full ">
              <img
                className="object-contain h-10 w-10 mt-2"
                src="cartn.svg"
                alt="add to cart"
              />
            </button>
          </div>
          <div className="container mx-auto  ml-4 w-36 h-12 ">
            <button className="rounded-full ">
              <img
                className="object-contain h-10 w-10 mt-2"
                src="profile.svg"
                alt="profile"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
