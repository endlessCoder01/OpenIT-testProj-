import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

import { colors } from '../../theme/colors';

const MAX_SHIMMER_MS = 3000;

export default function ShimmerCard({ style, height = 160, borderRadius = 18 }) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0.8,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 150);

    const maxTimeout = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0.4,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, MAX_SHIMMER_MS);

    return () => {
      clearTimeout(timeout);
      clearTimeout(maxTimeout);
    };
  }, [opacity]);

  return (
    <Animated.View style={[{ height, borderRadius, backgroundColor: colors.border, overflow: 'hidden', opacity }, style]}>
      <View style={{ flex: 1, backgroundColor: colors.border }} />
    </Animated.View>
  );
}
