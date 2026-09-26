import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import { testimonials } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function TestimonialsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Testimonials" subtitle="Placeholder client feedback content." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        {testimonials.map((item) => (
          <View key={item.id} style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, marginBottom: spacing.lg, ...shadows.card }}>
            <FontAwesomeIcon icon={faQuoteLeft} size={22} color={colors.primary} />
            <Text style={{ marginTop: spacing.md, color: colors.text, lineHeight: 24 }}>{item.quote}</Text>
            <Text style={{ marginTop: spacing.lg, color: colors.text, fontWeight: '700' }}>{item.name}</Text>
            <Text style={{ color: colors.textSecondary, fontSize: 12 }}>{item.category}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
