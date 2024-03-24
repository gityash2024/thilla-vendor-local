import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import FieldInput from './FieldInput'
import SuccessModal from './SuccessModal'
import { useNavigate } from 'react-router-dom'

export default function InvertoryManagementAdd() {
    const navigate = useNavigate();
    const [successModal,setSuccessModal] = useState(false);
  return (
    <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]'>
        <h1 className='text-text text-[1.5rem] font-[600] tracking-[0.07813rem]'>Inventory Management &gt; Table</h1>
        <div className='flex flex-col gap-[1.25rem] w-1/2'>
            <FieldInput 
            label="Article Name"
            boldLabel={true}
            placeholder="Article Name"
            type="text"
            />
            <FieldInput 
            label="SKU"
            boldLabel={true}
            placeholder="Scan/add"
            type="text"
            scanner={true}
            />
            <FieldInput 
            label="Price"
            boldLabel={true}
            placeholder="Enter price"
            type="text"
            />
            <FieldInput 
            label="Price type"
            boldLabel={true}
            placeholder="Enter Price type"
            type="text"
            />
            <FieldInput 
            label="Unit"
            boldLabel={true}
            placeholder="Enter Unit"
            type="text"
            />
            <div className='w-1/2'><PrimaryButton label="Add" action={()=>{setSuccessModal(true)}} /></div>
        </div>
        {successModal && <SuccessModal onClose={setSuccessModal} onClickAction={()=>{navigate('/dashboard/inventory-management')}}/> }
    </div>
  )
}
