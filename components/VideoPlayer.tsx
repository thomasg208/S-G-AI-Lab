"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface VideoPlayerProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  coverImage?: string
}

export default function VideoPlayer({
  src,
  alt,
  width = 1200,
  height = 675,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  coverImage = "/images/FusionCell-battery.jpg",
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      if (autoPlay) {
        video.play().catch(error => {
          console.log("Auto-play was prevented:", error)
        })
      }
    }

    const handleError = (e: Event) => {
      console.error("Video error:", e)
      setHasError(true)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [autoPlay])

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Cover Image - Always present as fallback */}
      <Image
        src={coverImage}
        alt={alt}
        fill
        className={`absolute inset-0 object-cover transition-opacity duration-300 ${hasError || !isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority
      />
      
      {/* Video - Overlay on top of cover image */}
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          width={width}
          height={height}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          onError={() => setHasError(true)}
        />
      )}
      
      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-2"></div>
            <p className="text-gray-300 text-sm">Loading video...</p>
          </div>
        </div>
      )}
    </div>
  )
}