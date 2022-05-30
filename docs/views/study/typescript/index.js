// let arr : [number, string] = [2, '1'] 
var ColorList;
(function (ColorList) {
    ColorList[ColorList["red"] = 3] = "red";
    ColorList[ColorList["green"] = 4] = "green";
    ColorList[ColorList["blue"] = 5] = "blue";
})(ColorList || (ColorList = {}));
console.log('color', ColorList[5]);
