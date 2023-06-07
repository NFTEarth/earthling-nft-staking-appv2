import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>NFTEarth Staking Rewards Program</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.svg" alt="drop" width={128} height={128} />
          <h2 className={styles.selectBoxTitle}>Need an Earthling NFT? Click here to open the mint page.</h2>
          <p className={styles.selectBoxDescription}>
            Mint an Earthling - HERE
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.svg" alt="token" width={128} height={128} />
          <h2 className={styles.selectBoxTitle}>Stake Your Earthling NFT</h2>
          <p className={styles.selectBoxDescription}>
            Stake your Earthling NFT for juicy NFTE rewards to enjoy the start of NFTFi summer on Arbitrum Layer2 network.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
