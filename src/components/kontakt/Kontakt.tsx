// This component is used to display contact information for the airfield operator.
import { ROUTES } from '../../routes';

function Kontakt() {

  return (
        <div className="container text-md-left font-weight-light">
            <h3 className="text-black-50">Verantwortlich im Sinne des Presserechts für den Inhalt der Seiten</h3>
            <p className='fw-light'>Flugsportvereinigung "Gelbe Bürg" e.V. Gunzenhausen<br/>
            Albert-Schweitzer-Str. 93<br/>
            91710 Gunzenhausen<br/>
            Telefon (Flugplatz): 09831 / 2728 (Besetzt Samstags ab 13:00, Sonn- und Feiertags ab 10:00)<br/>
            Fax (Flugplatz): 09831 / 8829960<br/>
            E-Mail: vorstand@fsv-gunzenhausen.de</p>
            <br/>
            <h3 className="text-black-50">Umsatzsteuer-Identifikationsnummer</h3>
            <p className='fw-light'>DE 131 950 277</p>
            <br/>
            <h3 className="text-black-50">Vereinsregister</h3>
            <p className='fw-light'>Die Flugsportvereinigung "Gelbe Bürg" Gunzenhausen e.V. ist im Vereinsregister des Amtsgerichts Ansbach unter der Nummer VR 30236 eingetragen.</p>
            <br/>
            <h3 className="text-black-50">Vertretungsberechtigte</h3>
            <p className='fw-light'>Der Verein wird vertreten durch den 1. oder 2. Vorsitzenden:<br/>
            1. Vorsitzender: Lukas Hasselbacher<br/>
            2. Vorsitzender: Michel Roeder</p>
            <br/>
            <h3 className="text-black-50">Gutscheinverkauf</h3>
            <p className='fw-light'>Details auf unserer Seite für <a href={ROUTES.GUTSCHEINE}>Rundflüge</a></p>
        </div>
  );
}

export default Kontakt;
