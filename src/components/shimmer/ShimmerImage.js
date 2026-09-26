import React from 'react';
import { View } from 'react-native';

import { colors } from '../../theme/colors';

export default function ShimmerImage({ width = '100%', height = 180, style }) {
  return <View style={[{ width, height, backgroundColor: colors.border, borderRadius: 16 }, style]} />;
}
