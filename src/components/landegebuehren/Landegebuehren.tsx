import { useState } from 'react';
import {
  AircraftType,
  AircraftWeight,
  SchulflugSubType,
  SoundProtection,
  FlightSubType,
} from './Fees';

import {
  fees,
  soundOptions,
  aircraftTypes,
  weights,
  schulflugSubTypes,
  flightTypes,
} from './Fees';

function Landegebuehren() {
  const [sound, setSound] = useState<SoundProtection>('mit erhöhtem Schallschutz');
  const [type, setType] = useState<AircraftType>('UL-Flugzeuge');
  const [weight, setWeight] = useState<AircraftWeight>('bis 1000kg');
  const [subType, setSubType] = useState<SchulflugSubType>('UL');
  const [flightType, setFlightType] = useState<FlightSubType>('Normal');

  const selectedType = flightType === 'Schulflug' ? 'Schulflüge' : type;
  const feeData = fees[flightType]?.[sound]?.[selectedType];

  let fee: number | undefined;

  if (typeof feeData === 'number') {
    fee = feeData;
  } else if (flightType === 'Schulflug') {
    const sub = (feeData as Record<SchulflugSubType, number | Record<AircraftWeight, number> | undefined>)?.[subType];
    fee = typeof sub === 'number' ? sub : sub?.[weight];
  } else if (type === 'Motorflugzeuge') {
    fee = (feeData as Record<AircraftWeight, number | undefined>)?.[weight];
  }

  return (
    <div className="container pb-4">
     <p className="lead mb-5">
        Für Flugzeuge, selbsstartende Motorsegler und Ultraleichtflugzeuge gelten die Gebühren gemäß der Gebührenordnung für den Sonderlandeplatz "Gunzenhausen-Reutberg", Flugsportvereinigung "Gelbe Bürg" Gunzenhausen und bemessen sich (Preise incl. 19% MwSt.) nach dem in der in der Zulassungsurkunde des Luftfahrzeugs eingetragenen Höchstgewicht:
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-14">
          <div className="card shadow rounded-4" style={{ maxWidth: '600px' }}>
            <div className="card-body">
              {/* Flight Type Selector */}
              <div className="mb-3">
                <label htmlFor="flightType" className="form-label fw-bold">Flugart</label>
                <select
                  id="flightType"
                  className="form-select"
                  value={flightType}
                  onChange={e => setFlightType(e.target.value as FlightSubType)}
                >
                  {flightTypes.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Aircraft Type Selector (Only if not Schulflug) */}
              {flightType === 'Normal' && (
                <div className="mb-3">
                  <label htmlFor="type" className="form-label fw-bold">Flugzeugtyp</label>
                  <select
                    id="type"
                    className="form-select"
                    value={type}
                    onChange={e => setType(e.target.value as AircraftType)}
                  >
                    {aircraftTypes.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

                            {/* Schulflug SubType Selector */}
                            {flightType === 'Schulflug' && (
                <div className="mb-3">
                  <label htmlFor="subType" className="form-label fw-bold">Flugzeugtyp</label>
                  <select
                    id="subType"
                    className="form-select"
                    value={subType}
                    onChange={e => setSubType(e.target.value as SchulflugSubType)}
                  >
                    {schulflugSubTypes.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Sound Protection Selector */}
              <div className="mb-3">
                <label htmlFor="sound" className="form-label fw-bold">Schallschutz</label>
                <select
                  id="sound"
                  className="form-select"
                  value={sound}
                  onChange={e => setSound(e.target.value as SoundProtection)}
                >
                  {soundOptions.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>



              {/* Weight Selector */}
              {(flightType === 'Normal' && type === 'Motorflugzeuge') ||
              (flightType === 'Schulflug' && subType === 'Flugzeuge') ? (
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label fw-bold">Gewicht</label>
                  <select
                    id="weight"
                    className="form-select"
                    value={weight}
                    onChange={e => setWeight(e.target.value as AircraftWeight)}
                  >
                    {weights.map(weightOption => (
                      <option key={weightOption} value={weightOption}>
                        {weightOption}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              {/* Fee Display */}
              <div className="mt-4 text-center">
                <h3 className="fw-bold">
                  <span className="text-primary">Gebühr: </span>
                  {fee !== undefined ? (fee === 0 ? 'frei' : `${fee} €`) : 'Nicht verfügbar'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h3 className="text-black-50">Starts und Landungen außerhalb von Wochenenden</h3>
                    <p className='fw-light'>  Zusätzlich zu den oben genannten Gebühren wird für Landungen außerhalb der Wochenenden eine Gebühr von 6,00 € erhoben, sollte die Flugleitung hierfür extra besetzt werden.</p>

        </div>
    </div>
  );
}

export default Landegebuehren;