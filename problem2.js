let x1;
let x2;

const a = 3;
const b = 2;
const c = -1;

let discriminant = b*b - 4*a*c;


if (a==0){
    x1= -c/b;
    console.log ("x=" + x1);
}
if (discriminant == 0){
    x1 = -b + Math.sqrt(discriminant) / (2*a);
    console.log ("x=" + x1);
}
 if (discriminant > 0){
    x1 = -b + Math.sqrt(discriminant) / (2*a);
    x2 = -b - Math.sqrt(discriminant) / (2*a);
    console.log ('x1=' + x1 + 'x2=' + x2);
}
 if (discriminant < 0){
    console.log ("Unsolvable");
}

