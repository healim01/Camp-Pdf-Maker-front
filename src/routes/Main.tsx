import styledd from 'styled-components';
import CampCard from '../components/CampCard';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuery } from 'react-query';
import { GetAllCamp } from '../apis/CampApi';

interface IcampInfo {
  campId: number;
  campName: string;
  campImg: string;
  campSeason: string;
  campProf: string;
  startDate: string;
  endDate: string;
}

const Page = styledd.div`
  padding: 30px 230px;
`;

const CardGrid = styledd.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;

export default function Main() {
  const { isLoading, data: campList } = useQuery<IcampInfo[]>(
    ['GetAllCamp', GetAllCamp],
    () => GetAllCamp().then((response) => response),
    {
      onSuccess: (data) => {
        console.log('GetAllCamp', data);
      },
    },
  );

  return (
    <>
      <Header />
      <Page>
        <CardGrid>
          {(campList as IcampInfo[])?.map((camp: IcampInfo) => (
            <Link to={`/camp/${camp.campId}`}>
              <CampCard key={camp.campId} camp={camp} />
            </Link>
          ))}
        </CardGrid>
      </Page>
      <Footer />
    </>
  );
}
