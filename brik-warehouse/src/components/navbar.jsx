import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = (e) => {
    setIsLogin(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-900 px-24 py-5 text-white uppercase">
        <div>
          <p className="font-bold text-xl">Warehouse</p>
        </div>
        <div className="flex gap-28 items-center">
          {isLogin ? (
            <div className="flex gap-10">
              <Link to={"/manageproduct"}>
                <p>Manage Product</p>
              </Link>
            </div>
          ) : (
            <div className="flex gap-10">
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <Link to={"/"}>
                <p>About</p>
              </Link>
            </div>
          )}

          <div>
            {isLogin ? (
              <div>
                <button
                  className="btn btn-wide bg-cyan-800 p-2 border-none text-white"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <Link to={"/login"}>
                  <button className="btn btn-wide bg-cyan-800 p-2 border-none text-white">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
