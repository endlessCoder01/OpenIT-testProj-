export function resolveImageSource(image) {
  // Normalize asset across native and web.
  // - numeric module IDs (Metro) should be returned as-is for react-native Image.
  // - strings should be treated as URIs.
  // - objects with uri should be returned as-is.
  if (image == null) return null;
  const t = typeof image;
  if (t === 'number') return image;
  if (t === 'string') return { uri: image };
  if (t === 'object') {
    // Some bundlers return { default: 'url' }
    if (image.uri) return image;
    if (image.default) return { uri: image.default };
    return image;
  }
  return image;
}
