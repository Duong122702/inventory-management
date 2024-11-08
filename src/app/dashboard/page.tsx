import React from 'react'
import PopularProduct from './PopularProduct'
import SumItemChart from './SumItemChart'
import TopProvider from './TopProvider'
import TopItem from './TopItem'
import OccupiedTable from './OccupiedTable'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl: overflow-auto gap-10 pl-7 pb-4 custom-grid-rows">
      <PopularProduct/>
      <OccupiedTable/>
      <SumItemChart/>
      <TopProvider/>
      {/* <TopItem/> */}
      {/* <div className="row-span-3 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between" /> */}
      {/* <div className="md:row-span-1 xl:row-span-3 bg-gray-500" />  */}
      {/* <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />  */}
    </div>
  )
}

export default Dashboard