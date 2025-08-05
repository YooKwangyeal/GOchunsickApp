module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-reanimated|react-native-gesture-handler|react-native-screens|react-native-safe-area-context|@react-native-seoul/kakao-login|react-native-vector-icons|react-native-element-dropdown|react-native-geolocation-service|react-native-localize|react-native-webview|i18next|react-i18next)/',
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  moduleNameMapper: {
    'react-native-webview': '<rootDir>/__mocks__/react-native-webview.js',
    'react-native-geolocation-service': '<rootDir>/__mocks__/react-native-geolocation-service.js',
    'react-native-localize': '<rootDir>/__mocks__/react-native-localize.js',
  }
};
