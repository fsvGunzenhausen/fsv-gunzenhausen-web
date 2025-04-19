
function Betriebszeiten() {
  
  return (
    <>
    {/* Deutscher Teil – normaler Zeilenabstand */}
    <div className="mb-3">
          <p className="mb-1">
            Der Platz ist PPR, es besteht keine Betriebspflicht.
          </p>
         {/* Englischer Teil – abgehoben durch margin-top */}
        <div className="mb-3">
          <p className="fw-normal text-muted mb-0">
            The airfield is PPR; there is no operating duty.
          </p>
        </div>
          <p className="mb-1">
            In der Regel ist die Flugleitung besetzt:
          </p>
          <ul className="mb-1">
            <li>Samstags von 13:00 bis ca. 19:00 local</li>
            <li>Sonntags/Feiertags von 10:00 bis ca. 19:00 local</li>
          </ul>
        </div>

        {/* Weiterer deutscher Teil */}
        <div className="mb-0">
          <p className="mb-0">
            Keine VFR-Nacht.<br />
            Keine Starts oder Landungen ohne Betriebsleiter!
          </p>
        </div>

        {/* Englischer Abschlussteil */}
        <div className="mb-2">
          <p className="fw-normal text-muted mb-0">
            No VFR Night.<br />
            No unattended arrivals or departures!
          </p>
        </div>
  </>
  );
}

export default Betriebszeiten;