import { getHeader } from '@/libs/sanity/utils';
import AnimatedHeader from '@/components/modules/AnimatedHeader';

const Header = async () => {
    const headerData = await getHeader();
    console.log(headerData.navigation[0]);
    return (
        <header>
            <AnimatedHeader links={headerData.navigation} src={headerData.logo} />
        </header>
    );
};

export default Header;
