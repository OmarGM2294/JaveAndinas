import * as React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import {SafeAreaView, ScrollView, View, TextInput, Text, Linking} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import commonStyles from '../../styles/common';
import {styles, pickerSelectStyles, pickerSelectErrorStyles} from './styles';
import {colors} from '../../styles/base';

const Diagnostic = ({navigation}) => {
  const [errors, setErrors] = React.useState(false);
  const [data, setData] = React.useState({
    prefix: '',
    name: '',
    middlename: '',
    lastname: '',
    gender: '',
    blood_type: '',
    age: '',
    doc_type: '',
    doc: '',
    phone: '',
    cel: '',
    email: '',
    city: '',
    neighborhood: '',
    address: '',
    first: '',
    type: '',
    description: '',
    contact: '',
  });

  const onNextStep = (validations) => {
    let valid = true;
    validations.forEach((element) => {
      if (data[element] === '') {
        valid = false;
      }
    });
    if (valid) {
      setErrors(false);
    } else {
      setErrors(true);
    }
  };

  const onSubmit = () => {
    let url =
      `whatsapp://send?text=Nuevo diagnostico solicitado:
      Prefijo: ${data.prefix}
      Nombre Completo: ${data.name} ${data.middlename} ${data.lastname}
      Genero: ${data.gender}
      Tipo de sangre: ${encodeURIComponent(data.blood_type)}
      Edad: ${data.age}
      Tipo de documento: ${data.doc_type}
      Numero de documento: ${data.doc}
      Telefono Fijo: ${data.phone}
      Celular: ${data.cel}
      Correo: ${data.email}
      Ciudad: ${data.city}
      Barrio: ${data.neighborhood}
      Direccion: ${data.address}
      ¿Primera vez, referido o paciente?: ${data.first}
      Tipo de consulta: ${data.type}
      Motivo de consulta: ${data.description}
      Contacto con alguien que tenga esos sintomas: ${data.contact}
      &phone=573017874295`;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened successfully ' + data);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Make sure WhatsApp installed on your device');
      });
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: colors.primary,
    activeLabelColor: colors.primary,
    activeStepNumColor: colors.white,
    activeStepIconColor: colors.primary,
    completedStepIconColor: colors.primary,
    completedProgressBarColor: colors.primary,
    completedCheckColor: colors.secondary,
  };

  const buttonTextStyle = {
    color: colors.primary,
    fontWeight: 'bold',
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={commonStyles.container}>
          <ProgressSteps {...progressStepsStyle}>
            <ProgressStep
              label="Datos basicos"
              nextBtnText="Siguiente"
              previousBtnText="Anterior"
              finishBtnText="Finalizar"
              onNext={() =>
                onNextStep([
                  'prefix',
                  'name',
                  'middlename',
                  'lastname',
                  'gender',
                  'blood_type',
                  'age',
                ])
              }
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              errors={errors}>
              <View style={styles.stepper}>
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Prefijo
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, prefix: value})}
                  items={[
                    {label: 'Sr', value: 'Sr', key: 'sr'},
                    {label: 'Sra', value: 'Sra', key: 'sra'},
                    {label: 'Srt', value: 'Srt', key: 'srt'},
                    {label: 'Joven', value: 'Joven', key: 'joven'},
                    {label: 'Dr', value: 'Dr', key: 'dr'},
                    {label: 'Dra', value: 'Dra', key: 'dra'},
                    {label: 'Niño', value: 'Niño', key: 'niño'},
                    {label: 'Niña', value: 'Niña', key: 'niña'},
                  ]}
                  value={data.prefix}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Nombre
                </Text>
                <TextInput
                  value={data.name}
                  onChangeText={(value) => setData({...data, name: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Segundo Nombre
                </Text>
                <TextInput
                  value={data.middlename}
                  onChangeText={(value) =>
                    setData({...data, middlename: value})
                  }
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Apellidos
                </Text>
                <TextInput
                  value={data.lastname}
                  onChangeText={(value) => setData({...data, lastname: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Tipo de sexo
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, gender: value})}
                  items={[
                    {label: 'Masculino', value: 'Masculino'},
                    {label: 'Femenino', value: 'Femenino'},
                    {label: 'Otro', value: 'Otro'},
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.gender}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Tipo de sangre
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) =>
                    setData({...data, blood_type: value})
                  }
                  items={[
                    {label: 'A+', value: 'A+'},
                    {label: 'A-', value: 'A-'},
                    {label: 'AB+', value: 'AB+'},
                    {label: 'AB-', value: 'AB-'},
                    {label: 'O+', value: 'O+'},
                    {label: 'O-', value: 'O-'},
                    {label: 'B+', value: 'B+'},
                    {label: 'B-', value: 'B-'},
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.blood_type}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Edad
                </Text>
                <TextInput
                  value={data.age}
                  onChangeText={(value) => setData({...data, age: value})}
                  type="number"
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Datos personales"
              nextBtnText="Siguiente"
              previousBtnText="Anterior"
              finishBtnText="Finalizar"
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              errors={errors}
              onNext={() =>
                onNextStep([
                  'doc_type',
                  'doc',
                  'phone',
                  'cel',
                  'email',
                  'city',
                  'neighborhood',
                ])
              }>
              <View style={styles.stepper}>
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Tipo de documento
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, doc_type: value})}
                  items={[
                    {label: 'C.C', value: 'C.C'},
                    {label: 'T.I', value: 'T.I'},
                    {label: 'Pasaporte', value: 'Pasaporte'},
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.doc_type}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Numero de identificación
                </Text>
                <TextInput
                  value={data.doc}
                  onChangeText={(value) => setData({...data, doc: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Telefono Fijo
                </Text>
                <TextInput
                  value={data.phone}
                  onChangeText={(value) => setData({...data, phone: value})}
                  type="number"
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Celular
                </Text>
                <TextInput
                  value={data.cel}
                  onChangeText={(value) => setData({...data, cel: value})}
                  type="number"
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Correo electronico
                </Text>
                <TextInput
                  value={data.email}
                  onChangeText={(value) => setData({...data, email: value})}
                  type="email"
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Ciudad
                </Text>
                <TextInput
                  value={data.city}
                  onChangeText={(value) => setData({...data, city: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Barrio
                </Text>
                <TextInput
                  value={data.neighborhood}
                  onChangeText={(value) =>
                    setData({...data, neighborhood: value})
                  }
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Consulta"
              nextBtnText="Siguiente"
              previousBtnText="Anterior"
              finishBtnText="Finalizar"
              onSubmit={onSubmit}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              errors={errors}>
              <View style={styles.stepper}>
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  ¿Es Primera vez, Referido o Paciente?
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, first: value})}
                  items={[
                    {label: 'Primera vez', value: 'Primera vez'},
                    {label: 'Referido', value: 'Referido'},
                    {label: 'Paciente', value: 'Paciente'},
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.first}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Tipo de Consulta
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, type: value})}
                  items={[
                    {
                      label: 'Medicina General virtual',
                      value: 'Medicina General virtual',
                    },
                    {
                      label: 'Medicina General presencial',
                      value: 'Medicina General presencial',
                    },
                    {
                      label: 'Odontologia general Virtual',
                      value: 'Odontologia general Virtual',
                    },
                    {
                      label: 'Odontologia General presencial',
                      value: 'Odontologia General presencial',
                    },
                    {
                      label: 'Medicina especializada Virtual',
                      value: 'Medicina especializada Virtual',
                    },
                    {
                      label: 'Medicina especializada Presencial',
                      value: 'Medicina especializada Presencial',
                    },
                    {
                      label: 'Odontologia especializada Virtual',
                      value: 'Odontologia especializada Virtual',
                    },
                    {
                      label: 'Odontologia especializada Presencial',
                      value: 'Odontologia especializada Presencial',
                    },
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.type}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Dirección
                </Text>
                <TextInput
                  value={data.address}
                  onChangeText={(value) => setData({...data, address: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Describa el motivo de consulta, para ser atendido con mayor
                  precision
                </Text>
                <TextInput
                  value={data.description}
                  multiline
                  onChangeText={(value) =>
                    setData({...data, description: value})
                  }
                  style={[
                    styles.input,
                    styles.area,
                    errors ? styles.errorInput : null,
                  ]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Ha estado en contacto con alguien que tuvo alguno de esos
                  sintomas
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, contact: value})}
                  items={[
                    {label: 'Si', value: 'Si'},
                    {label: 'No', value: 'No'},
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.contact}
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Diagnostic;
