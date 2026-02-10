"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import IntroScreen from '@/components/IntroScreen';
import TransitionOverlay from '@/components/TransitionOverlay';
import PetalAnimation from '@/components/PetalAnimation';
import SecurityWrapper from '@/components/SecurityWrapper';

const locImages = [
  'Lộc Thánh 1.png',
  'Lộc Thánh 2.png',
  'Lộc Thánh 3.png',
  'Lộc Thánh 4.png',
  'Lộc Thánh 5.png',
  'Lộc Thánh 6.png',
  'Lộc Thánh 7.png',
  'Lộc Thánh 8.png',
  'Lộc Thánh 9.png',
  'Lộc Thánh 10.png',
  'Lộc Thánh 11.png',
  'Lộc Thánh 12.png',
  'Lộc Thánh 13.png',
  'Lộc Thánh 14.png',
  'Lộc Thánh 15.png',
  'Lộc Thánh 16.png',
  'Lộc Thánh 17.png',
  'Lộc Thánh 18.png',
  'Lộc Thánh 19.png',
  'Lộc Thánh 20.png',
  'Lộc Thánh 21.png',
  'Lộc Thánh 22.png',
  'Lộc Thánh 23.png',
  'Lộc Thánh 24.png',
  'Lộc Thánh 25.png',
  'Lộc Thánh 26.png',
  'Lộc Thánh 27.png',
  'Lộc Thánh 28.png',
  'Lộc Thánh 29.png',
  'Lộc Thánh 30.png',
  'Lộc Thánh 31.png',
  'Lộc Thánh 32.png',
  'Lộc Thánh 33.png',
  'Lộc Thánh 34.png',
  'Lộc Thánh 35.png',
  'Lộc Thánh 36.png',
  'Lộc Thánh 37.png',
  'Lộc Thánh 38.png',
  'Lộc Thánh 39.png',
  'Lộc Thánh 40.png',
  'Lộc Thánh 41.png',
  'Lộc Thánh 42.png',
  'Lộc Thánh 43.png',
  'Lộc Thánh 44.png',
  'Lộc Thánh 45.png',
  'Lộc Thánh 46.png',
  'Lộc Thánh 47.png',
  'Lộc Thánh 48.png',
  'Lộc Thánh 49.png',
  'Lộc Thánh 50.png',
  'Lộc Thánh 51.png',
  'Lộc Thánh 52.png',
  'Lộc Thánh 53.png',
  'Lộc Thánh 54.png',
  'Lộc Thánh 55.png',
  'Lộc Thánh 56.png',
  'Lộc Thánh 57.png',
  'Lộc Thánh 58.png',
  'Lộc Thánh 59.png',
  'Lộc Thánh 60.png',
  'Lộc Thánh 61.png',
  'Lộc Thánh 62.png',
  'Lộc Thánh 63.png',
  'Lộc Thánh 64.png',
  'Lộc Thánh 65.png'
];

const TRANSITION_DURATION = 15000;

export default function Home() {
  const router = useRouter();
  const [showTransition, setShowTransition] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [petalsActive, setPetalsActive] = useState(true);

  const handleStart = () => {
    setPetalsActive(false);
    setShowTransition(true);

    // Fade out prayer after 13s
    setTimeout(() => {
      setOverlayActive(true);
      setFadingOut(true);
    }, TRANSITION_DURATION - 2000);

    // Navigate after 15s
    setTimeout(() => {
      const selectedImage = locImages[Math.floor(Math.random() * locImages.length)];
      router.push(`/result?img=${encodeURIComponent(selectedImage)}`);
    }, TRANSITION_DURATION);
  };

  return (
    <SecurityWrapper>
      {petalsActive && <PetalAnimation />}
      {!showTransition ? (
        <IntroScreen onStart={handleStart} />
      ) : (
        <TransitionOverlay active={true} fadingOut={fadingOut} overlayActive={overlayActive} />
      )}
    </SecurityWrapper>
  );
}
