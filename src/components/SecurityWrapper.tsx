"use client";

import { useEffect } from "react";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Security features disabled for testing
        // 1. Disable Right Click Context Menu
        /*
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            return false;
        };

        // 2. Disable Keyboard Shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // ... (rest of the logic commented out)
        };
        // ...
        */
       // commenting out entire logic for now
    }, []);

    return <>{children}</>;
}
