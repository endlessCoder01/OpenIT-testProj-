import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export default function LoadingOverlay({ visible = true, message = 'Loading...' }) {
  if (!visible) return null;

  return (
    <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(23,34,27,0.18)', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <View style={{ backgroundColor: colors.white, borderRadius: 18, padding: spacing.xl, alignItems: 'center', minWidth: 150 }}>
        <ActivityIndicator size="small" color={colors.primary} />
        <Text style={{ marginTop: spacing.sm, color: colors.text, fontWeight: '600' }}>{message}</Text>
      </View>
    </View>
  );
}
