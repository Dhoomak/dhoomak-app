import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Privacy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to Dhoomak!</Text>
      <Text style={styles.paragraph}>
        These terms and conditions outline the rules and regulations for the use
        of Dhoomak.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris...{' '}
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris...{' '}
        <Text style={styles.link} onPress={() => alert('Link Clicked!')}>
          Read more
        </Text>
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris...{' '}
        <Text style={styles.link} onPress={() => alert('Link Clicked!')}>
          Read more
        </Text>
      </Text>
      {/* Add more text or content as needed */}
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
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  // Add more styles as needed
});

export default Privacy;
