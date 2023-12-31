export type BlogPostSelection = {
    title: string;
    author: string;
    media: string;
    date: string;
    description: string;
};

export type HeroData = {
    heroLogo: string;
    heroImage: string;
    trackImage: string;
    track: string;
    locations: HeroLocation[];
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

export type AlbumDescription = {
    horizontalImg: string;
    verticalImg1: string;
    verticalImg2: string;
    subtitle: string;
    title: string;
    description: string;
    features: {
        _key: string;
        title: string;
        description: string;
        icon: string;
    }[];
};

export type HeroLocation = {
    locationName: string;
    id: string;
};

export type HeaderData = {
    headerTitle: string;
    logo: string;
    navigation: NavLinkType[];
};

export type Footer = {
    footerTitle: string;
    footerImage: string;
    quote: string;
    socials: {
        _key: string;
        socialName: 'Github' | 'Facebook' | 'Twitter' | 'Instagram' | 'YouTube' | 'LinkedIn';
        url: string;
    }[];
};

export type FooterData = {
    footer: Footer;
    header: HeaderData;
};

export type NavLinkType = {
    id: string;
    _key: string;
    navigationLinkTitle: {
        title: string;
        href: string;
    };
};

export type BlogPostData = {
    _id: string;
    image: string;
    title: string;
    description: string;
    body: any;
    author: string;
    authorImage: string;
    categories: string[];
    slug: string;
    publishedAt: string;
};
