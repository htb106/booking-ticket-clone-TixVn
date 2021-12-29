import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getUserListAction } from 'redux/action/ManageUserAdminAction';
import './styles.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const UserManage = () => {
    const dispatch = useDispatch();

    const { userList } = useSelector(state => state.userAdminReducer);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 25;

    useEffect(() => {
        dispatch(getUserListAction());
    }, [dispatch])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        if(userList) {
            setCurrentItems(userList.slice(itemOffset, endOffset));
        } 

        setPageCount(Math.ceil(userList.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % userList.length;

        setItemOffset(newOffset);
    };

    return (
        <div className="pl-60">
            <div className="px-10 py-10" style={{ background: "#f0f2f5" }}>
                <h1 className="text-center font-semibold text-5xl text-active tracking-widest">USER LIST</h1>
                <div className="flex justify-between px-20 my-5">
                    <NavLink
                        to="/admin/add-user"
                        className="bg-txtFiv text-txtThi text-center py-3 rounded-md px-5"
                    >
                        Add user
                    </NavLink>
                    <div className="w-80 relative">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search..."
                            className="inputSearch pl-16 w-full h-full rounded-md bg-bgPri text-txtSec border border-border"
                        />
                        <i
                            class="fas fa-search z-10 cursor-pointer"
                            style={{ position: "absolute", top: "35%", left: "8%" }}
                        >
                        </i>
                    </div>
                </div>
                <table className="w-full">
                    <thead style={{ background: "#fafafa" }}>
                        <tr className="h-16 grid grid-cols-12">
                            <th className="relative text-left mx-2 flex items-center borderRight col-span-2">Account</th>
                            <th className="relative text-left mx-2 flex items-center borderRight col-span-2">Password</th>
                            <th className="relative text-left mx-2 flex items-center borderRight col-span-2">Full name</th>
                            <th className="relative text-left mx-2 flex items-center borderRight col-span-2">Email</th>
                            <th className="relative text-left mx-2 flex items-center borderRight col-span-2">Phone</th>
                            <th className="relative text-left mx-2 flex items-center borderRight">User type</th>
                            <th className="relative text-left mx-2 flex items-center">Option</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {currentItems && currentItems.map((user, i) => (
                            <tr key={i} className="bg-txtThi border-b border-border h-16 grid-cols-12 grid hover:bg-gray-100">
                                <td className="text-left mx-2 text-sm flex items-center col-span-2">{user.taiKhoan}</td>
                                <td className="text-left mx-2 text-sm flex items-center col-span-2">{user.matKhau}</td>
                                <td className="text-left mx-2 text-sm flex items-center col-span-2">{user.hoTen}</td>
                                <td className="text-left mx-2 text-sm flex items-center col-span-2">{user.email}</td>
                                <td className="text-left mx-2 text-sm flex items-center col-span-2">{user.soDt}</td>
                                <td className="text-left mx-2 text-sm flex items-center">{user.maLoaiNguoiDung}</td>
                                <td className="flex justify-center mx-2 items-center text-base">
                                    <a className="mx-2 cursor-pointer">
                                        <i class="fas fa-user-times text-red-600"></i>
                                    </a>
                                    <NavLink
                                        to={"/admin/edit-user/" + user.taiKhoan} 
                                        className="mx-2 cursor-pointer"
                                    >
                                        <i class="fas fa-user-edit text-green-500"></i>
                                    </NavLink>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                    <div style={{margin: "20px auto"}} className="w-1/2">
                    <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                            className="flex w-full justify-between items-center"
                            pageLinkClassName="pageHover"
                            activeLinkClassName="pageActive"
                    />
                    </div>
                </table>
            </div>
        </div>
    )
}

export default UserManage;
