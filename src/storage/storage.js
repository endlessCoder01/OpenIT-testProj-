import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGE_KEYS } from './storageKeys';

export const saveJson = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};

export const loadJson = async (key, fallback = null) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
};

export const setOnboardingComplete = async (value = true) => saveJson(STORAGE_KEYS.onboardingComplete, value);
export const getOnboardingComplete = async () => loadJson(STORAGE_KEYS.onboardingComplete, false);

export const setDemoAuthSession = async (value = { isAuthenticated: true, demoUser: 'OpenIT Demo User' }) => saveJson(STORAGE_KEYS.authSession, value);
export const getDemoAuthSession = async () => loadJson(STORAGE_KEYS.authSession, { isAuthenticated: false, demoUser: null });

export const saveSubmission = async (type, submission) => {
  const current = await loadJson(STORAGE_KEYS.submissions, []);
  const next = [...current, { id: Date.now().toString(), type, ...submission, createdAt: new Date().toISOString() }];
  await saveJson(STORAGE_KEYS.submissions, next);
  return next;
};

export const loadSubmissions = async () => loadJson(STORAGE_KEYS.submissions, []);

export const saveDraft = async (type, draft) => {
  const key = type === 'complaint' ? STORAGE_KEYS.complaintDraft : STORAGE_KEYS.feedbackDraft;
  return saveJson(key, draft);
};

export const loadDraft = async (type) => {
  const key = type === 'complaint' ? STORAGE_KEYS.complaintDraft : STORAGE_KEYS.feedbackDraft;
  return loadJson(key, null);
};

export const clearDraft = async (type) => {
  const key = type === 'complaint' ? STORAGE_KEYS.complaintDraft : STORAGE_KEYS.feedbackDraft;
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

export const getChatbotHistory = async () => loadJson(STORAGE_KEYS.chatbotHistory, []);
export const setChatbotHistory = async (history) => saveJson(STORAGE_KEYS.chatbotHistory, history);
