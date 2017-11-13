import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class CoinView extends React.Component {
  render () {
    return (
      <View style={this.props.style}>
        <Text>코인뷰가 나올것입니다.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
  },
});

export default CoinView;
