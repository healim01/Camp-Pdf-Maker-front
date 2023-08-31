import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
// import myfont from '../fonts/KimjungchulMyungjo-Bold.ttf';
import myfont from '../fonts/SongMyung-Regular.ttf';
import Sign from '../imgs/sign.png';

interface IcampInfo {
  campId: number;
  campName: string;
  campImg: string;
  campSeason: string;
  campProf: string;
  startDate: string;
  endDate: string;
  taked: boolean;
  takesList: {
    studentId: string;
    studentName: string;
  }[];
}

interface IuserInfo {
  userId: string;
  userName: string;
  userDept: string;
}

export default function PdfMaker({
  campInfo,
  userInfo,
}: {
  campInfo: IcampInfo;
  userInfo: IuserInfo;
}) {
  console.log('camp pdf Maker');
  Font.register({
    family: 'KoreanFont',
    src: myfont,
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      fontFamily: 'KoreanFont',
    },
    section: {
      margin: 10,
      padding: 50,
      flexGrow: 1,
    },
    text: {
      fontSize: 14,
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    contentWrapper: {
      position: 'relative',
      flex: 1,
    },
    number: {
      fontSize: 18,
      position: 'absolute',
      top: 100,
      left: 60,
    },
    title: {
      fontSize: 40,
      letterSpacing: 20,
      position: 'absolute',
      top: 150,
      left: 200,
    },
    userInfo: {
      position: 'absolute',
      fontSize: 18,
      top: 250,
      left: 300,
    },
    content: {
      fontSize: 18,
      position: 'absolute',
      top: 380,
      left: 60,
      width: 470,
      wordBreak: 'break-all',
      letterSpacing: 5,
      lineHeight: 1.5,
    },
    etc: {
      position: 'absolute',
      top: 450,
      left: 60,
      width: 480,
      fontSize: 18,
    },
    date: {
      fontSize: 18,
      position: 'absolute',
      bottom: 180,
      left: 230,
    },
    sign: {
      fontSize: 22,
      position: 'absolute',
      bottom: 100,
      left: 60,
      letterSpacing: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signPng: {
      width: 70,
      height: 70,
      position: 'absolute',
      bottom: 90,
      right: 60,
      zIndex: -1,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <Image src="/pdfCover.png" style={styles.backgroundImage} />
          <View style={styles.section}>
            <Text style={styles.number}> 제2023-372호</Text>
            <Text style={styles.title}>수료증 {'\n'}</Text>
            <Text style={styles.userInfo}>
              학{'   '}부 : {userInfo.userDept} {'\n'}학{'   '}번 :{' '}
              {userInfo.userId} {'\n'}성{'   '}명 : {userInfo.userName} {'\n'}
            </Text>
            <Text style={styles.content}>
              {'    '}위 학생은 한동대학교 SW중심 대학에서 진행한 "
              {campInfo.campName}
              "에 참가하여 소정의 과정을 이수하였기에 이 증서를 수여합니다.{' '}
            </Text>
            <Text style={styles.etc}>
              {'\n'}• 이수기간 : {campInfo.startDate} ~ {campInfo.endDate}{' '}
              {'\n'}• 이수과정 : {campInfo.campName} {'\n'}
            </Text>
            <Text style={styles.date}>2023년 8월 4일</Text>
            <Text style={styles.sign}>한동대학교 전산전자공학부 황 성 수</Text>
            <Image src={Sign} style={styles.signPng} />
          </View>
        </View>
      </Page>
    </Document>
  );
}
