import React, { useState } from "react";

export default function PPR() {
  const [form, setForm] = useState({
    pilotName: "",
    email: "",
    phone: "",
    aircraftType: "",
    aircraftReg: "",
    date: "",
    eta: "",
    departure: "",
    departureDate: "",
    etd: "",
    notes: "",
    address: "",
  });

  const buildMailtoLink = () => {
        const subject = "PPR-Anfrage Sonderlandeplatz Gunzenhausen-Reutberg";

        const body = `
      Hallo FSV-Team,

      leider konnte meine PPR-Anfrage über das Formular nicht gesendet werden.
      Hier sind meine eingegebenen Daten:

      Name: ${form.pilotName}
      E-Mail: ${form.email}
      Telefon: ${form.phone}

      Flugzeugtyp: ${form.aircraftType}
      Kennzeichen: ${form.aircraftReg}

      Abflughafen: ${form.departure}

      Ankunft:
      - Datum: ${form.date}
      - Uhrzeit (ETA): ${form.eta}

      Abflug:
      - Datum: ${form.departureDate}
      - Uhrzeit (ETD): ${form.etd}

      Zusätzliche Hinweise:
      ${form.notes || "-"}

      Mit freundlichen Grüßen
      ${form.pilotName}
      `;

        return `mailto:vorstand@fsv-gunzenhausen.de?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
      };


  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () =>
    form.pilotName &&
    form.email &&
    form.phone &&
    form.aircraftType &&
    form.aircraftReg &&
    form.date &&
    form.eta &&
    form.departure &&
    form.departureDate &&
    form.etd;

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/submit-ppr.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setShowModal(true);
        setForm({
          pilotName: "",
          email: "",
          phone: "",
          aircraftType: "",
          aircraftReg: "",
          date: "",
          eta: "",
          departure: "",
          departureDate: "",
          etd: "",
          notes: "",
          address: "",
        });
      } else {
             setIsSuccess(false);
            setShowModal(true);
      }
    } catch {
         setIsSuccess(false);
    setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>   <div className="container pb-4">
      <p className="lead mb-5">
        Bitte füllen Sie das folgende Formular aus, um eine PPR-Anfrage (Prior Permission Required) für den Sonderlandeplatz Gunzenhausen-Reutberg zu stellen. Wir werden Ihre Anfrage so schnell wie möglich bearbeiten. Bitte beachten 
        Sie, dass eine PPR-Anfrage mindestens 24 Stunden vor dem geplanten Ankunftszeitpunkt eingereicht werden sollte. Das reine absenden dieses Formulars stellt keine Genehmigung zum Landen dar.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-14 ">
          <div className="card shadow rounded-4 p-3 p-md-4">
            <div className="card-body">
              {/* Pilot info */}
              <div className="mb-3">
                <label className="form-label">
                  Name: <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Pilot Name"
                  name="pilotName"
                  value={form.pilotName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    E-Mail: <span className="text-danger">*</span>
                  </label>
                  <input
                    placeholder="E-Mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Telefon / Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    placeholder="Telefon / Phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              {/* Aircraft */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Flugzeugtyp / Aircraft Type: <span className="text-danger">*</span>
                  </label>
                  <input
                    placeholder="z.B. WT-9"
                    name="aircraftType"
                    value={form.aircraftType}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Kennzeichen / Registration <span className="text-danger">*</span>
                  </label>
                  <input
                    placeholder="z.B. D-MXXX"
                    name="aircraftReg"
                    value={form.aircraftReg}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              {/* Departure */}
              <div className="mb-3">
                <label className="form-label">
                  Abflughafen / Departure Aerodrome: <span className="text-danger">*</span>
                </label>
                <input
                   placeholder="ICAO Code oder Name / ICAO code or name"
                  name="departure"
                  value={form.departure}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              {/* ETA */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                   Voraussichtliche Ankunftszeit (ETA): <span className="text-danger">*</span>
                  </label>
                  <input
                    type="time"
                    name="eta"
                    value={form.eta}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                   Ankunftsdatum / Date of Arrival: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              {/* ETD */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Voraussichtliche Abflugzeit (ETD): <span className="text-danger">*</span>
                  </label>
                  <input
                    type="time"
                    name="etd"
                    value={form.etd}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Abflugdatum / Departure Date: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    value={form.departureDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mb-4">
                <label className="form-label">Zusätzliche Hinweise /Additional Notes:</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="form-control"
                  rows={3}
                />
              </div>
              <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary px-4"
                  disabled={!isFormValid() || loading}
                  onClick={handleSubmit}
                >
                  {loading ? "Senden..." : "PPR-Anfrage senden"}
                </button>
              </div>

              <p className="mt-3 mb-0 text-muted small">
                <span className="text-danger">*</span> Pflichtfelder / required
                fields
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div
                  className={`modal-header ${
                    isSuccess ? "bg-success" : "bg-danger"
                  } text-white`}
                >
                  <h5 className="modal-title">
                    {isSuccess
                      ? "PPR-Anfrage gesendet"
                      : "Fehler bei der Anfrage"}
                  </h5>
                  <button
                    className="btn-close btn-close-white"
                    onClick={() => setShowModal(false)}
                  />
                </div>

                <div className="modal-body">
                  {isSuccess ? (
                    <p>
                      Ihre PPR-Anfrage wurde erfolgreich übermittelt!
                      <br />
                      <strong>Bitte beachten Sie, dass dies noch keine Landegenehmigung darstellt.</strong>
                    </p>
                  ) : (
                    <div>
                        <p>
                          Die Anfrage konnte leider nicht gesendet werden.
                          <br />
                          Bitte senden Sie uns Ihre Anfrage per E-Mail:
                        </p>

                        <a
                          href={buildMailtoLink()}
                          className="fw-bold mt-3"
                          style={{ fontSize: "1.1rem" }}
                        >
                          Anfrage per E-Mail senden
                        </a>
                      </div>
                  )}
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Backdrop */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
}
