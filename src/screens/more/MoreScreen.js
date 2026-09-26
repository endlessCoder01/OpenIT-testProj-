import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle, faShieldHalved, faUsers, faComments, faPhone, faLocationDot, faClipboardQuestion, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

const items = [
  { title: 'About Us', route: 'About', icon: faInfoCircle },
  { title: 'Why Choose Us', route: 'WhyChooseUs', icon: faShieldHalved },
  { title: 'Our Team', route: 'OurTeam', icon: faUsers },
  { title: 'Testimonials', route: 'Testimonials', icon: faComments },
  { title: 'Get in Touch', route: 'Get in Touch', icon: faPhone },
  { title: 'Find Us', route: 'Find Us', icon: faLocationDot },
  { title: 'Give Feedback', route: 'Give Feedback', icon: faClipboardQuestion },
  { title: 'Make a Complaint', route: 'Make a Complaint', icon: faCircleExclamation },
];

export default function MoreScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="More" subtitle="Explore the OpenIT experience." />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        {items.map((item) => (
          <Pressable key={item.title} onPress={() => navigation.navigate(item.route)} style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, marginBottom: spacing.md, flexDirection: 'row', alignItems: 'center', ...shadows.card }}>
            <View style={{ width: 42, height: 42, borderRadius: radius.pill, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesomeIcon icon={item.icon} color={colors.primary} size={18} />
            </View>
            <Text style={{ marginLeft: spacing.md, color: colors.text, fontSize: 16, fontWeight: '700', flex: 1 }}>{item.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
