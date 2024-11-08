"use client"
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { LucideIcon, Menu, Layout, Archive, Clipboard, User2, CircleDollarSign, Package, Warehouse, CookingPot, Receipt, Users, Contact } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface SidebarLinkProps {
    href: string,
    icon: LucideIcon,
    label: string,
    isCollapsed : boolean
}
const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard")

    return (
        <Link href = {href}>
            <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start py-4 px-8"}
            hover:text-blue-500 hover:bg-blue-500 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""}`}>
                
                <Icon className='w-6 h-6 !text-gray-700'>
                </Icon>
                <span className={`${isCollapsed ? "hidden" : 'block'} font-medium text-gray-700`}>{label}</span>
            </div>
        </Link>
    )
}

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }
    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md-64"} bg-white transition-all duration-300
    overflow-hidden h-full shadow-md z-40`

  return (
    <div className={sidebarClassNames}>
        {/* {TOP LOGO} */}
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8
            ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
            <div>logo</div>
            <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>RESTAU</h1>
            <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
                onClick={toggleSidebar}>
                <Menu className='w-4 h-4'/>
            </button>
        </div>

        {/* {LINKS} */}
        <div className="flex-grow mt-8">
            <SidebarLink
                href="/dashboard"
                icon={Layout}
                label="Trang chủ"
                isCollapsed={isSidebarCollapsed}
            ></SidebarLink>
            <SidebarLink
                href="/products"
                icon={Package}
                label="Hàng hoá"
                isCollapsed={isSidebarCollapsed}
            ></SidebarLink>
            <SidebarLink
                href="/inventory"
                icon={Warehouse}
                label="Kho"
                isCollapsed={isSidebarCollapsed}
            ></SidebarLink>
            <SidebarLink
                href="/dishes"
                icon={CookingPot}
                label="Món ăn"
                isCollapsed={isSidebarCollapsed}
        ></SidebarLink>
            <SidebarLink
                href="/receipts"
                icon={Receipt}
                label="Hoá đơn"
                isCollapsed={isSidebarCollapsed}
            ></SidebarLink>
            <SidebarLink
                href="/providers"
                icon={Users}
                label="Nhà cung cấp"
                isCollapsed={isSidebarCollapsed}
        ></SidebarLink>
            <SidebarLink
                href="/staffs"
                icon={Contact}
                label="Nhân viên"
                isCollapsed={isSidebarCollapsed}
            ></SidebarLink>
            <SidebarLink
                href="/reports"
                icon={CircleDollarSign}
                label="Báo cáo"
                isCollapsed={isSidebarCollapsed}
            ></SidebarLink>
      </div>

        <div>
            {/* {FOOTER} */}
            <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
                <p className='text-center text-xs text-gray-500'>&copy; 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar