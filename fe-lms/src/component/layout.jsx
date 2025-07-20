import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import LatestCourse from "../pages/Manager/Home/latestCourse";
import LatestStudents from "../pages/Manager/Home/latestStudents";
import { Outlet, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

export default function LayoutDashboard({isAdmin = true}) {
    const isManagerPreviewPage = useMatch('/manager/courses/:id/preview');
    const isStudentPreviewPage = useMatch('/student/detail-course/:id');
    
    console.log("isPreview:",isManagerPreviewPage)
    return(
        <>
            {
                isManagerPreviewPage !== null || isStudentPreviewPage !== null ? (
                    <Outlet />
                ) : (
                    <div className="flex min-h-screen">
                    <Sidebar isAdmin = {isAdmin} />
                    <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                        <Header />
                        <Outlet />
                    </main>
                    </div>
                )
            }
        </>
        
    )
}

LayoutDashboard.propTypes = {
    isAdmin: PropTypes.bool
}