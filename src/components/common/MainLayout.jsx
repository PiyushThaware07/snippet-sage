import React from 'react'
// COMPONENTS
import MainNavbar from './MainNavbar';
// RRD
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <main className='min-h-screen w-full bg-black'>
            <MainNavbar />
            <Outlet />
        </main>
    )
}
