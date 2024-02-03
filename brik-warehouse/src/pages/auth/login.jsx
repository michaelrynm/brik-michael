import React from "react";
import Input from "../../components/input";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const dummyUser = {
      username: "user",
      password: "user",
    };
    localStorage.setItem("dummyUser", JSON.stringify(dummyUser));

    if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/manageproduct");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-blue-300">
        <form action="" onSubmit={handleLogin}>
          <div className="w-96 py-10 px-10 bg-white rounded-xl">
            <div className="mb-7 flex justify-between">
              <div>
                <p className="font-semibold text-xl">Welcome Back!</p>
                <p className="font-semibold text-2xl">Login to your accout</p>
              </div>
              <div>
                <Link to={"/"}>
                  <div className="flex items-center text-gray-500">
                    <p className="text-right">Home</p>
                    <IoIosArrowForward />
                  </div>
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none border border-gray-400"
                />
                <label htmlFor="" className="text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <p className="text-xs text-gray-500">Forgot your password?</p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="btn btn-wide">Sign In</button>
            </div>
          </div>
          <div class="custom-shape-divider-bottom-1706722326">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}
