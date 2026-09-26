import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faXmark, faArrowLeft, faSparkles } from '@fortawesome/free-solid-svg-icons';

import { answerQuestion } from '../../services/chatbotService';
import { chatbotSuggestions } from '../../data/openitContent';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

const initialMessages = [
  { id: 'welcome', role: 'assistant', text: 'Hello. I can help with OpenIT services, location, contact details, team and navigation.' },
];

export default function ChatbotScreen({ navigation }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollToEnd({ animated: true });
  }, [messages, typing]);

  const sendMessage = (value) => {
    const question = String(value || input).trim();
    if (!question) return;

    const nextMessages = [...messages, { id: Date.now().toString(), role: 'user', text: question }];
    setMessages(nextMessages);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = answerQuestion(question);
      setMessages((prev) => [...prev, { id: `bot-${Date.now()}`, role: 'assistant', text: response }]);
      setTyping(false);
    }, 500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ paddingHorizontal: spacing.xl, paddingTop: spacing.md, paddingBottom: spacing.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pressable onPress={() => navigation.goBack()} accessibilityRole="button" accessibilityLabel="Close chatbot" style={{ width: 38, height: 38, borderRadius: radius.pill, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faArrowLeft} color={colors.primary} size={18} />
        </Pressable>
        <Text style={{ fontSize: 22, fontWeight: '800', color: colors.text }}>Ask OpenIT</Text>
        <Pressable onPress={() => navigation.goBack()} accessibilityRole="button" accessibilityLabel="Close chat" style={{ width: 38, height: 38, borderRadius: radius.pill, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faXmark} color={colors.primary} size={18} />
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={[...messages, ...(typing ? [{ id: 'typing', role: 'assistant', text: 'typing' }] : [])]}
        contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: spacing.xl }}
        renderItem={({ item }) => {
          const isUser = item.role === 'user';
          return (
            <View style={{ alignItems: isUser ? 'flex-end' : 'flex-start', marginBottom: spacing.md }}>
              <View style={{ maxWidth: '82%', backgroundColor: isUser ? colors.primary : colors.white, borderRadius: radius.xl, padding: spacing.md }}>
                <Text style={{ color: isUser ? colors.white : colors.text, fontSize: 14, lineHeight: 22 }}>{item.text === 'typing' ? 'Thinking…' : item.text}</Text>
              </View>
            </View>
          );
        }}
      />

      <View style={{ paddingHorizontal: spacing.xl, paddingBottom: spacing.md }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: spacing.md }}>
          {chatbotSuggestions.slice(0, 4).map((suggestion) => (
            <Pressable key={suggestion} onPress={() => sendMessage(suggestion)} style={{ backgroundColor: colors.primaryLight, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, marginBottom: 8 }}>
              <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 12 }}>{suggestion}</Text>
            </Pressable>
          ))}
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: radius.xl, paddingHorizontal: spacing.md, paddingVertical: spacing.sm }}>
          <TextInput value={input} onChangeText={setInput} placeholder="Ask OpenIT..." style={{ flex: 1, color: colors.text, fontSize: 14 }} />
          <Pressable onPress={() => sendMessage()} accessibilityRole="button" accessibilityLabel="Send message" style={{ width: 42, height: 42, borderRadius: radius.pill, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faPaperPlane} color={colors.white} size={16} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
