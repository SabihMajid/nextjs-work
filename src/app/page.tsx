import Link from "next/link";

 function Home() {
 let FirstName = "Sabih";
  return (
  <div className="">
   <Link href="/about" className="text-yellow-300">About</Link>  
   <br />
   <Link href="/contact" >Contact</Link>  
   <h1>Assalam-u-Allaikum</h1>
  </div>
  );
}

export default Home
