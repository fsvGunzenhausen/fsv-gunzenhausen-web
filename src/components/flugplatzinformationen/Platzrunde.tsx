import trafficPattern from '../../assets/components/flugplatzinformationen/Platzrunde_Hinweis.png';

function Platzrunde() {
  
  return (
    <div className="row">
    {/* Left column: Trigger image */}
    <div className="col-lg-6 mb-3">
      {/* Image with click trigger */}
      <img
        src={trafficPattern}
        alt="Platzrunde"
        className="img-fluid rounded w-100"
        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
        data-bs-toggle="modal"
        data-bs-target="#platzrundeModal"
      />

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="platzrundeModal"
        aria-labelledby="platzrundeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered max-h-80">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="platzrundeModalLabel">Platzrunde Gunzenhausen</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body" style={{ display:'contents'}}>
              <img src={trafficPattern} alt="Platzrunde" className="img-fluid h-100"
                       />
            </div>
            {/* Footer with copyright and non-navigational info */}
            <div className="modal-footer justify-content-between">
              <div className='row-lg-6'>
                  <p style={{ fontSize: '0.75em', color: '#555' }}>
                    © {new Date().getFullYear()} Bearbeitetes Kartenbild basierend auf Daten von{' '}
                    <a
                      href="https://www.openstreetmap.org/copyright"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      © OpenStreetMap-Mitwirkenden
                    </a>, Lizenz:{' '}
                    <a
                      href="https://opendatacommons.org/licenses/odbl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ODbL
                    </a>
                  </p>
              </div>
              <div className='row-lg-6'>
                            <p className='mb-1' style={{ fontSize: '0.85em', color: '#444' }}>
                  Überflüge des Kreiskrankenhauses am westlichen Platzende sind möglichst zu vermeiden.
                </p>
                <p className='mb-0' style={{ fontSize: '0.85em', color: '#444' }}>
                  Diese Darstellung dient ausschließlich zu Informationszwecken und darf nicht für Navigationszwecke verwendet werden.
                </p>
                <p className="fw-normal text-muted mb-0" style={{ fontSize: '0.85em' }}>
                  This depiction is for informational purposes only and must not be used for navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right column: Additional info */}
    <div className="col-lg-6">
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontSize: '1em', color: '#555', marginBottom: '0.1rem' }}>
          Bearbeitete OpenStreetMap-Karte
        </p>
        <p style={{ fontSize: '0.6em', color: '#555' }}>
          Bearbeitetes Kartenbild basierend auf Daten von{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
          >
            © OpenStreetMap-Mitwirkenden
          </a>,
          <br /> Lizenz:{' '}
          <a
            href="https://opendatacommons.org/licenses/odbl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ODbL
          </a>
        </p>
      </div>

      {/* Non-navigational info */}
      <div className="mt-5" style={{ fontSize: '0.95em', color: '#444' }}>
        <p>Überflüge des Kreiskrankenhauses am westlichen Platzende sind möglichst zu vermeiden.</p>
        <p className='fw-normal text-muted'>Diese Darstellung dient ausschließlich zu Informationszwecken und darf nicht für Navigationszwecke verwendet werden.</p>
        <p className='fw-normal text-muted mb-0'>This depiction is for informational purposes only and must not be used for navigation.</p>
      </div>
    </div>
  </div>
  );
}

export default Platzrunde;