import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getMovieListAction } from 'redux/action/ManageMovieAction';
import moment from 'moment';
import './styles.css';

const ManageMovie = () => {
    const dispatch = useDispatch();

    const { movieList } = useSelector(state => state.movieListReducer);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 25;

    useEffect(() => {
        dispatch(getMovieListAction());
    }, [dispatch])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        if(movieList) {
            setCurrentItems(movieList.slice(itemOffset, endOffset));
        } 

        setPageCount(Math.ceil(movieList.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % movieList.length;

        setItemOffset(newOffset);
    };

    return (
        <div className="pl-60">
            <div className="px-10 py-10" style={{ background: "#f0f2f5" }}>
                <h1 className="text-center font-semibold text-5xl text-active tracking-widest">MOVIE LIST</h1>
                <div className="flex justify-between px-20 my-5">
                    <NavLink
                        to="/admin/add-movie"
                        className="bg-txtFiv text-txtThi text-center py-3 rounded-md px-5"
                    >
                        Add movie
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

                            <th className="relative text-left mx-5 flex items-center borderRight col-span-1">Code</th>
                            <th className="relative text-left mx-5 flex items-center borderRight col-span-2">Image</th>
                            <th className="relative text-left mx-5 flex items-center borderRight col-span-2">Name</th>
                            <th className="relative text-left mx-5 flex items-center borderRight col-span-3">Description</th>
                            <th className="relative text-left mx-5 flex items-center borderRight col-span-2">Show date</th>
                            <th className="relative text-left mx-5 flex items-center col-span-2">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.map((movie, i) => (
                            <tr key={i} className="bg-txtThi border-b border-border grid-cols-12 grid hover:bg-gray-100">
                                <td className="text-left h-28 flex items-center mx-5 text-sm col-span-1">{movie.maPhim}</td>
                                <td className="text-left h-28 flex items-center mx-5 text-sm col-span-2">
                                    <img 
                                        src={movie.hinhAnh} 
                                        alt="IMANGE" 
                                        style={{height: "75px", width: "50px"}}
                                    />
                                </td>
                                <td className="text-left h-28 flex items-center mx-5 text-sm col-span-2">{movie.tenPhim}</td>
                                <td className="text-left h-28 flex items-center mx-5 text-sm col-span-3">{movie.moTa.substr(0, 100) + "..."}</td>
                                <td className="text-left h-28 flex items-center mx-5 text-sm col-span-2">
                                    {moment(movie.ngayKhoiChieu).format("DD/MM/YY")}
                                </td>
                                <td className="flex justify-center mx-8 items-center text-xl">
                                    <a className="mx-2 cursor-pointer">
                                        <i class="far fa-trash-alt text-red-600"></i>
                                    </a>
                                    <NavLink
                                        to={"/admin/edit-movie/" + movie.maPhim} 
                                        
                                        className="mx-2 cursor-pointer"
                                    >
                                        <i class="far fa-edit text-green-500"></i>
                                    </NavLink>
                                    <NavLink to={"/admin/showtimes/" + movie.maPhim}>
                                        <i class="far fa-calendar-plus text-blue-500 mx-2"></i>
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

export default ManageMovie;


