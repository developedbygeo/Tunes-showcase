import {
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
