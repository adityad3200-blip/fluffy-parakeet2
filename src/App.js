import React from "react";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Aditya Desai Tutoring</h1>
        <p className="tagline">"Turning complex concepts into simple ideas."</p>
      </header>

      <section>
        <h2>About Aditya</h2>
        <p>
          I am an incoming high school senior in NJ, also enrolled in the High
          Scholars program at Middlesex County College. I specialize in Physics
          and Mathematics, making even the toughest concepts easy to understand.
        </p>
        <blockquote>
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

      <section>
        <h2>Hours</h2>
        <p>Monday – Friday: 4 PM – 8 PM</p>
        <p>Saturday: 10 AM – 3 PM</p>
      </section>

      <section>
        <h2>Pricing / Packages</h2>
        <ul>
          <li>High School Math: $50/hour</li>
          <li>Physics: $60/hour</li>
          <li>Discounts available for multi-session packages</li>
        </ul>
      </section>

      <section>
        <h2>Testimonials</h2>
        <blockquote>
          “Aditya explains complex physics concepts so clearly — my grades improved immediately!” — Student A
        </blockquote>
        <blockquote>
          “Math sessions are engaging and easy to understand. Highly recommend!” — Student B
        </blockquote>
      </section>

      <section>
        <h2>Location</h2>
        <p>Tutoring services available in New Jersey (NJ).</p>
      </section>

      <section>
        <h2>Book a Session / Contact</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
          
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
          
          <label>Subject:</label>
          <select required>
            <option value="">Select Subject</option>
            <option value="math">Mathematics</option>
            <option value="physics">Physics</option>
          </select>
          
          <label>Preferred Time:</label>
          <input type="text" placeholder="e.g., Monday 5 PM" required />
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
