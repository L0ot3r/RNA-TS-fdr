import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  nav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    backgroundColor: '#3f19e7',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  iconNav: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});