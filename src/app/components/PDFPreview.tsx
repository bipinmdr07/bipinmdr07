'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = window.location.origin + '/pdf.worker.min.mjs';

interface PDFPreviewProps {
  file: string; // URL or path to the PDF file
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ file }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument(file);
        const pdf = await loadingTask.promise;

        // Get the first page
        const page = await pdf.getPage(1);

        // Set up the canvas for rendering
        const canvas = canvasRef.current;
        if (!canvas) throw new Error('Canvas not found');

        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page on the canvas
        const renderContext = {
          canvasContext: canvas.getContext('2d') as CanvasRenderingContext2D,
          viewport,
        };
        await page.render(renderContext).promise;

        // Convert the canvas to an image
        const imageUrl = canvas.toDataURL('image/png');
        setImageSrc(imageUrl);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load PDF.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();
  }, [file]);

  return (
    <div className='flex flex-col items-center'>
      {isLoading && <p className='text-gray-600'>Loading PDF...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt='PDF Preview'
          className='rounded-lg border border-gray-200 shadow-lg'
          width={1024}
          height={980}
        />
      )}
      <canvas ref={canvasRef} className='hidden' />
    </div>
  );
};

export default PDFPreview;
