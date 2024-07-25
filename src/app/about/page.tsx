import Link from "next/link"

function page  ()  {
  return (
    <div>
        <div>
        <Link href="/" >Home</Link>  
        <br />
        <Link href="/contact" >Contact</Link>  
        </div>
            <h1>Hello about</h1>          
            <h1>about me</h1>          
    </div>
  )
}

export default page