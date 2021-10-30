import * as React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import {SafeAreaView, ScrollView, View, TextInput, Text, Linking, Pressable, Modal} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import commonStyles from '../../styles/common';
import {styles, pickerSelectStyles, pickerSelectErrorStyles, modalStyles} from './styles';
import {colors} from '../../styles/base';

const Smile = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [errors, setErrors] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [data, setData] = React.useState({
    name: '',
    gender: '',
    blood_type: '',
    doc: '',
    cel: '',
    email: '',
    companions_name: '',
    companions_cel: '',
    description: '',
    expectations: '',
    previous_treatment: '',
    other_description: '',
  });

  React.useEffect(() => {
    if (data.description === 'Otro') {
      setOther(true)
    } else {
      setOther(false)
    }
  }, [data.description])

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
    setModalVisible(false)
    let url =
      `whatsapp://send?text=Nuevo diagnostico de JaveSonrisa solicitado:
      Nombre Completo: ${data.name}
      Genero: ${data.gender}
      Tipo de sangre: ${encodeURIComponent(data.blood_type)}
      Numero de documento: ${data.doc}
      Celular: ${data.cel}
      Correo: ${data.email}
      Motivo de consulta: ${data.description}
      ${data.other_description !== '' ? `Otro motivo ${data.other_description}` : ''}
      Expectativas: ${data.expectations}
      Tratamientos previos: ${data.previous_treatment}
      Nombre acudiente: ${data.companions_name}
      Celular acudiente: ${data.companions_cel}
      &phone=573176033682`;
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
                  'name',
                  'gender',
                  'blood_type',
                  'doc',
                  'cel',
                  'email',
                ])
              }
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              errors={errors}>
              <View style={styles.stepper}>
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Nombre Completo
                </Text>
                <TextInput
                  value={data.name}
                  onChangeText={(value) => setData({...data, name: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Genero
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
                  Numero de identificación
                </Text>
                <TextInput
                  value={data.doc}
                  onChangeText={(value) => setData({...data, doc: value})}
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
              </View>
            </ProgressStep>
            <ProgressStep
              label="Acudiente"
              nextBtnText="Siguiente"
              previousBtnText="Anterior"
              finishBtnText="Finalizar"
              onNext={() =>
                onNextStep([
                  'companions_name',
                  'companions_cel',
                ])
              }
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              errors={errors}>
              <View style={styles.stepper}>
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Nombre Acudiente
                </Text>
                <TextInput
                  value={data.companions_name}
                  onChangeText={(value) => setData({...data, companions_name: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  Celular Acudiente
                </Text>
                <TextInput
                  value={data.companions_cel}
                  onChangeText={(value) => setData({...data, companions_cel: value})}
                  style={[styles.input, errors ? styles.errorInput : null]}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Consulta"
              nextBtnText="Siguiente"
              previousBtnText="Anterior"
              finishBtnText="Finalizar"
              onSubmit={() => setModalVisible(true)}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              errors={errors}>
              <View style={styles.stepper}>
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  ¿Motivo de Consulta?
                </Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Seleccione...',
                    value: null,
                  }}
                  onValueChange={(value) => setData({...data, description: value})}
                  items={[
                    {label: 'Dolor dental', value: 'Dolor dental'},
                    {label: 'Dientes ausentes', value: 'Dientes ausentes'},
                    {label: 'Estética', value: 'Estética'},
                    {label: 'Odontología', value: 'Odontología'},
                    {label: 'Otro', value: 'Otro'},
                  ]}
                  style={errors ? pickerSelectErrorStyles : pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={data.description}
                />
                { other ? 
                  <>
                    <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                      Otro, ¿Cuál?
                    </Text>
                    <TextInput
                      value={data.other_description}
                      onChangeText={(value) => setData({...data, other_description: value})}
                      style={[styles.input, errors ? styles.errorInput : null]}
                    />
                  </>
                : null }
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  ¿Qué expectativas tiene?
                </Text>
                <TextInput
                  value={data.expectations}
                  multiline
                  onChangeText={(value) => setData({...data, expectations: value})}
                  style={[styles.area, styles.input, errors ? styles.errorInput : null]}
                />
                <Text style={[styles.label, errors ? styles.errorLabel : null]}>
                  ¿Ha estado en algún tratamiento previo? ¿Cuál?
                </Text>
                <TextInput
                  value={data.previous_treatment}
                  multiline
                  onChangeText={(value) =>
                    setData({...data, previous_treatment: value})
                  }
                  style={[
                    styles.input,
                    styles.area,
                    errors ? styles.errorInput : null,
                  ]}
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>
              Debes adjuntar imagenes de tratamientos previos y/o radiografias
              despues del mensaje que se generara.
            </Text>
            <Text style={modalStyles.modalText}>
              Recuerda que las imágenes subidas deben de contar con: buena
              iluminacion, Con la mejor resolución posible, en caso dado que
              la cara del paciente esté en el mismo plano de la cámara para
              adquirir una buena imagen de diagnóstico.{'\n'}{'\n'}
              En caso dado de que el paciente presente dificultad al momento
              de tomar la foto, lo mejor sería que se tomase una radiografía
              periapical de la zona afectada y hacer olas llegar por este
              medio.{'\n'}{'\n'}
              Finalmente, lo ideal es que el paciebte tenga a la mano o a
              disposición  su juego fotográfico y de radiografias de las.zonas
              afectadas, para así poder brindar una mejor consulta a su
              diagnóstico.{'\n'}{'\n'}
              Gracias.
            </Text>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={onSubmit}
            >
              <Text style={modalStyles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Smile;
