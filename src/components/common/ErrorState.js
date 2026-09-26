import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import PrimaryButton from './PrimaryButton';

export default function ErrorState({ title = 'Something went wrong', message = 'Please try again.', onRetry }) {
  return (
    <View style={{ padding: spacing.xl, borderRadius: radius.lg, backgroundColor: colors.white, alignItems: 'center' }}>
      <Text style={{ fontWeight: '700', color: colors.text, fontSize: 16 }}>{title}</Text>
      <Text style={{ marginTop: spacing.sm, color: colors.textSecondary, textAlign: 'center' }}>{message}</Text>
      {onRetry ? <View style={{ marginTop: spacing.lg, width: '100%' }}><PrimaryButton title="Retry" onPress={onRetry} /></View> : null}
    </View>
  );
}
