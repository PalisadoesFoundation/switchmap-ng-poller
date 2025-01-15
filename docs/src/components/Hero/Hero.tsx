import React, {useEffect} from 'react';
import styles from './Hero.module.css';
import PrimaryButton from '../Buttons/ButtonPrimary/ButtonPrimary';
import SecondaryButton from '../Buttons/ButtonSecondary/ButtonSecondary';
import HeroCard from '../Cards/Herocard/HeroCard';

// Array to store the card data
const cardData = [
  {
    title: "Layer 1",
    description:
      "Identify important troubleshooting and cybersecurity related information such as interface names, speed, state, and neighboring devices",
  },
  {
    title: "Layer 2",
    description:
      "Visualize your VLANs and the 802.1q trunk links that are configured to support them. View the true scale of your topology and the networks it supports",
  },
  {
    title: "Layer 3",
    description:
      "Get historical data for hostnames, IPs, and MAC address across your network. Invaluable information for tracking your topology changes.",
  },
];

export default function  Hero () {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Know Your Topology</h1>
        <p className={styles.text}>
          Network port status reporting. No need to login to every device. Just use Switchmap-NG.
        </p>
        <div className={styles.buttonContainer}>
          <PrimaryButton label="Get Started" onClick={handleClick} />
          <SecondaryButton label="Community" onClick={handleClick} />
        </div>
      </div>

      <div className={styles.lottifilesContainer}>
      <section className="hero-image-section section-container">
      <div className="hero-image">
      {/* React.createElement is used to suppress TypeScript errors as VS code throws an error for lottie-player othe  */}
        {React.createElement('lottie-player', {
          src: 'https://lottie.host/c3d8ee59-5c73-46f7-8c4e-a66763f5eba3/80bnwExY98.json',
          background: 'transparent',
          speed: '1',
          loop: true,
          autoplay: true,
          style: { height: '50rem', width: '54rem', display: 'flex', alignItems: 'center', justifyContent: 'center'},
        })}
      </div>
    </section>
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <HeroCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};


