import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import { company } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Open-IT%20(Pvt)%20Ltd%2C%205%20Sir%20James%20Denham%20Rd%2C%20Marondera%2C%20Zimbabwe';

export default function MapScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const openDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.address)}`;
    Linking.openURL(directionsUrl);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Find Us" subtitle="OpenIT location in Marondera." showBack onBack={() => navigation.goBack()} />
      <View style={{ flex: 1, paddingHorizontal: spacing.xl, paddingBottom: spacing.xl }}>
        <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, overflow: 'hidden' }}>
          <View style={{ height: 360, backgroundColor: colors.primaryLight, position: 'relative' }}>
            {loading && <View style={styles.loading}><ActivityIndicator size="small" color={colors.primary} /></View>}
            {hasError && <View style={styles.error}><Text style={{ color: colors.text, fontWeight: '700' }}>Map unavailable. Please try again.</Text></View>}
            {!hasError && (
              <WebView
                source={{ uri: mapUrl }}
                startInLoadingState
                onLoad={() => setLoading(false)}
                onError={() => {
                  setHasError(true);
                  setLoading(false);
                }}
                javaScriptEnabled={false}
                domStorageEnabled={false}
                allowsBackForwardNavigationGestures={false}
                onShouldStartLoadWithRequest={(request) => {
                  if (request.url.startsWith('https://www.google.com/maps')) return true;
                  return false;
                }}
                style={{ flex: 1 }}
              />
            )}
          </View>
        </View>

        <View style={{ marginTop: spacing.xl, backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: colors.text }}>OpenIT</Text>
          <Text style={{ marginTop: spacing.sm, color: colors.textSecondary }}>{company.address}</Text>
          <View style={{ marginTop: spacing.lg }}>
            <PrimaryButton title="Get Directions" onPress={openDirections} icon={faArrowUpRightFromSquare} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
});
