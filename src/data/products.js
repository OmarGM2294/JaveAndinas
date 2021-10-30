import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../styles/base';

const data = (navigation) => [
  {
    id: 1,
    press: () => navigation.push('MedicalDevices'),
    icon: <Icon name="medkit" size={70} color={colors.white} />,
    color: colors.health,
    colorText: colors.white,
    text: 'Dispositivos medicos',
    subproducts: [
      {
        id: 1,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subproduct', sub: 1}),
        icon: <IconM name="masks" size={70} color={colors.white} />,
        color: colors.health,
        colorText: colors.white,
        text: 'Tapabocas N95 Premium',
        images: [
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Premium/1.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Premium/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Premium/3.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Premium/4.png'),
          },
        ],
        description:
          'Filtra el 95% de partículas contenidas en el aire\n' +
          'Control de tabique\n' +
          'Cómodo y fácil de ajustar a la cara (No maltrata)\n' +
          'Bandas  elásticas en material elastomerico\n' +
          'Posee 3 capas en material polipropileno\n' +
          'Posee 2 filtros ( 1 filtro quirúrgico)  disminuyendo el tamaño del poro (0.18-0.2 micras)\n\n' +
          'Este producto cuenta con:\n' +
          '- Ficha técnica\n' +
          '- Carta de calidad\n\n' +
          'Disponible en color:\n' +
          'Azul\n' +
          'Negro\n' +
          'Blanco',
      },
      {
        id: 2,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subproduct', sub: 2}),
        icon: <IconM name="masks" size={70} color={colors.white} />,
        color: colors.gold,
        colorText: colors.white,
        text: 'Tapabocas N95 Gold',
        images: [
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Gold/1.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Gold/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Gold/3.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Gold/4.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Gold/5.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Gold/6.png'),
          },
        ],
        description:
          'Posee 3 capas en material polipropileno\n' +
          'Cómodo y fácil de ajustar a la cara (No maltrata)\n' +
          'Bandas  elásticas en material elastomerico\n' +
          'Posee 2 filtros, disminuyendo el tamaño del poro (0.18-0.2 micras)\n' +
          'Filtra el 95% de partículas contenidas en el aire\n' +
          'Este producto cuenta con:\n' +
          '- Ficha técnica\n' +
          '- Carta de calidad\n\n' +
          'Disponible en color:\n' +
          'Azul\n' +
          'Negro\n' +
          'Blanco',
      },
      {
        id: 3,
        press: () =>
          navigation.push('Detail', {id: 1, type: 'subproduct', sub: 3}),
        icon: <IconM name="masks" size={70} color={colors.black} />,
        color: colors.platinum,
        colorText: colors.black,
        text: 'Tapabocas N95 Platinum',
        images: [
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Platinum/1.png')
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Platinum/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Platinum/3.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/tapabocas/n95-Platinum/4.png'),
          },
          {
            type: 'video',
            data: require('../assets/videos/tapabocas/1.mp4'),
          },
          {
            type: 'video',
            data: require('../assets/videos/tapabocas/2.mp4'),
          },
        ],
        description:
          'Filtra el 95% de partículas contenidas en el aire\n' +
          'Cómodo y fácil de ajustar a la cara (No maltrata)\n' +
          'Reforzado en Tiras elásticas a los bordes\n' +
          'Posee 2 pliegues para una mayor expansión del tapabocas\n' +
          'Posee 3 capas en material polipropileno\n' +
          'Posee 2 filtros ( 1 filtro quirúrgico)  disminuyendo el tamaño del poro (0.18-0.2 micras)\n\n' +
          'Ajuste perfecto y cómodo a la nariz\n' +
          'Tiras elásticas\n' +
          'Este producto cuenta con:\n' +
          '- Ficha técnica\n' +
          '- Carta de calidad\n\n',
      },
    ],
  },
  {
    id: 2,
    press: () => navigation.push('Detail', {id: 2, type: 'product'}),
    icon: (
      <IconC name="screw-machine-round-top" size={70} color={colors.white} />
    ),
    color: colors.sanitizer,
    colorText: colors.white,
    text: 'Diseño y desarrollo de maquinaria',
    description: 
      'En Javeandinas nos especializamos en el diseño y desarrollo de\n' +
      'maquinaria especializada o a nivel industrial, a medida de las\n' +
      'necesidades de los procesos productivos de los clientes.\n\n' +
      'En cada uno de nuestros procesos buscamos el éxito y la calidad para\n' +
      'aquellos experimentos que se consideran poco posibles. Diseñándose\n' +
      'la solución de máquinas especiales requerida.\n\n' +
      '¿Quieres conocer más en profundidad cuál es el proceso de diseño de\n' +
      'maquinaria industrial de calidad que sigue nuestro equipo?',
    images: [
      {
        type: 'image',
        data: require('../assets/img/maquinaria/1.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/2.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/3.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/4.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/5.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/6.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/7.jpeg'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/8.jpeg'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquinaria/9.jpeg'),
      },
    ],
  },
  {
    id: 3,
    press: () => navigation.push('Plastics'),
    icon: <IconF name="recycle" size={70} color={colors.white} />,
    color: colors.recycle,
    colorText: colors.white,
    text: 'Plasticos',
    description: '',
    subproducts: [
      {
        id: 1,
        press: () =>
          navigation.push('Detail', {id: 3, type: 'subproduct', sub: 1}),
        icon: <IconC name="hook" size={70} color={colors.white} />,
        color: colors.hot_pink,
        colorText: colors.white,
        text: 'Ganchos sin pinza',
        images: [
          {
            type: 'image',
            data: require('../assets/img/ganchos/sin-pinza/1.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/ganchos/sin-pinza/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/ganchos/sin-pinza/3.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/ganchos/sin-pinza/4.png'),
          },
        ],
        description:
          'Ficha tecnica:\n' +
          'Color: Natural\n' +
          'Material: Poliestireno cristal (PSC) y polipropileno(PP)\n' +
          'Peso: (PSC) 13.8 gr - (PP) 12.7 gr aprox.\n\n' +
          'Especialmente diseñado para la exhibición de toda clase de prendas intimas\n' +
          'Colores personalizados\n' +
          'Cantidades mínimas desde (12 und) o lotes de (600 und) por $50.000 COP\n' +
          'En su fabricación se tiene especial cuidado en que el plástico sea de origen cíclico con el fin de aportaral cuidado del medio ambiente',
      },
      {
        id: 2,
        press: () =>
          navigation.push('Detail', {id: 3, type: 'subproduct', sub: 2}),
        icon: <IconC name="hook" size={70} color={colors.black} />,
        color: colors.reef,
        colorText: colors.black,
        text: 'Ganchos con pinza',
        images: [
          {
            type: 'image',
            data: require('../assets/img/ganchos/con-pinza/1.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/ganchos/con-pinza/2.png'),
          },
          {
            type: 'image',
            data: require('../assets/img/ganchos/con-pinza/3.png'),
          },
        ],
        description:
          'Disponible en todos los colores\n' +
          'Tambien puedes personalizar el color\n\n' +
          'Caracteristicas:\n' +
          'Ideal para exhibir prendas inferiores livianas como pantalones, pantalonetas, sudaderas, faldas, shorts.\n\n' +
          'Ficha tecnica:\n' +
          'Color: NATURAL\n' +
          'Material: POLIPROPILENO (PP)\n' +
          'Peso:  23g aprox.',
      },
    ],
  },
  {
    id: 4,
    press: () => navigation.push('Detail', {id: 4, type: 'product'}),
    icon: <IconM name="theater-comedy" size={90} color={colors.white} />,
    color: colors.theater,
    colorText: colors.white,
    text: 'Montajes artisticos',
    description:
      'La combinación de estas piezas claves como lo son, la ciencia,' +
      'tecnología y arte. Nos ha llevado a dar un paso más allá de lo' +
      'intangible, haciendo que cada uno de los proyectos personalizados' +
      'enmarcados como montajes artísticos que combinan estas piezas claves' +
      'lleven una marca fundamental representando la ciencia desde diversos' +
      'ángulos.\n\n' +
      'Los montajes artísticos, se diseñaron con el fin de dar cumplimiento a' +
      'cada uno de las metas o sueños de nuestros clientes. Para así poder' +
      'llevar a cabo la creación de un proyecto que en su momento se creía' +
      'imposible, haciéndolo nosotros posible. Cada trabajo es personalizado.' +
      '¡En JAVEANDINAS todo lo hacemos posible!',
    images: [
      {
        type: 'image',
        data: require('../assets/img/montajes/1.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/montajes/2.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/montajes/3.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/montajes/4.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/montajes/5.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/montajes/6.png'),
      },
    ],
  },
  {
    id: 5,
    press: () => navigation.push('Detail', {id: 5, type: 'product'}),
    icon: <IconE name="colours" size={70} color={colors.white} />,
    color: colors.cosmetics,
    colorText: colors.white,
    text: 'Maquila farmaceutica y cosmetica',
    images: [
      {
        type: 'image',
        data: require('../assets/img/maquilla/1.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquilla/2.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquilla/3.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquilla/4.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquilla/5.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquilla/6.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/maquilla/7.png'),
      },
    ],
    description:
      'Fabricación, envase, rotulado y acondicionamiento de productos de uso' +
      'humano y veterinario cumpliendo con los requerimientos de Buenas' +
      'Practicas de Manufactura y Buenas Practicas de Higiene, según el' +
      'informe 32 de la OMS.',
  },
  {
    id: 6,
    press: () => navigation.push('Detail', {id: 6, type: 'product'}),
    icon: <IconM name="sanitizer" size={70} color={colors.white} />,
    color: colors.sanitizer,
    colorText: colors.white,
    text: 'Desinfectantes de uso hospitalario',
    description:
      'Los desinfectantes actúan reduciendo y matando células bacterianas por' +
      'desactivación de enzimas, hidrólisis, y oxidación, funcionando de forma' +
      'más selectiva que los antisépticos. Debido a su alta toxicidad sólo se' +
      'pueden aplicar sobre materia inerte.\n\n' +
      'Estos desinfectantes hospitalarios de uso común deben cumplir' +
      'condiciones para servir contra un amplio espectro de microorganismos' +
      'patógenos, deben ser asequibles a bajo coste, dadas las cantidades' +
      'necesarias para efectuar la limpieza y desinfección en éste tipo de' +
      'instalaciones de grandes dimensiones. Por lo cual deben actuar' +
      'eficazmente en los más cortos espacios de tiempo y finalmente no pueden' +
      'producir efectos tóxicos durante su uso o posteriormente por acción' +
      'residual, pero sin embargo deben actuar incluso tiempo después de su' +
      'aplicación, conservando sus propiedades. Por esto nosotros nos' +
      'percatamos durante toda la cadena de producción cada uno de los puntos' +
      'críticos de control de los desinfectantes garantizando la higienización' +
      'y calidad de los productos hasta llegar a su destino final.',
    images: [
      {
        type: 'image',
        data: require('../assets/img/desinfectantes/1.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/desinfectantes/2.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/desinfectantes/3.png'),
      },
    ],
  },
  {
    id: 7,
    press: () => navigation.push('Detail', {id: 7, type: 'product'}),
    icon: <IconM name="broken-image" size={70} color={colors.white} />,
    text: 'Tejidos inteligentes',
    color: colors.indigo,
    colorText: colors.white,
    description:
      'Los textiles inteligentes son la combinación y el equilibrio entre la' +
      'moda y la tecnología, la ciencia y el arte; los cuales juntos, permiten' +
      'que el usuario interactúe con el entorno y sus sensaciones, dado que la' +
      'variedad de materiales manejados perciben estímulos exteriores y' +
      'reaccionan ante estos. En la última década se ha popularizando el' +
      'concepto de “textiles inteligentes” (o smart textils, en inglés);' +
      'puesto que cada vez se observa con más frecuencia, la incorporación de' +
      'nanotecnología, sensores, circuitos eléctricos, y microcápsulas en las' +
      'prendas de vestir, aumentando su funcionalidad, la conectividad' +
      'interpersonal y la interacción ambiental.\n\n' +
      'Todos estos conceptos en los que nuestras prendas de vestir cambian de' +
      'color, desprenden aromas, son terapéuticas y poseen miles de' +
      'características benéficas para el usuario, anteriormente eran' +
      'concebidos como pensamientos futuristas; sin embargo, actualmente son' +
      'una realidad gracias a la biotecnología y la nanotecnología aplicada a' +
      'nuestras prendas, partiendo desde de uso industrial, militar, naval,' +
      'médico y arquitectónico, hasta su apreciación en las pasarelas de moda.',
    images: [
      {
        type: 'image',
        data: require('../assets/img/tejidos/1.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/2.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/3.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/4.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/5.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/6.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/7.png'),
      },
      {
        type: 'image',
        data: require('../assets/img/tejidos/8.png'),
      },
    ],
  },
];

export default data;
