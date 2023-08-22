import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
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
      backgroundColor: '#E4E4E4',
      fontFamily: 'KoreanFont',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    text: {
      fontSize: 14,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            수료증 {'\n'}
            이름: {campInfo.campName} {'\n'}
            학번: {campInfo.campSeason} {'\n'}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
