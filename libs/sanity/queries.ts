import { groq } from 'next-sanity';

export const headerQuery = groq`
*[_type == "header"]{
  "logo": logo.asset->url,
  navigation[]{
    _key,
    id,
    navigationLinkTitle{
      title,
      href
    }
  }
}[0]
`;

export const footerQuery = groq`
{
  "footer": *[_type == "footer"] {
  footerTitle,
  "footerImage": logo.asset->url,
  quote,
  socials[]{
    _key,
    socialName,
    url
    }
  }[0],
  
  "header": *[_type == "header"]{
  "logo": logo.asset->url,
  navigation[]{
    _key,
    id,
    navigationLinkTitle{
      title,
      href
    }
  }
}[0]
}`;

export const heroQuery = groq`
*[_type == "hero"]{
  "heroLogo": logo.asset->url,
  "heroImage": image.asset->url,
  "trackImage": trackImage.asset->url,
  "track": track.asset->url,
  locations[]{
    id,
    locationName
  }
}[0]
`;
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
    "albumImage": img.asset->url,
    "tracks": tracks[]{
      name,
      "assetUrl": track.asset->url
    }
  }`;

export const musicDescriptionQuery = groq`*[_type == "musicDescription"]{
  _id,
  "horizontalImg": imgHorizontal.asset->url,
  "verticalImg1": imgVertical1.asset->url,
  "verticalImg2": imgVertical2.asset->url,
  subtitle,
  title,
  description,
  features[]{
    title,
    description,
    "icon": icon.asset->url
}
}`;
