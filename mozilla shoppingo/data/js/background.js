jQuery(document).ready(function($) {
	self.on("click", function (node) {

		linkUrl = $(node).closest('a').prop('href');

		$('#resultLoading').css('display', 'block');


		if(linkUrl===undefined || linkUrl=="javascript:void(0);" || linkUrl=="javascript:;"){
			url = window.location.href;
		}else{
			url = linkUrl;
		}
		
		var l = document.createElement("a");
    	l.href = url;

		$.ajax({
			url: url, 
			success: function(result){
				switch (l.hostname) {
				    case 'www.snapdeal.com':
				        obj = getDetailsFromSnapdeal(result)
				        break;
				    case 'www.flipkart.com':
				    	console.log(url);
				        obj = getDetailsFromFlipkart(result)
				        break;
				    case 'www.ebay.com':
				        obj = getDetailsFromEbay(result)
				        break;
				    case 'www.jabong.com':
				        obj = getDetailsFromJabong(result)
				        break;
				    case 'www.shopclues.com':
					obj = getDetailsFromShopclues(result)
						break;
					case 'www.amazon.in':
						obj = getDetailsFromAmazon(result)
						break;
			        
				        
				}
				
				
				url = "http://code-b.in/projects/shoppingo/missing_details.php?product_image="+node.src+"&product_url="+url+"&host="+l.hostname;
				try{
					if(obj.price){
						url = url+"&price="+obj.price;
					}

					if(obj.title){
						url = url+"&title="+obj.title;
					}

					if(obj.description){
						url = url+"&description="+obj.description;
					}
					window.open(url);	
					$('#resultLoading').css('display', 'none');
				}catch(e){	
					window.open(url);
					$('#resultLoading').css('display', 'none');
				}
	        },
		});	

		return false;

		$('#resultLoading').css('display', 'none');
	});
 

});