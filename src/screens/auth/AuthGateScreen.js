import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import { setDemoAuthSession } from '../../storage/storage';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

export default function AuthGateScreen({ navigation, route }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('demo@openit.co.zw');
  const [password, setPassword] = useState('demo123');

  const handleSubmit = async () => {
    await setDemoAuthSession({ isAuthenticated: true, demoUser: email || 'OpenIT Demo User' });
    if (route.params?.returnTo) {
      navigation.navigate(route.params.returnTo);
      return;
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Secure access" subtitle="Demo authentication for feedback and complaints." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl }}>
          <View style={{ flexDirection: 'row', backgroundColor: colors.primaryLight, borderRadius: radius.pill, padding: 5 }}>
            <Pressable onPress={() => setMode('login')} style={{ flex: 1, borderRadius: radius.pill, paddingVertical: 10, alignItems: 'center', backgroundColor: mode === 'login' ? colors.primary : 'transparent' }}>
              <Text style={{ color: mode === 'login' ? colors.white : colors.text, fontWeight: '700' }}>Login</Text>
            </Pressable>
            <Pressable onPress={() => setMode('register')} style={{ flex: 1, borderRadius: radius.pill, paddingVertical: 10, alignItems: 'center', backgroundColor: mode === 'register' ? colors.primary : 'transparent' }}>
              <Text style={{ color: mode === 'register' ? colors.white : colors.text, fontWeight: '700' }}>Register</Text>
            </Pressable>
          </View>

          <Text style={{ marginTop: spacing.xl, color: colors.text, fontSize: 16, fontWeight: '700' }}>{mode === 'login' ? 'Welcome back' : 'Create a demo account'}</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={{ marginTop: spacing.lg, backgroundColor: colors.background, borderRadius: radius.md, padding: spacing.md, borderWidth: 1, borderColor: colors.border }} />
          <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={{ marginTop: spacing.md, backgroundColor: colors.background, borderRadius: radius.md, padding: spacing.md, borderWidth: 1, borderColor: colors.border }} />
          <View style={{ marginTop: spacing.xl }}>
            <PrimaryButton title={mode === 'login' ? 'Continue' : 'Create account'} onPress={handleSubmit} />
          </View>
          <View style={{ marginTop: spacing.md }}>
            <SecondaryButton title="Use demo access" onPress={handleSubmit} />
          </View>
          <Text style={{ marginTop: spacing.md, color: colors.textSecondary, fontSize: 12 }}>This is a local demo-only authentication placeholder, not a production security system.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
