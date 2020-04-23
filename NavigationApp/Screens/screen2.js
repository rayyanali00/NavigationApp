import React from 'react';
import {View, Text,Button} from 'react-native';

const screen2=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        
        <Button title="Go to Contact screen" onPress={()=>navigation.navigate('Contact')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
}

export default screen2;