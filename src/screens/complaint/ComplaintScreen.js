import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../../components/common/AppHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import SweetAlertBridge from '../../webview/SweetAlertBridge';
import { getDemoAuthSession, loadDraft, saveDraft, saveSubmission, clearDraft } from '../../storage/storage';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  category: 'Complaint',
  priority: 'High',
};

export default function ComplaintScreen({ navigation }) {
  const [form, setForm] = useState(emptyForm);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const load = async () => {
      const session = await getDemoAuthSession();
      setIsAuthenticated(Boolean(session.isAuthenticated));
      const draft = await loadDraft('complaint');
      if (draft) setForm(draft);
    };
    load();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('AuthGate', { returnTo: 'Make a Complaint' });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const persist = async () => {
      await saveDraft('complaint', form);
    };
    persist();
  }, [form]);

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setAlertType('error');
      setAlertMessage('Please complete all required fields.');
      setShowAlert(true);
      return false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setAlertType('error');
      setAlertMessage('Please enter a valid email address.');
      setShowAlert(true);
      return false;
    }
    if (form.message.trim().length < 20) {
      setAlertType('error');
      setAlertMessage('Your complaint should include enough detail for the team to follow up.');
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    await saveSubmission('complaint', form);
    await clearDraft('complaint');
    setSubmitted(true);
    setAlertType('success');
    setAlertMessage('Your complaint has been saved locally and is ready for follow-up.');
    setShowAlert(true);
    setForm(emptyForm);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <AppHeader title="Make a Complaint" subtitle="We take concerns seriously." showBack onBack={() => navigation.goBack()} />
        <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingBottom: 120 }}>
          <View style={{ backgroundColor: colors.white, borderRadius: radius.xl, padding: spacing.xl }}>
            <TextInput value={form.name} onChangeText={(value) => setForm({ ...form, name: value })} placeholder="Name" style={styles.input} />
            <TextInput value={form.email} onChangeText={(value) => setForm({ ...form, email: value })} placeholder="Email" keyboardType="email-address" style={styles.input} />
            <TextInput value={form.phone} onChangeText={(value) => setForm({ ...form, phone: value })} placeholder="Phone" keyboardType="phone-pad" style={styles.input} />
            <TextInput value={form.subject} onChangeText={(value) => setForm({ ...form, subject: value })} placeholder="Subject" style={styles.input} />
            <TextInput value={form.message} onChangeText={(value) => setForm({ ...form, message: value })} placeholder="Describe your concern" multiline numberOfLines={5} textAlignVertical="top" style={[styles.input, { minHeight: 120 }]} />
            <TextInput value={form.category} onChangeText={(value) => setForm({ ...form, category: value })} placeholder="Category" style={styles.input} />
            <TextInput value={form.priority} onChangeText={(value) => setForm({ ...form, priority: value })} placeholder="Priority" style={styles.input} />

            <View style={{ marginTop: spacing.xl }}>
              <PrimaryButton title="Submit complaint" onPress={handleSubmit} />
            </View>
            {submitted && (
              <View style={{ marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCheckCircle} color={colors.success} size={18} />
                <Text style={{ marginLeft: spacing.sm, color: colors.success, fontWeight: '700' }}>Complaint recorded successfully.</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <SweetAlertBridge visible={showAlert} type={alertType} title={alertType === 'success' ? 'Success' : 'Please review'} message={alertMessage} onResult={() => setShowAlert(false)} confirmText="OK" />
    </SafeAreaView>
  );
}

const styles = {
  input: {
    backgroundColor: colors.background,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
    color: colors.text,
  },
};
