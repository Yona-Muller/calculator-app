import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState('');

  const handleNumberPress = (number: string) => {
    setDisplay(prev => (prev === '0' ? number : prev + number));
  };

  const handleOperatorPress = (op: string) => {
    if (display.slice(-2) == '+-') {
      setExpression(prev => prev.slice(0, -2) + display);
      setDisplay(prev => prev.slice(0, -2));
    }
    if (display.slice(-1) == '+' || display.slice(-1) == '-' && display.slice(-2, -1) !== '+' || display.slice(-1) == '*'|| display.slice(-1) == '/' || display.slice(-1) == '%') {
      setExpression(prev => prev.slice(0, -1) + display);
      setDisplay(prev => prev.slice(0, -1));
    }
    if (display !== '') {
      setExpression(prev => prev + display);
      setDisplay(prev => prev + op);
    }
  };

  const handleEqualsPress = () => {
    if (display !== '' && expression !== '') {
      const finalExpression = display;
      try {
        const result = eval(finalExpression);
        setDisplay(String(result));
        setExpression('');
      } catch (error) {
        setDisplay('Error');
      }
    }
  };

  const handleClearPress = () => {
    setDisplay('');
    setExpression('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display || expression || '0'}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleClearPress}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+-')}>
          <Text style={styles.buttonText}>+-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('*')}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={handleEqualsPress}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  display: {
    width: '90%',
    height: 180,
    backgroundColor: '#009933',
    alignItems: 'flex-end',
    paddingRight: 15,
    marginBottom: 20,
    borderRadius: 15,
  },
  displayText: {
    fontSize: 70,
    color: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF00CC',
    padding: 20,
    borderRadius: 50,
    width: 85,
    height: 85,
    paddingTop:13,
    paddingLeft:30,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
  },
  equalsButton: {
    backgroundColor: 'red', 
    width: '50%', 
    height: 90,
    paddingTop:13,
    paddingLeft:80,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});