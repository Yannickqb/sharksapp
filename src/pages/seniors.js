import React from 'react';
import Navbar from '@/app/components/nav';
import Offence from '@/app/components/offence';
import Defense from '@/app/components/defense';
import Coaches from '@/app/components/coaches';
import Practice from '@/app/components/practice';
import Footer from '@/app/components/footer';

export default function Seniors() {
    return (
        <div className="relative min-h-screen">
            {/* Sticky Navbar */}
            <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
            {/* Background Image */}
            <img src="/team.png" alt="Sharks Team" className="w-full object-cover" style={{ height: 'calc(100vh - var(--navbar-height))' }} />

            {/* Content container */}
            <div className="relative z-10" style={{ paddingTop: 'var(--navbar-height)' }}>
                {/* Title */}
                <h1 className="text-center text-4xl font-bold py-4">Sharks Tackle-Football 1. Team</h1>
                
                {/* Offence and Defense components */}
                <div className="flex justify-center items-center pb-5">
                    <div className="card bg-base-300 rounded-box place-items-center mx-2">
                        <Offence />
                    </div>
                    <div className="card bg-base-300 rounded-box place-items-center mx-2">
                        <Defense />
                    </div>
                </div>
                <div className="flex justify-center items-center pb-5">
                    <div className="card bg-base-300 rounded-box place-items-center mx-2">
                        <Coaches />
                    </div>
                    <div className="card bg-base-300 rounded-box place-items-center mx-2">
                        <Practice />
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
