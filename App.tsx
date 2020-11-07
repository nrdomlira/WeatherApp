/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import globalStyles from './src/globalStyles/globalStyles';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={globalStyles.engine}>
              <Text style={globalStyles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={globalStyles.body}>
            <View style={globalStyles.sectionContainer}>
              <Text style={globalStyles.sectionTitle}>Step One</Text>
              <Text style={globalStyles.sectionDescription}>
                Edit <Text style={globalStyles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={globalStyles.sectionContainer}>
              <Text style={globalStyles.sectionTitle}>See Your Changes</Text>
              <Text style={globalStyles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={globalStyles.sectionContainer}>
              <Text style={globalStyles.sectionTitle}>Debug</Text>
              <Text style={globalStyles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={globalStyles.sectionContainer}>
              <Text style={globalStyles.sectionTitle}>Learn More</Text>
              <Text style={globalStyles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
