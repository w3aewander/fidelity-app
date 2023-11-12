import React from "react";
import {Text, View} from "react-native"

const WVersion = (props) => {
      <View style={{fontSize: 10, height: 50, color: '#fafafa'}}>
        <Text>{props.version}</Text>
        <Text>{props.codename}</Text>
        <Text>{props.lastupdate}</Text>
      </View>
}

export default WVersion

