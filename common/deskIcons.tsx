import {
    MdStream,
    MdOutlineCatchingPokemon,
    MdViewModule,
    MdEvent,
    MdAlbum,
    MdOutlineCategory,
    MdCollectionsBookmark,
    MdOutlineModeEdit,
    MdNewspaper,
} from 'react-icons/md';

const deskIcons = {
    general: {
        icon: MdViewModule,
        header: MdStream,
        hero: MdOutlineCatchingPokemon,
        events: MdEvent,
        albums: MdAlbum,
    },
    blog: {
        icon: MdCollectionsBookmark,
        authors: MdOutlineModeEdit,
        categories: MdOutlineCategory,
        posts: MdNewspaper,
    },
};

export default deskIcons;
