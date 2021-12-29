import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheaterSystemAction } from 'redux/action/ManageTheaterAction';
import appleLogo from 'assets/image/apple-logo.png';
import androidLogo from 'assets/image/android-logo.png';
import facebookLogo from 'assets/image/facebook-logo.png';
import zaloLogo from 'assets/image/zalo-logo.png';
import './styles.css';

const Footer = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getTheaterSystemAction);
    });

    const { theaterSystem } = useSelector(state => state.theaterReducer);

    return (
        <div className="bg-bgFooter" id="contact">
            <div className="container w-3/4 grid grid-cols-4 gap-10 py-6" style={{margin: "0 auto"}}>
                <div>
                    <h1 className="text-base mb-4 text-txtThi">Tix - Cinema</h1>
                    <a className="block mb-4 text-sm text-txtSec hover:text-txtThi" href="https://tix.vn/faq">FQA</a>
                    <a className="block mb-4 text-sm text-txtSec hover:text-txtThi" href="https://tix.vn/brand-guideline/">Brand Guidelines</a>
                    <a className="block mb-4 text-sm text-txtSec hover:text-txtThi" href="https://tix.vn/thoa-thuan-su-dung">Terms of use</a>
                    <a className="block mb-4 text-sm text-txtSec hover:text-txtThi" href="https://tix.vn/chinh-sach-bao-mat">Privacy Policy</a>
                </div>
                <div>
                    <h1 className="text-base mb-4 text-txtThi">Partner</h1>
                    <div className="grid grid-cols-4 gap-2">
                    {theaterSystem.map(theater => (
                        <a href="" className="block">
                            <img 
                                src={theater.logo} 
                                alt="LOGO"
                                className="mb-4 rounded-full" 
                                style={{width: "30px", height: "30px", border: ".5px solid #a2a2a2"}}
                            />
                        </a>
                    ))}
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-base mb-4 text-txtThi mx-2">MOBILE APP</h1>
                    <div>
                        <a 
                            href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" 
                            target="_blank" className="inline-block mx-2"
                        >
                            <img src={appleLogo} alt="APPLE_LOGO" style={{height: "30px"}} />
                        </a>
                        <a 
                            href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" 
                            target="_blank" className="inline-block mx-2"
                        >
                            <img src={androidLogo} alt="ANDROID_LOGO" style={{height: "30px"}} />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-base mb-4 text-txtThi mx-2">SOCIAL</h1>
                    <div>
                        <a 
                            href="#" 
                            target="_blank" className="inline-block mx-2"
                        >
                            <img src={facebookLogo} alt="FACEBOOK_LOGO" style={{height: "30px"}} />
                        </a>
                        <a 
                            href="#" 
                            target="_blank" className="inline-block mx-2"
                        >
                            <img src={zaloLogo} alt="ZALO_LOGO" style={{height: "30px"}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
