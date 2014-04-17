function changeslides(which){
	var imghtml=""
	currentindex=parseInt(which)
	var which=numberslide[which]
	if (which[1]!="")
		imghtml='<a href="'+which[1]+'">'
	imghtml+='<img src="'+which[0]+'">'
	if (which[1]!="")
		imghtml+='</a>'
	document.getElementById("imagecontainer").innerHTML=imghtml
	changecolors()
}

function changecolors(){
	var numberobj=document.getElementById("numberDiv")
	numberlinks=numberobj.getElementsByTagName("A")
	for (i=0; i<currentindex; i++)
		numberlinks[i+1].style.color=mylinkcolor
	numberlinks[currentindex+1].style.color=currColor
	for (i=currentindex+1; i<numberslide.length; i++)
		numberlinks[i+1].style.color=mylinkcolor
	if(timer)
		numberlinks[numberslide.length+2].style.color=currColor
	else
		numberlinks[numberslide.length+2].style.color=mylinkcolor
}

function createnumbers(){
	document.write('<a href="javascript:goback()" style="color:'+mylinkcolor+'">&#60;Previous </a> ')
	document.write('<a href="javascript:changeslides(0)" style="color:'+currColor+'">'+1+'</a> ')
	for (i=1; i< numberslide.length; i++)
		document.write('<a href="javascript:changeslides(\''+i+'\')" style="color:'+mylinkcolor+'">'+(i+1)+'</a> ')
	document.write('<a href="javascript:goforward()" style="color:'+mylinkcolor+'"> Next&#62;</a> ')
}

function goforward(){
	if (currentindex<numberslide.length-1)
		changeslides(currentindex+1)
	else
		changeslides(0)
}

function goback(){
	if (currentindex>0)
		changeslides(currentindex-1)
	else
		changeslides(numberslide.length-1)
}