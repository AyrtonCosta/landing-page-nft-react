import Head from "next/head";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { NFTCard } from "../components/NFTcard";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const filteredNfts = useMemo(() => {
    return nfts.filter((nft) =>
      search
        ? nft.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        : true
    );
  }, [search, nfts]);

  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>Buy and Sell NFT</title>
      </Head>
      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24 text-[#fff]">Discover</h2>
        <input
          placeholder="Search item"
          className="h-12 w-64 p-4 rounded-xl"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7  mt-12">
        <h2 className="text-5xl font-bold text-[#fff]">Popular Bid</h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {filteredNfts.map((nft) => (
            <NFTCard nft={nft} key={nft.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const nfts = [
  {
    id: "1",
    name: "#4473",
    price: "0.1",
    author: "0xE51B77159",
    image:
      "https://ipfs.io/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ",
    description: "descrição do nft",
  },
  {
    id: "2",
    name: "#4474",
    price: "0.1",
    author: "0xE51B77159",
    image:
      "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
    description: "descrição do nft",
  },
  {
    id: "3",
    name: "#4475",
    price: "0.1",
    author: "0xE51B77159",
    image:
      "https://ipfs.io/ipfs/QmXEqPbvM4aq1SQSXN8DSuEcSo5SseYW1izYQbsGB8yn9x",
    description: "descrição do nft",
  },
  {
    id: "4",
    name: "#4476",
    price: "0.1",
    author: "0xE51B77159",
    image:
      "https://ipfs.io/ipfs/QmNPMwby9PXVcDMTKH1Sc6aJRAU7WdZGomXme934r6xykH",
    description: "descrição do nft",
  },
];
