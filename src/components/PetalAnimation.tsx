"use client";

import { useEffect, useState } from "react";

export default function PetalAnimation({ active = true }: { active?: boolean }) {
    // const [active, setActive] = useState(true); // Controlled by prop now

    // Function to pause animation if needed (exposed via window or context if complex,
    // but for now we might control it via prop implies parent control,
    // however original script uses global `stopPetalAnimation`.
    // We'll stick to running it always for now, or use a prop if requested.
    // The Intro page stops it when button clicked.
    // We can listen to a custom event or context.
    // For simplicity, we'll let it run and maybe unmount it when leaving Intro?
    // Original: stops when clicked, resumes in result.
    // So we can have a prop `isActive`.

    useEffect(() => {
        const container = document.getElementById("petals-container");
        if (!container) return;

        let intervalId: NodeJS.Timeout;

        const createPetal = () => {
            if (!active) return;

            const petal = document.createElement("div");
            petal.className = "petal";

            // Random color
            const isPink = Math.random() > 0.5;
            petal.classList.add(isPink ? "petal-pink" : "petal-yellow");

            // Random X position
            petal.style.left = Math.random() * 100 + "vw";

            // Random size
            const size = 15 + Math.random() * 20;
            petal.style.width = size + "px";
            petal.style.height = size + "px";

            // Random duration
            const fallDuration = 15 + Math.random() * 10;
            const swayDuration = 2 + Math.random() * 2;
            petal.style.animationDuration = fallDuration + "s, " + swayDuration + "s";

            // Random delay
            const delay = Math.random() * 2;
            petal.style.animationDelay = delay + "s, 0s";

            container.appendChild(petal);

            // Remove after animation
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, (fallDuration + delay) * 1000);
        };

        if (active) {
            // Initial batch
            for (let i = 0; i < 5; i++) {
                setTimeout(createPetal, i * 200);
            }

            // Interval
            intervalId = setInterval(createPetal, 1500);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
            // We do not remove existing petals on unmount/pause to keep visual continuity?
            // Original `stopPetalAnimation` removes container content.
            // We will leave them to fall out naturally or clear if strictly needed.
        };
    }, [active]);

    // Exposed method to window for legacy compatibility if we mix interaction
    useEffect(() => {
        // We don't need window exposure if we use props, removing it to avoid TS errors
        // (window as any).stopPetalAnimation = ...
    }, []);

    return <div id="petals-container"></div>;
}
