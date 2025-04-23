// This component is used to display information about the airfield, including its ICAO identifier, operator, location, and other relevant details.
import flugplatzdaten from './Flugplatzdaten';

function Flugplatzinformationen() {
  // The data is imported from a separate file (Flugplatzdaten.tsx) and is expected to be an array of tuples.

  return (
    <div className="container pb-4">
      <div className="row justify-content-center">
        <div className="col-lg-14 ">
          <div className="card shadow rounded-4">
            <div className="card-body">
              <div className="table-responsive w-100" style={{ overflowX: 'hidden' }}>
                <table className="table table-bordered align-middle">
                <colgroup>
                <col style={{ minWidth: '45px'}} />
                </colgroup>
                  <tbody>
                    {flugplatzdaten.map(([labelDe, labelEn, content], index) => (
                      <tr key={index}>
                        <th scope="row" className="align-top">
                          <div className="mb-1">{labelDe}</div>
                          <div className="fw-normal text-muted">{labelEn}</div>
                        </th>
                        <td>{content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flugplatzinformationen;
