// var d3 = require('d3');

$("#btnMap").click(function () {
    document.getElementById("bottom-content").innerHTML = "Map";
});

$("#btnHome").click(function () {
    document.getElementById("bottom-content").innerHTML = "Home Sweet Home"
});
// document.getElementById("btnMap").addEventListener("click", makeMap());

// document.getElementById("btnHome").addEventListener("click", displayMessage());

// function displayMessage() {
//     document.getElementById("bottom-content").innerHTML = "Home Sweet Home";
// }

// function makeMap() {
//     document.getElementById("bottom-content").innerHTML = "Map";
// }

// function makeMap() {
//     document.getElementById("bottom-content").innerHTML = "Test";

//     var width = 960,
//         height = 580;
//     var color = d3.scale.category10();
//     var projection = d3.geo.kavrayskiy7()
//         .scale(170)
//         .translate([width / 2, height / 2])
//         .precision(.1);
//     var path = d3.geo.path()
//         .projection(projection);
//     var graticule = d3.geo.graticule();
//     var svg = d3.select("body").append("svg")
//     // var svg = d3.select("bottom-content").append("svg")
//         .attr("width", width)
//         .attr("height", height);
//     svg.append("defs").append("path")
//         .datum({
//             type: "Sphere"
//         })
//         .attr("id", "sphere")
//         .attr("d", path);
//     svg.append("use")
//         .attr("class", "stroke")
//         .attr("xlink:href", "#sphere");
//     svg.append("use")
//         .attr("class", "fill")
//         .attr("xlink:href", "#sphere");
//     svg.append("path")
//         .datum(graticule)
//         .attr("class", "graticule")
//         .attr("d", path);
//     d3.json("../node_modules/world-110m.json", function (error, world) {
//         if (error) throw error;
//         var countries = topojson.feature(world, world.objects.countries).features,
//             neighbors = topojson.neighbors(world.objects.countries.geometries);
//         svg.selectAll(".country")
//             .data(countries)
//             .enter().insert("path", ".graticule")
//             .attr("class", "country")
//             .attr("d", path)
//             .style("fill", function (d, i) {
//                 return color(d.color = d3.max(neighbors[i], function (n) {
//                     return countries[n].color;
//                 }) + 1 | 0);
//             });
//         svg.insert("path", ".graticule")
//             .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
//                 return a !== b;
//             }))
//             .attr("class", "boundary")
//             .attr("d", path);
//     });
//     d3.select(self.frameElement).style("height", height + "px");
// }