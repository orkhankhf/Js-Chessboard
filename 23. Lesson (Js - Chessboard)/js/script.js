var c = true;
document.write("<div class='main'>");
	for(a=0; a<8; a++){
		document.write("<div class='row'>");
			for(b=0; b<8; b++){
				if(c){
					document.write("<div class='bg-black'></div>");
					c=false;
				}else{
					document.write("<div></div>");
					c = true;
				}
			}
			//Yeni row üst row'da sonuncu xananın rəngi ilə başlasın.
			if(c == false){
				c = true;
			}else{
				c = false;
			}
		document.write("</div>");
	}
document.write("</div>");