import Layout from '@/components/layout';
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>빡코딩 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
    </Layout>
  );
}
