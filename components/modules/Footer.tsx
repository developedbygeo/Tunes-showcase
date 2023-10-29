import { HeaderData } from '@/types/sanity';
import AnimatedNavLinks from './AnimatedNavLinks';
import { getFooter } from '@/libs/sanity/utils';

import { BsLinkedin, BsGithub, BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

type FooterProps = {
    data: HeaderData;
    quote?: string;
};

const iconLookup = {
    Github: BsGithub,
    Facebook: BsFacebook,
    Twitter: BsTwitter,
    Instagram: BsInstagram,
    YouTube: BsYoutube,
    LinkedIn: BsLinkedin,
};

const Footer = async () => {
    const currentYear = new Date().getFullYear();
    const data = await getFooter();

    return (
        <footer className="bg-gradient-container">
            <div className="container overflow-hidden px-6 py-8 lg:px-0">
                <AnimatedNavLinks links={data.header.navigation} src={data.header.logo} quote={data.footer.quote} />
                <div className="mt-10 flex justify-center space-x-10">
                    {data.footer.socials.map((item) => {
                        const Icon = iconLookup[item.socialName];
                        return (
                            <a
                                key={item.socialName}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group text-gray-400 transition-colors duration-200 hover:text-gray-200"
                            >
                                <span className="sr-only">{item.socialName}</span>
                                <Icon className="h-6 w-6" />
                            </a>
                        );
                    })}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; {currentYear} DJ Cat Paws, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
