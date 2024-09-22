import React from 'react'
// RRD
import { useNavigate, useLocation } from 'react-router-dom';
// ICONS
import { GoHomeFill } from "react-icons/go";

export default function Breadcrumb() {
    const location = useLocation();
    const pathName = location.pathname;
    const paths = pathName.split('/').filter(Boolean);
    const navigate = useNavigate();


    return (
        <div className='text-white/20 mb-5'>
            <ul className='flex flex-nowrap items-center'>
                <li><GoHomeFill className='text-xl cursor-pointer text-indigo-600' onClick={() => navigate("/")} /></li>
                {
                    paths.map((item, index) => (
                        <li key={index}>
                            <span className='text-sm font-semibold mx-2'>/</span>
                            <span className='text-sm capitalize cursor-pointer hover:text-indigo-600' onClick={() => navigate(`/${item}`)}>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
