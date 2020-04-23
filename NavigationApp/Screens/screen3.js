import React from 'react';
import {View, Text,Button} from 'react-native';

const screen3=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact Screen</Text>
            <Button title="Go back" onPress={() => navigation.popToTop()} />
      </View>
    )
}

export default screen3;