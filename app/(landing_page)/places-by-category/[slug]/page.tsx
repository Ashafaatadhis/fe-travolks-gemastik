import PlacesPage from '@/components/places/pages/PlacesPage';
import Link from 'next/link';
import React from 'react'

const page = ({ params } : any) => {
  return (
    <div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold  text-custom-Fly-byNight ">
          Discover your{" "}
          <span className="text-custom-Lightish-Blue">dream destination</span>
        </h1>
      </div>
      <PlacesPage slug={params.slug} />
    </div>
  );
}

export default page;