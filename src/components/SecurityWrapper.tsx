"use client";

import { useEffect } from "react";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // 1. Disable Right Click Context Menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            return false;
        };

        // 2. Disable Keyboard Shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12
            if (e.key === "F12" || e.keyCode === 123) {
                e.preventDefault();
                return false;
            }

            // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
            if (
                e.ctrlKey &&
                e.shiftKey &&
                (e.key === "I" ||
                    e.key === "J" ||
                    e.key === "C" ||
                    e.keyCode === 73 ||
                    e.keyCode === 74 ||
                    e.keyCode === 67)
            ) {
                e.preventDefault();
                return false;
            }

            // Ctrl+U (View Source)
            if (e.ctrlKey && (e.key === "U" || e.keyCode === 85)) {
                e.preventDefault();
                return false;
            }

            // Ctrl+S (Save Page)
            if (e.ctrlKey && (e.key === "S" || e.keyCode === 83)) {
                e.preventDefault();
                return false;
            }
        };

        // 3. Prevent Drag & Drop for Images
        const handleDragStart = (e: DragEvent) => {
            if ((e.target as HTMLElement).tagName === "IMG") {
                e.preventDefault();
                return false;
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("dragstart", handleDragStart);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("dragstart", handleDragStart);
        };
    }, []);

    return <>{children}</>;
}
