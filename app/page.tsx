"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/footer";


export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <main className="hero">
        <div className="hero-content">
          <button
            className="lang-btn"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <h1 className="fade-in">Fatma Nilay Günenç</h1>

          <h2 className="slide-up">
            {lang === "tr"
              ? "Bilgisayar Mühendisliği Öğrencisi"
              : "Computer Engineering Student"}
          </h2>

          <p className="fade-in delay">
            {lang === "tr"
              ? "Görüntü İşleme ve Yapay Zekâ odaklı projeler geliştiren, full-stack altyapısına sahip geliştirici."
              : "A Computer Engineering student focused on Computer Vision, Artificial Intelligence, and Full-Stack development."}
          </p>

          <div className="hero-buttons">
            <a href="/projects">
              {lang === "tr" ? "Projelerimi Gör" : "View Projects"}
            </a>

            <a href="/Nilaygunenc_cv.pdf" download>
              {lang === "tr" ? "CV İndir" : "Download CV"}
            </a>
          </div>
        </div>
      </main>

      {/* ===== SOFT SKILLS ===== */}
      <section className="soft-skills">
        <h2>{lang === "tr" ? "Yetkinlikler" : "Soft Skills"}</h2>

        <div className="soft-skills-grid">
          <div className="soft-skill-card">
            <span>🤝</span>
            <p>{lang === "tr" ? "Takım Çalışması" : "Teamwork"}</p>
          </div>

          <div className="soft-skill-card">
            <span>🧠</span>
            <p>{lang === "tr" ? "Analitik Düşünme" : "Analytical Thinking"}</p>
          </div>

          <div className="soft-skill-card">
            <span>📚</span>
            <p>{lang === "tr" ? "Öğrenmeye Açıklık" : "Willingness to Learn"}</p>
          </div>

          <div className="soft-skill-card">
            <span>🧩</span>
            <p>{lang === "tr" ? "Problem Çözme" : "Problem Solving"}</p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="skills">
        <h2>{lang === "tr" ? "Becerilerim" : "Technical Skills"}</h2>

        <div className="skills-box">
          <div className="skill-category">
            <h3>Front-End</h3>
            <div className="skill-logos">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>TailwindCSS</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Mobil Geliştirme</h3>
            <div className="skill-logos">
              <span>Expo</span>
              <span>React Native</span>
              <span>Flutter</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Back-End</h3>
            <div className="skill-logos">
              <span>Node.js</span>
              <span>Python</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Veritabanları</h3>
            <div className="skill-logos">
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
