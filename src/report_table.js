<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gráfico de Barras com D3.js no Looker</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://unpkg.com/@looker/sdk/dist/looker_sdk.min.js"></script>
</head>
<body>
  <svg width="600" height="400"></svg>

  <script>
    // Aqui você obtém os dados do Looker
    const dataFromLooker = [
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 50 }
    ];

    // Seleciona o SVG e define as barras
    const svg = d3.select("svg");

    // Cria um escalonamento para o eixo Y
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataFromLooker, d => d.value)])
                     .range([0, 400]);

    // Cria as barras
    svg.selectAll("rect")
       .data(dataFromLooker)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 120)
       .attr("y", d => 400 - yScale(d.value))
       .attr("width", 100)
       .attr("height", d => yScale(d.value))
       .attr("fill", "teal");
  </script>
</body>
</html>
