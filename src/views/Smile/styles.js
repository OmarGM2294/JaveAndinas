import {StyleSheet} from 'react-native';

import {padding, colors} from '../../styles/base';

export const styles = StyleSheet.create({
  input: {
    borderColor: colors.primary,
    borderBottomWidth: 2,
    flex: 1,
    marginVertical: padding.sm,
    paddingBottom: 4,
    paddingRight: padding.sm,
    width: '100%',
  },
  stepper: {
    flex: 1,
    padding: padding.md,
  },
  area: {
    minHeight: 60,
  },
  label: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: padding.sm,
  },
  errorLabel: {
    color: colors.error,
  },
  errorInput: {
    borderColor: colors.error,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    flex: 1,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: colors.primary,
    color: colors.black,
    paddingRight: padding.sm,
    width: '100%',
    marginVertical: padding.sm,
  },
  inputAndroid: {
    fontSize: 16,
    paddingRight: padding.sm,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: colors.primary,
    color: colors.black,
    paddingRight: 30,
    width: '100%',
    marginVertical: padding.sm,
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
});

export const pickerSelectErrorStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    flex: 1,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: colors.error,
    color: colors.black,
    paddingRight: padding.sm,
    width: '100%',
    marginVertical: padding.sm,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: padding.sm,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: colors.error,
    color: colors.black,
    paddingRight: 30,
    width: '100%',
    marginVertical: padding.sm,
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
});

export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

