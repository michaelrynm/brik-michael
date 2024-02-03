import React from "react";
import Input from "../components/input";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  product_name: z.string().min(1, { message: "Required" }),
  product_number: z.string().min(1, { message: "Required" }),
  product_category: z.string().min(1, { message: "Required" }),
  product_weight: z.number().positive().min(1),
  product_price: z.number().positive().min(1),
  product_description: z.string().min(1).max(200, { message: "Required" }),
});

export default function AddProduct() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      product_name: "",
      product_number: "",
      product_category: "",
      product_weight: "",
      product_price: "",
      product_description: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/product/",
        data
      );
      if (response.status === 200 || response.status === 201) {
        alert("Data Berhasil ditambahkan");
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
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
                    name="product_name"
                    register={register}
                  />
                  {errors.product_name?.message && (
                    <span className="text-xs text-red-500 font-bold">
                      {errors.product_name?.message}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-10 mt-3">
                  <div>
                    <Input
                      label="Product Number"
                      placeholder="Product Number"
                      type="text"
                      name="product_number"
                      register={register}
                    />
                    {errors.product_number?.message && (
                      <span className="text-xs text-red-500 font-bold">
                        {errors.product_number?.message}
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
                        {...register("product_category")}
                      >
                        <option value="" disabled>
                          Select Option
                        </option>
                        <option value="food">Food</option>
                        <option value="fashion">Fashion Item</option>
                        <option value="electronic">Electronic</option>
                      </select>
                      {errors.product_category?.message && (
                        <span className="text-xs text-red-500 font-bold">
                          {errors.product_category?.message}
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
                      name="product_weight"
                      register={register}
                    />
                    {errors.product_weight?.message && (
                      <span className="text-xs text-red-500 font-bold">
                        {errors.product_weight?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      label="Product Price"
                      placeholder="Product Price"
                      type="number"
                      name="product_price"
                      register={register}
                    />
                    {errors.product_price?.message && (
                      <span className="text-xs text-red-500 font-bold">
                        {errors.product_price?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">Product Image</label>
                    <input
                      type="file"
                      className="file-input w-full border border-black bg-white shadow-xl"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <textarea
                    className="textarea textarea-bordered border-black bg-white shadow-xl w-full h-52"
                    placeholder="Product Description"
                    {...register("product_description")}
                  />
                  {errors.product_description?.message && (
                    <span className="text-xs text-red-500 font-bold">
                      {errors.product_description?.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-center items-center gap-5 mt-5 mb-10">
                  <button className="btn btn-info" type="submit">
                    Add Product
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
