import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Input from "../components/input";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function DetailProduct({ product }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    category: "",
    weight: "",
    description: "",
    price: "",
  });


  async function getDetail() {
    try {
      const response = await axios.get(`http://localhost:2000/products/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLogin(true);
    } else {
      navigate("/");
    }
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/product/${id}`,
        formData
      );
      if (response.status === 200 || response.status === 201) {
        alert("Data berhasil di update");
      }
    } catch (error) {
      console.log("Eror", error);
    } finally {
      navigate("/manageproduct");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Layout>
          <div className="bg-blue-300 relative pt-10">
            <div className="flex justify-center mb-10">
              <p className="text-5xl font-semibold">Product Details</p>
            </div>

            <div className="flex justify-center">
              <div className="bg-slate-100 relative z-10 rounded-3xl p-10 w-3/4 flex items-center justify-around shadow-xl">
                <div className="flex justify-center">
                  <img
                    src="https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b"
                    alt=""
                    className="w-3/4"
                  />
                </div>
                <div className="w-1/2 border border-gray-600 rounded-xl shadow-xl p-10">
                  <div className="flex justify-between items-center">
                    <div className="mb-3">
                      <p className="font-medium text-2xl">Make Some Changes</p>
                    </div>
                    <div>
                      <Link to={"/manageproduct"}>
                        <div className="flex items-center text-gray-500">
                          <p className="text-right">Back</p>
                          <IoIosArrowForward />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <form action="" onSubmit={handleFormSubmit}>
                    <div>
                      <div>
                        <Input
                          label="Product Name"
                          placeholder="Product Name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                      <div>
                        <Input
                          label="Product Number"
                          placeholder="Product Number"
                          name="number"
                          type="text"
                          value={formData.number}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="font-medium">
                          Product Category
                        </label>
                        <select
                          name="category"
                          id=""
                          className="select select-bordered w-full max-w-xs bg-white"
                          onChange={handleInputChange}
                          value={formData.category}
                        >
                          <option disabled>Select Option</option>
                          <option value="food">Food</option>
                          <option value="fashion">Fashion Item</option>
                          <option value="electronic">Electronic</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 mt-3 items-center">
                      <div>
                        <Input
                          label="Product Weight"
                          placeholder="Product Weight (g)"
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="Product Price"
                          placeholder="Product Price"
                          type="number"
                          name="price"
                          onChange={handleInputChange}
                          value={formData.price}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Product Image</label>
                        <input
                          type="file"
                          className="file-input w-full bg-white shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <textarea
                        className="textarea bg-white shadow-xl w-full h-52"
                        placeholder="Product Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex justify-center mt-10 mb-10">
                      <button
                        type="submit"
                        className="btn btn-wide bg-blue-600 text-white"
                      >
                        {isLoading ? (
                          <span className="loading loading-infinity loading-xs"></span>
                        ) : (
                          "Edit Product"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
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
          </div>
        </Layout>
      </div>
    </div>
  );
}
