import Link from 'next/link'
import React from 'react'

export default function Defense() {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src="/Defence.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Defense</h2>
                <p>Defense ist ein Fachausdruck für die verteidigende Mannschaft im American Football. Ihre Aufgabe ist es, die gegnerische Offense vom Erzielen von Punkten abzuhalten.</p>
                <div className="card-actions justify-end">
                    <Link href="/defenceroster"><button className="btn">Roster</button></Link>
                </div>
            </div>
        </div>
    )
}
