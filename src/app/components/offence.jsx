import React from 'react'
import Link from 'next/link';


export default function Offence() {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/TeamPhoto1.png" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Offense</h2>
          <p>Offense ist ein Fachausdruck für die angreifende Mannschaft im American Football. Ihre Aufgabe ist es in die gegnerische Endzone zu kommen, um Punkte zu erzielen.</p>
          <div className="card-actions justify-end">
            <Link href="/offenceroster"><button className="btn">Roster</button></Link>
          </div>
        </div>
      </div>
    )
}
