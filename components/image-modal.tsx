"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function ImageModal({ 
  src, 
  alt, 
  isOpen, 
  onClose 
}: { 
  src: string; 
  alt: string; 
  isOpen: boolean; 
  onClose: () => void 
}) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X className="h-8 w-8" />
      </button>
      <div 
        className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt={alt} 
          className="max-h-[80vh] max-w-full object-contain"
        />
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-white text-lg bg-black/50 px-4 py-2 rounded-lg inline-block">
            {alt}
          </p>
        </div>
      </div>
    </div>
  )
}