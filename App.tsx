import React, {useState} from 'react';
import { Button, Modal, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export  function App(){
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <SafeAreaView
    style={{
      backgroundColor:'gold',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Button title='show modal' onPress={()=>{setModalVisible(true)}}/>
      <Modal visible={modalVisible} animationType='slide'>
      <Text style={{fontSize:50, marginTop:50}}>Modal is opened</Text>
            <Button title='close modal' onPress={()=>{setModalVisible(false)}}/>

      </Modal>
</SafeAreaView>
  );
}
export default App;