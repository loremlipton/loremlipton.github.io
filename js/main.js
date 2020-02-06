let arrRez = new Array();

function change()
{
	let a,b, str, rez, litSpan,litInput;
	
	for (var k=1;k<10;k++){
		while (true) {
			a = parseInt( Math.floor(Math.random() * (1000 - 2) + 2)); 
			b = parseInt( Math.floor(Math.random() * (10 - 2) + 2)); 
			rez = a/b;
			str = a + " : " + b + " =";
			litSpan = "s" + k;
			litInput = "i" + k;
			arrRez[k-1] = rez;
			document.getElementById(litSpan).innerHTML=str;
			//document.getElementById(litInput).value=rez;
			console.log(str+rez);
			if (!(a%b)) break; 	
		}
	}


	// for (var k=1;k<11;k++){

	//  	console.log("Massivo "+arrRez[k-1]);

	// }



}





function open(){
	let a,b, str, rez, litSpan,litInput;
	for (var k=1;k<11;k++){
		litSpan = "s" + k;
		litInput = "i" + k;
		document.getElementById(litSpan).innerHTML="пример";
		document.getElementById(litInput).value=" X";
		
	}
}



 function check (){


//console.log("rem two");


  for (var k=1;k<10;k++){
 litInput = "i" + k; 		
 if ( arrRez[k-1] != document.getElementById(litInput).value)
 	{console.log("ti ho " +arrRez[k-1]);
 	document.getElementById(litInput).style.color = 'red';}
else
{document.getElementById(litInput).style.color = 'white'};

 	
// 	;

}
}