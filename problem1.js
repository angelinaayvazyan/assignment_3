const t_height = 20;
const t_base = 30;
const triangle_area = t_height*t_base/2;
const r_height = 10;
const r_width = 15;
const rectangle_area = r_height*r_width;
if (triangle_area > rectangle_area){
    console.log ("Triangle has a bigger area than rectangle");
}
if (rectangle_area > triangle_area){
    console.log("Rectangle has a bigger area than triangle");
}
if (rectangle_area === triangle_area){
    console.log("Rectangle has a the same area as triangle");
}

// You can change the values of my variables in testing purposes :)