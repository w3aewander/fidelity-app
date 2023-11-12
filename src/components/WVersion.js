import React from "react";
import { Text, View, StyleSheet } from "react-native";

const WVersion = ({ version, codename, lastupdate }) => {
  return (
    <View style={styles.wversion}>
      <Text style={styles.version}>v{version}</Text>
      <Text style={styles.codename}>{codename}</Text>
      <Text style={styles.lastupdate}>{lastupdate}</Text>
    </View>)
}


const styles = StyleSheet.create({

  wversion: {
    flexDirection: 'row',
    fontSize: 12,
    padding: 4,
  },
  version: {
    color: '#fff',
    padding: 2,
  },
  codename: {
    color: '#fff',
    padding: 2,
  },
  lastupdate: {
    color: '#fff',
    padding: 2,
  },
});

export default WVersion;

