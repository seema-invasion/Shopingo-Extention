var data = require("sdk/self").data;

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": data.url("images/Trophy.png"),
    "32": data.url("images/Trophy.png"),
    "64": data.url("images/Trophy.png")
  }
});
// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
pageMod.PageMod({
  include: ["http://www.flipkart.com/*","https://www.flipkart.com/*","https://www.snapdeal.com/*","http://www.snapdeal.com/*","http://www.amazon.in/*","https://www.amazon.in/*",
    "http://www.shopclues.com/*","http://www.jabong.com/*","https://www.jabong.com/*","http://code-b.in/projects/shoppingpost/*"],
  contentScriptFile: [data.url("js/jquery.min.js"), data.url("js/jquery-ui.js"), data.url("js/products.js"), data.url("js/content.js")],
  contentStyleFile: [data.url("js/jquery-ui.css")]
});


var cm = require("sdk/context-menu");

cm.Item({
  label: "Post this to Shoppingo",
  image: data.url("images/Trophy.png"),
  context: [ 
    cm.SelectorContext("img")
  ],  

  contentScriptFile:[data.url("js/products.js"), data.url("js/jquery.min.js"), data.url("js/jquery-ui.js"), data.url("js/background.js")]
});
