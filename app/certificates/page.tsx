import "@/styles/globals.css";

export default function Sertifikalar() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Sertifikalar</h1>
        <p className="page-subtitle">
          Aldığım akademik ve profesyonel sertifikalar
        </p>
      </header>

      <section className="certificates-grid">
        <div className="certificate-card">
             <h3>OpenCV ile Bilgisayarlı Görü</h3>
            <img
            src="/certificates/sertifika.png"
            alt="OpenCV Sertifikası"
          />
         
        </div>

        <div className="certificate-card">
          <h3>HTML sertifikası</h3>
           <img
            src="/certificates/sertifika2.png"
            alt="OpenCV Sertifikası"
          />
          <p className="certificate-org">Online Eğitim Platformu</p>
          
        </div>

        <div className="certificate-card">
          <h3>Girişimcilik Sertifikası</h3>
          <img
            src="/certificates/kosgeb.png"
            alt="OpenCV Sertifikası"
          />
          <p className="certificate-org">Online Kurs</p>
          
          
        </div>
      </section>
    </main>
  );
}
