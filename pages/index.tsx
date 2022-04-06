import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-br from-cyan-600 to-blue-900 h-screen'>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' flex justify-between items-center p-5 bg-black bg-opacity-25' >
      <h1 className='text-white text-4xl font-bold'>Welcome to the NFT Drop challenge</h1>
      <button className='p-2 bg-slate-50 rounded-xl font-bold text-cyan-600 shadow-xl '>Sign in</button>
      </div>
      <div className='flex justify-center items-center mt-40  '>
      <div className='p-5'>
        <h2 className='text-5xl font-bold text-white pb-5'>Our Current NFT Drop</h2>
        <p className='text-3xl font-bold text-white'>More Coming soon ...</p>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <a className='p-5 m-5 bg-neutral-900 rounded-xl shadow-xl' href="./nft/NFTDropPage"><img className='w-60 h-80 object-cover pb-10' src="https://links.papareact.com/bdy" alt="" /></a>
          <a className='p-5 m-5 bg-neutral-900 rounded-xl shadow-xl' href=""><img className='w-60 h-80 object-cover pb-10' src="https://imgs.search.brave.com/f2XVtiL_VOq-5XjG-aDo8ycwYsd4i7RJNN2HIeNVH9g/rs:fit:768:758:1/g:ce/aHR0cHM6Ly9qb2V0/aGVib3JlZGFwZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDcvQVBFNEFQ/RS03Njh4NzU4Lmpw/Zw" alt="" /></a>
          <a className='p-5 m-5 bg-neutral-900 rounded-xl shadow-xl' href=""><img className='w-60 h-80 object-cover pb-10' src="https://imgs.search.brave.com/hoV7XqIgHt4a0_HJuSMMyHxVZ6Q4bjtZj3oM1Y9wF4Y/rs:fit:1050:550:1/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIx/LzAzLzExL2FydHMv/MTFuZnQtZXhwbGFp/bi0xLzExbmZ0LWV4/cGxhaW4tMS1mYWNl/Ym9va0p1bWJvLmpw/Zw" alt="" /></a>
          <a className='p-5 m-5 bg-neutral-900 rounded-xl shadow-xl' href=""><img className='w-60 h-80 object-cover pb-10' src="https://imgs.search.brave.com/qUDJ3Wk3iGmb_tiZPyb0FxiOOSQI_DGVZdR08wUYFAA/rs:fit:768:842:1/g:ce/aHR0cHM6Ly93d3cu/Z29kdGFpbC5qcC93/cC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNi9FWjJDRE40/VThBRXlKWEstNzY4/eDg0Mi5qcGVn" alt="" /></a>
        </div>
        
      </div>
      </div>
     
    </div>
  )
}

export default Home
