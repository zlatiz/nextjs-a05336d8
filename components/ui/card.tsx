import Image from 'next/image';
import React from 'react';

type CardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
};

export default function Card({ title, imageSrc, imageAlt, width, height }: CardProps): JSX.Element {
  const safeSrc = encodeURI(imageSrc);
  return (
    <article className="glass-card overflow-hidden">
      <div className="w-full h-48 relative">
        <Image src={safeSrc} alt={imageAlt} unoptimized width={width} height={height} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </article>
  );
}
