import React, { useEffect, useMemo, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RootNavigator from './navigation/RootNavigator';
import { getOnboardingComplete } from './storage/storage';

export default function App() {
  const [ready, setReady] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    let active = true;

    const load = async () => {
      const isDone = await getOnboardingComplete();
      if (active) {
        setOnboardingComplete(Boolean(isDone));
        setReady(true);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  const appValue = useMemo(() => ({ onboardingComplete }), [onboardingComplete]);

  if (!ready) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <RootNavigator initialOnboardingComplete={appValue.onboardingComplete} />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
