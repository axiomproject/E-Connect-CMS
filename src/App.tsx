import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import Layout from './components/Layout';
import './App.css';

function Home() {
  return (
    <>
      <section className="home-intro">
        <h2>Discover <span className="brand">Econnect</span></h2>
        <p>
          Econnect makes sustainable living easy and rewarding. Set green goals, join interactive challenges, and watch your positive impact grow. With tools like a recycling guide, carbon tracker, and daily inspiration, we help you turn everyday choices into lasting change.
        </p>
        <p>
          At Econnect, we believe every action counts—let’s build a greener future together.
        </p>
      </section>
      <div className="home-sections">
        <section className="home-card">
          <h3>Challenges We Address</h3>
          <ul className="pretty-list">
            <li><span className="list-icon">💡</span> Staying motivated to live sustainably can be tough.</li>
            <li><span className="list-icon">🔍</span> Many people aren’t sure which eco-friendly habits are practical.</li>
            <li><span className="list-icon">🌱</span> Community support for green living is often lacking.</li>
          </ul>
        </section>
        <section className="home-card">
          <h3>How Econnect Helps</h3>
          <ul className="pretty-list">
            <li><span className="list-icon">🏆</span> Take part in weekly and monthly sustainability challenges.</li>
            <li><span className="list-icon">📈</span> Set personal goals—like saving water or reducing waste—and track your progress.</li>
            <li><span className="list-icon">🤝</span> Connect with others through leaderboards and social sharing to grow a supportive eco-community.</li>
          </ul>
        </section>
      </div>

      <section className="cta-section">
        <h2>Get the Econnect App Instantly!</h2>
        <p>
          Be among the first to experience Econnect—download our APK and start making a positive impact right from your Android device. No waiting, no barriers—just tap and join the movement!
        </p>
        <a
          href="https://drive.google.com/file/d/1yNtv6CexVAvZhnoJXST134T3RIG9Luvz/view?usp=sharing"
          className="cta-button"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download APK
        </a>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-card">
            <span className="feature-icon">♻️</span>
            <h4>Recycling Guide</h4>
            <p>Learn how to recycle smarter with easy-to-follow tips and local guidelines.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌍</span>
            <h4>Carbon Footprint Calculator</h4>
            <p>Track your daily habits and see how your choices impact the planet.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔥</span>
            <h4>Daily Motivation</h4>
            <p>Get inspired with eco-friendly quotes, reminders, and progress streaks.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏅</span>
            <h4>Eco-Challenges</h4>
            <p>Join fun challenges and compete with friends to build lasting green habits.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <ol className="how-it-works-list">
          <li>
            <span className="how-step-icon">1</span>
            <div>
              <strong>Sign Up</strong>
              <p>Create your free Econnect account in seconds.</p>
            </div>
          </li>
          <li>
            <span className="how-step-icon">2</span>
            <div>
              <strong>Set Your Goals</strong>
              <p>Choose eco-friendly goals that fit your lifestyle.</p>
            </div>
          </li>
          <li>
            <span className="how-step-icon">3</span>
            <div>
              <strong>Join Challenges</strong>
              <p>Participate in weekly and monthly challenges to stay motivated.</p>
            </div>
          </li>
          <li>
            <span className="how-step-icon">4</span>
            <div>
              <strong>Track & Share</strong>
              <p>Monitor your progress and celebrate achievements with the community.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-card">
            <p>"Econnect made it so much easier to stick to my green goals. The challenges are fun and the community is super supportive!"</p>
            <span className="testimonial-author">– Jamie L.</span>
          </div>
          <div className="testimonial-card">
            <p>"I love tracking my progress and seeing how small changes add up. The recycling guide is a lifesaver!"</p>
            <span className="testimonial-author">– Priya S.</span>
          </div>
          <div className="testimonial-card">
            <p>"The leaderboard keeps me motivated and I’ve made new friends who care about the planet too."</p>
            <span className="testimonial-author">– Alex R.</span>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
