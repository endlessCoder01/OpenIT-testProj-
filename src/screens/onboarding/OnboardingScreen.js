import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRocket, faBolt, faUsers, faHeadset, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';

import { onboardingSteps } from '../../data/openitContent';
import { setOnboardingComplete } from '../../storage/storage';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

const { width } = Dimensions.get('window');
const iconMap = { faRocket, faBolt, faUsers, faHeadset };

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: currentIndex,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, progress]);

  const animatedStyle = {
    transform: [
      {
        translateX: progress.interpolate({
          inputRange: [0, onboardingSteps.length - 1],
          outputRange: [0, -width * (onboardingSteps.length - 1)],
        }),
      },
    ],
  };

  const goNext = () => {
    if (currentIndex < onboardingSteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current?.scrollTo({ x: (currentIndex + 1) * width, animated: true });
    }
  };

  const skip = async () => {
    await setOnboardingComplete(true);
    navigation.replace('MainTabs');
  };

  const finish = async () => {
    await setOnboardingComplete(true);
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1, paddingHorizontal: spacing.xl }}>
        <Pressable onPress={skip} accessibilityRole="button" accessibilityLabel="Skip onboarding" style={{ alignSelf: 'flex-end', marginTop: spacing.xl, paddingHorizontal: 14, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: colors.white }}>
          <Text style={{ color: colors.textSecondary, fontWeight: '700' }}>Skip</Text>
        </Pressable>

        <Animated.View style={[{ flex: 1, flexDirection: 'row', width: width * onboardingSteps.length }, animatedStyle]}>
          {onboardingSteps.map((step, index) => (
            <View key={step.id} style={{ width, alignItems: 'center', justifyContent: 'center', paddingVertical: spacing.xxl }}>
              <View style={{ width: 180, height: 180, borderRadius: 100, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', ...shadows.elevated }}>
                <FontAwesomeIcon icon={iconMap[step.icon]} size={62} color={colors.primary} />
              </View>
              <Text style={{ marginTop: spacing.xxl, fontSize: 28, fontWeight: '800', color: colors.text, textAlign: 'center', width: '80%' }}>{step.title}</Text>
              <Text style={{ marginTop: spacing.md, fontSize: 16, color: colors.textSecondary, textAlign: 'center', width: '72%', lineHeight: 24 }}>{step.subtitle}</Text>
            </View>
          ))}
        </Animated.View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: spacing.lg }}>
          {onboardingSteps.map((step, index) => (
            <View key={step.id} style={{ width: currentIndex === index ? 24 : 10, height: 10, borderRadius: radius.pill, backgroundColor: currentIndex === index ? colors.primary : colors.border, marginHorizontal: 4 }} />
          ))}
        </View>

        <View style={{ flexDirection: 'row', paddingBottom: spacing.xxl, gap: 12 }}>
          <Pressable onPress={skip} style={{ flex: 1, paddingVertical: 14, borderRadius: radius.lg, backgroundColor: colors.white, alignItems: 'center' }}>
            <Text style={{ color: colors.text, fontWeight: '700' }}>Skip</Text>
          </Pressable>
          <Pressable onPress={currentIndex === onboardingSteps.length - 1 ? finish : goNext} style={{ flex: 2, paddingVertical: 14, borderRadius: radius.lg, backgroundColor: colors.primary, alignItems: 'center' }}>
            <Text style={{ color: colors.white, fontWeight: '700' }}>{currentIndex === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
