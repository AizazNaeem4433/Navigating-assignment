import Head from 'next/head';
import Link from 'next/link';

function NamePage() {
  return (
    <div>
      <Head>
        <title>Name Page</title>
      </Head>
      <h1>Welcome to the name page!</h1>
      <p><Link href="/">Go back to the homepage</Link></p>
    </div>
  );
}

export default NamePage;