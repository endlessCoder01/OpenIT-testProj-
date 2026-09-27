import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faBell, faLocationDot, faPhone, faComments, faBriefcase, faShieldHalved, faLock, faNetworkWired, faSolarPanel, faLightbulb, faQuoteLeft, faArrowUpRightFromSquare, faMapLocationDot, faChevronRight, faUsers } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import SectionHeader from '../../components/common/SectionHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import FeatureCard from '../../components/common/FeatureCard';
import { company, services, projectPlaceholders, testimonials, galleryItems, teamMembers } from '../../data/openitContent';
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

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={{ paddingHorizontal: spacing.xl, paddingTop: spacing.md }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: '700', color: colors.primary }}>OpenIT</Text>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>Good day</Text>
            </View>
            <Pressable accessibilityRole="button" accessibilityLabel="Open assistant" onPress={() => navigation.navigate('Ask OpenIT')} style={{ width: 42, height: 42, borderRadius: radius.pill, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center', ...shadows.card }}>
              <FontAwesomeIcon icon={faComments} color={colors.primary} size={18} />
            </Pressable>
          </View>

          <View style={{ marginTop: spacing.xl, backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, ...shadows.card }}>
            <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: spacing.sm }}>OpenIT</Text>
            <Text style={{ fontSize: 30, fontWeight: '800', color: colors.text, lineHeight: 36 }}>Empowering Innovation.</Text>
            <Text style={{ marginTop: spacing.md, color: colors.textSecondary, fontSize: 15, lineHeight: 24 }}>OpenIT delivers modern IT, networking, cybersecurity, security and renewable-energy solutions for businesses in Zimbabwe and beyond.</Text>
            <View style={{ flexDirection: 'row', marginTop: spacing.xl, gap: 12 }}>
              <View style={{ flex: 1 }}>
                <PrimaryButton title="Explore Services" onPress={() => navigation.navigate('Services')} icon={faBriefcase} />
              </View>
              <View style={{ flex: 1 }}>
                <SecondaryButton title="Contact Us" onPress={() => navigation.navigate('Get in Touch')} icon={faPhone} />
              </View>
            </View>
          </View>

          <View style={{ marginTop: spacing.xxl }}>
            <SectionHeader title="Latest Projects" subtitle="Placeholder project work for future publishing." action={<Pressable onPress={() => navigation.navigate('Projects')}><Text style={{ color: colors.primary, fontWeight: '700' }}>View all</Text></Pressable>} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: spacing.md }}>
              {projectPlaceholders.map((project) => (
                <Pressable key={project.id} onPress={() => navigation.navigate('Projects')} style={{ width: 240, marginRight: spacing.md, backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, ...shadows.card }}>
                  <View style={{ height: 120, borderRadius: radius.lg, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md }}>
                    <Text style={{ color: colors.primary, fontWeight: '700' }}>Project</Text>
                  </View>
                  <Text style={{ color: colors.primary, fontSize: 12, fontWeight: '700', textTransform: 'uppercase' }}>{project.category}</Text>
                  <Text style={{ marginTop: spacing.sm, color: colors.text, fontWeight: '700', fontSize: 18 }}>{project.title}</Text>
                  <Text style={{ marginTop: spacing.sm, color: colors.textSecondary, fontSize: 13, lineHeight: 20 }}>{project.description}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>


          <View style={{ marginTop: spacing.xxl }}>
            <SectionHeader title="Why Choose Us" subtitle="What sets OpenIT apart." />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <FeatureCard icon={faBriefcase} title="Trusted Expertise" description="Practical knowledge across IT, cybersecurity and network operations." />
              <FeatureCard icon={faUsers} title="Family Values" description="A business rooted in trust, accountability and long-term relationships." />
              <FeatureCard icon={faArrowUpRightFromSquare} title="Tailored Solutions" description="Services designed around your environment, goals and operational needs." />
              <FeatureCard icon={faBell} title="Reliability" description="Dependable support and a steady focus on business continuity." />
            </View>
          </View>




          <View style={{ marginTop: spacing.xxl }}>
            <SectionHeader title="Gallery Preview" subtitle="A snapshot of our latest project moments." action={<Pressable onPress={() => navigation.navigate('Gallery')}><Text style={{ color: colors.primary, fontWeight: '700' }}>View all</Text></Pressable>} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {galleryItems.slice(0, 4).map((item) => (
                <Pressable key={item.id} onPress={() => navigation.navigate('Gallery')} style={{ width: '48%', marginBottom: spacing.md, borderRadius: radius.lg, overflow: 'hidden', backgroundColor: colors.white, ...shadows.card }}>
                  <View style={{ height: 130, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: colors.primary, fontWeight: '700' }}>{item.category}</Text>
                  </View>
                  <Text style={{ padding: spacing.md, color: colors.text, fontWeight: '700' }}>{item.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{ marginTop: spacing.xxl }}>
            <SectionHeader title="Get in Touch" subtitle="We’re ready to help." />
            <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, ...shadows.card }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md }}>
                <FontAwesomeIcon icon={faPhone} color={colors.primary} size={16} />
                <Text style={{ marginLeft: spacing.sm, color: colors.text }}>{company.phone}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md }}>
                <FontAwesomeIcon icon={faLocationDot} color={colors.primary} size={16} />
                <Text style={{ marginLeft: spacing.sm, color: colors.text }}>{company.address}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 12 }}>
                <View style={{ flex: 1 }}><PrimaryButton title="Call" onPress={() => navigation.navigate('Get in Touch')} icon={faPhone} /></View>
                <View style={{ flex: 1 }}><SecondaryButton title="Visit Map" onPress={() => navigation.navigate('Find Us')} icon={faMapLocationDot} /></View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: spacing.xxl, marginBottom: spacing.xl, alignItems: 'center' }}>
            <Text style={{ color: colors.textSecondary, fontSize: 12 }}>© 2025 OpenIT • Empowering Innovation.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
