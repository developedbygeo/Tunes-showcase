import { getHeader } from '@/libs/sanity/utils';
import AnimatedNavLinks from '@/components/modules/AnimatedNavLinks';
import MobileMenu from '@/components/modules/MobileMenu';

const Header = async () => {
    const data = await getHeader();
    return (
        <header className="flex items-center ">
            <AnimatedNavLinks className="" links={data.navigation} src={data.logo} />
            <MobileMenu links={data.navigation} imageUrl={data.logo} />
        </header>
    );
};

export default Header;
