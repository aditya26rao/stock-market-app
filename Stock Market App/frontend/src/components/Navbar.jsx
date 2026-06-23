import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 xl:px-48 py-5 border-b border-gray-200">
        <img src={logo} alt="Zerodha Logo" className="w-32 cursor-pointer" />

        <ul className="hidden md:flex items-center gap-10 text-gray-700 text-[15px]">
          <li className="cursor-pointer hover:text-blue-500">Signup</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Products</li>
          <li className="cursor-pointer hover:text-blue-500">Pricing</li>
          <li className="cursor-pointer hover:text-blue-500">Support</li>
        </ul>

        <button className="md:hidden text-2xl cursor-pointer">
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;