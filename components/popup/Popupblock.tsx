import Image from 'next/image';
import './style.css';

export default function PopBlock() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h2 className="hero-title">Limited Edition Honey Bee Croissants</h2>
        <p className="hero-description">
          These <strong>BEE-auties</strong> are available <u>tomorrow and Saturday only</u>!
        </p>
        <p className="hero-highlight">
          Hand-crafted with golden honey, buttery flakiness, and a hint of magic. 🍯🥐
        </p>
        <button className="hero-cta">Pre-order Now</button>
      </div>
       <div className="hero-image">
        <Image
          src="/hero.jpg"
          alt="Honey Bee Croissant"
          width={600}
          height={600}
          className="hero-image-content"
        />
      </div>
    </div>
  );
}