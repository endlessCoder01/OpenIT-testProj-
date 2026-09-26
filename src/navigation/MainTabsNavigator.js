import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faBriefcase, faDiagramProject, faImages, faBars } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from '../screens/home/HomeScreen';
import ServicesScreen from '../screens/services/ServicesScreen';
import ProjectScreen from '../screens/projects/ProjectScreen';
import GalleryScreen from '../screens/gallery/GalleryScreen';
import MoreScreen from '../screens/more/MoreScreen';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';

const Tab = createBottomTabNavigator();

function IconWithBadge({ icon, size = 18, color, focused }) {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
}

function TabButton({ route, focused, icon, label, onPress }) {
  const scale = useRef(new Animated.Value(focused ? 1 : 0.96)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1 : 0.96,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [focused, scale]);

  return (
    <Pressable onPress={onPress} style={styles.tabButton} accessibilityRole="button" accessibilityLabel={route.name}>
      <Animated.View style={[styles.indicator, { opacity: focused ? 1 : 0, transform: [{ scale }] }]} />
      <View style={styles.iconWrapper}>
        <IconWithBadge icon={icon} color={focused ? colors.primary : '#8B928D'} />
      </View>
      <Text style={[styles.label, { color: focused ? colors.primary : '#8B928D' }]}>{label}</Text>
    </Pressable>
  );
}

function TabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, { paddingBottom: Math.max(insets.bottom, 8) + 8 }]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const icons = {
          Home: faHouse,
          Services: faBriefcase,
          Projects: faDiagramProject,
          Gallery: faImages,
          More: faBars,
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabButton
            key={route.key}
            route={route}
            focused={focused}
            icon={icons[route.name]}
            label={route.name}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

export default function MainTabsNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Projects" component={ProjectScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: radius.xl,
    paddingTop: spacing.sm,
    borderWidth: 1,
    borderColor: '#ECF0ED',
    shadowColor: '#102116',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    width: '58%',
    height: 42,
    borderRadius: radius.pill,
    backgroundColor: colors.primaryLight,
  },
  iconWrapper: {
    zIndex: 1,
    marginBottom: 4,
  },
  label: {
    zIndex: 1,
    fontSize: 10,
    fontWeight: '700',
  },
});
