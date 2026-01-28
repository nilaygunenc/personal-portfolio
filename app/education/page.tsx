import "@/styles/globals.css";

export default function Education() {
  return (
    <main className="education-container">
      <header className="education-header">
        <h1>Education</h1>
        <p>Academic background and formal education</p>
      </header>

      <div className="education-timeline">
        <div className="education-card">
          <span className="edu-year">—</span>
          <h3>Gazipaşa İlkokulu</h3>
          <p>Primary Education</p>
        </div>

        <div className="education-card">
          <span className="edu-year">—</span>
          <h3>Gazipaşa Ortaokulu</h3>
          <p>Middle School Education</p>
        </div>

        <div className="education-card">
          <span className="edu-year">2017 – 2021</span>
          <h3>Bolu Anadolu Lisesi</h3>
          <p>High School Education</p>
        </div>

        <div className="education-card">
          <span className="edu-year">2022 – 2026</span>
          <h3>Zonguldak Bülent Ecevit University</h3>
          <p>B.Sc. in Computer Engineering</p>
        </div>
      </div>
    </main>
  );
}
