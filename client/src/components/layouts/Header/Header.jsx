import { useLocation, useParams } from 'react-router-dom';
import HeaderTitle from '../../UI/HeaderTitle';
import BackButton from '../../UI/BackButton';
import PostButton from '../../UI/PostButton';
import EditButton from '../../UI/EditButton';
import CompleteButton from '../../UI/CompleteButton';
import AlertButton from '../../UI/AlertButton';

function Header({ titleText, nav }) {
  const param = useParams();
  const location = useLocation();
  const path = location.pathname;

  const defaultClass =
    'fixed top-0 flex items-center justify-between w-full pt-10 px-2 bg-[#fff]';

  switch (path) {
    case '/gyms':
    case '/board':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <PostButton nav={nav} />
        </header>
      );
    case `/gyms/${param.id}`:
    case '/board/:id':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <EditButton nav={nav} />
        </header>
      );
    case '/gyms/gympost':
    case '/board/boardpost':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <CompleteButton nav={nav} />
        </header>
      );
    case '/my':
    case '/my/board':
    case '/my/comments':
    case '/my/reviews':
    case '/my/bookmarks/board':
    case '/my/bookmarks/gyms':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <AlertButton nav={nav} />
        </header>
      );
    default:
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
  }
}

export default Header;
