export default function CVPage() {
  return (
    <main style={{ padding: "3rem", maxWidth: "900px", margin: "auto" }}>
      
      {/* BAŞLIK + PDF BUTONU */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Curriculum Vitae</h1>

        <a
          href="/Nilaygunenc_cv.pdf"
          download
          style={{
            padding: "0.6rem 1.2rem",
            border: "1px solid #333",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          Download PDF
        </a>
      </div>

      {/* PROFILE */}
      <section>
        <h2>Profile</h2>
        <p>
          I am a fourth-year Computer Engineering student with a strong interest
          in Computer Vision, Artificial Intelligence, and Full-Stack development.
          I have been actively developing software projects for over a year,
          focusing on practical and scalable solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Python, JavaScript, Java, PHP</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, React, Next.js</li>
          <li><strong>AI & Computer Vision:</strong> OpenCV, NumPy, Matplotlib</li>
          <li><strong>Databases:</strong> MySQL</li>
          <li><strong>Tools:</strong> Git, XAMPP, VS Code</li>
        </ul>
      </section>

      {/* INTERESTS */}
      <section>
        <h2>Interests</h2>
        <p>
          Computer Vision, Artificial Intelligence, Machine Learning,
          and data-driven software development.
        </p>
      </section>
    </main>
  );
}
