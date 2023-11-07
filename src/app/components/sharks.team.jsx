import React from 'react';
import Link from 'next/link';

export default function Sharksteam() {
    return (
        <div className="hero rounded-xl" style={{ minHeight: '50vh', backgroundImage: 'url(/TeamPhoto1.png)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="bg-darkgray-500 bg-opacity-50 rounded-xl p-6 inline-block">
                        <h1 className="mb-5 text-5xl font-bold text-white">1. Team</h1>
                        <p className="mb-5 text-white">Bist du 18 Jahre oder älter und hast keine Angst vor intensiven Herausforderungen auf dem Footballfeld? Dann ist unser American Football Club genau das Richtige für dich!</p>
                        <Link href="/seniors" className="btn">Mehr Info</Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}
