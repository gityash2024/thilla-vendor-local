import React from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

export default function InventoryManagement() {
  const navigate = useNavigate();

// columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    { name: "ARTICLE NAME", enableSorting: true, searchingEnabled: true },
    { name: "BARCODE", enableSorting: true, searchingEnabled: true },
    { name: "QUANTITY", enableSorting: true, searchingEnabled: true },
    { name: "PRICE/UNIT (₹)", enableSorting: true, searchingEnabled: true },
    { name: "DISCOUNT(%)", enableSorting: true, searchingEnabled: true },
  ];


//   provide the actual table body data
  const data = [
    {
      "S.no": "01",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 23.78,
      "Discount(%)": 23,
    },
    {
      "S.no": "02",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 67,
      "Discount(%)": 20,
    },
    {
      "S.no": "03",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 65,
      "Discount(%)": 20,
    },
    {
      "S.no": "04",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 82,
      "Discount(%)": 20,
    },
    {
      "S.no": "05",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 98,
      "Discount(%)": 20,
    },
    {
      "S.no": "06",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 109,
      "Discount(%)": 20,
    },
    {
      "S.no": "08",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 198,
      "Discount(%)": 20,
    },
    {
      "S.no": "09",
      "Article Name": "Article name",
      Barcode: "978123456789",
      "Quantity Available": 2321,
      "Price/unit(₹)": 209,
      "Discount(%)": 20,
    },
  ];


//   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
    'Article Name',
    'Barcode',
    'Quantity Available',
    'Price/unit(₹)',
    'Discount(%)'
  ]
  

  return (
      <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]'>
        <div className="flex justify-between">
          <h1 className='text-text text-[1.5rem] font-[600]'>Inventory Management &gt; Table</h1>
          <button className='text-text text-[1rem] font-[500]' onClick={()=>{navigate('/dashboard/inventory-management-add')}}>+ Add Article</button>
        </div>
        <Table columns={columns} data={data} mapping={mapping} fun={()=>(navigate('/dashboard/inventory-management-update'))} />
      </div>
  )
}
