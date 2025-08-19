import React from "react";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Aditya Desai Tutoring</h1>
        <p>"Turning complex concepts into simple ideas."</p>
      </header>

      <section>
        <h2>About Aditya</h2>
        <p>
          I am an incoming high school senior in NJ, also enrolled in the High
          Scholars program at Middlesex County College. I specialize in Physics
          and Mathematics, making even the toughest concepts easy to understand.
        </p>
        <blockquote>
          "The beautiful thing about learning is that no one can take it away
          from you."
        </blockquote>
      </section>

      <section>
        <h2>Subjects Offered</h2>
        <ul>
          <li>Physics</li>
          <li>Mathematics</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
