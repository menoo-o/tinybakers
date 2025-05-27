import Link from "next/link"
import { MapPin, Clock, Menu, Store } from "lucide-react"
import "./styles.css"

export default function TinyBakersHero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-container">
          <div className="content-wrapper">
            <div className="text-section">
              <h1 className="hero-title">Artisan Breads, Pastries & More</h1>
       
              <p className="hero-description">
                Experience the finest handcrafted breads and pastries, baked fresh with love and traditional
                techniques.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="features-grid">
                {/* baked fresh daily */}
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock className="icon" />
                </div>
                <span className="feature-text">Baked Fresh</span>
              </div>
              {/* in-store pickup */}
              <div className="feature-item">
                <div className="feature-icon">
                  <Store className="icon" />
                </div>
                <span className="feature-text">In-Store Pickup</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="cta-buttons">
              <Link href="/menu" className="btn btn-primary">
                <Menu className="btn-icon" />
                View Menu
              </Link>
              <Link href="/visit" className="btn btn-secondary">
                <MapPin className="btn-icon" />
                Visit Bakery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
