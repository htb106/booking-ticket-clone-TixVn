import React from 'react';
import webLogo from 'assets/image/web-logo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TOKEN, USER_LOGIN } from 'util/settings/config';

const HeaderAd = () => {
    const { userLogin } = useSelector(state => state.userReducer);
    return (
        <div className="h-20 shadow-md flex items-center justify-between pl-80 pr-40">
            <NavLink to="/">
                <img 
                    src={webLogo} 
                    alt="LOGO" 
                    style={{ width: "50px", height: "50px" }}
                />
            </NavLink>
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
        </div>
    )
}

export default HeaderAd
