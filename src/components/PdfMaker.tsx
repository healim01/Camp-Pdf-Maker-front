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
import { PDFViewer } from '@react-pdf/renderer';
import myfont from '../fonts/KimjungchulMyungjo-Bold.ttf';

export default function PdfMaker({ campInfo }: { campInfo: any }) {
  console.log('camp pdf Maker');
  Font.register({
    family: 'KoreanFont',
    src: myfont,
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      fontFamily: 'KoreanFont',
    },
    section: {
      position: 'absolute',
      top: 100,
      left: 100,
    },
    text: {
      fontSize: 14,
    },
    title: {
      fontSize: 45,
      fontWeight: 'bold',
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    contentWrapper: {
      position: 'relative',
      flex: 1,
    },
  });

  return (
    <PDFViewer width="1000" height="600">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.contentWrapper}>
            <Image src="/pdfCover.png" style={styles.backgroundImage} />
            <View style={styles.section}>
              <Text>
                <Text style={styles.title}> 수료증 </Text>
                이름: {campInfo.campName} {'\n'}
                학번: {campInfo.campSeason} {'\n'}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
