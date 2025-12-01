import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element enters the viewport
 * @param threshold - Percentage of element that must be visible (0-1)
 * @returns ref to attach to element and isVisible state
 */
export function useScrollAnimation(threshold = 0.1) {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Once visible, stay visible (don't re-hide on scroll up)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return { ref, isVisible };
}
