import React from 'react';
import webLogo from 'assets/image/web-logo.png';
import avatar from 'assets/image/avatar.png';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from 'util/settings/config';
import { Link } from 'react-scroll';
import { Fragment } from 'react';

const renderLogin = (userLogin) => {
    if ((_.isEmpty(userLogin))) return (
        <div className="flex items-center justify-between cursor-pointer z-20">
            <div className="w-8 h-8 mr-2">
                <img src={avatar} alt="AVATAR" className="w-full block rounded-full" />
            </div>
            <NavLink to="/login" className="text-txtSec hover:border-b-2">Login</NavLink>
        </div>
    )
    return (
        <div className="profile flex items-center justify-between cursor-pointer relative z-30">
            <div className="w-8 h-8 rounded-full bg-active">
                <p className="text-txtThi text-center leading-8">{userLogin.taiKhoan.charAt(0)}</p>
            </div>
            <p className="text-txtSec ml-2">{userLogin.taiKhoan}</p>
            <div className="dropdownMenuProfile w-32 bg-bgFooter rounded -top-1/4 hidden absolute">
                <ul className="p-2 text-left">
                    <li className="my-3">
                        <NavLink to="/profile" className="text-txtSec hover:text-txtThi text-md">
                            <i class="fas fa-user-circle" style={{ width: "20px", height: "20px", marginRight: "4px" }}></i>
                            My Account
                        </NavLink>
                    </li>
                    {userLogin.maLoaiNguoiDung === "QuanTri" ?
                        <li className="my-3">
                            <NavLink to="/admin/manage-user" className="text-txtSec hover:text-txtThi text-md">
                                <i class="fas fa-cog" style={{ width: "20px", height: "20px", marginRight: "4px" }}></i>
                                Admin page
                            </NavLink>
                        </li> :
                        <Fragment></Fragment>}
                    <li className="my-3">
                        <a
                            className="text-txtSec hover:text-txtThi text-md"
                            onClick={
                                () => {
                                    localStorage.removeItem(USER_LOGIN);
                                    localStorage.removeItem(TOKEN);
                                    window.location.replace("/");
                                }
                            }
                        >
                            <i class="fas fa-sign-out-alt" style={{ width: "20px", height: "20px", marginRight: "4px" }}></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

const Header = (props) => {
    const { userLogin } = useSelector(state => state.userReducer);

    return (
        <div className="container bg-bgPri shadow-md fixed z-20">
            <div className="flex items-center justify-between py-2">
                <NavLink to="/">
                    <img 
                        src={webLogo} 
                        alt="LOGO" 
                        style={{ width: "50px", height: "50px" }}
                    />
                </NavLink>
                <ul className="flex items-center justify-between">
                    <li>
                        <Link
                            className="mx-4 text-txtPri hover:text-active"
                            to="movie"
                            smooth={true}
                            duration={1000}
                        >
                            Movie
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="mx-4 text-txtPri hover:text-active"
                            to="theater"
                            smooth={true}
                            duration={1000}
                        >
                            Theater
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="mx-4 text-txtPri hover:text-active"
                            to="news"
                            smooth={true}
                            duration={1000}
                        >
                            News
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="mx-4 text-txtPri hover:text-active"
                            to="contact"
                            smooth={true}
                            duration={1000}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                {renderLogin(userLogin)}
            </div>
        </div>
    )
}

export default Header
