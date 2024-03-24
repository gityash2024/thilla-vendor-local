import React from 'react'
import DashboardCard from './DashboardCard'
import acceptedIcon from '../assets/svg/accepted-orders.svg';
import rejectedIcon from '../assets/svg/rejected-orders.svg';
import productsIcon from '../assets/svg/products.svg';
import revenueIcon from '../assets/svg/revenue.svg';
import graph from '../assets/Graph1.svg';
import Table from './Table';
import ReportCard from './ReportCard';

export default function AdminDashboard() {

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
    }
    ]

    const mapping = [
        // 'S.no',
        'Article Name',
        'Barcode',
        'Quantity Available',
        'Price/unit(₹)',
        'Discount(%)'
      ]
  return (
    <div className='flex flex-col gap-[2rem]'>
        <div className='flex flex-col gap-[1.5rem] bg-white p-[2rem] rounded-[1rem] '>
            <h1 className='text-[1.5rem] font-[600]'>Admin Dashboard</h1>
            <div className='flex gap-[1.25rem]'>
                <DashboardCard image={acceptedIcon} value="20,000" label="Accepted Orders" />
                <DashboardCard image={rejectedIcon} value="5000" label="Rejected Orders" />
                <DashboardCard image={revenueIcon} value="25,000" label="Revenue" />
                <DashboardCard image={productsIcon} value="5000" label="Products" />
            </div>
        </div>
        <ReportCard label="Profit Report" value="₹ 25000" filterOptions={["October"]}>
            <img className="w-full" src={graph} alt="img" />
        </ReportCard>
        <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]'>
            <div className="flex justify-between">
                <h1 className='text-text text-[1.5rem] font-[600]'>Inventory stats</h1>
            </div>
            <Table columns={columns} data={data} mapping={mapping} />
        </div>
    </div>
  )
}
