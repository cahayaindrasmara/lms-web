import React from "react";

export default function Header() {
    return (
        <div id="TopBar" className="flex items-center justify-between gap-[30px]">
                <form action="" className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <input type="text" name="search" id="search" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]" placeholder="Search course, student, other file..."/>
                    <img src="/assets/images/icons/search-normal.svg" className="w-6 h-6" alt="icon"/>
                </form>
                <div className="relative flex items-center justify-end gap-[14px] group">
                    <div className="text-right">
                        <p className="font-semibold">Shayna Angga</p>
                        <p className="text-sm leading-[21px] text-[#838C9D]">Manager</p>
                    </div>
                    <button type="button" id="profileButton" className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="profile photos" />
                    </button>
                    <div id="ProfileDropdown" className="absolute top-full hidden group-hover:block">
                        <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                            <li className="font-semibold">
                                <a href="#">My Account</a>
                            </li>
                            <li className="font-semibold">
                                <a href="#">Subscriptions</a>
                            </li>
                            <li className="font-semibold">
                                <a href="#">Settings</a>
                            </li>
                            <li className="font-semibold">
                                <a href="signin.html">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}