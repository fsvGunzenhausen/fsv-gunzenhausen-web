import React, { useState } from "react";
import logo from '../../assets/header/fsvlogo.png';

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
  notes: "",
});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = (): boolean => {
    // All fields except notes must be filled
    return (
      form.pilotName.trim() !== "" &&
      form.email.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.aircraftReg.trim() !== "" &&
      form.aircraftType.trim() !== "" &&
      form.date.trim() !== "" &&
      form.eta.trim() !== "" &&
      form.departure.trim() !== ""
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/submit-ppr.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setMessage("PPR-Anfrage erfolgreich gesendet!");
      else setMessage("Ihre Anfrage konnten nicht gesendet werden. Bitte konaktieren Sie uns direkt per E-Mail an vorstand@fsv-gunzenhausen.de");
    } catch (err) {
      setMessage("Ihre Anfrage konnten nicht gesendet werden. Bitte konaktieren Sie uns direkt per E-Mail an vorstand@fsv-gunzenhausen.de");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger link */}
      <a href="#" data-bs-toggle="modal" data-bs-target="#pprModal" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        Formular für PPR-Anfragen / Form for PPR Requests
      </a>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="pprModal"
        tabIndex={-1}
        aria-labelledby="pprModalLabel"
        aria-hidden="true"  >
        <div className="modal-dialog modal-lg modal-dialog-centered" style={{ maxWidth: "500px" }}>
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center"
        style={{ backgroundColor: "#2c384e", color: "white" }}>
              {/* Operator Logo */}
         <img src={logo} alt="FSV Gunzenhausen Logo" style={{ width: 'auto', height: '40px', marginRight: '24px' }}/>
              {/* Modal Title */}
              <h4 className="modal-title ml-12" id="pprModalLabel">PPR Anfrage</h4>
              <button type="button"  
                onClick={() => setMessage(null)}
                className="btn-close btn-close-white ms-auto" data-bs-dismiss="modal" aria-label="Schließen" />
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label>Name</label>
                <input
                  name="pilotName"
                  placeholder="Pilot Name"
                  value={form.pilotName}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label>E-Mail</label>
                <input
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control mb-2"
                  autoComplete="email"
                />

                <label>Telefonnummer / Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Telefonnummer / Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control mb-2"
                />


                <div className="row g-3 mb-2">
                    <div className="col-md-6">
                      <label>Flugzeugtyp / Aircraft Type</label>
                        <input
                        name="aircraftType"
                        placeholder="Flugzeugtyp / Aircraft Type"
                        value={form.aircraftType}
                        onChange={handleChange}
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Kennzeichen / Registration</label>
                        <input
                        name="aircraftReg"
                        placeholder="D-EXXX"
                        value={form.aircraftReg}
                        onChange={handleChange}
                        className="form-control"
                        />
                    </div>
                    </div>    

                <label>Datum / Date</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label>Voraussichtliche Ankunftszeit (ETA)</label>
                <input
                  name="eta"
                  type="time"
                  value={form.eta}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label>Abflughafen / Departure Aerodrome</label>
                <input
                  name="departure"
                  placeholder="ICAO Code oder Name / ICAO code or name"
                  value={form.departure}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label>Zusätzliche Hinweise / Additional Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              {message && <p className="mt-2">{message}</p>}
            </div>

            <div className="modal-footer">
              <button type="button"   onClick={() => setMessage(null)} className="btn btn-secondary" data-bs-dismiss="modal">
                Schließen
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!isFormValid() || loading}
              >
                {loading ? "Senden..." : "PPR-Anfrage senden"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
