import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-[#FFFFFF] shadow-md h-14">
      <div className="flex justify-between items-center mx-12">
        <Link to="/">
          {/* <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Elite</span>
            <span className="text-slate-700">EstatesHub</span>
          </h1> */}
          <img
            src="https://www.longandfoster.com/images/Uploads/RECos/35009/ContentFiles/lf-logo.png"
            alt=""
            width={"200px"}
            height={"200px"}
          />
        </Link>
        {/* <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form> */}
        <ul className="flex gap-8 font-semibold text-black max-w-6xl p-3">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">HOME</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline  hover:underline ">ABOUT</li>
          </Link>
          <Link to="/search">
            <li className="hidden sm:inline  hover:underline ">SEARCH</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="  hover:underline"> SIGN IN</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
