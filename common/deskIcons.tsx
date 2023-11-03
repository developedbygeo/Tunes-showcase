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
    MdOutlineBiotech,
} from 'react-icons/md';

const deskIcons = {
    general: {
        icon: MdViewModule,
        header: MdStream,
        hero: MdOutlineCatchingPokemon,
        events: MdEvent,
        albums: MdAlbum,
        biography: MdOutlineBiotech,
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
