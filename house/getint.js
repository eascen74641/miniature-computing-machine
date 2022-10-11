function doInputOutput()
{
    let width = parseFloat(document.getElementById("width").value);
    let depth = parseFloat(document.getElementById("depth").value);
    let height = parseFloat(document.getElementById("height").value);
    let sweep = parseFloat(document.getElementById("sweep").value);
    let answer = houseVolume(width, depth, height, sweep);
    document.getElementById('output').innerHTML = "The Volume of Your House is: " + Math.round(answer);
}

function houseVolume(width, depth, height, sweep)
{
    let houseVolume = livingVolume(width, depth, height) + roofVolume(width, depth, sweep);
    return houseVolume;
}

function livingVolume(width, depth, height)
{
    let livingVolume = width*depth*height;
    return livingVolume;
}

function roofVolume(width, depth, sweep)
{
    let roofVolume = triangleArea(width, depth, sweep)*width;
    return roofVolume;
}

function triangleArea(a, b, c)
{
    let s = (a+b+c)/2;
    let triangleArea = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return triangleArea;
}