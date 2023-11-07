import React from 'react';

export default function Juniors() {
    return (
        // Apply the `w-3/4` utility class to the card div to make it take 3/4 of the screen width
        <div className="card w-3/4 mx-auto bg-base-100 shadow-xl image-full">
            <figure>
                <img src="/Junior.png" alt="Sharks" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Junioren</h2>
                <p>Für alle u18er die sich auf eine gnaz andere art von Teamsport eilassen wollen, es ist einiges härter als was die meisten sonst so kennen aber schweist dafür um so mehr zusammen</p>
                <div className="card-actions justify-end">
                    <button className="btn">Mehr Infos</button>
                </div>
            </div>
        </div>
    );
}
