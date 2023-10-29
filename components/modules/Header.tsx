import { HeaderData } from '@/types/sanity';
import AnimatedNavLinks from '@/components/modules/AnimatedNavLinks';
import { getHeader } from '@/libs/sanity/utils';

const Header = async () => {
    const data = await getHeader();
    return (
        <header>
            <AnimatedNavLinks links={data.navigation} src={data.logo} />
        </header>
    );
};

export default Header;
