"use client"

import Hero from '../src/components/Hero/Hero';
import CallToAction from '../src/components/CallToAction/CallToAction.js';
import About from '../src/components/About/About.jsx';
import SmothScroll from '../src/components/SmothScroll/SmothScroll.jsx';
import Description from '../src/components/Description/Description.jsx';
import Head from 'next/head.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bored Ape - A Different Stake.</title>
        <meta name="Bored Ape" content="Landing page about out NFT." />
        <link rel="icon" href="/Media/Images/apeCoin.webp" />
      </Head>
      <SmothScroll>
        <Hero />
        <Description text="Bored Ape NFT and ApeCoin give you access, exclusivity, influence, and rewards on Web3." />
        <CallToAction />
        <About />
        <Description text="So what are you waiting for? <br/>Start investing with <br/>&apos;BORED APE&apos;." textBtn="START NOW" variant/>
      </SmothScroll>
    </>
  )
}
