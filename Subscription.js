// screens/Subscription.js
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function Subscription({ route, navigation }) {
  const { providerId } = route.params;  // comes from Dashboard
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      // Here you’d normally call your backend to create/activate subscription
      // await createSubscription(providerId);
      Alert.alert('Success', 'Subscription activated!');
      navigation.goBack(); // return to Dashboard
    } catch (err) {
      Alert.alert('Error', 'Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Subscribe to unlock features
      </Text>

      <Button 
        title={loading ? 'Processing...' : 'Activate Subscription'} 
        onPress={handleSubscribe}
        disabled={loading}
      />
    </View>
  );
}
