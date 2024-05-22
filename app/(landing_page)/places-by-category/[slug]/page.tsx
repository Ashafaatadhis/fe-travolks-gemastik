import PlacesPage from '@/components/places/pages/PlacesPage';
import Link from 'next/link';
import React from 'react'

const page = ({ params } : any) => {
  return (
  <div>
    <h1 className='text-3xl font-semibold  text-custom-Lightish-Blue'>Find Your Passionate Places</h1>
<PlacesPage slug={params.slug}/>
 </div>
  )
}

export default page;