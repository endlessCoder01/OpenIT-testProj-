import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import { projectPlaceholders } from '../../data/openitContent';
import { Image } from 'react-native';
import { resolveImageSource } from '../../utils/imageUtils';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function ProjectScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Projects" subtitle="Placeholder project portfolio for future case studies." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        {projectPlaceholders.map((project) => (
          <Pressable key={project.id} style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl, marginBottom: spacing.lg, ...shadows.card }}>
            <View style={{ height: 160, borderRadius: radius.lg, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md, overflow: 'hidden' }}>
              <Image source={resolveImageSource(project.image)} style={{ width: '100%', height: 160, resizeMode: 'cover' }} />
            </View>
            <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 12, textTransform: 'uppercase' }}>{project.category}</Text>
            <Text style={{ marginTop: spacing.sm, fontSize: 20, fontWeight: '700', color: colors.text }}>{project.title}</Text>
            <Text style={{ marginTop: spacing.sm, color: colors.textSecondary, lineHeight: 22 }}>{project.description}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.md }}>
              {project.technologies.map((tech) => (
                <View key={tech} style={{ backgroundColor: colors.primaryLight, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8, marginBottom: 8 }}>
                  <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 11 }}>{tech}</Text>
                </View>
              ))}
            </View>
            <Text style={{ marginTop: spacing.lg, color: colors.primary, fontWeight: '700' }}>View Project</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
