import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

export default function EmptyState({ title = 'No items yet', message = 'Content will appear here soon.' }) {
  return (
    <View style={{ padding: spacing.xl, borderRadius: radius.lg, backgroundColor: colors.white, alignItems: 'center' }}>
      <Text style={{ fontWeight: '700', color: colors.text, fontSize: 16 }}>{title}</Text>
      <Text style={{ marginTop: spacing.sm, color: colors.textSecondary, textAlign: 'center' }}>{message}</Text>
    </View>
  );
}
