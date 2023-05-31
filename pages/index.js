
import Folowcontainer from '@/components/Folowcontainer'
import Footer from '@/components/Footer'
import Healthcontainer from '@/components/Healthcontainer'
import Hero from '@/components/Hero'
import Joincontainer from '@/components/Joincontainer'
import Listyoga from '@/components/Listyoga'
import Rountinecontainer from '@/components/Rountinecontainer'

export default function Home() {
  return (
   <div>
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
