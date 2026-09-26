import React from 'react';
import { Pressable, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';

export default function SecondaryButton({ title, onPress, icon }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.lg,
        backgroundColor: colors.white,
        paddingVertical: 12,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 46,
      }}
    >
      {icon ? <FontAwesomeIcon icon={icon} size={14} color={colors.primary} style={{ marginRight: spacing.sm }} /> : null}
      <Text style={{ color: colors.text, fontWeight: '700', fontSize: 14 }}>{title}</Text>
    </Pressable>
  );
}
