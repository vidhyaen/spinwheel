function Spining()
{
    var min=1024;
    var max=9999;
    var deg=Math.floor(Math.random()*(min-max)+max);
    document.getElementById('box').style.transform="rotate("+deg+"deg)";
    
 
}