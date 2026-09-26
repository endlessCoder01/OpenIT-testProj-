import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';

export default function IconButton({ icon, onPress, color = colors.primary, background = colors.primaryLight, accessibilityLabel }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || 'Action'}
      style={{
        width: 42,
        height: 42,
        borderRadius: radius.pill,
        backgroundColor: background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FontAwesomeIcon icon={icon} size={18} color={color} />
    </Pressable>
  );
}
