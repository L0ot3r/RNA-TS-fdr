import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // height: '100%',
  },
  divInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#000',
  },
  label: {
    width: '80%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
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
  divValid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnValid: {
    width: '80%',
    height: 40,
    margin: 12,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ff6060',
  },

});