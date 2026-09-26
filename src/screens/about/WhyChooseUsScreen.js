import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faUsers, faLightbulb, faShieldHalved, faHandsHelping, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import FeatureCard from '../../components/common/FeatureCard';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const features = [
  { icon: faBriefcase, title: 'Trusted Expertise', description: 'OpenIT brings practical, trustworthy technical support built for real-world business demands.' },
  { icon: faUsers, title: 'Family Values', description: 'A family-run culture rooted in accountability, integrity and long-term partnership.' },
  { icon: faLightbulb, title: 'Tailored Solutions', description: 'Technology recommendations shaped around the needs of each client and environment.' },
  { icon: faShieldHalved, title: 'Reliability', description: 'Dependable support that helps businesses maintain confidence in their systems.' },
  { icon: faHandsHelping, title: 'Ongoing Support', description: 'Continued guidance and practical after-care as needs evolve.' },
  { icon: faArrowTrendUp, title: 'Future-Focused Technology', description: 'A progressive approach that keeps long-term strategy in view.' },
];

export default function WhyChooseUsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Why Choose Us" subtitle="A dependable local partner for modern technology needs." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
