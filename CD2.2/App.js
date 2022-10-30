import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <View style={{ paddingBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
          5 книжнных новинок октября
        </Text>
      </View>

      <View style={{ flex: 2, backgroundColor: '#D3D3D3' }}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 25 }}>
          «Кадиш.com» Натан Ингландер. Издательство «Книжники»
        </Text>
      </View>

      <View style={{ flex: 8, backgroundColor: '#A9A9A9' }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            marginTop: 25,
            paddingHorizontal: 10,
          }}>
          Ироничекая новелла Натана Ингландера, две личные истории культовой
          Патти Смит, репортаж британской журналистки о будущем челевества,
          дебютный роман Оушена Вуонга и журналистское расследование о создании
          «Моссады». В нашей подборке рассказываем о пяти захватывающих книжных
          новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>
      </View>
      <Button
        onPress={() => Alert.alert('Button pressed')}
        title="Читать далее"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
