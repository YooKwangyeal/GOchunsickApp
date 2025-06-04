import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE600',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    height: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  icon: {
    width: 28,
    height: 28,
    marginTop: 14
  },
  bubbleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  bubble: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 12,
    maxWidth: 260,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bubbleText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  bubbleTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    alignSelf: 'center',
    marginTop: -2,
  },
  bear: {
    width: 180,
    height: 300,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    position: 'absolute',
    bottom: 32,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  micButton: {
    marginLeft: 8,
  },
  micIcon: {
    width: 24,
    height: 24,
  },
  sendButton: {
    marginLeft: 8,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;