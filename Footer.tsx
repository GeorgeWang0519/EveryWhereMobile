import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

interface FooterProps {
  onNavigate: (destination: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handlePressIn = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handlePressOut = () => {
    setActiveButton(null);
  };

  const getButtonStyle = (buttonName: string) => {
    return buttonName === activeButton ? styles.activeButton : styles.button;
  };

  const getTextStyle = (buttonName: string) => {
    return buttonName === activeButton ? styles.activeText : styles.text;
  };

  return (
    <View style={styles.container}>
      {['Home', 'Discovery', 'Add', 'Orders', 'Profile'].map((buttonName) => (
        <TouchableHighlight
          key={buttonName}
          onPressIn={() => handlePressIn(buttonName)}
          onPressOut={handlePressOut}
          onPress={() => onNavigate(buttonName)}
          underlayColor="#DDD" // 按下时的颜色反馈
          style={buttonName === 'Add' ? styles.circleButton : getButtonStyle(buttonName)}
        >
          <Text style={buttonName === 'Add' ? styles.circleButtonText : getTextStyle(buttonName)}>
            {buttonName === 'Add' ? '+' : buttonName}
          </Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f3f3f3',
    position: 'relative',
  },
  button: {
    alignItems: 'center',
  },
  activeButton: {
    alignItems: 'center',
    
  },
  text: {
    fontSize: 14,
  },
  activeText: {
    fontSize: 16, // 放大文字
    fontWeight: 'bold', // 加粗
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 55,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  circleButtonText: {
    fontSize: 40,
    color: '#000',
  },
});

export default Footer;
