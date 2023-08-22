import styled from 'styled-components';
import CampCard from '../components/CampCard';
import { Link } from 'react-router-dom';

const campInfo = [
  {
    campID: 1,
    campName: '2023 하계 미리미리 C 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
    campDesc: '캠프1 설명',
    campProf: '김광 교수',
  },
  {
    campID: 2,
    campName: '2023 여름방학 즐거운 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2023/06/07/14/21/mountain-8047293_1280.jpg',
    campDesc: '해바라기 필드에서 즐거운 여름을 함께 합시다.',
    campProf: '김영희 교수',
  },
  {
    campID: 3,
    campName: '청소년을 위한 미래 디자인 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg',
    campDesc: '디자인의 세계로 여행하는 청소년을 모집합니다.',
    campProf: '이진호 교수',
  },
  {
    campID: 4,
    campName: '환경을 배우는 친환경 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
    campDesc: '자연과 환경을 함께 배우며 지구를 지키는 방법을 알아봅시다.',
    campProf: '박지원 교수',
  },
  {
    campID: 5,
    campName: '창의력 개발 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg',
    campDesc: '다양한 창의적 활동을 통해 창의력을 키워봅시다.',
    campProf: '홍길동 교수',
  },
  {
    campID: 6,
    campName: '미래를 준비하는 청소년 리더십 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg',
    campDesc: '미래의 리더로 성장하는데 도움이 되는 캠프를 만나보세요.',
    campProf: '김철수 교수',
  },
  {
    campID: 7,
    campName: '자연 속의 영감을 찾는 캠프',
    campImg:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    campDesc: '자연의 아름다움과 영감을 함께 나누는 시간을 가져봅시다.',
    campProf: '이영미 교수',
  },
  {
    campID: 8,
    campName: '창업을 꿈꾸는 청년들의 모임',
    campImg:
      'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg',
    campDesc: '청년 창업자들이 모여 협력과 아이디어를 나누는 시간입니다.',
    campProf: '정성호 교수',
  },
];

interface IcampInfo {
  campID: number;
  campName: string;
  campImg: string;
  campDesc: string; // campSeason: string;
  campProf: string;
}

const Page = styled.div`
  padding: 0px 230px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;

export default function Main() {
  return (
    <>
      <Page>
        <div>Main</div>
        <CardGrid>
          {(campInfo as IcampInfo[])?.map((camp: IcampInfo) => (
            <Link to="/camp/:campId">
              <CampCard key={camp.campID} camp={camp} />
            </Link>
          ))}
        </CardGrid>
      </Page>
    </>
  );
}