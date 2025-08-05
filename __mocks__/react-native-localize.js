export const getLocales = () => [
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
  { countryCode: 'KR', languageTag: 'ko-KR', languageCode: 'ko', isRTL: false },
];

export const findBestAvailableLanguage = () => ({
  languageTag: 'en-US',
  isRTL: false,
});

export const addEventListener = jest.fn();
export const removeEventListener = jest.fn();
export const getNumberFormatSettings = jest.fn();
export const getCalendar = jest.fn();
export const getCountry = jest.fn();
export const getCurrencies = jest.fn();
export const getTemperatureUnit = jest.fn();
export const getTimeZone = jest.fn();
export const uses24HourClock = jest.fn();
export const usesMetricSystem = jest.fn();
export const usesAutoDateAndTime = jest.fn();
export const usesAutoTimeZone = jest.fn();
