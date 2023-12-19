import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TermsCondition = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.paragraph}>
        Welcome to our app! By using our app, you agree to comply with and be
        bound by the following terms and conditions of use. Please read these
        terms carefully.
      </Text>
      <Text style={styles.paragraph}>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text style={styles.paragraph}>
        2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {/* Add more terms and conditions as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  // Add more styles as needed
});

export default TermsCondition;
