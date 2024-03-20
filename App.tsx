// App.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import Header from './Header';
const App: React.FC = () => {
  // Define a function to handle navigation requests from the Footer
  const handleNavigate = (destination: string) => {
    console.log(`Navigation requested to ${destination}`);
    // Insert navigation logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Content Area</Text>
      </View>
      <SafeAreaView style={styles.footer}>
        {/* Pass the handleNavigate function as the onNavigate prop */}
        <Footer onNavigate={handleNavigate} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Ensure the background color fills the screen
  },
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    height: 60,
    backgroundColor: '#F9F9F6',
    paddingBottom: 0, 
    display: 'flex', 
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default App;
