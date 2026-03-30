"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import LivePoll from "../LivePoll/LivePoll";

export default function PoolPopupComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Open popup when component is in view
          if (entry.isIntersecting) {
            setIsOpen(true);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <div ref={containerRef}>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Modal content */}
          <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-auto max-h-[90vh] w-full max-w-3xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-4">
              <LivePoll />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}