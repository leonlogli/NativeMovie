import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: 'white',
    fontSize: 31,
    fontWeight: 'bold',
  },
  container: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#03bafc',
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
  },
  link: {
    color: '#03bafc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default styles;
