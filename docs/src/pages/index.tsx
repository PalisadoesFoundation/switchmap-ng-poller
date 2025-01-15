import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Navbar from '../components/Navbar/Navbar';
import styles from './index.module.css';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Hero/Hero';


export default function Home(): React.ReactElement {  // Changed from JSX.Element
  const { siteConfig } = useDocusaurusContext();
  return (
   <div>
    <Navbar />
    <HeroSection/>
    <Footer/>
   </div>
  );
}