function loop(input)
{
    x = parseFloat(document.getElementById('x').value);
    y = parseFloat(document.getElementById('y').value);
    
    for(let i=x; x<4; x++)
    {
        for(let j=y; y<4; y++)
        {
            alert('Hi');
            alert(x*y);
        }
    }
}