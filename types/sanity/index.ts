export type BlogPostSelection = {
    title: string;
    author: string;
    media: string;
    date: string;
    description: string;
};

export type Event = {
    _id: string;
    date: {
        day: string;
        month: string;
    };
    location: {
        city: string;
        country: string;
        address: string;
    };
    price: string;
};

export type Album = {
    _id: string;
    name: string;
    tracks: {
        name: string;
        assetUrl: string;
    }[];
};
