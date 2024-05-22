"use client";
import { useFetchData } from '@/hooks/useFetchData';
import Image from 'next/image';
import { Image as LucideImage } from 'lucide-react';

interface TourGuideProfile {
  id: string;
  gender: string;
  fullname: string;
  address: string;
  phoneNumber: string;
  image: string;
}

interface Category {
  name: string;
  slug: string;
}

interface Place {
  id: string;
  name: string;
  slug: string;
  address: string;
  description: string;
  longitude: string;
  latitude: string;
  tourGuideEmail: string;
  tourGuideProfile: TourGuideProfile;
  categories: Category[];
  images: string[];
}

interface PlacesData {
  places: Place[];
  meta: {
    count: number;
  };
}

const PlacesPage = ({ slug }: { slug: string }) => {
  const { data, isLoading, isSuccess, refetch, isRefetching } = useFetchData({
    queryKey: ["placesData"],
    dataProtected: `places`,
  });

  const placesData: PlacesData | undefined = data?.data;

  console.log(placesData?.places[0]);
  console.log(placesData?.places[0].images);

  return (
    <div >
      {isSuccess && !isRefetching && (
        <>
          <div>

            {placesData?.places.map((place) => (
              <div key={place.id}>
                <p>{place.name}</p>
                <p>{place.description}</p>
                <p>{place.slug}</p>
              {place.images.length > 0 ? (
                <Image
                  src={place.images[0]}
                  alt="image"
                  width={200}
                  height={200}
                />
              ) :(
                <div className='w-96 bg-custom-Bright-Manatee/15 h-40 grid place-items-center'>
               <LucideImage className='w-20 h-20 text-custom-Bright-Manatee/10'/>
                </div>
              )}
              
              {place.categories > 0 ? (
                <p>{place.categories[0]}</p>
              ) : (
                  <div>No Categories</div>
                )}

                <p>{place.address}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PlacesPage;
