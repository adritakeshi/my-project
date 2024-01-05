import React from 'react';
import Title from './src/components/Title/';
import Main from './src/components/Main/';
import { Text, View } from 'react-native';
import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}
