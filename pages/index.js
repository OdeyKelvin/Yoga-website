
import Folowcontainer from '@/components/Folowcontainer'
import Footer from '@/components/Footer'
import Healthcontainer from '@/components/Healthcontainer'
import Hero from '@/components/Hero'
import Joincontainer from '@/components/Joincontainer'
import Listyoga from '@/components/Listyoga'
import Rountinecontainer from '@/components/Rountinecontainer'
import Head from 'next/head'

export default function Home() {
  return (
   <div>
     <Head>
        <title>Yoga Arena</title>
        <meta name="description" content="Yoga Arena" />
        <link rel="icon" href="/daylight.png" />
      </Head>
    <Hero/>
    <Listyoga/>
    <Healthcontainer/>
    <Rountinecontainer/> 
    <Folowcontainer/>
    <Joincontainer/>
     <Footer/>
   </div>
  )
}
