# Criando um heatmap com D3.js

# Definir dimensões do gráfico
const margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

# Criar SVG
const svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

# Definir dados de exemplo
const data = [
    { x: 0, y: 0, value: 10 }, { x: 1, y: 0, value: 30 }, { x: 2, y: 0, value: 20 },
    { x: 0, y: 1, value: 40 }, { x: 1, y: 1, value: 60 }, { x: 2, y: 1, value: 80 },
    { x: 0, y: 2, value: 20 }, { x: 1, y: 2, value: 50 }, { x: 2, y: 2, value: 90 }
];

# Definir escalas
const xScale = d3.scaleBand()
    .domain([0, 1, 2])
    .range([0, width])
    .padding(0.05);

const yScale = d3.scaleBand()
    .domain([0, 1, 2])
    .range([0, height])
    .padding(0.05);

const colorScale = d3.scaleSequential(d3.interpolateInferno)
    .domain([10, 90]);

# Criar retângulos do heatmap
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.x))
    .attr("y", d => yScale(d.y))
    .attr("width", xScale.bandwidth())
    .attr("height", yScale.bandwidth())
    .style("fill", d => colorScale(d.value));

# Adicionar eixos
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).tickFormat(d => `X${d}`));

svg.append("g")
    .call(d3.axisLeft(yScale).tickFormat(d => `Y${d}`));
