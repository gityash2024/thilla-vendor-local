import React from 'react'
import GreenTick from '../assets/svg/green-tick.svg';
import LocationIcon from '../assets/svg/location-pin-dark.svg';
import partnerProfile from '../assets/images/partner-profile.svg';
import CallIcon from '../assets/svg/call-icon.svg';
export default function OrderManagementDetails() {
  return (
    <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]'>
        <h1 className='text-text text-[1.5rem] font-[600] tracking-[0.07813rem]'>Order Management &gt; Details</h1>
        <div className='flex gap-[1.62rem]'>
            <div className='flex flex-col gap-[0.62rem] bg-white w-fit max-w-[69.125rem] p-[2.5rem] rounded-[1rem] border border-[#D5D5D5] shadow-md'>
                <div className='flex flex-col gap-[1.44rem]'>
                    <div className='flex gap-[0.62rem]'>
                        <img className='' src={GreenTick} alt="tick"/>
                        <h1 className='text-[1.25rem] font-[500] tracking-[0.07813rem]'>New Order #157614075142992</h1>
                    </div>
                    <div className='flex gap-[0.62rem]'>
                        <img className='' src={LocationIcon} alt="location"/>
                        <h1 className='text-[1.25rem] font-[500] tracking-[0.07813rem]'>Business Center 1, M Floor, The Meydan Hotel,Jaipur, Rajasthan, 302034 </h1>
                    </div>
                    <h1 className='text-[1.25rem] font-[600] tracking-[0.07813rem]'>Order Details</h1>
                    <div className='flex flex-col gap-[0.69rem]'>
                        <div className='w-full flex flex-col gap-[0.44rem] pb-[0.69rem] border-b border-dashed border-black'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>1x &nbsp; &nbsp; Article 1</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 350.00</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>1x &nbsp; &nbsp; Article 2</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 350.00</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>1x &nbsp; &nbsp; Article 3</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 350.00</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>1x &nbsp; &nbsp; Article 4</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 350.00</span>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[0.44rem] pb-[0.69rem] border-b border-dashed border-black'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>Item Bill</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 1400.00</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>Handling Free</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 5.00</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>Delivery Free</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>Free</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>Discount</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 98.00</span>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[0.44rem]'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>Grand Total</span>
                                <span className='text-[1rem] font-[500] tracking-[0.07813rem]'>&#8377; 1307.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[24.75rem] rounded-[1rem] border border-[#D5D5D5] shadow-md'>
                    <h1 className='text-[#1A1C1F] text-[0.875rem] font-[600] leading-[116%] px-[1.25rem] pt-[0.75rem]'>Delivery Partner</h1>
                    <div className='flex gap-[0.5rem] items-center p-[1.25rem]'>
                        <img src={partnerProfile} alt="partern" />
                        <h1 className='text-[#1A1C1F] text-[1rem] font-[600] leading-[110%]'>Partner name</h1>
                    </div>
                    <div className='flex gap-[0.5rem] items-center p-[1.25rem]'>
                        <img src={CallIcon} alt="call" />
                        <p className='text-[#5B6572] text-[0.875rem] font-[500] leading-[116%]'>+91 123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
