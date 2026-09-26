import React from 'react';
import { View } from 'react-native';

import { colors } from '../../theme/colors';

export default function ShimmerText({ width = '100%', height = 16, style }) {
  return <View style={[{ width, height, borderRadius: 999, backgroundColor: colors.border }, style]} />;
}
