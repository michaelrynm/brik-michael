import React, { useEffect, useState } from "react";
import Table from "../components/table";
import axios from "axios";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";

export default function ManageProduct() {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLogin(true);
    } else {
      navigate("/");
    }
  });

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/product"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Product Name",
      accessorKey: "product_name",
    },
    {
      header: "Product Number",
      accessorKey: "product_number",
    },
    {
      header: "Product Category",
      accessorKey: "product_category",
    },
    {
      header: "Product Weight",
      accessorKey: "product_weight",
    },
    {
      header: "Product Price",
      accessorKey: "product_price",
    },
    {
      header: "Product Description",
      accessorKey: "product_description",
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Link to={`/detailproduct/${row.original.id}`}>
            <button className="btn btn-sm bg-yellow-400 text-white">
              Details
            </button>
          </Link>
          <button
            className="btn btn-sm bg-red-500 text-white"
            onClick={() => handleDelete(row)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  async function handleDelete(row) {
    try {
      const response = await axios.delete(
        `https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/product/${row.original.id}`
      );
      if (response.status === 200) {
        alert("Data berhasil dihapus")
        fetchData();
      } else {
        console.log("Error Delete Data");
      }
    } catch (error) {
      console.log(Error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-blue-300 relative pt-10">
        <div className="mx-24">
          <p className="text-3xl font-semibold">Check Your Product Below!</p>
          <p className="font-medium text-lg">
            In case you need a change, <br />
            just click the button
          </p>
        </div>
        <div className="flex justify-center">
          {isLoading ? (
            <span className="loading loading-infinity w-44"></span>
          ) : (
            <div className="mt-10 w-3/4 bg-white shadow-2xl rounded-2xl relative z-10 py-10">
              <Table data={data} columns={columns} />
            </div>
          )}
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
    </>
  );
}
