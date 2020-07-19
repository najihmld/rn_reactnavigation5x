import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

class Home extends React.Component {
  movetoProfile = () => {
    this.props.navigation.navigate('Profile');
  };
  render() {
    return (
      <View style={styles.screen}>
        <Button title="Move to Profile" onPress={() => this.movetoProfile()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
