import React from 'react';
import { Text, View } from 'react-native';
  
interface Props {}
/** ------------------------------------------------
 * | This component should be treated as a model
 * | Use it to write you reduxed componentes
 * | It uses the correct types for thunk
 */
export default function Main(props: Props) {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}