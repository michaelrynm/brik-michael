import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Input from "./input";
import { Link } from "react-router-dom";

export default function Table({ data, columns }) {
  // const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [page, setPage] = useState(0);

  // const data = useMemo(() => datas, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  const pageSizes = [10, 25, 50];
  function handlePageSizeChange(e) {
    table.setPageSize(Number(e.target.value));
  }

  return (
    <div>
      <div className="overflow-x-auto px-24">
        <div className="flex items-center justify-between">
          <div>
            <Input
              label="Search"
              type="text"
              placeholder="Search Something"
              className="w-48"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="join">
              <button
                className="join-item btn btn-outline text-black w-24"
                onClick={() => table.previousPage()}
              >
                Previous page
              </button>
              <button
                className="join-item btn btn-outline text-black w-24"
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
              >
                Next Page
              </button>
            </div>
            <div>
              <span>Show: </span>
              <select
                className="border shadow-lg bg-white px-3 py-2"
                value={table.getState().pagination.pageSize}
                onChange={handlePageSizeChange}
              >
                {pageSizes.map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <Link to={"/addproduct"}>
              <div>
                <button className="btn bg-blue-600 text-white">
                  Add Product
                </button>
              </div>
            </Link>
          </div>
        </div>
        <table className="table">
          {/* head */}
          <thead className="font-medium text-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
