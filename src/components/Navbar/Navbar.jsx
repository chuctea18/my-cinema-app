import { useRef, useEffect, useCallback, useState } from "react";
import { MenuItems } from "./MenuItem";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [offset, setOffset] = useState(false);

  const handleScroll = useCallback(() => {
    const yPos = window.scrollY;
    console.log(yPos);
    if (yPos < 10) {
      setOffset(false);
      handleNav("");
      handleLogo("");
    } else {
      setOffset(true);
      handleNav("move-top");
      handleLogo("logo-transform");
    }
  }, []);

  const initEvent = useCallback(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    initEvent();
  }, [initEvent]);

  const handleNav = (className) => {
    const refDiv = navRef.current;
    if (!refDiv) return;
    refDiv.className = `navbar-items ${className}`;
  };

  const handleLogo = (className) => {
    const refDiv = logoRef.current;
    if (!refDiv) return;
    refDiv.className = `navbar-logo ${className}`;
  };

  return (
    <div>
      <nav ref={navRef} className="navbar-items">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <h1 ref={logoRef}
                className="navbar-logo"> Lotto Cinema</h1>
              {/* <img
                ref={logoRef}
                className="navbar-logo"
                src={`${process.env.PUBLIC_URL}/a1.svg`}
                alt="logo"
              /> */}
            </div>
            <div className="col-9">
              <div className="d-flex justify-content-end my-3">
                <form className="d-flex">
                  <input
                    style={{ width: "400px" }}
                    className="form-control me-2 input-cinema"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <svg
                    fill="#fff"
                    className="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                  </svg>
                </form>
                <button className="btn btn-cinema mx-2">đăng nhập</button>
                <button className="btn btn-cinema mx-2">đăng ký</button>

              </div>
              <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        <span>{item.icon}</span>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
