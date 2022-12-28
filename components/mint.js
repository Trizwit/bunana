
import React, { useState,useEffect,useRef} from "react";
import ReactPlayer from "react-player";
import { useCreateAsset, useLivepeerProvider, Player } from "@livepeer/react";

import Router from "next/router";
import Web3Modal from "web3modal";
import { providers, Contract, utils } from "ethers";
import { CHILD_PARENT_ADDRESS, abiChild } from "../constants";


function Exploreall() {

  const [walletConnected, setWalletConnected] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  // numberOfWhitelisted tracks the number of addresses's whitelisted
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
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



  /*
    connectWallet: Connects the MetaMask wallet
  */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  const mint = async (currentchildaddress) => {
    try {
      const signer = await getProviderOrSigner(true);
      const childContract = new Contract(
        currentchildaddress,
        abiChild,
        signer
      );
      const temp = await childContract.safeMint({
        // value signifies the cost of one crypto dev which is "0.01" eth.
        // We are parsing `0.01` string to ether using the utils library from ethers.js
        value: utils.parseEther("0.00015"),
      });
      console.log("RETURN");
      console.log(temp);
    } catch (err) {
      console.error(err);
    }
  };


  const [update, setupdate] = useState([]);
  useEffect(() => {
    console.log("lets start");
    fetch("https://testnet.tableland.network/query?s=SELECT%20*%20FROM%20bunana_5_1304")
      .then((response) => response.text())
      .then((data) => {
        var temp = JSON.parse(data);
        setupdate(temp);
      });
  }, []);

  
  return (
    <section className="text-gray-600 body-font ">
      <div className="container  px-32 py-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-1">
          <div className="p-2 lg:w-full md:w-full">
            <div className="py-12">
              <h1 className="font-bold text-3xl text-[#FFFFFF]">Mint NFTs Of Popular Videos</h1>
            </div>

            <div className=" grid grid-cols-3 gap-32 bg-[#2EADC51A] rounded-[24px]">
              {/* card1 start */}
              {update.map((dObj) => (
                <div
                  key={dObj.id}
                  className="relative z-40 rounded-[32px] shadow-md shadow-[#2EADC5]/50 hover:shadow-[#2EADC5] bg-[#152022] max-w-sm md:w-58 max-h-1/6 hover:scale-105 transition duration-300 ease-in-out"
                >
                  <a href="#!">
                    <div className="relative flex justify-center  bg-white rounded-[32px]">
                      <div className="h-72 bg-transparent rounded-t-[32px]">
                      <Player
                            playbackId={dObj.cid}
                            autoPlay={true}
                            loop
                            muted={true}
                            showTitle={false}
                            aspectRatio="4to6"
                            width="30%"
                            controls={{
                            autohide:10,
                            }
                          }
                          />
                      </div>
                    </div>
                  </a>
                  <div className="p-2 relative">
                    <h5 className="text-white text-2xl font-extrabold mb-2">
                      {dObj.title}
                    </h5>
                    <button class="absolute top-3 right-2 bg-[#152022] text-white p-2 rounded-[12px] border-2 border-[#2EADC5]/50 w-32 "
                    onClick={()=>{mint(dObj.address)}}
                    >
                      0.25 ETH
                    </button>
                    <p className="text-white text-base font-bold mb-4">
                      {/* by Biker */}
                    </p>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exploreall;
