import React from 'react';
// ICONS
import { BsPlusLg } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
// components
import CodeEditor from './../../components/CodeEditor';
import Breadcrumb from '../../components/Breadcrumb';



export default function BlogsPost() {
    return (
        <div className='app_blogs_post p-4 md:p-10'>
            <Breadcrumb/>
            <div className=" border-[1.3px] border-white/15  relative">
                <BsPlusLg className='absolute -top-3 -left-3 text-white/15 text-2xl' />
                <BsPlusLg className='absolute -bottom-3 -right-3 text-indigo-600 text-2xl' />

                <div className="content  py-20 border-b-[1.3px] border-white/15 relative">
                    <div className="h-full w-1 border-l-[1.6px] border-white/15 absolute left-1/4 top-0"></div>
                    <div className="h-full w-1 border-l-[1.6px] border-white/15 absolute right-1/4 top-0"></div>
                    <div className="max-w-lg mx-auto">
                        <h1 className='text-xl text-white text-center'>Rapidly build modern websites without ever leaving your HTML.</h1>
                        <button className='text-xs font-medium border-[1.3px] border-white/10 rounded-full bg-white/5 text-white/30 px-3 py-2 flex flex-nowrap items-center gap-3 capitalize mx-auto mt-5'>
                            <FaCircle className='text-indigo-600 text-[7px]' />
                            <h1>24 Jan 2024</h1>
                        </button>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto mt-10 relative z-[2] p-5">
                    <ul>
                        {
                            new Array(5).fill(null).map((_, index) => (
                                <li key={index} className='relative pb-5'>
                                    <div className="absolute h-full w-1 border-l-[1.6px] border-white/15 -left-20 top-0">
                                        <button className='relative -left-1/2 -translate-x-1/2 bg-[#1c1c1c] h-7 w-7 rounded text-white-50 font-semibold border-[1.3px] border-white/10 text-[#5b5555] '>
                                            {index + 1}
                                        </button>
                                    </div>
                                    <h1 className='text-white text-lg'>Radiant: A beautiful new marketing site template</h1>
                                    <p className='text-white/50 text-sm text-justify my-1'>
                                        It’s built with Next.js, Framer Motion, and Tailwind CSS, with a blog powered by Sanity.

                                        It’s been a while since we built a SaaS marketing template like this, and in that time we’ve learned a lot about what makes a template like this useful and easy to work with. We’ve tried to incorporate all of those learnings into Radiant.

                                        Check out the live preview as always for the full experience — there are tons of cool details in this one that you have to see in the browser to really appreciate.
                                    </p>
                                    <CodeEditor/>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}
