import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import MainTabsNavigator from './MainTabsNavigator';
import AboutScreen from '../screens/about/AboutScreen';
import WhyChooseUsScreen from '../screens/about/WhyChooseUsScreen';
import TeamScreen from '../screens/team/TeamScreen';
import TestimonialsScreen from '../screens/testimonials/TestimonialsScreen';
import ContactScreen from '../screens/contact/ContactScreen';
import MapScreen from '../screens/map/MapScreen';
import FeedbackScreen from '../screens/feedback/FeedbackScreen';
import ComplaintScreen from '../screens/complaint/ComplaintScreen';
import ServicesScreen from '../screens/services/ServicesScreen';
import ProjectScreen from '../screens/projects/ProjectScreen';
import GalleryScreen from '../screens/gallery/GalleryScreen';
import ChatbotScreen from '../screens/chatbot/ChatbotScreen';
import AuthGateScreen from '../screens/auth/AuthGateScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator({ initialOnboardingComplete = false }) {
  return (
    <Stack.Navigator initialRouteName={initialOnboardingComplete ? 'MainTabs' : 'Onboarding'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="WhyChooseUs" component={WhyChooseUsScreen} />
      <Stack.Screen name="OurTeam" component={TeamScreen} />
      <Stack.Screen name="Testimonials" component={TestimonialsScreen} />
      <Stack.Screen name="Get in Touch" component={ContactScreen} />
      <Stack.Screen name="Find Us" component={MapScreen} />
      <Stack.Screen name="Give Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Make a Complaint" component={ComplaintScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="Projects" component={ProjectScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Ask OpenIT" component={ChatbotScreen} />
      <Stack.Screen name="AuthGate" component={AuthGateScreen} />
    </Stack.Navigator>
  );
}
