import React, { useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TextInput,
  TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function calculadoraIMC() {

  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [imc, setIMC] = useState(null);
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
  }, [imc])

  const calc = () => {
    //IMC = peso / (altura x altura)
    if(weight && height) {
      let result = Number(weight)/(Number(height)*Number(height))*10000;
      setIMC(result);
    }
  }

  const reset = () => {
    setWeight(null);
    setHeight(null);
    setIMC(null);
  }

  const toRank = () => {
    if(imc < 18.5) {
      setclassification('Abaixo do peso');
    } else if(imc >= 18.5 && imc < 25) {
      setclassification('Peso ideal');
    } else if(imc >= 25 && imc < 30) {
      setclassification('Sobrepeso');
    } else if(imc >= 30 && imc < 35) {
      setclassification('Obesidade classe I');
    } else if(imc >= 35 && imc < 40) {
      setclassification('Obesidade classe II');
    } else {
      setclassification('Obesidade classe II');
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>        
        <Text style={styles.title}>Calculadora de IMC</Text>
      </View>
      
      <View style={styles.panel}>

        <View style={{ display: 'flex', flexDirection: 'row', alignItens: 'center'}}>
          <MaterialCommunityIcons name="weight" size={30} color="green" />
          <TextInput
            style={styles.input}
            onChangeText={(newWeight)=>handleWeight(newWeight)}
            defaultValue={weight}
            placeholder="Digite Peso (kg)"
            keyboardType="numeric"
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            blurOnSubmit={false}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItens: 'center'}}>
          <MaterialCommunityIcons name="ruler" size={30} color="green" />
          <TextInput
            style={styles.input}
            onChangeText={(newHeight)=>handleHeight(newHeight)}
            defaultValue={height}            
            placeholder="Digite Altura (cm)"
            keyboardType="numeric"
            ref={(input) => { this.secondTextInput = input; }}
            blurOnSubmit={true}
          />
        </View>

      </View>
      {imc == null ? (
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={(height == null || weight == null) ? styles.buttonDisabled : styles.button}
            onPress={calc}
            disabled = {(height == null || weight == null) ? true : false}
          >
            <Text style={styles.buttonTxt}>Calcular</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={reset}
          >
            <Text style={styles.buttonTxt}>Limpar</Text>
          </TouchableOpacity>
        </View>      
      )}

      {(imc != null && classification != '') && (
        <View style={styles.panelResult}>        
          <Text style={styles.resultado}>Seu IMC: { imc.toFixed(2) }</Text>
          <Text style={styles.resultado}>Classificação: { classification }</Text>
        </View>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#80B090',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: 700,
  },
  panel:{
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    height: 40,
    margin: 8,
    borderBottomWidth: 1,
    padding: 10,
    textAlign: 'center',

  },
  buttonArea:{ margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  buttonDisabled:{
    backgroundColor: '#A0D0B0',
    padding: 10,
    borderRadius: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  buttonTxt:{
    fontSize: 18,
    textAlign: 'center',
  },
  panelResult:{
    backgroundColor: '#C0C0C0',
    borderRadius: 15,
    margin: 10,
    padding: 5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultado:{
    fontSize: 18,
    textAlign: 'center',
  },
});