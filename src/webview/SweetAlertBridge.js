import React, { useMemo, useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import { colors } from '../theme/colors';

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <style>
      html, body { margin: 0; height: 100%; background: #F5F7F6; font-family: sans-serif; }
      body { display: flex; align-items: center; justify-content: center; }
    </style>
  </head>
  <body>
    <script>
      const safePost = (payload) => {
        try {
          window.ReactNativeWebView.postMessage(JSON.stringify(payload));
        } catch (error) {
          console.warn('OpenIT alert bridge failed:', error);
        }
      };

      window.addEventListener('message', function (event) {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (!data || !data.type) return;

        const { type, title, message, confirmText, cancelText } = data;
        const config = {
          title: title || 'OpenIT',
          text: message || '',
          confirmButtonText: confirmText || 'OK',
          showCancelButton: !!cancelText,
          cancelButtonText: cancelText || 'Cancel',
          confirmButtonColor: '#168A45',
          background: '#FFFFFF',
          color: '#17221B',
        };

        if (type === 'success') {
          Swal.fire({ ...config, icon: 'success' }).then((result) => safePost({ type: 'result', isConfirmed: !!result.isConfirmed, isDismissed: !!result.isDismissed }));
        } else if (type === 'error') {
          Swal.fire({ ...config, icon: 'error' }).then((result) => safePost({ type: 'result', isConfirmed: !!result.isConfirmed, isDismissed: !!result.isDismissed }));
        } else if (type === 'warning') {
          Swal.fire({ ...config, icon: 'warning' }).then((result) => safePost({ type: 'result', isConfirmed: !!result.isConfirmed, isDismissed: !!result.isDismissed }));
        } else if (type === 'info') {
          Swal.fire({ ...config, icon: 'info' }).then((result) => safePost({ type: 'result', isConfirmed: !!result.isConfirmed, isDismissed: !!result.isDismissed }));
        } else if (type === 'confirm') {
          Swal.fire({ ...config, icon: 'question', showCancelButton: true, cancelButtonText: cancelText || 'Cancel' }).then((result) => safePost({ type: 'result', isConfirmed: !!result.isConfirmed, isDismissed: !!result.isDismissed }));
        }
      });
    </script>
  </body>
</html>`;

export default function SweetAlertBridge({ visible, type = 'success', title = 'Success', message = '', onResult, confirmText = 'OK', cancelText = null }) {
  const [ready, setReady] = useState(false);
  const payload = useMemo(() => ({ type, title, message, confirmText, cancelText }), [type, title, message, confirmText, cancelText]);

  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={{ flex: 1, backgroundColor: 'rgba(15, 22, 20, 0.33)', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '88%', height: 240, borderRadius: 20, backgroundColor: colors.white, overflow: 'hidden' }}>
          <WebView
            source={{ html }}
            onMessage={(event) => {
              const data = JSON.parse(event.nativeEvent.data || '{}');
              if (data.type === 'result') {
                onResult?.(data);
              }
            }}
            onLoad={() => setReady(true)}
            javaScriptEnabled
            domStorageEnabled={false}
            originWhitelist={['*']}
            onShouldStartLoadWithRequest={(request) => request.url.startsWith('https://') || request.url.startsWith('about:blank')}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </Modal>
  );
}
