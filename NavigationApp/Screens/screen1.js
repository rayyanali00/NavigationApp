import React from 'react';
import {View, Text, Button} from 'react-native';

const screen1=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
            <Button title="Go to About screen" onPress={()=>navigation.navigate('About')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>

)}




  
export default screen1;