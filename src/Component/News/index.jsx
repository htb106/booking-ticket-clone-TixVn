import React from 'react';
import { dataNews } from 'Data/DataNews';

const News = () => {
    return (
        <div className="my-12" id="news">
            <h1 className="text-2xl text-active text-center mb-8 font-semibold">News</h1>
            <div className="grid grid-cols-2 gap-2">
                {dataNews.map(item => {
                    const { image, newsTitle, newsContent, link} = item;

                    return(
                        <a href={link} className="block mb-5" target="_blank">
                            <img src={image} alt="IMAGE" className="rounded" style={{width: "450px"}}/>
                            <h1 className="w-full text-txtPri text-xl my-4 hover:text-active">
                                {newsTitle}
                            </h1>
                            <p className="text-txtSec text-sm w-full">
                                {newsContent}
                            </p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default News
