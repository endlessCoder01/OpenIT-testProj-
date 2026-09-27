import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

import { appLogo } from '../../data/openitContent';
import { resolveImageSource } from '../../utils/imageUtils';

export default function AppHeader({ title, subtitle, showBack, onBack }) {
  return (
    <View style={{ paddingHorizontal: spacing.xl, paddingTop: 12, paddingBottom: spacing.lg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showBack ? (
          <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel="Go back" style={{ marginRight: spacing.md, width: 36, height: 36, borderRadius: radius.pill, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faArrowLeft} size={16} color={colors.primary} />
          </Pressable>
        ) : null}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image source={resolveImageSource(appLogo)} style={{ width: 48, height: 48, resizeMode: 'contain', marginRight: spacing.sm }} />
          <View>
            <Text style={{ fontSize: 22, fontWeight: '800', color: colors.text }}>{title}</Text>
            {subtitle ? <Text style={{ marginTop: 4, color: colors.textSecondary, fontSize: 12 }}>{subtitle}</Text> : null}
          </View>
        </View>
      </View>
    </View>
  );
}
