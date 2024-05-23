"use client";
import { useFetchData } from '@/hooks/useFetchData';
import Image from 'next/image';
import { Divide, LoaderCircleIcon, Image as LucideImage } from 'lucide-react';

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
    <div>
      {(isLoading || isRefetching) && (
        <div className="flex items-center gap-x-2">
          <LoaderCircleIcon className="animate-spin w-5 h-5" />
          Loading...
        </div>
      )}
      {isSuccess && !isRefetching && (
        <>
          <div className="m-auto md:flex gap-3">
            {placesData?.places.map((place) => (
              <div
                className="border p-3 rounded-lg items-center mt-5 bg-custom-Grams-Hair drop-shadow-md"
                key={place.id}
              >
                <div className="">
                  {place.images.length > 0 ? (
                    <Image
                      src={place.images[0]}
                      alt="image"
                      width={200}
                      height={200}
                      className="max-w-screen-md h-44 md:w-96 rounded-lg md:h-40 m-auto"
                    />
                  ) : (
                    <div className="relative text-center">
                      <div className="max-w-screen-md h-44 md:w-96 rounded-lg md:h-40 m-auto bg-custom-Bright-Manatee/15 grid place-items-center">
                        <LucideImage className="w-20 h-20 text-custom-Bright-Manatee/10" />
                      </div>
                    </div>
                  )}
                </div>

                <div className='text-right'>
                  {place.categories > 0 ? (
                    <p>{place.categories[0]}</p>
                  ) : (
                    <p>
                      No Categories
                    </p>
                  )}
                </div>
                <div className="description mt-3">
                  <h1 className="text-xl font-bold">{place.name}</h1>
                  <p className="text-base">{place.description}</p>
                  <p className="text-sm text-custom-Asphalt-Blue">
                    {place.slug}
                  </p>
                  <p className="text-sm text-custom-Asphalt-Blue">
                    {place.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PlacesPage;
