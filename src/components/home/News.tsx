


function News() {

    return (
            <>
            <div className="container text-center">
                <h3 className="text-black-50 pb-2">Aktuelle News</h3>

                <ul className="list-unstyled">
                <li className="mb-3">
                    <div className="card shadow-sm border rounded-3" style={{ padding: "0.5em" }}>
                    <div className="card-body p-3 text-start">
                        {/* Title */}
                        <h5 className="card-title mb-1 text-primary">Die Flugsaison 2025 beginnt!</h5>
                        {/* Date */}
                        <small className="text-muted d-block mb-2">05.04.2025</small>
                        {/* Text */}
                        <div className="card-text fw-light">
                        Endlich ist es soweit – die neue Flugsaison beginnt! Die Flugsportvereinigung Gunzenhausen e.V. startet am Samstag, den 05. April 2025, offiziell in die neue Saison.
                        </div>
                    </div>
                    </div>
                </li>

                <li className="mb-3">
                    <div className="card shadow-sm border rounded-3" style={{ padding: "0.5em" }}>
                    <div className="card-body p-3 text-start">
                        <h5 className="card-title mb-1 text-primary">Flotte vergrößert!</h5>
                        <small className="text-muted d-block mb-2">21.01.2025</small>
                        <div className="card-text fw-light">
                        Unsere Flotte ist seit dem 21.01.2025 gewachsen! Wir haben nun als Vereinsflugzeug für alle Mitglieder eine Aerospool Dynamic WT9 600 mit dem Kennzeichen D-MFVG zur Verfügung. Wir freuen uns riesig über das neue Flugzeug und auf viele schöne Flugerlebnisse!
                        </div>
                    </div>
                    </div>
                </li>
                </ul>

                <hr className="mt-4 mb-4" />
            </div>
            </>

      );
  }
  
  export default News;
  