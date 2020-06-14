import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, TouchableOpacity, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import styles from '../styles/Styles'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.greeting}>
          <Text style={{ fontSize: 20 }}>
            Hello,
            {"\n"}
            Rizqy
           </Text>
          <Text>Your personal stats</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            marginVertical: 5
          }}>
            <View style={{ flex: 1 }} >
              <Text>
                3
                {"\n"}
                Total Sessions
              </Text>
            </View>
            <View style={{ flex: 1 }} >
              <Text>
                0
                {"\n"}
                Minutes Today
              </Text>
            </View>
            <View style={{ flex: 1 }} >
              <Text>
                1
                {"\n"}
                Day Streak
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.moments}>
          <Text>Mindful Moments</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
            <View style={{ flex: 1 }} >
              <Button
                title="Learn More"
                color="#000000"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={{ flex: 1, marginHorizontal: 10 }} >
              <Button
                title="Learn More"
                color="#000000"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={{ flex: 1 }} >
              <Button
                title="Learn More"
                color="#000000"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
        <View style={styles.reminders}>
          <Text>Reminders</Text>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
            <View style={styles.remindersCard} >
              <Text style={styles.white}>Ngerjain PR</Text>
            </View>
            <View style={styles.remindersCard} >
              <Text style={styles.white}>Ngerjain PR</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};