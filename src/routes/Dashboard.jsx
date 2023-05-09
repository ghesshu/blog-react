import React from 'react'
import Layout from '../components/Layout'
import DashboardP from '../pages/DashboardP'




const Dashboard = () => {
  return (
    <div>
        <Layout pageContent={<DashboardP />} />
    </div>
  )
}

export default Dashboard
