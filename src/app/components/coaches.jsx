import React from 'react'

export default function Coaches() {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/Coach.png" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Coaches/Staff</h2>
          <p>Keine Mannschaft funktioniert ohne ihre Coaches. Unter Anleitung des Head Coaches dirigieren die beiden Coordinatoren (Offense und Defense), unter Mithilfe ihrer Positionscoaches, ihre jeweiligen Mannschaftsteile.</p>
          <div className="card-actions justify-end">
            <button className="btn">Roster</button>
          </div>
        </div>
      </div>
    )
}
