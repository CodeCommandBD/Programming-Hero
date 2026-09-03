const Navbar = () => {
  return (
    <div className="container mx-auto p-2 flex items-center justify-between border-b">
        <h2 className="font-bold text-2xl">LOGO</h2>
        <div>
            <ul className="flex items-center justify-center gap-5">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Store</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar