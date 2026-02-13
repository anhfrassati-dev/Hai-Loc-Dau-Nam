"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import IntroScreen from '@/components/IntroScreen';
import TransitionOverlay from '@/components/TransitionOverlay';
import PetalAnimation from '@/components/PetalAnimation';
import SecurityWrapper from '@/components/SecurityWrapper';

const locImages = [
  'loc-thanh-1.png',
  'loc-thanh-2.png',
  'loc-thanh-3.png',
  'loc-thanh-4.png',
  'loc-thanh-5.png',
  'loc-thanh-6.png',
  'loc-thanh-7.png',
  'loc-thanh-8.png',
  'loc-thanh-9.png',
  'loc-thanh-10.png',
  'loc-thanh-11.png',
  'loc-thanh-12.png',
  'loc-thanh-13.png',
  'loc-thanh-14.png',
  'loc-thanh-15.png',
  'loc-thanh-16.png',
  'loc-thanh-17.png',
  'loc-thanh-18.png',
  'loc-thanh-19.png',
  'loc-thanh-20.png',
  'loc-thanh-21.png',
  'loc-thanh-22.png',
  'loc-thanh-23.png',
  'loc-thanh-24.png',
  'loc-thanh-25.png',
  'loc-thanh-26.png',
  'loc-thanh-27.png',
  'loc-thanh-28.png',
  'loc-thanh-29.png',
  'loc-thanh-30.png',
  'loc-thanh-31.png',
  'loc-thanh-32.png',
  'loc-thanh-33.png',
  'loc-thanh-34.png',
  'loc-thanh-35.png',
  'loc-thanh-36.png',
  'loc-thanh-37.png',
  'loc-thanh-38.png',
  'loc-thanh-39.png',
  'loc-thanh-40.png',
  'loc-thanh-41.png',
  'loc-thanh-42.png',
  'loc-thanh-43.png',
  'loc-thanh-44.png',
  'loc-thanh-45.png',
  'loc-thanh-46.png',
  'loc-thanh-47.png',
  'loc-thanh-48.png',
  'loc-thanh-49.png',
  'loc-thanh-50.png',
  'loc-thanh-51.png',
  'loc-thanh-52.png',
  'loc-thanh-53.png',
  'loc-thanh-54.png',
  'loc-thanh-55.png',
  'loc-thanh-56.png',
  'loc-thanh-57.png',
  'loc-thanh-58.png',
  'loc-thanh-59.png',
  'loc-thanh-60.png',
  'loc-thanh-61.png',
  'loc-thanh-62.png',
  'loc-thanh-63.png',
  'loc-thanh-64.png',
  'loc-thanh-65.png',
  'loc-thanh-66.png',
  'loc-thanh-67.png',
  'loc-thanh-68.png',
  'loc-thanh-69.png',
  'loc-thanh-70.png',
  'loc-thanh-71.png',
  'loc-thanh-72.png',
  'loc-thanh-73.png',
  'loc-thanh-74.png',
  'loc-thanh-75.png',
  'loc-thanh-76.png',
  'loc-thanh-77.png',
  'loc-thanh-78.png',
  'loc-thanh-79.png',
  'loc-thanh-80.png',
  'loc-thanh-81.png',
  'loc-thanh-82.png',
  'loc-thanh-83.png',
  'loc-thanh-84.png',
  'loc-thanh-85.png',
  'loc-thanh-86.png',
  'loc-thanh-87.png',
  'loc-thanh-88.png',
  'loc-thanh-89.png',
  'loc-thanh-90.png',
  'loc-thanh-91.png',
  'loc-thanh-92.png',
  'loc-thanh-93.png',
  'loc-thanh-94.png',
  'loc-thanh-95.png',
  'loc-thanh-96.png',
  'loc-thanh-97.png'
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
