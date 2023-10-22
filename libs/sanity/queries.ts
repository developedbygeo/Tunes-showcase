import { groq } from 'next-sanity';

export const eventsQuery = groq`*[_type == "event"]{
    _id,
    _createdAt,
    date {
        day,
        month
    },
    location {
        city,
        country,
        address
    },
    price
} | order(dateTime(_createdAt) asc)`;

export const albumsQuery = groq`*[_type == "album"]{
    _id,
    name,
    "tracks": tracks[]{
      name,
      "assetUrl": track.asset->url
    }
  }`;
