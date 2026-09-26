import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faShieldHalved, faNetworkWired, faLock, faSolarPanel, faLightbulb, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import { services } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

const serviceIcons = {
  'Managed IT': faBriefcase,
  Security: faShieldHalved,
  Network: faNetworkWired,
  Cybersecurity: faLock,
  'Renewable Energy': faSolarPanel,
  Consultancy: faLightbulb,
};

export default function ServicesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Services" subtitle="Technology solutions designed for growth." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        {services.map((service) => (
          <Pressable key={service.id} style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, marginBottom: spacing.lg, ...shadows.card }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 52, height: 52, borderRadius: radius.pill, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={serviceIcons[service.title] || faBriefcase} size={20} color={colors.primary} />
              </View>
              <View style={{ marginLeft: spacing.md, flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: colors.text }}>{service.title}</Text>
                <Text style={{ marginTop: 4, fontSize: 13, color: colors.textSecondary }}>{service.description}</Text>
              </View>
            </View>
            <Text style={{ marginTop: spacing.md, color: colors.text, lineHeight: 22 }}>{service.detail}</Text>
            <View style={{ marginTop: spacing.lg, alignItems: 'flex-end' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>Learn More</Text>
                <FontAwesomeIcon icon={faChevronRight} size={12} color={colors.primary} style={{ marginLeft: 6 }} />
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
