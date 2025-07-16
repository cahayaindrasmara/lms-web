import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import LatestCourse from "../pages/Manager/Home/latestCourse";
import LatestStudents from "../pages/Manager/Home/latestStudents";
import { Outlet } from "react-router-dom";

export default function LayoutDashboard() {
    return(
        <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header />
            <Outlet />
        </main>
    </div>
    )
}