const Navbar = () => {
  return (
    <div className="absolute flex bg-white h-16 border-b-[1px] border-gray-200 border-opacity-50 justify-between overflow-hidden top-0 w-screen">
      {/* front */}
      <div className="flex items-center m-5"></div>
      {/* back */}
      <div className="flex ">
        <ul className="flex flex-row">
          <li className="bg-green-500 font-Roboto  text-white m-5 px-5 rounded-full">
            Login
          </li>
          <li className="bg-blue-100 font-Roboto  text-black m-5 px-5  rounded-full">
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  ); 
};
export default Navbar;
