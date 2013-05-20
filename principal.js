function teste1(){
	n1 = document.getElementById('numero1').value;
	n2 = document.getElementById('numero2').value;
	var xmlString = '<solicitacao><tipo>teste1</tipo><n1>'+n1+'</n1><n2>'+n2+'</n2></solicitacao>';
			var url = 'http://www.elooos.com/elooosfarma/ajax/1.asp';
			if (window.XMLHttpRequest){
				xml1=new XMLHttpRequest();
			}else{
				xml1=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xml1.open("POST", url, true);
			xml1.setRequestHeader("Content-Type", "text/xml");
			xml1.onreadystatechange = function(){
				if (xml1.readyState == 4 && xml1.status == 200){
					a=xml1.responseXML;
					x=a.getElementsByTagName("retornoConsulta");
					resultado = x[0].getElementsByTagName("resultado")[0].childNodes[0].nodeValue;
					document.getElementById('valor_soma').value = resultado;
					//a = xml1.responseText
					//alert(a)
				}

			}
			xml1.send(xmlString);

	
	
	
	
	
}
