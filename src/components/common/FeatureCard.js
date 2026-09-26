import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function FeatureCard({ icon, title, description }) {
  return (
    <View style={{ width: '48%', backgroundColor: colors.white, borderRadius: radius.lg, padding: spacing.lg, ...shadows.card, marginBottom: spacing.lg }}>
      <View style={{ width: 42, height: 42, borderRadius: radius.pill, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md }}>
        <FontAwesomeIcon icon={icon} size={18} color={colors.primary} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 6 }}>{title}</Text>
      <Text style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 20 }}>{description}</Text>
    </View>
  );
}
