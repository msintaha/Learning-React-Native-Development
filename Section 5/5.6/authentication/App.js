import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/login-form';
import Header from './src/components/header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';


export default class App extends React.Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <View>
          <Header title="Login"/>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
