import { useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TextInput,
  TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "style";

const BMICalc = () => {

  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [classification, setclassification] = useState('');

  const handleWeight = (value) => {
    if(value.length > 0) {
      setWeight(value);
    }
  }

  const handleHeight = (value) => {
    if(value.length > 0) {
      setHeight(value);
    }
  }

  useEffect(() => {
    toRank();
  })

  const calc = () => {
    //BMI = weight / (height x height)
    if(weight && height) {
      let result = Number(weight)/(Number(height)*Number(height))*10000;
      setBMI(result);
    }
  }

  const reset = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
  }

  const toRank = () => {
    if(bmi < 18.5) {
      setclassification('Underweight');
    } else if(bmi >= 18.5 && bmi < 25) {
      setclassification('Normal range');
    } else if(bmi >= 25 && bmi < 30) {
      setclassification('Overweight');
    } else if(bmi >= 30 && bmi < 35) {
      setclassification('Obese class I');
    } else if(bmi >= 35 && bmi < 40) {
      setclassification('Obese class II');
    } else {
      setclassification('Obese class III');
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>        
        <Text style={styles.title}>BMI Calculator</Text>
      </View>
      
      <View style={styles.panel}>

        <View style={{ display: 'flex', flexDirection: 'row', alignItens: 'center'}}>
          <MaterialCommunityIcons name="weight" size={30} color="green" />
          <TextInput
            style={styles.input}
            onChangeText={(newWeight)=>handleWeight(newWeight)}
            defaultValue={weight}
            placeholder="Enter weight (kg)"
            keyboardType="numeric"
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            blurOnSubmit={false}
            value={weight}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItens: 'center'}}>
          <MaterialCommunityIcons name="ruler" size={30} color="green" />
          <TextInput
            style={styles.input}
            onChangeText={(newHeight)=>handleHeight(newHeight)}
            defaultValue={height}            
            placeholder="Enter height (cm)"
            keyboardType="numeric"
            ref={(input) => { this.secondTextInput = input; }}
            blurOnSubmit={true}
            value={height}
          />
        </View>

      </View>
      {bmi == null ? (
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={(height == null || weight == null) ? styles.buttonDisabled : styles.button}
            onPress={calc}
            disabled = {(height == null || weight == null) ? true : false}
          >
            <Text style={styles.buttonTxt}>Calculate</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={reset}
          >
            <Text style={styles.buttonTxt}>Clear</Text>
          </TouchableOpacity>
        </View>      
      )}

      {(bmi != null && classification != '') && (
        <View style={styles.panelResult}>        
          <Text style={styles.result}>Your BMI: { bmi.toFixed(2) }</Text>
          <Text style={styles.result}>Classification: { classification }</Text>
        </View>
      )}

    </SafeAreaView>
  );
}

export default BMICalc;