import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MdOutlineLogout } from "react-icons/md";
import toast from "react-hot-toast";
import useUserDetails from "../../custom Hooks/useUserDetails";
import Loading from "../../components/Loading";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const { loadedUser, isLoading } = useUserDetails();

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logged out successfully", { duration: 3000 });
  };

  if (isLoading) {
    return <Loading />;
  }

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-primary px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-primary px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-primary px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/productManagement"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-primary px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Products Management
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer px-2 py-2 md:px-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current text-[#033955]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 px-2 flex-1 ml-8 md:ml-40 lg:ml-0">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-[230px] md:w-[270px] lg:w-[180px] xl:w-[220px]"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden flex-none px-3 lg:flex gap-6">
                <ul className="flex gap-6 text-primary font-semibold">
                  {/* Navbar menu content here */}
                  {links}
                </ul>
              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                {user ? (
                  <div className="flex items-center gap-3">
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full object-cover">
                          <img src={loadedUser[0].image} alt="Avatar" />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content rounded-box w-60 bg-white"
                      >
                        <li>
                          <a className="text-lg font-medium hover:bg-[#D60C0C] hover:text-white">
                            <CgProfile className="text-lg mr-1" />{" "}
                            {loadedUser[0].name}
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={handleLogOut}
                            className="text-lg font-medium hover:bg-[#D60C0C] hover:text-white"
                          >
                            <MdOutlineLogout className="text-lg mr-1" /> Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Link to="/login">
                      <button className="px-4 py-3 text-white bg-primary rounded-lg btn-custom font-bold">
                        Sign In
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="bg-white outline outline-2 text-primary px-4 py-3 btn-custom-two rounded-lg font-bold">
                        Start for Free
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="min-h-full w-80 p-4 bg-base-200">
            <div className="flex gap-2 justify-center items-center mb-6">
              <CgMenuGridO className="text-[#033955] text-3xl" />
              <h1 className="text-center text-2xl text-[#033955]">Menus</h1>
            </div>
            <ul className="menu text-[#033955] font-medium text-lg">
              {/* Sidebar content here */}
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
