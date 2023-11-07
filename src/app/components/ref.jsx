import React from 'react';

export default function Ref() {
    return (
        // Apply the `w-3/4` utility class to the card div to make it take 3/4 of the screen width
        <div className="card w-3/4 mx-auto bg-base-100 shadow-xl image-full">
            <figure>
                <img src="/Ref.png" alt="Sharks" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Zebra</h2>
                <p>American Football, wie viele andere Sportarten auch, wäre ohne Schiedsrichter undenkbar. Unsere "Zebras" sind unverzichtbare Helden auf dem Feld. Wenn du Interesse an American Football hast, aber nicht als Spieler oder Coach aktiv sein möchtest, bietet eine Ausbildung zum Schiedsrichter eine großartige Möglichkeit, den Sport von einer neuen Perspektive aus zu erleben und die Sharks zu unterstützen. Kontaktiere uns über Social Media oder per E-Mail, wenn du Fragen hast oder dein Interesse geweckt wurde.</p>
                <div className="card-actions justify-end">
                    <button className="btn">Mehr Infos</button>
                </div>
            </div>
        </div>
    );
}
