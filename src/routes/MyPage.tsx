import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRecoilValue } from 'recoil';
import { UserId } from '../store/atom';
import { useQuery } from 'react-query';
import { GetProfile } from '../apis/CampApi';
import TakesCard from '../components/TakesCard';
import theme from '../theme';

interface IMemberInfo {
  sid: string;
  name: string;
  email: string;
  dept: string;
}

interface ITakeInfo {
  campName: string;
  campSeason: string;
  campProf: string;
}

interface IUserData {
  member: IMemberInfo;
  takes: ITakeInfo[];
}

const Page = styled.div`
  padding: 30px 300px;
`;

const UserInfo = styled.div`
  flex: 1;
  padding: 10px;
  border-right: 1px solid #ccc;
`;

const UserTakes = styled.div`
  flex: 1;
  /* padding-left: 20px; */
  /* padding: 20px; */
`;

const UserList = styled.ul`
  list-style: none;
  display: flex;

  padding: 0;
`;

const UserDataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Hello = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  width: 250px;

  &:hover {
    border-bottom: 3px solid ${theme.palette.color.mint};
  }
`;

export default function MyPage() {
  const userId = useRecoilValue(UserId);
  const { isLoading, data: mine } = useQuery<IUserData>(
    ['GetProfile', GetProfile],
    () => GetProfile(userId).then((response) => response),
    {
      onSuccess: (data) => {
        console.log('GetProfile', data);
      },
    },
  );

  return (
    <>
      <Header />
      <Page>
        {/* <UserDataContainer>
          <UserInfo>
            <div
              style={{ fontSize: '20px', fontWeight: 'bold', padding: '30px' }}
            >
              내 정보
            </div>
          </UserInfo>
          <UserInfo>
            <p>Name: {mine?.member.name}</p>
            <p>SID: {mine?.member.sid}</p>
            <p>Email: {mine?.member.email}</p>
            <p>Department: {mine?.member.dept}</p>
          </UserInfo>
        </UserDataContainer> */}
        <Hello> 안녕하세요 {mine?.member.name}님! </Hello>

        <UserTakes>
          <div
            style={{ fontSize: '20px', fontWeight: 'bold', padding: '30px' }}
          >
            이수 완료 캠프 목록
          </div>

          <UserList>
            {mine?.takes.map((take, index) => (
              // <UserListItem key={index}>
              //   <p>Camp Name: {take.campName}</p>
              //   <p>Camp Season: {take.campSeason}</p>
              //   <p>Camp Professor: {take.campProf}</p>
              // </UserListItem>
              <TakesCard
                key={index}
                campName={take.campName}
                campSeason={take.campSeason}
                campProf={take.campProf}
              />
            ))}
          </UserList>
        </UserTakes>
      </Page>
      {/* <div>
        <h1>{data.member.name}</h1>
        <p>Email: {data.member.email}</p>
        <p>Department: {data.member.dept}</p>
        <h2>Takes:</h2>
        <ul>
          {data.takes.map((take, index) => (
            <li key={index}>
              {take.campName} - {take.campSeason} - {take.campProf}
            </li>
          ))}
        </ul>
      </div> */}
      <Footer />
    </>
  );
}
