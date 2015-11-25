chrome.runtime.onInstalled.addListener(function() {
	var context = "image";
	var title = "Pin this to shoppingo";
	var id = chrome.contextMenus.create({
		"title": title, 
		"contexts":["image"],
		"id": "context" + context
	});

});

chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab){

	$('#resultLoading').css('display', 'block');

	if(info.linkUrl===undefined || info.linkUrl=="javascript:void(0);" || info.linkUrl=="javascript:;"){
		url = info.pageUrl;
	}else{
		url = info.linkUrl;
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

			url = "http://code-b.in/projects/shoppingpost/missing_details.php?product_image="+info.srcUrl+"&product_url="+url+"&host="+l.host;
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
}	