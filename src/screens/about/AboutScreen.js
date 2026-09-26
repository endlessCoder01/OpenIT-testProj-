import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import { company } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="About Us" subtitle="Built around trust, technology and long-term partnership." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, ...shadows.card }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: colors.text }}>Company story</Text>
          <Text style={{ marginTop: spacing.md, color: colors.text, lineHeight: 24 }}>{company.story}</Text>
        </View>

        <View style={{ marginTop: spacing.xxl }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: spacing.md }}>Timeline</Text>
          <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, ...shadows.card }}>
            <Text style={{ color: colors.text, fontWeight: '700' }}>2005 → Foundation</Text>
            <Text style={{ marginTop: spacing.sm, color: colors.textSecondary }}>OpenIT began as a family-run business rooted in Marondera.</Text>
            <Text style={{ marginTop: spacing.lg, color: colors.text, fontWeight: '700' }}>Growth → Broader IT expertise</Text>
            <Text style={{ marginTop: spacing.sm, color: colors.textSecondary }}>The business expanded to include broader technology services and support.</Text>
            <Text style={{ marginTop: spacing.lg, color: colors.text, fontWeight: '700' }}>Today → IT + cybersecurity + networking + renewable energy + security</Text>
            <Text style={{ marginTop: spacing.sm, color: colors.textSecondary }}>OpenIT supports modern business operations across service delivery and technology resilience.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
