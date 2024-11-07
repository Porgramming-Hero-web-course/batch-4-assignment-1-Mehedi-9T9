type Circle ={
    shape: string;
    radius:number
}
type Reactangle ={
    shape:string;
    width:number;
    height:number
}
const calculateShapeArea =(obj: Circle | Reactangle)=>{
    if("radius" in obj){
        const circle =(Math.PI*obj.radius*obj.radius).toFixed(2)
        console.log(circle);
        return circle
    }else{
        const rectangle =obj.height*obj.width
        console.log(rectangle);
        return rectangle
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });