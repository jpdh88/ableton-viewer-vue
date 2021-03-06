export default {
  getColourByIndex(colourIndex) {
    return this.defaultPalette[colourIndex % this.defaultPalette.length];
  },
  defaultPalette: [
    '#E38D9C', '#E39B38', '#BA9136', '#DDDA7A', '#B0E017', '#2CE33D', '#35E39D',
    '#61E3D1', '#86B5E3', '#5A7DCD', '#8C9DE3', '#C46DCD', '#CE5997', '#E3E3E3',

    '#e34242', '#dc6d19', '#917253', '#e3d741', '#84e46a', '#49b418', '#18b1a4',
    '#2cd2e4', '#249ad5', '#177bb1', '#846dcd', '#a976b5', '#e345c1', '#bebebe',

    '#cc695f', '#e39974', '#c0a171', '#d5e3a2', '#c0ce92', '#adbe75', '#94b589',
    '#c1e2cc', '#bbd8dd', '#abb1cd', '#bbadcd', '#a291ce', '#cfc8cc', '#9f9f9f',

    '#b48b85', '#a97f5c', '#91806c', '#b0ac6b', '#9db018', '#7ca456', '#85b3ad',
    '#94a7b5', '#819bb2', '#808dba', '#9b8da8', '#b096af', '#ae7290', '#7a7a7a',

    '#a94646', '#a45e44', '#785c51', '#ccb91d', '#889637', '#609d45', '#269b90',
    '#3a6d88', '#324395', '#435f9f', '#6b59a7', '#9f59a7', '#c14376', '#4e4e4e'
  ],
}