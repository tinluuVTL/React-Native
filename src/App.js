import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

//Todo: Bài tập 1
const Bai1_con = ({name, mssv, lop, containerStyle, textStyle}) => {
  return (
    <View style={[styles.centeredContainer, containerStyle]}>
      <Text style={textStyle}>Tên: {name}</Text>
      <Text style={textStyle}>MSSV: {mssv}</Text>

      <Text style={textStyle}>Lớp: {lop}</Text>
    </View>
  );
};
const Bai1 = () => {
  const containerStyle = {marginBottom: 10};
  const textStyle = {color: 'blue', fontSize: 18, fontWeight: 'bold'};

  return (
    <Bai1_con
      name="Tín Lưu"
      mssv="120001347"
      lop="20CT112"
      containerStyle={containerStyle}
      textStyle={textStyle}
    />
  );
};
//Todo: Bài tập 2
const Bai2_con = ({textStyles, text}) => {
  return (
    <View style={styles.centeredContainer}>
      <Text style={textStyles}>{text}</Text>
    </View>
  );
};
const Bai2 = () => {
  const containerStyle = {marginBottom: 10};
  const textStyle = {color: 'blue', fontSize: 18, fontWeight: 'bold'};

  return (
    <View style={styles.centeredContainer}>
      <Bai2_con textStyles={textStyle} text="Product 1" />

      <Bai2_con textStyles={[textStyle, {color: 'green'}]} text="Product 2" />

      <Bai2_con
        textStyles={[textStyle, {color: 'red', fontSize: 30}]}
        text="Product 3"
      />
    </View>
  );
};
//todo: Bài tập 3
const Bai3_Con = ({onPress, buttonText}) => {
  return (
    <View style={styles.button} onTouchEnd={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
};

const Bai3 = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <Bai3_Con onPress={incrementCount} buttonText="UP" />
    </View>
  );
};

//todo: Bài tập 4
const Bai4_Con = props => {
  const [merge, setMerge] = React.useState();

  const handleMerge = () => {
    setMerge(Number(props.value1) + Number(props.value2));
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>Tổng: {merge}</Text>
      <Button title="Xác nhận" onPress={handleMerge} />
    </View>
  );
};

const Bai4 = () => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  return (
    <View style={{flex: 1, padding: 69, justifyContent: 'center'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nhập giá trị"
          onChangeText={setValue1}
          keyboardType="numeric"
          value={value1}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập giá trị"
          onChangeText={setValue2}
          keyboardType="numeric"
          value={value2}
        />
        <Bai4_Con value1={value1} value2={value2} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lưu Văn Tín</Text>
      <Text style={styles.text}>MSSV: 120001347</Text>
      <Text style={styles.text}>Lớp: 20CT112</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    wight: 100,
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Bai4;
