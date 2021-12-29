import React from 'react'
import { NavLink } from 'react-router-dom'


const SideBar = () => {
    return (
        <div
            className="w-60 shadow-lg z-10 absolute bg-white"
            style={{ top: 0, left: 0, bottom: 0 }}
        >
            <h1 className="text-center text-3xl font-semibold mt-10 tracking-widest">ADMIN</h1>
            <div className="pt-8 border-b border-border">
                <NavLink
                    to="/admin/manage-user"
                    className="flex text-xl cursor-pointer pl-10 hover:bg-active hover:text-white py-4"
                >
                    <i class="fas fa-users-cog mr-6"></i>
                    <h1>User list</h1>
                </NavLink>
                <NavLink
                    to="/admin/add-user"
                    className="flex text-xl cursor-pointer pl-10 hover:bg-active hover:text-white py-4"
                >
                    <i class="fas fa-user-plus mr-6"></i>
                    <h1>Add user</h1>
                </NavLink>
            </div>
            <div className="border-b border-border">
                <NavLink
                    to="/admin/manage-movie"
                    className="flex text-xl cursor-pointer pl-10 hover:bg-active hover:text-white py-4"
                >
                    <i class="fas fa-film mr-6"></i>
                    <h1>Movie list</h1>
                </NavLink>
                <NavLink
                    to="/admin/add-movie"
                    className="flex text-xl cursor-pointer pl-10 hover:bg-active hover:text-white py-4"
                >
                    <i class="fas fa-plus mr-6"></i>
                    <h1>Add movie</h1>
                </NavLink>
            </div>
            <div className=" border-b border-border">
                <NavLink
                    to="/admin/showtimes"
                    className="flex text-xl cursor-pointer pl-10 hover:bg-active hover:text-white py-4"
                >
                    <i class="fas fa-plus mr-6"></i>
                    <h1>Create showtimes</h1>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar
