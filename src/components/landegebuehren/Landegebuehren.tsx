import { useState, useEffect } from 'react';
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
  const [flightType, setFlightType] = useState<FlightSubType>('Normal');
  const [type, setType] = useState<AircraftType>('UL-Flugzeuge');
  const [subType, setSubType] = useState<SchulflugSubType>('UL');
  const [weight, setWeight] = useState<AircraftWeight>('bis 1000kg');
  const [sound, setSound] = useState<SoundProtection>('mit erhöhtem Schallschutz');

  
  const needsWeight =
    (flightType === 'Normal' && type === 'Motorflugzeuge') ||
    (flightType === 'Schulflug' && subType === 'Motorflugzeug');

   const needsSound =
    flightType === 'Normal'
      ? !['UL-Flugzeuge', 'Segelflugzeuge', 'Segelflugzeuge mit Motor (nicht Selbststarter)'].includes(type)
      : subType !== 'UL'; 
  
   /* Reset invalid state */
  useEffect(() => {
    if (!needsWeight) {
      setWeight('bis 1000kg');
    }
  }, [needsWeight]);

  useEffect(() => {
    if (!needsSound) {
      setSound('mit erhöhtem Schallschutz');
    }
  }, [needsSound]);
    

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
      <p className="lead mb-5"> Für Flugzeuge, selbsstartende Motorsegler und Ultraleichtflugzeuge gelten die Gebühren gemäß der Gebührenordnung für den Sonderlandeplatz "Gunzenhausen-Reutberg", Flugsportvereinigung "Gelbe Bürg" Gunzenhausen und bemessen sich (Preise incl. 19% MwSt.) nach dem in der Zulassungsurkunde des Luftfahrzeugs eingetragenen Höchstgewicht: </p>
      <div className="row justify-content-center">
        <div className="col-lg-14">
      <div className="card shadow rounded-4">
        <div className="card-body">
          {/* Flight Type */}
          <div className="mb-3">
            <label className="form-label fw-bold">Flugart</label>
            <select
              className="form-select"
              value={flightType}
              onChange={e => setFlightType(e.target.value as FlightSubType)}
            >
              {flightTypes.map(ft => (
                <option key={ft} value={ft}>{ft}</option>
              ))}
            </select>
          </div>

          {/* Aircraft Type */}
          {flightType === 'Normal' && (
            <div className="mb-3">
              <label className="form-label fw-bold">Flugzeugtyp</label>
              <select
                className="form-select"
                value={type}
                onChange={e => setType(e.target.value as AircraftType)}
              >
                {aircraftTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          )}

          {flightType === 'Schulflug' && (
            <div className="mb-3">
              <label className="form-label fw-bold">Flugzeugtyp</label>
              <select
                className="form-select"
                value={subType}
                onChange={e => setSubType(e.target.value as SchulflugSubType)}
              >
                {schulflugSubTypes.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          )}

          {/* Sound */}
          {needsSound && (
            <div className="mb-3">
              <label className="form-label fw-bold">Schallschutz</label>
              <select
                className="form-select"
                value={sound}
                onChange={e => setSound(e.target.value as SoundProtection)}
              >
                {soundOptions.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          {/* Weight */}
          {needsWeight && (
            <div className="mb-3">
              <label className="form-label fw-bold">Gewicht</label>
              <select
                className="form-select"
                value={weight}
                onChange={e => setWeight(e.target.value as AircraftWeight)}
              >
                {weights.map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          )}

          {/* Fee */}
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

    </div>
  );
}

export default Landegebuehren;