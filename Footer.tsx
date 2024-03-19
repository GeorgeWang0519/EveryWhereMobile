import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
interface FooterProps {
  onNavigate: (destination: string) => void;
}
const renderIcon = (buttonName: string) => {
    let iconName;
    switch (buttonName) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Discovery':
        iconName = 'find';
        break;
      case 'Orders':
        iconName = 'isv';
        break;
      case 'Profile':
        iconName = 'user';
        break;
      default:
        return null; 
    }
    return <Icon name={iconName} size={20} style={styles.icon} />;
  };
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
          underlayColor="#D5FF98" 
          style={buttonName === 'Add' ? styles.circleButton : getButtonStyle(buttonName)}
        >
          <View style={buttonName !== 'Add' ? styles.iconContainer : {}}>
            {buttonName !== 'Add' && renderIcon(buttonName)}
            <Text style={buttonName === 'Add' ? styles.circleButtonText : getTextStyle(buttonName)}>
            {buttonName === 'Add' ? '+' : buttonName}
           </Text>
          </View>
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
    backgroundColor: '#F9F9F6',
    position: 'relative',
    fontSize:14,
  },
  button: {
    alignItems: 'center',
    width: 82,
  },
  activeButton: {
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center', 
    fontWeight:"800",
  },
  activeText: {
    fontSize:18,
    width: 82,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 55,
    backgroundColor: '#F2F95E',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    borderWidth: 8,
    borderColor: '#F9F9F6', 
    borderStyle: 'solid', 
  },
  circleButtonText: {
    fontSize: 40,
    color: '#000',
  },
});

export default Footer;
