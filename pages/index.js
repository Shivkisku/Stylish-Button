import Head from 'next/head'
import ExploreButton from '../components/ExploreButton'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Head>
        <title>Stylish Button</title>
        <meta name="description" content="Explore Button Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <ExploreButton />
      </main>
    </div>
  )
}
