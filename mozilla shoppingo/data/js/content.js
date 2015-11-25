	var url = "";
	var img = "";
	var urlDetail = "";
	var urlDetail2 = "";
	var windows = {};
	var opened='';
	var opened1='';
	var myWindow;
	var i=0;
	var j=0;
	var first=0;

	// Add attribute to check extension is installed or not 
	$('body').attr('shoppingpost-installed', 'yes');

	// Add pin icon to the body
	$('body').append('<span class="shop_pin" style="height: 32px; width: 32px; position: absolute; opacity: 1; display: none; cursor: pointer; border: none; background-image: url(http://projects.code-bin.com/shoppingo/Trophy-pin.png); background-repeat: no-repeat; background-color: transparent; z-index:1000" ></span><div id="resultLoading" style="width: 100%; height: 100%; position: fixed; z-index: 10000000; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; display:none; "><div style="width: 250px; height: 75px; text-align: center; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; font-size: 16px; z-index: 10; color: rgb(255, 255, 255);"><img id="loader_gif" ><div>loading data.. please wait..</div></div><div class="bg" style="opacity: 0.7; width: 100%; height: 100%; position: absolute; top: 0px; background: rgb(0, 0, 0);"></div></div>');
	
	// Add confirmation popup to get paytm voucher
	$('body').append('<div id="dialog-confirm" style="display:none;" title="Confirmation"><p>Have you purchased this product?</p></div>');
	
	// Add popup to warn "you can't  post this product"
	$('body').append('<div id="dialog-confirm1" style="display:none;" title="Confirmation"><p>Sorry, Cannot post this product!</p></div>');

	//====================================================
	// Show icon on single page image of shopping wbsites
	//====================================================
	
	// shopclues.com single Page
	$('.zoomPup').on('mouseover',function(){ 
		if($(this).find('img').width()>50 || $(this).find('img').height()>50 ){
			console.log('hello');
			$('.shop_pin').css({
				display: 'block',
				top: $(this).find('img').offset().top+8,
				left:$(this).find('img').offset().left+$(this).find('img').width()-40
			});
			img = $(this).find('img');
			url = window.location.href;
		}
	});

	// Snapdeal.com single Page
	$('#bx-slider-left-image-panel').on('mouseover',function(){ 
		if($(this).find('li:first-child img').width()>50 || $(this).find('li:first-child img').height()>50 ){
			console.log('hello');
			$('.shop_pin').css({
				display: 'block',
				top: $(this).find('li:first-child img').offset().top+8,
				left:$(this).find('li:first-child img').offset().left+$(this).find('li:first-child img').width()-40
			});
			img = $(this).find('li:first-child img');
			url = window.location.href;
		}
	});

	// Flipkart.com single Page 
    $(document).on('mouseover','.left-col-wrap .productImages .mainImage .imgWrapper img',function(){
    	//console.log('show');
		if( $( this ).width()>50 || $( this ).height()>50 ){
			$('.shop_pin').css({
				display: 'block',
				top: $(this).offset().top+8,
				left:$(this).offset().left+$(this).width()-40
			});
			img = $(this);
			url = window.location.href;
		}
	});

	// Amazon.in single page 
	$(document).on('mouseover','#imgTagWrapperId',function(){
		if( $( this ).width()>50 || $( this ).height()>50 ){
			$('.shop_pin').css({
				display: 'block',
				top: $(this).offset().top+8,
				left:$(this).offset().left+$(this).width()-40
			});
			img = $(this).children('img');
			url = window.location.href;
		}
	});

	// Jabong.com single page 
	$(document).on('mouseover','#prdbig',function(){
		if( $(this).find('.imageview-slider li:nth-child(2)').children('img').width()>50 || $(this).find('.imageview-slider li:nth-child(2)').children('img').height()>50 ){
			$('.shop_pin').css({
				display: 'block',
				top: $(this).find('.imageview-slider li:nth-child(2)').children('img').offset().top+8,
				left: $(this).find('.imageview-slider li:nth-child(2)').children('img').offset().left+$(this).find('.imageview-slider li:nth-child(2)').children('img').width()-40
			});
			img = $(this).find('.imageview-slider li:nth-child(2)').children('img');
			url = window.location.href;
		}
	});

	//============================
	// After purchase post product
	//============================

    $(window).load(function(){

		var pageURL = window.location.href;
		pageURL = pageURL.split('/');

		if(location.hostname=="www.flipkart.com"){

			pageURL = pageURL[3].split('&');
			pageURL = pageURL[0].split('=');

			if(pageURL[0]=='orderresponse?reference_id'){

				$('body').append('<style>.ui-dialog{background: #fff !important; } .ui-dialog-content{color: #000 !important;}.ui-button .ui-button-text {color: rgb(0, 0, 0) !important;}</style><i style="position:absolute;right:0;width: 16px;height: 16px;background: url(../prod/images/ssa-sprite-47eaada8.png) no-repeat scroll 0 0;vertical-align: top;padding-right: 5px;"></i><div id="product-detail" style="display:none;" title="Confirmation"><p>You purchased following product.</p><div class="" style="margin-top: 10px"><img src="" id="product-detail-img" style="width:25%;float:left"><div style="font-size: 15px;text-align: left;float: left;width: 72%;padding-left: 10px;"><p id="product-detail-title"></p><p id="product-detail-price" style="margin-top: 5px"></p></div></div>');
				
				var proImage = $('.js-item-image').attr('src');
				
				$('#product-detail-img').attr('src',proImage);

				proImage = proImage.replace("100x100", "400x400");
				proImage = proImage.replace("125x125", "400x400");
				proImage = proImage.replace("200x200", "400x400");
				
				var proUrl = $('.order-item-title a').attr('href');
				
				var proHost = location.host;
				
				var proPrice = $('.priceInfoContent li:first-child .lastUnit').text();
				
				$('#product-detail-price').text('Rs. '+proPrice);

				var proTitle = $('.order-item-title a').text();

				$('#product-detail-title').text(proTitle);

				var proDescription = $('.order-item-title a').text();

				urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
				
				$( "#product-detail" ).dialog({
			      	resizable: true,
			      	modal: true,
				    buttons: {
				        "Yes, want to verify for rewards": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				           	$( this ).dialog( "close" );
				            
				            $.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus();
	                			opened.moveTo(0, 0); 

				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	}); 
				        },
				        "Close": function(){
				        	$( this ).dialog( "close" );
				        }
				    }
			    });		
				$('#resultLoading').css('display', 'none');
			}	
		}else if(location.hostname=="www.snapdeal.com"){ 

			pageURL = pageURL[3].split('&');
			pageURL = pageURL[0].split('=');

			if(pageURL[0]=='prepareThankYouPage?code'){

				$('body').append('<style>.ui-dialog{background: #fff !important; } .ui-dialog-content{color: #000 !important;}.ui-button .ui-button-text {color: rgb(0, 0, 0) !important;}</style><i style="position:absolute;right:0;width: 16px;height: 16px;background: url(../prod/images/ssa-sprite-47eaada8.png) no-repeat scroll 0 0;vertical-align: top;padding-right: 5px;"></i><div id="product-detail" style="display:none;" title="Confirmation"><p>You purchased following product.</p><div class="" style="margin-top: 10px"><img src="" id="product-detail-img" style="width:25%;float:left"><div style="font-size: 15px;text-align: left;float: left;width: 72%;padding-left: 10px;"><p id="product-detail-title"></p><p id="product-detail-price" style="margin-top: 5px"></p></div></div>');
				
				var proImage = $('.item-image').attr('src');
				
				$('#product-detail-img').attr('src',proImage);
				
				var proUrl = $('.ocn-item-name a').attr('href');
				
				var proHost = location.host;
				
				var proPrice = $('.ocn-item-price').text();
				
				$('#product-detail-price').text(proPrice);
				
				var proTitle = $('.ocn-item-name a').text();
				
				$('#product-detail-title').text(proTitle);
				
				var proDescription = proTitle;
				
				urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
				
				$( "#product-detail" ).dialog({
			      	resizable: true,
			      	modal: true,
				    buttons: {
				        "Yes, want to verify for rewards": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);


				           	$( this ).dialog( "close" );

				            $.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus(); 
	                			opened.moveTo(0, 0); 

				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	}); 
				        },
				        "Close": function(){
				        	$( this ).dialog( "close" );
				        }
				    }
			    });
				$('#resultLoading').css('display', 'none');
			}	
		}else if(location.hostname=="www.amazon.in"){

			if(pageURL[5]=='thankyou'){

				var proImage = $('input[name="fbImageURL"]').val();

				var proUrl = $('input[name="fbHref"]').val();

				var proHost = location.host;

				var proPrice = $('#smEmailTab .smEmailPrice .smOurPrice span').text();

				var proTitle = $('#smEmailTab .smEmailTitle').text();

				var proDescription = proTitle;			

				urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
				
				$( "#product-detail" ).dialog({
			      	resizable: true,
			      	modal: true,
				    buttons: {
				        "Yes, want to verify for rewards": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				           	$( this ).dialog( "close" );

				            $.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus();
	                			opened.moveTo(0, 0); 

				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	});  
				        },
				        "Close": function(){
				        	$( this ).dialog( "close" );
				        }
				    }
			    });
				$('#resultLoading').css('display', 'none');
			}	
		}
	});

	// On mouseover on product image show icon to post product
	$(document).on('mouseover', 'img', function() {
		//console.log(url);

		var	productHref = $(this).closest('a').prop('href'); // get href of product

		$('.shop_pin').css('display', 'none'); // firstly display none our icon

		//console.log(first);

		//=======================================
		// Check where should be icon show or not
		//=======================================
		if(first==0){

			if(location.hostname=="www.flipkart.com" && url==''){

				var n=productHref.lastIndexOf('/p/itm');
				var n1 = productHref.lastIndexOf('?pid=');
				includeProp1 = /pid=/.test(productHref);
				includeProp2 = $(this).closest('.imgWrapper').find('.productImage').attr('data-zoomimage');

				//console.log(n+' '+n1+" "+includeProp1+" "+includeProp2);

				if(n != -1 && n1 != -1 || includeProp2){

					if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-40
						});

						img = $( this ); // store image in variable

						// Check product href for undefined, if undefined get current location link else product link
						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
						}

						first=1;
					}
				}
			}else if(location.hostname=="www.jabong.com" && url==''){

				//console.log(url);

				var val = productHref.split('/');
				val = val[3].split('.html');
				val = val[0].split('-');
				len = val.length-1;

				if(val[len]!='' && val[len].search('1')!='-1' || val[len].search('2')!='-1' || val[len].search('3')!='-1' || val[len].search('4')!='-1' || val[len].search('5')!='-1' || val[len].search('6')!='-1' || val[len].search('7')!='-1' || val[len].search('8')!='-1' || val[len].search('9')!='-1' || val[len].search('0')!='-1'){
						
				if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-40
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
						}

						first=1;
					}
				}
			}else if(location.hostname=="www.snapdeal.com" && url==''){

				//console.log(url);

				var includeProp1 = $(this).closest('a').attr('pogid');
				var includeProp2 = $(this).closest('.mainImageSlider').find('img').attr('itemprop');
				var productHref = $(this).closest('a').prop('href');
				productHref= productHref.split('/');
				var id = productHref[5];
				id = id.split('?');
				id = id[0].split('#');

				if(productHref[3]=="product" && id[0]!=''){

					if(id[0].search('1')!='-1' || id[0].search('2')!='-1' || id[0].search('3')!='-1' || id[0].search('4')!='-1' || id[0].search('5')!='-1' || id[0].search('6')!='-1' || id[0].search('7')!='-1' || id[0].search('8')!='-1' || id[0].search('9')!='-1' || id[0].search('0')!='-1'){
						
						if( $( this ).width()>50 || $( this ).height()>50 ){

							$('.shop_pin').css({
								display: 'block',
								top: $(this).offset().top+8,
								left:$(this).offset().left+$(this).width()-40
							});

							img = $( this );

							if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
								url = window.location.href;
							}else{
								url = img.closest('a').prop('href');
							}

							first=1;
						}
					}	
				}
			}else if(location.hostname=="www.amazon.in" && url==''){
				
				var gp = productHref.search('/gp/product/');
				var gp1 = productHref.search('/dp/');
				var gp2 = productHref.search('/ref=');

				if(gp!='-1' || (gp1!='-1' && gp2!='-1')){

					//console.log('yes');

					if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-40
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
							
						}

						first=1;
					}
				}
				
			}else if(location.hostname=="www.shopclues.com" && url==''){

				var parentDiv =  $(this).closest('div');				
				
				var inc1 = parentDiv.hasClass('landing_ad_panel_1');
				var inc2 = parentDiv.hasClass('landing_ad_panel_2');
				var inc3 = parentDiv.hasClass('landing_ad_panel_3');
				var inc4 = parentDiv.find('div').hasClass('details');
				var inc5 = /product_id=/.test(productHref);

				if(inc1||inc2||inc3||inc4||inc5){

					//console.log('yes');
					if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-80
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
							
						}

						first=1;
					}
				}
				
			}
			else{
				$('.shop_pin').css('display', 'none');
			}
		}else{

			if(location.hostname=="www.flipkart.com" && url!=''){

				var n=productHref.lastIndexOf('/p/itm');
				var n1 = productHref.lastIndexOf('?pid=');
				includeProp1 = /pid=/.test(productHref);
				includeProp2 = $(this).closest('.imgWrapper').find('.productImage').attr('data-zoomimage');

				//console.log(n+' '+n1+" "+includeProp1+" "+includeProp2);

				if(n != -1 && n1 != -1 || includeProp2){

					if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-40
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
						}

					}
				}
			}else if(location.hostname=="www.jabong.com" && url!=''){
				//console.log(url);
				
				var val = productHref.split('/');
				val = val[3].split('.html');
				val = val[0].split('-');
				len = val.length-1;

				if(val[len]!='' && val[len].search('1')!='-1' || val[len].search('2')!='-1' || val[len].search('3')!='-1' || val[len].search('4')!='-1' || val[len].search('5')!='-1' || val[len].search('6')!='-1' || val[len].search('7')!='-1' || val[len].search('8')!='-1' || val[len].search('9')!='-1' || val[len].search('0')!='-1'){
						
					if( $( this ).width()>50 || $( this ).height()>50 ){
						
						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-40
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
						}

					}
				}
			}else if(location.hostname=="www.snapdeal.com" && url!=''){
				//console.log(url);

				var includeProp1 = $(this).closest('a').attr('pogid');
				var includeProp2 = $(this).closest('.mainImageSlider').find('img').attr('itemprop');
				var productHref = $(this).closest('a').prop('href');
				productHref= productHref.split('/');
				var id = productHref[5];
				id = id.split('?');
				id = id[0].split('#');

				if(productHref[3]=="product" && id[0]!=''){

					if(id[0].search('1')!='-1' || id[0].search('2')!='-1' || id[0].search('3')!='-1' || id[0].search('4')!='-1' || id[0].search('5')!='-1' || id[0].search('6')!='-1' || id[0].search('7')!='-1' || id[0].search('8')!='-1' || id[0].search('9')!='-1' || id[0].search('0')!='-1'){
						
						if( $( this ).width()>50 || $( this ).height()>50 ){
							
							$('.shop_pin').css({
								display: 'block',
								top: $(this).offset().top+8,
								left:$(this).offset().left+$(this).width()-40
							});

							img = $( this );

							if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
								url = window.location.href;
								console.log("First: " + url);
							}else{
								url = img.closest('a').prop('href');
								console.log("Second: " + url)
							}

						}
					}	
				}
			}else if(location.hostname=="www.amazon.in" && url!=''){
				
				var gp = productHref.search('/gp/product/');
				var gp1 = productHref.search('/dp/');
				var gp2 = productHref.search('/ref=');

				if(gp!='-1' || (gp1!='-1' && gp2!='-1')){
					//console.log('yes');
					if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-40
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');	
						}

					}
				}
				
			}else if(location.hostname=="www.shopclues.com" && url!=''){
				
				var parentDiv =  $(this).closest('div');				
				
				var inc1 = parentDiv.hasClass('landing_ad_panel_1');
				var inc2 = parentDiv.hasClass('landing_ad_panel_2');
				var inc3 = parentDiv.hasClass('landing_ad_panel_3');
				var inc4 = parentDiv.find('div').hasClass('details');
				var inc5 = /product_id=/.test(productHref);
				
				if(inc1||inc2||inc3||inc4||inc5){
					//console.log('yes');

					if( $( this ).width()>50 || $( this ).height()>50 ){

						$('.shop_pin').css({
							display: 'block',
							top: $(this).offset().top+8,
							left:$(this).offset().left+$(this).width()-80
						});

						img = $( this );

						if(img.closest('a').prop('href')===undefined || img.closest('a').prop('href')=="javascript:void(0);" || img.closest('a').prop('href')=="javascript:;"){
							url = window.location.href;
						}else{
							url = img.closest('a').prop('href');
							
						}

					}
				}
				
			}
			else{
				$('.shop_pin').css('display', 'none');
			}
		}	
	}).mouseout(function() {
		// On mouseout display none icon
		$('.shop_pin').css('display', 'none');

	});

	//====================================
	// Hover over icon then also show icon
	//====================================
	$(document).on('mouseover', '.shop_pin', function() {

		$('.shop_pin').css({
			display: 'block',
		});

	}).mouseout(function() {
		
		$('.shop_pin').css('display', 'none');

	});

    //=========================================================================
    // Click on icon scrape all the details of product and send to shoppingpost
    //=========================================================================
	$('.shop_pin').click(function() {
		// Loader icon
		$('#resultLoading').css('display', 'block');

		var purl = window.location.href;
		purl = purl.split('://');

		if(purl[0]!='https'){

			$.ajax({
				// url is the href of image
				url: url, 

				success: function(result){

					switch (location.hostname) {

						case 'www.snapdeal.com':
						obj = getDetailsFromSnapdeal(result)
						break;

						case 'www.flipkart.com':
						obj = getDetailsFromFlipkart(result)
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

					console.log(obj);
					console.log(img);

					try{
						//==================================
						// Store products detail in variable
						//==================================

						//var proImage = img.attr('src');
						// Image of Product
						var proImage = obj['image']; 
						console.log(proImage);
						// Link of product
						var proUrl = url;
						// Location(host) of product
						var proHost = location.host;
						// Price of  product
						var proPrice = obj['price'];
						// Title of product
						var proTitle = obj['title'];
						// Description of product
						var proDescription = obj['description'];

						proTitle = proTitle.replace(/&#39;/gi,'');

						proDescription = proDescription.replace(/&#39;/gi,'');

	                    urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
						/* Confirmation Box ---*/
						$( "#dialog-confirm" ).dialog({

					      	resizable: true,
					      	modal: true,
						    buttons: {

						        "Yes, want to verify for rewards": function() {

						        	$( this ).dialog( "close" );
						        	
						        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
			                		opened.focus();
			                		opened.moveTo(0, 0);
						           	
						           	$.ajax({
							           	url: urlDetail,
							           	type: 'POST',
							           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
						           	})
						           	.done(function() {
						           		console.log("success");
						           		
		                		    	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
		                		    	opened.focus();
		                		    	opened.moveTo(0, 0);
		                		    	 
			      	          		   
						           	})
						           	.fail(function() {
						           		console.log("error");
						           	})
						           	.always(function() {
						           		console.log("complete");
						           		
						           	}); 
						           	  
						        },
						        "No, post it without verification": function() {

						        	$( this ).dialog( "close" );
						        	
						        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
						        	opened.focus();
						        	opened.moveTo(0, 0);
				
						          	$.ajax({
							           	url: urlDetail,
							           	type: 'POST',
							           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'no' },
						           	})
						           	.done(function() {
						           		console.log("success");
										
		                		        opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
		                		       	opened.focus();  
		                		       	opened.moveTo(0, 0);  
			      	          		     
						           	})
						           	.fail(function() {
						           		console.log("error");
						           	})
						           	.always(function() {
						           		console.log("complete");
						           	});
	
						        }
						    }

					    });

						$('#resultLoading').css('display', 'none');

					}catch(e){	

						$( "#dialog-confirm1" ).dialog({

					      	resizable: true,
					      	modal: true,
						    buttons: {
						        "Close": function() {
						           $( this ).dialog( "close" );
						        }
						    }
					    });

						$('#resultLoading').css('display', 'none');
					}
				},
			});

		}else{

			if(location.hostname=='www.facebook.com'){

				var proImage = $('.js-item-image').attr('src');
				proImage = proImage.replace("100x100", "400x400");
				proImage = proImage.replace("125x125", "400x400");
				proImage = proImage.replace("200x200", "400x400");

				var proUrl = $('.order-item-title a').attr('href');

				var proHost = location.host;

				var proPrice = $('.priceInfoContent li:first-child .lastUnit').text();

				var proTitle = $('.order-item-title a').text();

				var proDescription = $('.order-item-title a').text();

				urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
				/* Confirmation Box ---*/
				$( "#dialog-confirm" ).dialog({

			      	resizable: true,
			      	modal: true,
				    buttons: {

				        "Yes, want to verify for rewards": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				           	$( this ).dialog( "close" );

				           	$.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
                		    	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
                		    	opened.focus(); 
                		    	opened.moveTo(0, 0); 
	      	          		    
				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	}); 
				        },
				        "No, post it without verification": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				          	$( this ).dialog( "close" );

				          	$.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'no' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus();
	                			opened.moveTo(0, 0); 
				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	}); 	 
					        
				        }
				    }

			    });

				$('#resultLoading').css('display', 'none');

			}else if(location.hostname=='www.snapdeal.com'){

				var proImage = $('.item-image').attr('src');

				var proUrl = $('.ocn-item-name a').attr('href');

				var proHost = location.host;

				var proPrice = $('.ocn-item-price').text();

				var proTitle = $('.ocn-item-name a').text();

				var proDescription = proTitle;		

				urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
				/* Confirmation Box ---*/
				$( "#dialog-confirm" ).dialog({

			      	resizable: true,
			      	modal: true,
				    buttons: {

				        "Yes, want to verify for rewards": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				           	$( this ).dialog( "close" );

				           	$.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus();
	                			opened.moveTo(0, 0); 

				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           		
				           	}); 
				        },
				        "No, post it without verification": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				          	$( this ).dialog( "close" );

				          	$.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'no' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus();
	                			opened.moveTo(0, 0); 

				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");

				           	}); 	 
					        
				        }
				    }

			    });

				$('#resultLoading').css('display', 'none');

			}else if(location.hostname=='www.amazon.in'){

				var proUrl = url;

				var proHost = location.host;

				var proImage = img.attr('src');

				if(img.attr('alt')!=''){

					var proPrice = "";
					var proTitle = img.attr('alt');
					var proDescription = proTitle;

	            }else if(img.parent().parent().next('.s9TitleText').text()!=''){
	            	
	            	var proTitle = img.parent().parent().next('.s9TitleText').text();
	            	proTitle = proTitle.split('- Rs');
	            	proTitle = proTitle[0];
	            	
	            	var proPrice = img.parent().parent().parent().parent().find('.s9Price').text().split('Rs.');
	            	console.log(proPrice);
	            	proPrice = proPrice[1];
	            	
	            	var proDescription = proTitle;
	            
	            }else if(img.parent().next('.title').text()!=''){
            		
            		var proTitle = img.parent().next('.title').text();
            		proTitle = proTitle.split('-');
            		proTitle = proTitle[0];
            		
            		var proPrice = img.parent().parent().parent().parent().parent().find('.pricing .price>span').text();
            		
            		var proDescription = proTitle;
            		
	            }else{

            		var proTitle = img.parent().parent().parent().next('h3 a span').text();
            		
            		var proPrice = img.parent().parent().parent().parent().find('.rsltGridList li:first-child div a > span').text();
            		
            		var proDescription = proTitle;
            		
            	 }

				urlDetail = "http://code-b.in/projects/shoppingpost/missing_details.php";
				/* Confirmation Box ---*/
				$( "#dialog-confirm" ).dialog({

			      	resizable: true,
			      	modal: true,
				    buttons: {

				        "Yes, want to verify for rewards": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				           	$( this ).dialog( "close" );

				           	$.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'yes' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus();
	                			opened.moveTo(0, 0); 
				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	}); 
				        },
				        "No, post it without verification": function() {

				        	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                		opened.focus();
	                		opened.moveTo(0, 0);

				          	$( this ).dialog( "close" );

				          	$.ajax({
					           	url: urlDetail,
					           	type: 'POST',
					           	data: {page_title: proTitle, page_url: proUrl, product_description: proDescription, product_image: proImage, web: proHost, product_price: proPrice, purchased: 'no' },
				           	})
				           	.done(function() {
				           		console.log("success");
					           	
					           	opened = window.open(urlDetail,"ShoppingPost","status=1,width=870,height=530");
	                			opened.focus(); 
	                			opened.moveTo(0, 0); 
				           	})
				           	.fail(function() {
				           		console.log("error");
				           	})
				           	.always(function() {
				           		console.log("complete");
				           	}); 	 
					        
				        }
				    }

			    });
					
				$('#resultLoading').css('display', 'none');
			}
		}
		
		return false;
	});