function data()
{
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    
    if(a=="" || b=="")
    {
        alert("Some fields are missing");
        return false;
    }
    else
    {
        return true;
    }
}