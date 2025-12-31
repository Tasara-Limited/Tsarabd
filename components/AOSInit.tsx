'use client'; // This is required for useEffect and AOS to work

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // values from 0 to 3000, with step 50ms
      once: true,    // whether animation should happen only once - while scrolling down
      easing: 'ease-out', // default easing for AOS animations
    });
  }, []);

  return null; // This component doesn't render anything, it just runs the code
}
