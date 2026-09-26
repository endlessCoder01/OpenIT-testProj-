import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

export default function AppHeader({ title, subtitle, showBack, onBack }) {
  return (
    <View style={{ paddingHorizontal: spacing.xl, paddingTop: 12, paddingBottom: spacing.lg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showBack ? (
          <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel="Go back" style={{ marginRight: spacing.md, width: 36, height: 36, borderRadius: radius.pill, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faArrowLeft} size={16} color={colors.primary} />
          </Pressable>
        ) : null}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: colors.text }}>{title}</Text>
          {subtitle ? <Text style={{ marginTop: 4, color: colors.textSecondary, fontSize: 14 }}>{subtitle}</Text> : null}
        </View>
      </View>
    </View>
  );
}
