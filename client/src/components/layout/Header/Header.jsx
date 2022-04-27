import { Fragment, useState } from "react";
import { FaSearch, FaCartPlus, FaUserCircle } from "react-icons/fa";
// import { MdMenu } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import UserOptions from "./Navbar/UserLinks/UserOptions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {/* <Navbar /> */}

      <nav className="navbar">
        <div className="logoContainer">
          <Link to="/">
            ShowBazi<span>Store</span>
          </Link>
        </div>

        <div className="pagesContainer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* about page will be added here.... in future */}
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </div>

        <div className=" userContainer">
          <ul>
            <li>
              <Link to="/search">
                <FaSearch className="icon" />
                <span className="iconTooltip iconTooltipOne">Search</span>
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <FaCartPlus className="icon" />
                <span className="iconTooltip iconTooltipTwo">Cart</span>
              </Link>
            </li>

            <li className="loginListItem">
              {user ? (
                <UserOptions user={user} style={{ zIndex: "10" }} />
              ) : (
                <Link to="/login">
                  <FaUserCircle className="icon" />
                  <span className="iconTooltip iconTooltipThree">Login</span>
                </Link>
              )}
            </li>

            <li className="hamburgerContainer">
              <div>
                <BiDotsVerticalRounded
                  className="icon"
                  onClick={() => setIsOpen(!isOpen)}
                />

                <div
                  className="hamburgerMenu"
                  style={{ display: isOpen ? "flex" : "none" }}
                >
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    {/* <li>
                      <Link to="/about">About</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
