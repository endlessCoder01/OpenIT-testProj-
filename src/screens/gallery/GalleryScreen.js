import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Modal, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import { galleryItems } from '../../data/openitContent';
import { resolveImageSource } from '../../utils/imageUtils';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function GalleryScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="Gallery" subtitle="Placeholder gallery content for future client work." showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {galleryItems.map((item, index) => (
            <Pressable key={item.id} onPress={() => setSelectedIndex(index)} style={{ width: '48%', marginBottom: spacing.lg, backgroundColor: colors.white, borderRadius: radius.lg, overflow: 'hidden', ...shadows.card }}>
              <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={resolveImageSource(item.image)} style={{ width: '100%', height: 150, resizeMode: 'cover' }} />
              </View>
              <Text style={{ padding: spacing.md, color: colors.text, fontWeight: '700' }}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Modal visible={selectedIndex !== null} transparent animationType="fade">
        <View style={{ flex: 1, backgroundColor: 'rgba(15,20,19,0.76)', justifyContent: 'center', alignItems: 'center', padding: spacing.xl }}>
          <View style={{ width: '100%', maxWidth: 420, backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: colors.text }}>{galleryItems[selectedIndex]?.title || 'Gallery item'}</Text>
              <Pressable onPress={() => setSelectedIndex(null)} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faXmark} size={18} color={colors.primary} />
              </Pressable>
            </View>
            <View style={{ height: 260, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <Image source={resolveImageSource(galleryItems[selectedIndex]?.image)} style={{ width: '100%', height: 260, resizeMode: 'cover' }} />
            </View>
            <Text style={{ marginTop: spacing.md, color: colors.textSecondary, lineHeight: 22 }}>Gallery content will be updated by OpenIT when local artwork is added to the project.</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
