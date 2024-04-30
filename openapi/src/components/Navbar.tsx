import { useAuth } from "react-oidc-context";

const Navbar = () => {
  const auth = useAuth();

  return (
    <div className="absolute flex bg-white h-[60px] border-b-[1px] border-gray-200 border-opacity-50 justify-between overflow-hidden top-0 w-screen z-50">
      {/* front */}
      <div className="flex"></div>
      {/* back */}
      <div className="flex justify-between items-center mr-5 lg:text-[12px]">
        <ul className="flex flex-row font-Roboto text-center  h-[30px] space-x-5">
          <li
            className="bg-green-500   text-white rounded-full w-[100px] align-middle pt-1"
            onClick={() => {
              auth.signinRedirect();
            }}
          >
            Login
          </li>
          <li className="bg-blue-100  text-black  rounded-full w-[100px] align-middle pt-1">
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
