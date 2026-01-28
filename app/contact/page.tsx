import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact">
        <h1>İletişim</h1>
        <p className="contact-subtitle">
          Benimle aşağıdaki kanallar üzerinden iletişime geçebilirsiniz.
        </p>

        <div className="contact-grid">
          <a
            href="www.linkedin.com/in/nilay-gunenc-20ng03"
            target="_blank"
            className="contact-card"
          >
            <span>💼</span>
            <div>
              <h3>LinkedIn</h3>
             
            </div>
          </a>

          <a
            href="https://github.com/nilaygunenc"
            target="_blank"
            className="contact-card"
          >
            <span>💻</span>
            <div>
              <h3>GitHub</h3>
              <p></p>
            </div>
          </a>

          <div className="contact-card">
            <span>📞</span>
            <div>
              <h3>Telefon</h3>
              <p>+90 545 255 89 74 </p>
            </div>
          </div>

          <div className="contact-card">
            <span>✉️</span>
            <div>
              <h3>E-posta</h3>
              <p>nilaygunenc@gmail.com</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/kullaniciadi"
            target="_blank"
            className="contact-card"
          >
            <span>📷</span>
            <div>
              <h3>Instagram</h3>
              <p>@gunenc_nilay</p>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
