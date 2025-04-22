

function Angebote() {

  return (
        <div className="row text-center">
                    {/* Familienangebot & Segelfliegen */}
          <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
            <div className="card d-block mb-4 shadow p-0">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal py-1">Familienangebot</h4>
              </div>
              <div className="card-body mt-4">
                <div className="m-3 text-muted">
                  Kinder unter 14 Jahren in Begleitung mindestens eines Erwachsenen erhalten einen Nachlass von 5 € auf den oben angegebenen pro Personen Preis.
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
            <div className="card d-block mb-4 shadow p-0">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal py-1">Segelfliegen</h4>
              </div>
              <div className="card-body mt-4">
                <div className="mx-3 text-muted mb-1">
                  Das Spiel mit dem Wind mit einem unserer erfahrenen Piloten in einem zweisitzigen Segelflugzeug erleben!
                </div>
                <div className="mb-3 pt-2 text-muted">Wir machen es möglich!</div>
                <div className='mx-3'>
                  <table className="table border-top-0">
                    <tbody>
                      <tr className='border-top'>
                        <td className='text-start'>Windenstart</td>
                        <td className='text-start'>inkl. Flugzeit 5-10 min</td>
                        <td className='text-start' style={{minWidth: '70px'}}>€ 10,-</td>
                      </tr>
                      <tr>
                        <td className='text-start border-bottom-0'>Flugzeug Schleppstart</td>
                        <td className='text-start border-bottom-0'>inkl. Flugzeit 20-30 min</td>
                        <td className='text-start border-bottom-0' style={{minWidth: '70px'}}>€ 50,-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  );
}

export default Angebote;
