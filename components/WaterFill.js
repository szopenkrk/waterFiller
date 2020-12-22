import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

export default function WaterFill() {
  const [water, setWater] = useState(0);
  return (
    <>
      <View style={styles.container}>
        <Text>Ilość wody sporzytej w ciągu dnia:</Text>
        <Text style={styles.waterText}>{water} litra</Text>
        {/* Progress bar for water consumption */}
        <ProgressCircle
          // eslint-disable-next-line react-native/no-inline-styles
          style={{height: 200}}
          progress={{water}}
          progressColor={'rgb(134, 65, 244)'}
          startAngle={-Math.PI * 0.8}
          endAngle={Math.PI * 0.8}
        />
        <Button
          style={styles.addWater}
          onPress={() => {
            setWater(water + 1 * 0.25);
          }}
          title="Dodaj wypitą szklankę wody"
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addWater: {
    marginTop: '10%',
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF1493',
  },
  progressCircleHeight: {
    height: 200,
  },
});
