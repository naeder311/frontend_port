import React from 'react';
import { Page, Text, Document } from '@react-pdf/renderer';

const MyDoc = () => {
  return (
    <Document>
      <Page className="main">
        <div className="main--left">
          left side
          <Text>Left Side</Text>
        </div>
        <div className="main--right">
          <Text>Right Side</Text>
        </div>
      </Page>
    </Document>
  );
};
export default MyDoc;
