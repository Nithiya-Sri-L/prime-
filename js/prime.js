var input=document.createElement("INPUT");
	input.setAttribute("type","text");
	input.setAttribute("placeholder","Enter a number:");
	input.setAttribute("id","nithi");
	input.classList.add("style");
	document.body.appendChild(input);
	document.write('<br/>','<br/>.');
	

	document.body.style.textAlign="center";
	document.body.style.backgroundColor="gray";

	
	button=document.createElement("button");
	button.setAttribute("onclick","prime()");
	button.innerHTML="Click";
	button.classList.add("box");
    document.body.appendChild(button)
	  
	
	
	m=document.createElement("div")
	m.style.marginLeft="30%";
	m.style.padding="30px";
	m.classList.add("n");
	document.body.appendChild(m) 
	
	
	function prime(){
		var num=document.getElementById("nithi").value;
temp=true;
for(i=2;i<num-1;i++){
	if (num%i==0)
	{
		temp=false;
		break;
	}
}
if (temp==true)
{
	m.innerHTML="number is prime"
}
else
{
	m.innerHTML="number is not a prime"
}
}
