import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = React.useMemo(() => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator color={'red'} size={'large'} />
    </View>
  )
});


const styles = {
  indicator: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
}

export default Loader;
