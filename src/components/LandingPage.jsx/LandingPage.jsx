import React from 'react';
import './LandingPage.css'; // Import your CSS file
import heroImage from '../Images/hero-image.jpg'; // Import your image

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Welcome to Our Awesome Product</h1>
          <p>Your journey to exceptional starts here. Discover our features and get started today.</p>
          <div className="cta-buttons">
            <a href="#features" className="btn-primary">Learn More</a>
            <a href="#contact" className="btn-secondary">Get Started</a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      {/* <section id="features" className="features">
        <div className="feature-item">
          <h2>Feature One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <h2>Feature Two</h2>
          <p>Quisque sit amet accumsan arcu. Vestibulum sit amet nisl at ex.</p>
        </div>
        <div className="feature-item">
          <h2>Feature Three</h2>
          <p>Integer interdum libero et mauris tincidunt, a pulvinar elit bibendum.</p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of others who are making the most of our product.</p>
        <a href="#contact" className="btn-primary">Contact Us</a>
      </section>
    </div>
  );
};

export default LandingPage;
