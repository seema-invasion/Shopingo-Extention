var response={};
function getDetailsFromFlipkart(result){
		
	try{
		regex = /<meta[^>]*itemprop\s*=\s*"price"\s*content\s*=\s*"([^"]*)"/gi;
 		price = regex.exec(result);
		
		regex = /<meta[^>]*itemprop\s*=\s*"priceCurrency"\s*content\s*=\s*"([^"]*)"/gi;
 		currency = regex.exec(result);
		
        regex = /<meta[^>]*name\s*=\s*"og_title".*content\s*=\s*"([^"]*)/gi;           
        title = regex.exec(result);

        regex = /<meta[^>]*name\s*=\s*"og_image".*content\s*=\s*"([^"]*)/gi;           
		image = regex.exec(result);

        regex = /<meta[^>]*name\s*=\s*"Description".*content\s*=\s*"([^"]*)/gi;           
        description = regex.exec(result);
		
 		if(price[1]){
 			response.price = price[1]+" "+currency[1];
 		}
 		if(title[1]){
 			response.title = title[1];
 		}
 		if(image[1]){
 			response.image = image[1];
 		}
 		if(description[1]){
 			response.description = description[1];
 		}

        return response;
	}catch(err){
		console.log(err.message);
	}         
}

function getDetailsFromSnapdeal(result){
	
	try{
		//console.log(result);
		regex = /<meta name="og_title".*content="([^"]*)/;           
		title = regex.exec(result);
		
		regex = /<meta name="description".*content="([^"]*)/;           
		description = regex.exec(result);
		
		regex = /<input type="hidden" value="([^"]+)" id="productPrice"/gi;
		price = regex.exec(result);

		
		regex = /<img\s*itemprop\s*=\s*"image"\s*title\s*=\s*"([^<]*)"\s*slideNum\s*=\s*"([^<]*)"\s*class\s*=\s*"([^<]*)"\s*bigsrc\s*=\s*"([^<]*)"\s*src\s*=\s*"([^<]*)"\s*data-cloudzoom\s*=\s*"([^<]*)"/gi;
		image = regex.exec(result);
		
		//console.log("Title: "+title[1]+" Price: "+price[1]+" DESc: "+description[1]+" Image: " +image[5]);

		if(price[1]){
 			response.price = price[1]+" INR";
 		}
 		if(title[1]){
 			response.title = title[1];
 		}
 		if(image[5]){
 			response.image = image[5];
 		}
 		if(description[1]){
 			response.description = description[1];
 		}

        return response;
	
	}catch(err){
		console.log(err.message);
	}
}

function getDetailsFromEbay(result){
	
	try{
		regex = /<meta  property="og:title" content="([^"]*)"/;
		title = regex.exec(result);
		
		regex = /<meta  property="og:description" content="([^"]*)"/;
		description = regex.exec(result);
		
		regex = /"binPrice":"([^"]*)"/;
		price = regex.exec(result)
		
		if(price[1]){
 			response.price = price[1];
 		}
 		if(title[1]){
 			response.title = title[1];
 		}
 		if(description[1]){
 			response.description = description[1];
 		}
		
		return response;
		
	}catch(err){
		console.log(err.message);
	}
}

function getDetailsFromJabong(result){
	
	try{
		regex = /<meta property="og:title" content="([^"]*)"/;
		title = regex.exec(result);
		
		regex = /<meta property="og:description" content="([^"]*)"/;
		description = regex.exec(result);
		
		regex = /<meta property="og:image" content="([^"]*)"/;          
		image = regex.exec(result);

		regex = /price:"([^"]*)"/;
		price = regex.exec(result);

		
		if(price[1]){
 			response.price = price[1]+" INR";
 		}
 		if(title[1]){
 			response.title = title[1];
 		}
 		if(image[1]){
 			response.image = image[1];
 		}
 		if(description[1]){
 			response.description = description[1];
 		}

		return response;
	}catch(err){
		console.log(err.message);
	}
}

