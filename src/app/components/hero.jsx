import React from 'react';

export default function ContactForm() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <h1 className="text-5xl font-bold">Join the Sharks Off-Season Training!</h1>
      <div className="hero-content flex-col lg:flex-row justify-between">
        <img src="/tryoutsflier.jpg" alt="American Football" className="mb-6 lg:mb-0 lg:mr-8 rounded-lg shadow-2xl" style={{ maxHeight: '100%' }} />
        <div className="flex-1">
          <p className="py-6">Dir gefällt American Football und willst herausfinden, ob du den Sport nicht auch selbst aktiv spielen willst? Dann ist jetzt deine Chance gekommen. Die Sharks starten ab dem 18.07.2023 in ihre Off-Season. Der perfekte Zeitpunkt, um beim Team mit einzusteigen und den Sport kennenzulernen. Wir trainieren immer Dienstags und Donnerstags von 20:00 Uhr bis 22:00 Uhr auf dem Waldplatz Langriet. Du brauchst weder Vorerfahrung noch irgendwelche Ausrüstung. Alles was du tun musst? Fülle das untenstehende Formular aus und du bist dabei.</p>
          <div className="card shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Dein Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Deine Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Telefonnummer</span>
                </label>
                <input type="tel" placeholder="Deine Telefonnummer" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nachricht</span>
                </label>
                <textarea placeholder="Deine Nachricht" className="textarea textarea-bordered" required></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Email Senden</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
