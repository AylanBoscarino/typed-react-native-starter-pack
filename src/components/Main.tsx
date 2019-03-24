import React from 'react';
import { Text, View } from 'react-native';

interface Props {}
/**
 * This component should be seen as an example
 * Use it to write your reduxed components
 * It's integrate with thunk and RNN
 */
export default function Main(props: Props) {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}

Main.options = {};