function getDetailsFromShopclues(result){
	
	try{
			
		//console.log(result);	
		regex = /<meta property="og:title" content='([^"]*)'/gi;
		title = regex.exec(result);
		
		regex = /<meta property="og:image" content='([^"]*)'/gi;
		image = regex.exec(result);

		regex = /<meta name="description" content="([^"]*)"/gi;
		description = regex.exec(result);
		
		regex = /<div class="price"><label>Deal Price:<\/label>([^<]*)<\/div>/gi;
		price1 = regex.exec(result);

		regex = /<div class="price" ><label>Selling Price:<\/label>Rs.<span>([^<]*)<\/span><\/div>/gi;
		price2 = regex.exec(result);

		regex = /<div\s*class\s*=\s*"price"\s*id\s*=\s*"line_discounted_price_([^<]*)">\s*<label>\s*Wholesale Price\s*:\s*<\/label>\s*Rs.\s*<span\s*id\s*=\s*"sec_discounted_price_([^<]*)">([^<]*)<\/span><\/div>/gi;
		price3 = regex.exec(result);

		regex = /<div\s*class\s*=\s*"price"\s*id\s*=\s*"line_discounted_price_([^<]*)">\s*<label>\s*Selling Price\s*:\s*<\/label>\s*Rs.\s*<span\s*id=\s*"sec_discounted_price_([^<]*)">([^<]*)<\/span>/gi;
		price4 = regex.exec(result);

		if(title[1]){
	 		response.title = title[1];
	 	}
		if(image[1]){
	 		response.image = image[1];
	 	}
	 	if(description[1]){
	 		response.description = description[1];
	 	}	
		if(price1){
			if(price1[1]){
	 			response.price = price1[1]+" INR";
	 		}
	 	}
	 	else if(price2){
	 		if(price2[1]){
	 			response.price = price2[1]+" INR";
	 		}
	 	}
	 	else if(price3){
	 		if(price3[3]){
	 			response.price = price3[3]+" INR";
	 		}
	 	}
	 	else if(price4){
	 		if(price4[3]){
	 			response.price = price4[3]+" INR";
	 		}
	 	}
		
		return response;
		
	}catch(err){
		console.log(err.message);
	}
}

function getDetailsFromAmazon(result){
		
	try{
		
        regex = /<meta[^>]*name\s*=\s*"title".*content\s*=\s*"([^"]*)/gi;           
        title = regex.exec(result);
		
        regex = /<meta[^>]*name\s*=\s*"description".*content\s*=\s*"([^"]*)/gi;           
        description = regex.exec(result);

        regex = /<span id="priceblock_ourprice" class="a-size-medium a-color-price"><span class="currencyINR">&nbsp;&nbsp;<\/span>([^<]*)<\/span>/gi;
        price1 = regex.exec(result);

        regex = /<span id="priceblock_saleprice" class="a-size-medium a-color-price"><span class="currencyINR">&nbsp;&nbsp;<\/span>([^<]*)<\/span>/gi;
        price2 = regex.exec(result);

        regex = /<span id="priceblock_dealprice" class="a-size-medium a-color-price"><span class="currencyINR">&nbsp;&nbsp;<\/span>([^<]*)<\/span>/gi; 
        price3 = regex.exec(result);

        regex = /<span class="a-size-medium a-color-price offer-price a-text-normal"><span class="currencyINR">&nbsp;&nbsp;<\/span>([^<]*)<\/span>/gi;
        price4 = regex.exec(result);

        regex = /<img\s*alt\s*=\s*"([^<]*)"\s*src="([^<]*)"\s*data-old-hires\s*=\s*"([^<]*)"\s*class\s*=\s*"([^<]*)"\s*id\s*=\s*"landingImage"\s*data-a-dynamic-image\s*=\s*"([^<]*)"\s*style\s*=\s*"([^<]*)"/gi;
        //regex = /src="(.+?)"/;
        image = regex.exec(result);
        //console.log(image[2]);

        if(price1){
	        if(price1[1]){
	 			response.price = price1[1]+" INR";
	 		}
	 	}
	 	else if(price2){
	 		if(price2[1]){
	 			response.price = price2[1]+" INR";
	 		}
	 	}
	 	else if(price3){
	 		if(price3[1]){
	 			response.price = price3[1]+" INR";
	 		}
	 	}
	 	else if(price4){
	 		if(price4[1]){
	 			response.price = price4[1]+" INR";
	 		}
	 	}
        if(title[1]){
 			response.title = title[1];
 		}
 		if(image[2]){
 			response.image = image[2];
 		}
 		if(description[1]){
 			response.description = description[1];
 		}
 		

        return response;

	}catch(err){
		console.log(err.message);
	}         
}