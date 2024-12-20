
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {

    return (
        <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Hero3.jpg')` }}>
        <div className="text-center text-white">
            <h1 className="text-6xl font-bold drop-shadow-lg">BELGIAN RIDE SERVICES</h1>
            <p className="mt-4 text-2xl italic drop-shadow-lg">Something related to the company that still need to be filled</p>
            <Link href="/booking">
            <Button className="mt-6 px-28 py-8 bg-yellow-300 text-black text-2xl font-bold rounded-lg shadow-lg hover:bg-yellow-500">
          BOOK YOUR RIDE
        </Button>
        </Link>
      </div>
    </section>
    )
}
export default Hero;