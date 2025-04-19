import { ROUTES } from '../../routes';

function Datenschutz() {
  return (
    <div className="container text-md-left font-light text-black">
      <h3 className="text-black-50">Sehr geehrte Mitglieder und Luftsportler,</h3>
      <p className="fw-light">
        die FSV Gunzenhausen e.V. erhebt und nutzt personenbezogene Daten von Besuchern unseres Flugplatzes und unserer Webseite. Gemäß Datenschutzrecht sind wir zur Erteilung der folgenden Informationen verpflichtet.
      </p>

      <h3 className="text-black-50">1. Allgemeines, Inhalt dieser Erklärung</h3>
      <h4 className="text-black-50">1.1 Inhalt dieser Erklärung</h4>
      <p className="fw-light">
        Im Folgenden informieren wir Sie über die Erhebung personenbezogener Daten und die Rechte
      </p>
      <ul className='fw-light'>
        <li>bei einer Kontaktaufnahme mit uns.</li>
        <li>bei der Nutzung unserer Website.</li>
        <li>beim Besuch unseres Flugplatzes.</li>
      </ul>

      <h4 className="text-black-50">1.2 Name und Anschrift des Verantwortlichen</h4>
      <p className="fw-light">
        Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
      </p>

      <p style={{ fontFamily: 'monospace' }}>
        Flugsportvereinigung "Gelbe Bürg" Gunzenhausen e.V.<br />
        vertreten durch den ersten und zweiten Vorsitzenden; siehe <a href={ROUTES.IMPRESSUM}>Impressum / Kontakt</a><br />
        Albert-Schweitzer-Str. 93<br />
        91710 Gunzenhausen<br />
        Deutschland<br />
        Tel.: 09131 / 2728<br />
        E-Mail: vorstand@fsv-gunzenhausen.de<br />
        Website: www.fsv-gunzenhausen.de
      </p>

      <h3 className="text-black-50">2. Kontaktdaten des Datenschutzbeauftragten</h3>
      <p className="fw-light">Es ist (zurzeit noch) kein Datenschutzbeauftragter bestellt.</p>

      <h3 className="text-black-50">3. Erhebung personenbezogener Daten bei dem Besuch unserer Website</h3>
      <h4 className="text-black-50">3.1 Informatorische Nutzung der Website</h4>
      <p className="fw-light">
        Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Dies sind die folgenden, für die Anzeige unsere Website auf Ihrem Browser technisch erforderlichen Daten.<br />
        Rechtsgrundlage hierfür ist <span className='fw-semibold' >Art. 6 Abs. 1 Satz 1 lit f) DS-GVO</span>:
      </p>
      <ul className='fw-light'>
        <li>Ihre IP-Adresse</li>
        <li>Datum und Uhrzeit Ihres Besuches auf unseren Webseiten</li>
        <li>welche unserer Webseiten Sie besucht haben und die Verweildauer</li>
        <li>Zugriffsstatus/http-Statuscode</li>
        <li>jeweils übertragene Datenmenge</li>
        <li>den von Ihnen genutzten Webbrowser</li>
        <li>Sprache und Version der Browsersoftware</li>
        <li>das von Ihnen verwendete Betriebssystem und dessen Oberfläche</li>
        <li>den Domainnamen Ihres Internet Service Providers</li>
        <li>die Website von der Sie auf unserer Website gelangt sind</li>
      </ul>

      <h4 className="text-black-50">3.2 Verwendung von Cookies auf unserer Website</h4>
      <p className="fw-light">
        Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die den Cookie setzt (hier durch uns), bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen.
      </p>
      <p className="fw-light">Rechtsgrundlage für die Verwendung von Cookies ist <span className="fw-semibold">Art. 6 Abs. 1 Satz 1 lit f) DS-GVO</span>.</p>
      <p className="fw-light">
        Diese Website nutzt folgende Arten von Cookies, deren Umfang und Funktion im Folgenden erläutert werden:
      </p>
      <ul className='fw-light'>
        <li>Transistente Cookies (dazu b)</li>
        <li>Persistente Cookies (dazu c)</li>
      </ul>
      <p className="fw-light">
        Transistente Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen. Dazu zählen insbesondere die Session-Cookies. Diese speichern eine sogenannte Session-ID, mit welcher sich verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Dadurch kann Ihr Rechner wiedererkannt werden, wenn Sie auf unsere Website zurückkehren. Die Session-Cookies werden gelöscht, wenn Sie sich ausloggen oder den Browser schließen.
      </p>
      <p className="fw-light">
        Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann. Sie können die Cookies in den Sicherheitseinstellungen Ihres Browsers jederzeit löschen.
      </p>
      <p className="fw-light">
        Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen konfigurieren und z.B. die Annahme von Third-Party-Cookies oder allen Cookies ablehnen. Wir weisen Sie darauf hin, dass Sie dann eventuell nicht alle Funktionen dieser Website nutzen können.
      </p>
      <p className="fw-light">
        Wir setzen Cookies ein, um Sie für Folgebesuche identifizieren zu können, falls Sie über einen Account bei uns verfügen.
      </p>
      <p className="fw-light">
        Die genutzten Flash-Cookies werden nicht durch Ihren Browser erfasst, sondern durch Ihr Flash-Plug-in. Weiterhin nutzen wir HTML5 storage objects, die auf Ihrem Endgerät abgelegt werden. Diese Objekte speichern die erforderlichen Daten unabhängig von Ihrem verwendeten Browser und haben kein automatisches Ablaufdatum. Wenn Sie keine Verarbeitung der Flash-Cookies wünschen, müssen Sie in Ihrem Browser ein entsprechendes Add-On installieren. Die Nutzung von HTML5 storage objects können Sie verhindern, indem Sie in Ihrem Browser den privaten Modus einsetzen bzw. die Einstellung „keine Cookies akzeptieren“ verwenden. Zudem empfehlen wir, regelmäßig Ihre Cookies und den Browser-Verlauf manuell zu löschen.
      </p>

      <h4 className="text-black-50">3.3 Verwendung von Cookies durch Dritte</h4>
      <p className="fw-light">
        Auf einigen unserer Internetseiten sind Inhalte und Dienste von anderen Anbietern (z.B. YouTube, Facebook, Twitter) eingebunden, die ihrerseits Cookies und aktive Komponenten verwenden können. Wir haben auf die Verarbeitung von personenbezogenen Daten durch diese Anbieter keinen Einfluss.
      </p>
      <p className="fw-light">
        Bitte beachten Sie, dass die von uns bereitgestellte Möglichkeit zur Einstellung der zu verwendenden Cookies keine Auswirkungen auf Cookies und aktive Komponenten anderer Anbieter (z.B. YouTube, Facebook, Twitter) hat.
      </p>
      <p className="fw-light">
        Bitte informieren Sie sich auf den Internetseiten der jeweiligen Anbieter über den Umgang mit Ihren Daten.
      </p>

      <h4 className="text-black-50">3.4 Verwendung von externen Links</h4>
      <p className="fw-light">
        Unsere Internetseiten können Links zu Internetseiten Dritter − mit uns nicht verbundener Anbieter − enthalten. Nach Anklicken des Links haben wir keinen Einfluss mehr auf die Erhebung, Speicherung, Verarbeitung etwaiger mit dem Anklicken des Links an den Dritten übertragener, personenbezogener Daten (wie zum Beispiel die IP-Adresse oder die URL der Seite, auf der sich der Link befindet), da das Verhalten Dritter naturgemäß unserer Kontrolle entzogen ist. Für die Verarbeitung derartiger personenbezogener Daten durch Dritte übernehmen wir keine Verantwortung. Dies vorausgesetzt bitten wir um Beachtung der folgenden Hinweise
      </p>

      <h4 className="text-black-50">3.5 Verwendung personenbezogener Daten und Zweckbindung</h4>
      <p className="fw-light">
        Wir oder ein von uns beauftragtes Dienstleistungsunternehmen nutzt Ihre personenbezogenen Daten zu Zwecken der technischen Administration der Webseiten und für Ihre Anfragen nur im jeweils dafür erforderlichen Umfang oder gemäß den Angaben der Verarbeitungszwecke an den entsprechenden Stellen unserer Webseiten. Unsere Mitarbeiter und die von uns beauftragten Dienstleistungsunternehmen sind zur Verschwiegenheit und zur Einhaltung der Bestimmungen der Datenschutzgrundverordnung der Europäischen Union sowie des Bundesdatenschutzgesetzes verpflichtet. Die beauftragten Dienstleistungsunternehmen wurden sorgfältig ausgewählt und beauftragt, sind an unsere Weisungen gebunden und werden regelmäßig kontrolliert.
      </p>
      <p className="fw-light">
        Des Weiteren werden alle erforderlichen technischen und organisatorischen Maßnahmen zur Einhaltung des Datenschutzes ergriffen.
      </p>

      <h3 className="text-black-50">4. Beobachtung unseres Flugplatzes über Webcams</h3>
      <p className="fw-light">
        Auf unserem Flugplatz sind vor allem zur Übermittlung von Wetterinformationen zwei Webcams in Betrieb. Diese sind so angebracht und eingestellt, dass Gesichter von Personen nicht erkennbar sind.
      </p>
      <p className="fw-light">
        Rechtsgrundlage: <span className="fw-semibold">§ 23 Abs. 1 Nr. 2 KUG</span> besagt, dass auch solche Bilder ohne Einwilligung der Betroffenen dann veröffentlicht werden dürfen, wenn die Personen nur als Beiwerk neben einer Landschaft oder sonstigen Örtlichkeit erscheinen.
      </p>
      <p className="fw-light">
        Es werden lediglich Bilddaten erfasst. Eine Erfassung von Audio-Daten (Ton) erfolgt nicht. Eine längerfristige Speicherung der Bilder findet seitens der FSV Gunzenhausen nicht statt. Inwieweit die veröffentlichten Bilder von anderen Betreibern im Internet gespeichert werden, entzieht sich unserem Einfluss.
      </p>

      <h3 className="text-black-50">5. Wireless LAN</h3>
      <p className="fw-light">
        Der Flugplatz betreibt nur für interne Zwecke ein eigenes WLAN. Hierzu haben Mitglieder keinen Zugriff. Bei fehlerhaften Anmeldeversuchen werden zur Verfolgung von Missbrauch folgende Daten protokolliert:
      </p>
      <ul className='fw-light'>
        <li>Name des Gerätes</li>
        <li>MAC-Adresse des Gerätes</li>
      </ul>
      <p className="fw-light">
        Darüber hinaus werden keine personenbezogenen Daten erfasst.
      </p>
      <p className="fw-light">
        Es existiert am Flugplatz zusätzlich ein öffentliches WLAN (Freies WLAN Gunzenhausen), welches nicht von der FSV Gunzenhausen betrieben wird. Hier gilt die Datenschutzerklärung des Anbieters.
      </p>

      <h3 className="text-black-50">6. Telefon</h3>
      <p className="fw-light">
        Die FSV-Gunzenhausen speichert in ihrer Telefonanlage und bei ihrem Telefonanbieter Metadaten der über die Anlage durchgeführten Telefongespräche:
      </p>
      <ul className='fw-light'>
        <li>Datum</li>
        <li>Zeitpunkt</li>
        <li>Dauer des Telefonanrufes</li>
        <li>Verwendeter Hausapparat</li>
        <li>Telefonnummer des Gesprächspartners</li>
      </ul>
      <p className="fw-light">
        Diese Daten dienen der Rechnungsprüfung und der Nachverfolgung von Missbrauch.
      </p>

      <h3 className="text-black-50">7. Rechte der betroffenen Person</h3>
      <h4 className="text-black-50">7.1 Daten die Aufgrund einer erteilten Einwilligung verarbeitet werden</h4>
      <p className="fw-light">
        Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten erteilt haben, können Sie diese jederzeit widerrufen. Ein solcher Widerruf beeinflusst die Zulässigkeit der Verarbeitung Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber uns ausgesprochen haben.
      </p>
      <p className="fw-light">
        Bitte beachten Sie, dass Sie der Erhebung und Verarbeitung von personenbezogenen Daten nicht widersprechen können, wenn die Daten anlässlich einer Mitgliedschaft in einem Verein oder der beantragten Aufnahme in einen Verein von diesem erhoben werden und ausschließlich zum Zwecke der Gewährung der aus der Mitgliedschaft resultierenden Rechte verwendet werden. Unberührt bleibt die Verpflichtung des Vereins als verantwortlicher Stelle zur Einhaltung des Datenschutzes und zur Erfüllung der Informationspflichten.
      </p>
      <p className="fw-light">
        Soweit wir Ihre personenbezogenen Daten nicht aufgrund Ihrer Einwilligung, zur Erfüllung eines mit Ihnen geschlossenen oder in Anbahnung befindlichen Vertrages (einschließlich der Mitgliedschaft in einem Verein) oder aufgrund eines anderen gesetzlichen Erlaubnistatbestandes verarbeiten, sondern aufgrund einer Interessenabwägung nach <span className="fw-semibold">Art. 6 Abs. 1 Satz 1 lit f) DS-GVO</span>, können Sie Widerspruch gegen die Verarbeitung einlegen. Wenn Sie in einem solchen Falle der Nutzung Ihrer Daten widersprechen, bitten wir um Darlegung der Gründe, weshalb Ihre personenbezogenen Daten nicht gemäß unserer Beschreibung verarbeitet werden sollten. Wir werden sodann die Sachlage prüfen und entweder die Verarbeitung Ihrer Daten einstellen bzw. anpassen oder Ihnen unsere zwingenden schutzwürdigen Gründe aufzeigen, aufgrund derer wir die Verarbeitung fortführen.
      </p>

      <h4 className="text-black-50">7.2 Weitere Rechte</h4>
      <p className="fw-light">
        Sie haben ferner gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
      </p>
      <ul className='fw-light'>
        <li>Recht auf Auskunft</li>
        <li>Recht auf Berichtigung oder Löschung</li>
        <li>Recht auf Einschränkung der Verarbeitung</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung</li>
        <li>Recht auf Datenübertragbarkeit</li>
        <li>Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</li>
      </ul>

      <h4 className="text-black-50">7.3 Automatisierte Entscheidungsfindung, Profiling, Datenübermittlung in Nicht-EU-Staaten</h4>
      <p className="fw-light">
        Die Daten werden nicht für eine automatisierte Entscheidungsfindung oder ein Profiling verwendet. Eine Datenübermittlung an Stellen außerhalb der Europäischen Union findet nicht statt.
      </p>
    </div>
  );
}

export default Datenschutz;
