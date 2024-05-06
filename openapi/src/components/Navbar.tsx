import { useAuth } from "react-oidc-context";

const Navbar = () => {
  const auth = useAuth();
  const handleSignOutClicked = () => {
    console.log("Sign out now");
  };

  return (
    <div className="flex absolute bg-white h-[60px] border-b-[1px] border-gray-200 border-opacity-50 justify-between overflow-hidden top-0 w-screen z-50">
      {/* front */}
      <div className="flex"></div>
      {/* back */}
      <div className="flex justify-between items-center mr-5 text-[1.5vh]">
        <ul className="flex flex-row font-Roboto text-center  h-[30px] space-x-5">
          <div className="signoutbtn">
          <li onClick={handleSignOutClicked}  className="bg-blue-100  text-black  rounded-full w-[100px] align-middle pt-1">
            <p>Sign Out</p>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
