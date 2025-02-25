// https://stackoverflow.com/questions/40012016/importing-d3-event-into-a-custom-build-using-rollup

// Importação dos módulos essenciais para o Heatmap
import { select, selectAll, event } from 'd3-selection';
import { transition } from 'd3-transition';
import { drag } from 'd3-drag';
import { scaleSequential } from 'd3-scale';             // Para escala de cores
import { interpolateBlues } from 'd3-scale-chromatic';  // Para a paleta de cores azul
import { min, max } from 'd3-array';

// Exportação dos módulos importados
export {
  select,
  selectAll,
  event,
  transition,
  drag,
  scaleSequential,
  interpolateBlues
};
