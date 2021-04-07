var svg = d3.select("#text_w").append("svg")
    .attr("width", 1000)
    .attr("height", 400);

//Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)     
var path = svg.append("path")
    .attr("id", "wavy") //A unique ID to reference later
    .attr("d", "M0,300 A400,400 0 0,1 400,300") //Notation for an SVG path
    .style("fill", "none")

//Create an SVG text element and append a textPath element
var textArc = svg.append("text")
    .style("text-anchor", "middle")
    .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .attr("startOffset", "50%") //place the text halfway on the arc
    .text("What Yahoo Answers question that best describes you?")
    .style("font-size", "30px")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central") ;

function repeat() {
    path
        .transition().duration(2000)
        //Transition to an arc starting at location [75,300], ending at [325,300] with a radius of 125 (circle)
        .attr("d", "M50,300 A300,300 0 0,1 350,300")
        .transition().duration(2000)
        //Transition back to original arc
        .attr("d", "M0,300 A400,400 0 0,1 400,300")
        .on("end", repeat);
} //repeat

//Repeatedly change the arcs back and forth
repeat();