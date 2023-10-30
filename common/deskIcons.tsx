import {
    MdStream,
    MdBuild,
    MdOutlineCatchingPokemon,
    MdViewModule,
    MdEvent,
    MdAlbum,
    MdMusicNote,
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
        musicDescription: MdMusicNote,
        footer: MdBuild,
    },
    blog: {
        icon: MdCollectionsBookmark,
        authors: MdOutlineModeEdit,
        categories: MdOutlineCategory,
        posts: MdNewspaper,
    },
};

export default deskIcons;
