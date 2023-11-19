import { getHeader } from '@/libs/sanity/utils';
import AnimatedNavLinks from '@/components/modules/AnimatedNavLinks';
import MobileMenu from '@/components/modules/MobileMenu';

const Header = async () => {
    const data = await getHeader();
    return (
        <header className="container flex justify-between lg:items-center">
            <AnimatedNavLinks className="" links={data.navigation} src={data.logo} />
            <MobileMenu className="" links={data.navigation} imageUrl={data.logo} />
        </header>
    );
};

export default Header;
