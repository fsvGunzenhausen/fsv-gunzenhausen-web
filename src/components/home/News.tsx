


function News() {

    return (
        <>
            <div className="container text-center">
                        {/* Divider */}
                    <h3 className="text-black-50">Aktuell News</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <div className="card-body p-3">
                                <h5 className="card-title mb-3 text-secondary">Die Flugsaison 2025 beginnt!</h5>
                                <div className="card-text fw-light">
                                     Endlich ist es soweit – die neue Flugsaison beginnt!
                                     Die Flugsportvereinigung Gunzenhausen e.V. startet am Samstag, den 05. April 2025, offiziell in die neue Saison. 
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                        <div className="card-body p-3">
                                <h5 className="card-title mb-3 text-secondary">Flotte vergrößert!</h5>
                                <div className="card-text fw-light">
                                Unsere Flotte ist seit dem 21.01.2025 gewachsen! Wir haben nun als Vereinsflugzeug für alle Mitglieder eine Aerospool Dynamic WT9 600 mit dem Kennzeichen D-MFVG zur Verfügung. Wir freuen uns riesig über das neue Flugzeug und auf viele schöne Flugerlebnisse! 
                                </div>
                            </div>
                        </li>
                        </ul>
                            {/* Divider */}
                <hr className="mt-4 mb-4" />
            </div>
        </>
      );
  }
  
  export default News;
  