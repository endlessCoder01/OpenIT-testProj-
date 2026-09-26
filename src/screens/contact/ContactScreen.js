import React from 'react';
import { View, Text, ScrollView, Linking, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faLocationDot, faGlobe, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import { company } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function ContactScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Get in Touch" subtitle="We’re here to help." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, ...shadows.card }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md }}>
            <FontAwesomeIcon icon={faPhone} size={18} color={colors.primary} />
            <Text style={{ marginLeft: spacing.sm, color: colors.text, fontSize: 16 }}>{company.phone}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md }}>
            <FontAwesomeIcon icon={faGlobe} size={18} color={colors.primary} />
            <Text style={{ marginLeft: spacing.sm, color: colors.text, fontSize: 16 }}>{company.website}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.lg }}>
            <FontAwesomeIcon icon={faLocationDot} size={18} color={colors.primary} />
            <Text style={{ marginLeft: spacing.sm, color: colors.text, fontSize: 16 }}>{company.address}</Text>
          </View>

          <View style={{ gap: 12 }}>
            <PrimaryButton title="Call" onPress={() => Linking.openURL(`tel:${company.phone.replace(/\s+/g, '')}`)} icon={faPhone} />
            <SecondaryButton title="Open Website" onPress={() => Linking.openURL(`https://${company.website}`)} icon={faGlobe} />
            <SecondaryButton title="View Location" onPress={() => navigation.navigate('Find Us')} icon={faLocationDot} />
            <SecondaryButton title="Send Feedback" onPress={() => navigation.navigate('Give Feedback')} icon={faCommentDots} />
            <SecondaryButton title="Complaint" onPress={() => navigation.navigate('Make a Complaint')} icon={faCommentDots} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
