import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
  return (
    <div className=" flex justify-center items-center">
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className='p-28 flex-justify items-center '>Welcome to the homepage!</h1>
      <p className='p-10 flex-justify items-center '><Link href="/name" className='font-bold bg-green-700'>Go to the name page</Link></p>
    </div>
  );
}

export default HomePage;