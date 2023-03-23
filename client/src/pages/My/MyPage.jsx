import { useEffect } from 'react';
// import axios from 'axios';
import api from '../../utils/api';
import useStore from '../../state/useStore';
import MyPageList from '../../components/My/MyPageList';
import MyAccount from '../../components/My/MyAccount';
import Profile from '../../components/My/Profile';

function MyPage() {
  const { setMyElements, myElements } = useStore();
  useEffect(() => {
    api.get('/members/my').then(res => setMyElements(res.data));
  }, []);

  console.log(myElements);

  return (
    <>
      <Profile />
      <MyPageList />
      <MyAccount />
    </>
  );
}

export default MyPage;
