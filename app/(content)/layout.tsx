import Footer from '@/components/modules/Footer';
import { getHeader } from '@/libs/sanity/utils';
import { WithChildren } from '@/types/UI';

const ContentLayout = ({ children }: WithChildren) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default ContentLayout;
