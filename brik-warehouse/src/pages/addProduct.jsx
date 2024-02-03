import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Layout from "../components/layout";
import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  number: z.string().min(1, { message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  weight: z.number().positive().min(1),
  price: z.number().positive().min(1),
  description: z.string().min(1).max(200, { message: "Required" }),
});

export default function AddProduct() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      number: "",
      category: "",
      weight: "",
      price: "",
      description: "",
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLogin(true);
    } else {
      navigate("/");
    }
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:2000/products/",
        data
      );
      if (response.status === 200 || response.status === 201) {
        alert("Data Berhasil ditambahkan");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
      navigate("/manageproduct");
    }
  };

  return (
    <div>
      <Layout>
        <div className="bg-blue-300 relative pt-10">
          <div className="flex justify-center">
            <p className="text-5xl font-semibold">Let's Add Some Products</p>
          </div>

          <div className="text-center mt-10 mb-10">
            <p>
              Welcome! Use this form to efficiently manage products in our
              warehouse. Please provide accurate product information to
              streamline stock management. <br /> Thank you for your cooperation
              in maintaining warehouse efficiency. Kindly complete the form
              below.
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <div className="w-1/2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input
                    label="Product Name"
                    placeholder="Product Name"
                    type="text"
                    name="name"
                    register={register}
                  />
                  {errors.name?.message && (
                    <span className="text-xs text-red-500 font-bold">
                      {errors.name?.message}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-10 mt-3">
                  <div>
                    <Input
                      label="Product Number"
                      placeholder="Product Number"
                      type="text"
                      name="number"
                      register={register}
                    />
                    {errors.number?.message && (
                      <span className="text-xs text-red-500 font-bold">
                        {errors.number?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="" className="font-medium">
                      Product Category
                    </label>
                    <div>
                      <select
                        name=""
                        id=""
                        className="select select-bordered w-full bg-white"
                        {...register("category")}
                      >
                        <option value="" disabled>
                          Select Option
                        </option>
                        <option value="food">Food</option>
                        <option value="fashion">Fashion Item</option>
                        <option value="electronic">Electronic</option>
                      </select>
                      {errors.category?.message && (
                        <span className="text-xs text-red-500 font-bold">
                          {errors.category?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-3 items-center">
                  <div>
                    <Input
                      label="Product Weight"
                      placeholder="Product Weight (g)"
                      type="number"
                      name="weight"
                      register={register}
                    />
                    {errors.weight?.message && (
                      <span className="text-xs text-red-500 font-bold">
                        {errors.weight?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      label="Product Price"
                      placeholder="Product Price"
                      type="number"
                      name="price"
                      register={register}
                    />
                    {errors.price?.message && (
                      <span className="text-xs text-red-500 font-bold">
                        {errors.price?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">Product Image</label>
                    <input
                      type="file"
                      className="file-input w-full border border-black bg-white shadow-xl"
                      name="image"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <textarea
                    className="textarea textarea-bordered border-black bg-white shadow-xl w-full h-52"
                    placeholder="Product Description"
                    {...register("description")}
                  />
                  {errors.description?.message && (
                    <span className="text-xs text-red-500 font-bold">
                      {errors.description?.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-center items-center gap-5 mt-5 mb-10">
                  <button className="btn btn-info" type="submit">
                    {isLoading ? (
                      <span className="loading loading-infinity loading-xs"></span>
                    ) : (
                      "Add Product"
                    )}
                  </button>
                </div>
              </form>
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
  );
}
