import React from 'react';
import { useEffect, useRef } from 'react'

export type RectPath = {
  x: number;
  y: number;
  w: number;
  h: number;
}

type Props = {
  backgroundImage: string;
  clipPath?: RectPath[];
}

export const ClippedBackground = ({ backgroundImage }: Props) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) {
        return;
      }

      const background = new Image();
      background.onload = () => {
        ctx.drawImage(background, 0, 0, width, height);
      }
      background.src = backgroundImage;
    }
  }, [backgroundImage, canvasRef])

  return (
    <>
      <canvas style={{
        position: 'fixed'
      }} ref={canvasRef} />
    </>
  )
}