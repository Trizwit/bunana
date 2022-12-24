import Router from "next/router";
import Web3Modal from "web3modal";
import { providers, Contract, utils } from "ethers";
import { CONTRACT_PARENT_ADDRESS, abiContract } from "../constants";
import { CHILD_PARENT_ADDRESS, abiChild } from "../constants";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useCreateAsset, useLivepeerProvider, Player } from "@livepeer/react";
import React, { useState, useRef, useEffect } from "react";
import { data } from "autoprefixer";

function CreateHero() {
  const [walletConnected, setWalletConnected] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  // numberOfWhitelisted tracks the number of addresses's whitelisted
  const web3ModalRef = useRef();

  const [videoFile, setVideoFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInput = useRef(null);
 // const [name, setName] = useState("");
 // const [description, setDescription] = useState("");
  const description=useRef("");
  const name=useRef("");
  const [category, setCategory] = useState("MUS");
  const [supply, setSupply] = useState(1);

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

  const createcollection = async (Description, Nftname, Nftsymbol) => {
    try {
      const signer = await getProviderOrSigner(true);
      const parentContract = new Contract(
        CONTRACT_PARENT_ADDRESS,
        abiContract,
        signer
      );
      const temp = await parentContract.createcollection(
        lastassetid,
        Nftname,
        Nftsymbol,
        Description,
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png"
      );
      console.log("RETURN");
      console.log(temp);
    } catch (err) {
      console.error(err);
    }
  };

  //web3///////////////////
  const livepeerProvider = useLivepeerProvider();
  const [video, setVideo] = useState(null);
  var lastassetid = "";
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset({
    sources: [
      {
        name: "video",
        file: video,
      },
    ],
  });


  const onNameChange = (event) => {
    const { value } = event.target.value;
    name.current=value;
    // setName(value);
  };
  const onDescriptionChange = (event) => {
    const { value } = event.target.value;
    description.current=value;
    // setDescription(value);
  };

  const uploadVideo = async () => {
    // Calling the createAsset function from the useCreateAsset hook to upload the video
    console.log("creating asset");
    createAsset?.();
  };
  // When a user clicks on the upload button
  // When a user clicks on the upload button
  const handleSubmit = async () => {
    // Calling the upload video function
    await uploadVideo();
  };
  useEffect(() => {
    console.log("status");
    console.log(status);
    if (status == "success") {
      console.log("completed video upload asset id:");
      console.log(lastassetid);
      if (lastassetid) {
        console.log(description.current);
        console.log(name.current);
        createcollection(description.current, name.current, "CI");
      }
    }
  }, [status]);

  return (
    <>
      {/* //////////athul/////// */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-start items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-16 font-medium text-[#2EADC5]">
            Create New Reel
          </h1>

          <div className="w-full md:w-2/3 flex flex-col mb-16 items-left text-left">
            <form
              className="flex flex-col"
              onSubmit={(event) => {
                // event.preventDefault();
                // createBunana(previewUrl);
              }}
            >
              <div className="flex">
                <div>
                  <label
                    htmlFor="formFile"
                    className="form-label inline-block mb-2 text-[#2EADC5] "
                  >
                    Upload Video to be posted
                  </label>
                  <h6 className="text-white py-2">
                    File types supported: JPG, PNG
                  </h6>
                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-transparent bg-clip-padding  border-solid border-gray-300 rounded transition ease-in-out m-0
                      focus:text-[#2EADC5] focus:bg-transparent focus:border-[#2EADC5] focus:outline-none"
                    type="file"
                    id="formFile"
                    ref={fileInput}
                    accept="video/*"
                    onChange={(e) => {
                      const file = e.target.files[0];

                      if (!file) {
                        return;
                      }

                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreviewUrl(reader.result);
                      };
                      reader.readAsDataURL(file);

                      if (e.target.files) {
                        setVideo(e.target.files[0]);
                      }
                    }}
                  />
                </div>
                <div
                  id="imagePreview"
                  className="container h-[640px] w-[360px] rounded-sm bg-slate-700 border-slate-400  "
                >
                  {previewUrl ? (
                    <video
                      controls
                      src={previewUrl}
                      className="h-[640px] w-[360px]"
                    ></video>
                  ) : (
                    <div className="mx-auto ">
                      <p className="text-center my-16">No files selected</p>
                    </div>
                  )}
                </div>
              </div>

              <label
                htmlFor="name"
                className="form-label inline-block mb-2 text-[#2EADC5] pt-4"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  "
                placeholder="Item name"
                value={name.current}
                onChange={onNameChange}
                required
              />

              <label
                htmlFor="descr"
                className="form-label inline-block mb-2 text-[#2EADC5] pt-4"
              >
                Description
              </label>
              <p className="text-white ">
                The description will be included on the item's detail page
                underneath its image.{" "}
              </p>
              <input
                type="text"
                id="descr"
                className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  "
                placeholder="Provide a detailed description of your item"
                value={description.current}
                onChange={onDescriptionChange}
                required
              />

              <label
                htmlFor="coll"
                className="form-label inline-block mb-2 text-[#2EADC5] pt-4"
              >
                Collection
              </label>
              <p className="text-white ">
                The description will be included on the item's detail page
                underneath its image.{" "}
              </p>
              <select
                id="col"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-[#2EADC5] dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white "
                // onChange={onCategoryChange}
                value={category}
              >
                <option value="MUS">Music</option>
                <option value="ART">Comedy</option>
                <option value="DAN">Dance</option>
                <option value="LIP">Lip Sync</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>

              <label
                htmlFor="supply"
                className="form-label inline-block mb-2 text-[#2EADC5] pt-4"
              >
                Supply
              </label>
              <p className="text-white ">
                The number of items that can be minted. No gas cost to you!{" "}
              </p>
              <input
                type="text"
                id="supply"
                className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  "
                placeholder="1"
                value={supply}
                // onChange={onSupplyChange}
                required
              />

              <div className="flex w-full justify-center items-end my-4">
                {/* <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div> */}
                <button
                  className="inline-flex text-white bg-[#2EADC5] border-2 border-[#2EADC5] py-2 px-6 focus:outline-none hover:bg-transparent hover:border-[#2EADC5] rounded text-lg"
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Upload
                  {/* {loading ? "Loading" : "Upload"} */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ///////////////////athyl end */}
      {assets?.map((asset) => (
        <div key={asset.id}>
          <div>
            <div>Asset Name: {asset?.name}</div>
            <div>Playbackid:{asset?.playbackId}</div>
            <div>Playback URL: {asset?.playbackUrl}</div>
            <div>IPFS CID: {asset?.storage?.ipfs?.cid ?? "None"}</div>
            {(lastassetid = asset?.playbackId)}
          </div>
        </div>
      ))}
      {error && <div>{error.message}</div>}
      status:{status}
    </>
  );
}

export default CreateHero;
