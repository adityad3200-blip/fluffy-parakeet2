import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Aditya Desai Tutoring</h1>
        <p>"Turning complex concepts into simple ideas."</p>
      </header>
      <section style={{ marginBottom: '20px' }}>
        <h2>About Aditya</h2>
        <p>
          I am an incoming high school senior in NJ, also enrolled in the High Scholars program at Middlesex County College.
          I specialize in Physics and Mathematics, making even the toughest concepts easy to understand.
        </p>
        <blockquote style={{ fontStyle: 'italic', color: '#555' }}>
          "The beautiful thing about learning is that no one can take it away from you."
        </blockquote>
      </section>
      <section>
        <h2>Subjects Offered</h2>
        <ul>
          <li>Physics</li>
          <li>Mathematics</li>
        </ul>
      </section>
      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
        © {new Date().getFullYear()} Aditya Desai Tutoring
      </footer>
    </div>
  );
}
