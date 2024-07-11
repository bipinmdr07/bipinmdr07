'use client';

import { BackgroundGradientAnimation } from '@/app/components/ui/background-gradient-animation';

export default function About() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(8,0,1)"
      interactive={false}
    >
      <div className="container mx-auto mt-32 max-w-screen-xl px-4">
        <h1 className="text-bold">About</h1>
        <p>
          This is a simple app that uses the
          <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
          API to fetch and display data.
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
