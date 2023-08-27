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
import myfont from '../fonts/KimjungchulMyungjo-Bold.ttf';

interface IcampInfo {
  campID: number;
  campName: string;
  campImg: string;
  campSeason: string;
  campProf: string;
  student: Istudent[];
}

interface Istudent {
  studentID: number;
  studentName: string;
}

export default function PdfMaker({ campInfo }: { campInfo: IcampInfo }) {
  console.log('camp pdf Maker');
  Font.register({
    family: 'KoreanFont',
    src: myfont,
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      fontFamily: 'KoreanFont',
    },
    section: {
      margin: 10,
      padding: 100,
      flexGrow: 1,
      // position: 'absolute',
      // top: 100,
      // left: 100,
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
    title: {
      fontSize: 40,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <Image src="/pdfCover.png" style={styles.backgroundImage} />
          <View style={styles.section}>
            <Text style={styles.title}>수료증 {'\n'}</Text>
            <Text>
              이름: {campInfo.campName} {'\n'}
              학번: {campInfo.campSeason} {'\n'}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
