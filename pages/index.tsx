import type { GetServerSideProps, NextPage } from 'next'
import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {sanityClient, urlFor} from '../sanity'
import {Collection} from "../typings"

interface Props{
  collections : Collection[]
}

const Home = ({collections}: Props) => {

  //Auth
  const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

  return (
    <div className='mx-auto flex min-h-screen max-w-7xl flex-col pt-20 px-10 2xl:px-20 bg-gradient-to-br from-blue-900 to-black lg:col-span-4 lg:max-w-full  '>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header  className='flex items-center justify-between blur-0'>
      <h1 className='mb-10 text-4xl font-bold text-white'>
                    The{' '}
                    <span className='font-extrabold underline decoration-pink-500'> 
                    Very Best Web 3.0
                    </span>{' '}
                     NFT Market Place
                </h1>
                <button onClick={() =>  address ? disconnect() :  connectWithMetamask() } className='rounded-full bg-black shadow shadow-pink-500 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>{address ? 'Sign Out' : 'Sign In'}</button>
      </header>
      <p className='text-xl text-gray-300 pb-8'>Check our collections of newly arrived NFT ... more coming</p>
      
      <main className='bg-black p-10 rounded-xl  shadow-2xl shadow-rose-400/20 '>
        <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {collections.map(collection => (
            <Link href={`/nft/${collection.slug.current}`}>
            <div className='flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105'>
            <img className='h-96 w-60 rounded-2xl object-cover shadow-2xl shadow-rose-400/20 transition-all duration-200 hover:shadow-rose-600/70' src={urlFor(collection.mainImage).url()} alt="mainImage" />
            <div className='p-5'>
              <h2 className=' text-3xl font-bold text-white text-center'>{collection.title}</h2>
              <p className='mt-2 text-md text-center text-gray-400'>{collection.description}</p>
            </div>
          </div>
          </Link>
          ))}
        </div>
      </main> 
      <div className='flex justify-center items-baseline content-center my-10 py-5 bg-pink-500 bg-opacity-20 rounded-xl'>
        <p className='font-extrabold text-black '>MADE BY GAB</p>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
const query = `*[_type == "collection"]{
  _id,
  title,
  address,
  description,
  nftCollectionName,
  mainImage{
  asset
},
previewImage{
  asset
},
slug{
  current
},
creator->{
  _id,
  name,
  address,
  slug{
  current
},
},
}`

const collections = await sanityClient.fetch(query)
console.log(collections)
return{
  props:{
    collections
  }
}
}