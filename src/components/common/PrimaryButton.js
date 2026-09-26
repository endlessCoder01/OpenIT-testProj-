import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';

export default function PrimaryButton({ title, onPress, icon, disabled = false }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={{
        backgroundColor: disabled ? colors.border : colors.primary,
        borderRadius: radius.lg,
        paddingVertical: 14,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 48,
      }}
    >
      {icon ? <View style={{ marginRight: spacing.sm }}><FontAwesomeIcon icon={icon} size={14} color={colors.white} /></View> : null}
      <Text style={{ color: colors.white, fontWeight: '700', fontSize: 15 }}>{title}</Text>
    </Pressable>
  );
}
