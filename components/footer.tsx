export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>İletişime Geç</h3>

        <p>
          Projeler, iş birliği veya staj fırsatları için benimle iletişime
          geçebilirsiniz.
        </p>

        <div className="footer-links">
          <a href="mailto:nilaygunenc@email.com">✉️ E-posta</a>
          <a
            href="https://www.linkedin.com/in/nilay-g%C3%BCnen%C3%A7-26314a2a8/"
            target="_blank"
          >
            💼 LinkedIn
          </a>
          <a href="https://github.com/nilaygunenc" target="_blank">
            💻 GitHub
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Nilay Günenç
        </span>
      </div>
    </footer>
  );
}
