import React, { useState } from 'react'
import TableButton from './TableButton'
import upDark from '../assets/svg/up-icon-dark.svg'
import upLight from '../assets/svg/up-icon-light.svg'
import downDark from '../assets/svg/down-icon-dark.svg'
import downLight from '../assets/svg/down-icon-light.svg'
import searchIcon from '../assets/svg/search-icon-light.svg'
import StatusField from './StatusField'

export default function Table(props) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className='flex flex-col gap-[2.5rem]'>
      <div className='flex flex-col w-full h-full border border-[#DBDADE] overflow-x-auto'>
        <table className='w-full'>
          <thead>
          <tr className='border-b border-[#DBDADE]'>
            <th className='cursor-pointer pl-[1.25rem] pr-[0.62rem] py-[0.94rem]'><input type="checkbox" /></th>
              {props.columns.map((c, index) => (
                <th key={index}>
                  <div className='w-fit flex gap-8 items-center px-[1.56rem] py-[0.62rem]'>
                    <p className='text-[#4B465C] text-[1.01563rem] font-[600] tracking-[0.07813rem]'>{c.name}</p>
                    <div>
                      <img className='cursor-pointer w-[1rem] h-[14px] object-cover' src={upDark} alt={`Sort Ascending for ${c.name}`} />
                      <img className='cursor-pointer w-[1rem] h-[14px] object-cover' src={downLight} alt={`Sort Descending for ${c.name}`} />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
            {/* <tr className='border-b border-[#DBDADE]'>
              {props.columns.map((c, index) => (
                <th key={index}>
                  <div className='flex gap-8 items-center px-[1.56rem] py-[0.62rem]'>
                    {c.searchingEnabled && <div className='w-fit flex jusitfy-between border border-[#DBDADE] p-[0.62rem] rounded-[0.375rem]'>
                      <input className='outline-none w-[80px] text-[1.125rem] font-[400]' type="text" placeholder='Search'/>
                      <img className="cursor-pointer" src={searchIcon} alt="search icon" />
                    </div>}
                  </div>
                </th>
              ))}
            </tr> */}
          </thead>
          <tbody>
            {props.data.map((d, index) => (
              <tr key={index} className='cursor-pointer h-[5rem] border-y border-[#DBDADE]'>
                <th className='cursor-pointer pl-[1.25rem] pr-[0.62rem] py-[0.94rem]'><input type='checkbox'/></th>
                {props.mapping.map((key,index) => (<th key={index} onClick={()=>{props.fun(true)}}>
                  <div className='w-fit flex gap-8 items-center px-[1.56rem] py-[0.62rem]'>
                    {key !== 'Status' ? <p className='text-[#4B465C] text-[1.125rem] font-[400]'>{d[key]}</p>:<StatusField label={d[[key]]} />}
                  </div>
                </th>))}                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='w-full flex justify-between items-center'>
        <p className='text-[#4B465C]/50 text-[1rem] font-[400] leading-[1.4675rem]'>Showing 1 to 7 of 100</p>
        <div className='flex gap-[0.31rem] '>
          <TableButton label="Previous" />
          {[...Array(5)].map((_, index) => (
            <TableButton key={index} label={index + 1} activeButton={currentPage} action={() => setCurrentPage(index + 1)} />
          ))}
          <TableButton label="Next" />
        </div>
      </div>
    </div>
  );
}
