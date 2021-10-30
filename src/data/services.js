import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconP from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconO from 'react-native-vector-icons/Octicons';

import {colors} from '../styles/base';

const serviceData = (navigation) => [
  {
    id: 1,
    press: () => navigation.push('Academics'),
    icon: <IconE name="book" size={70} color={colors.white} />,
    color: colors.cinnabar,
    colorText: colors.white,
    text: 'Academicos',
    subservices: [
      {
        id: 1,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subservice', sub: 1}),
        icon: <IconM name="school" size={70} color={colors.white} />,
        color: colors.theater,
        colorText: colors.white,
        text: 'Tutorias',
        description: 
          'Somos un equipo de trabajo enfocado en el asesoramiento de ' +
          'estudiantes universitarios para su vida académica, contamos con ' +
          'profesionales de la universidad de la Javeriana y los Andes ' +
          'capacitados y de alta calidad que cumplan con la competencia en cada ' +
          'una de las profesiones descritas a brindar asesorías.',
        images: [
          {
            type: 'image',
            data: require('../assets/img/tutorias/1.png'),
          },
        ],
      },
      {
        id: 2,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subservice', sub: 2}),
        icon: <IconO name="project" size={70} color={colors.white} />,
        color: colors.purple_heart,
        colorText: colors.white,
        text: 'Realización de proyectos',
        description: 
          'Brindamos acompañamiento y desarrollo en proyectos, recuerda que ' +
          'somos un equipo con profesionales capacitados Javerianos y Andinos.',
        images: [
          {
            type: 'image',
            data: require('../assets/img/proyectos/1.jpeg'),
          },
        ],
      },
      {
        id: 3,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subservice', sub: 3}),
        icon: <Icon name="people" size={70} color={colors.white} />,
        color: colors.health,
        colorText: colors.white,
        text: 'Acompañamientos',
        description: 
          'Acompañamiento personalizado por profesional con alta experiencia ' +
          'en cada una de las actividades desarrolladas por nuestros clientes, en ' +
          'diversas áreas de interés',
        images: [
          {
            type: 'image',
            data: require('../assets/img/acompanamientos/1.jpeg'),
          },
        ],
      },
      {
        id: 4,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subservice', sub: 4}),
        icon: <IconE name="open-book" size={70} color={colors.white} />,
        color: colors.cerulean,
        colorText: colors.white,
        text: 'Tesis, investigaciones y casos clinicos',
        description: 
          'JaveAndinas Brinda el servicio de asesorías académicas incluyendo el ' +
          'apoyo a desarrollo de Tesis, Investigaciones y casos clínicos ó ' +
          'asesorías en desarrollo de estos, en diversas áreas de conocimiento, ' +
          'ya sea en modalidad virtual o presencial.',
        images: [
          {
            type: 'image',
            data: require('../assets/img/tesis/1.jpeg'),
          },
        ],
      }
    ]
  },
  {
    id: 2,
    press: () => navigation.push('Corporatives'),
    icon: <Icon name="business" size={70} color={colors.white} />,
    color: colors.nobel,
    colorText: colors.white,
    text: 'Corporativos',
    subservices: [
      {
        id: 1,
        press: () =>
          navigation.push('Detail', {id: 2, type: 'subservice', sub: 1}),
        icon: <IconC name="presentation" size={70} color={colors.white} />,
        color: colors.cosmetics,
        colorText: colors.white,
        text: 'Consultoria y Auditorias',
        description: 
          'Acompañamiento personalizado por profesional con alta experiencia ' +
          'en cada una de las actividades desarrolladas por nuestros clientes.\n\n' +
          'Este acompañamiento puede ser:\n\n' +
          'REMOTO (VIRTUAL)\n\n' +
          '- No existe la necesidad de desplazamiento.\n' +
          '- Incrementa la frecuencia y número de locales que se pueden auditar.\n' +
          '- Mayor disponibilidad de los auditores necesarios en el momento correcto.\n' +
          '- Extiende la amplitud de la auditoría.\n' +
          '- Cada vez más personas realizan teletrabajo.\n' +
          '- Minimización de costes.\n\n' +
          'IN SITU (PRESENCIAL)\n\n' +
          'La auditoría interna de calidad es uno de los procesos más ' +
          'importantes que se deben realizar en las organizaciones, que, en su ' +
          'forma tradicional, se vuelve muy difícil de llevar a cabo. Se ' +
          'generan diferentes dificultades que pueden poner en riesgo la salud ' +
          'de los auditores y de los auditados, pero es necesario encontrar una ' +
          'alternativa ya que la realización de las auditorías mantiene vivos los ' +
          'procedimientos y la cultura de calidad que se ha implementado en la ' +
          'organización. La alternativa más factible es la de realizar la auditoría ' +
          'interna remota de calidad en las organizaciones. Por eso ' +
          'JAVEANDINAS cuenta con profesionales certificados y con' +
          'experiencia para llevar a cabo con calidad cada uno de los procesos a' +
          'evaluar',
        images: [
          {
            type: 'image',
            data: require('../assets/img/consultoria/1.jpeg'),
          },
          {
            type: 'image',
            data: require('../assets/img/consultoria/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/consultoria/3.png'),
          },
        ],
      },
      {
        id: 2,
        press: () =>
          navigation.push('Detail', {id: 2, type: 'subservice', sub: 2}),
        icon: <IconC name="teach" size={70} color={colors.white} />,
        color: colors.amaranth,
        colorText: colors.white,
        text: 'Capacitación',
        description: 
          'Somos una empresa con profesionales capacitados y de alta calidad ' +
          'que cumplen con los estándares requeridos por el cliente de tal modo ' +
          'que en cada proceso a evaluar, uno de nuestros objetivos principales ' +
          'es garantizar la calidad de los procesos aplicados para las ' +
          'evoluciones de los diversos sectores como alimentos, bebidas ' +
          'alcohólicas y no alcohólicas, medicamentos, cosméticos, dispositivos ' +
          'médicos, suplementos dietarios, productos terapéuticos, productos ' +
          'homeopáticos, farmacéutica, entre otros sectores a capacitar.',
        images: [
          {
            type: 'image',
            data: require('../assets/img/capacitacion/1.jpeg'),
          },
          {
            type: 'image',
            data: require('../assets/img/capacitacion/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/capacitacion/3.jpeg'),
          },
          {
            type: 'image',
            data: require('../assets/img/capacitacion/4.png'),
          },
        ],
      },
      {
        id: 3,
        press: () =>
          navigation.push('Detail', {id: 2, type: 'subservice', sub: 3}),
        icon: <IconC name="protocol" size={70} color={colors.white} />,
        color: colors.primary,
        colorText: colors.white,
        text: 'Implementación de protocolos',
        description: 
          'En Javeandinas te acompañamos en la construcción de los protocolos ' +
          'de bioseguridad, de acuerdo con las reglamentaciones del Gobierno ' +
          'nacional y local para impulsar la reactivación empresarial.\n\n' +
          'Dicha implementación la realizaremos con el debido acompañamiento ' +
          'especializado de un consultor experto, te apoyamos en el desarrollo ' +
          'y/o verificación de los Protocolos de Bioseguridad de tu empresa y/o ' +
          'de tus aliados productivos, con los documentos de referencia y ' +
          'anexos pertinentes, dando cumplimiento a los requisitos definidos por ' +
          'el gobierno nacional; permitiendo retomar la operación de la empresa ' +
          'de manera satisfactoria y en el menor tiempo posible.',
        images: [
          {
            type: 'image',
            data: require('../assets/img/protocolos/1.jpeg'),
          },
          {
            type: 'image',
            data: require('../assets/img/protocolos/2.webp'),
          },
          {
            type: 'image',
            data: require('../assets/img/protocolos/3.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/protocolos/4.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/protocolos/5.png'),
          },
        ],
      },
    ]
  },
  {
    id: 3,
    press: () => navigation.push('Health'),
    icon: <IconF name="heartbeat" size={70} color={colors.white} />,
    color: colors.sanitizer,
    colorText: colors.white,
    text: 'Salud',
    subservices: [
      /*{
        id: 1,
        press: () =>
          navigation.push('Detail', {id: 3, type: 'subservice', sub: 1}),
        icon: <IconF name="stethoscope" size={70} color={colors.white} />,
        text: 'Visita medica',
        color: colors.fruit_salad,
        colorText: colors.white,
        description: '',
        images: [],
      },*/
      {
        id: 2,
        press: () => navigation.push('Diagnostic'),
        icon: <IconP name="monitor" size={70} color={colors.white} />,
        text: 'Diagnostico on-line',
        color: colors.orange_peel,
        colorText: colors.white,
        description: '',
        images: [],
      },
    ],
  },
];

export default serviceData;
