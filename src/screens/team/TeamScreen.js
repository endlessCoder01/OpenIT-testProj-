import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import { teamMembers } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function TeamScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Our Team" subtitle="The people behind OpenIT." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        {teamMembers.map((member) => (
          <View key={member.id} style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, marginBottom: spacing.lg, ...shadows.card }}>
            <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md }}>
              <Text style={{ color: colors.primary, fontWeight: '800', fontSize: 18 }}>{member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</Text>
            </View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: colors.text }}>{member.name}</Text>
            <Text style={{ marginTop: 4, color: colors.primary, fontWeight: '700' }}>{member.role}</Text>
            <Text style={{ marginTop: spacing.md, color: colors.textSecondary, lineHeight: 22 }}>{member.bio}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
