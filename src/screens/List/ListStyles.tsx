import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff6060',
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divResult: {
    width: '80%',
    height: 'auto',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#fff',
    gap: 10,
  },
  divRow: {    
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    color: '#000',
    textAlign: 'center',
  },
  day: {
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});