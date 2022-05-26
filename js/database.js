/*--------------databes-----------*/

var logIn = {userName:["Sazan"], email:[ "ali.ahmed.sazan@gmail.com"],  password: ["sazan"]};
var items = {
		mainCategory:["men", "women", "kids", "contacts"], 
		subCategory:{
			men: ["Casual Shirts", "Formal Shirts", "T-Shirts", "Jeans", "Shors", "Gabardine Pants", "Panjabi", "Winterwear"], 
			women: ["Gown", "Tops & Skirts", "Shalwar kameez", "Shirts &tops", "Sarees", "Inner Garments", "Jeans & Leggings", "Winterwear"], 
			kids: ["T-Shirts", "Shirts", "Jeans & Trousers", "Shorts & Dungarees", "Track Pants & Pyjamas", "Clothing Sets", "Indian Wear", "Sweaters, Sweatshirts & Jackets", "Rompers & Sleepwear"]
 		}, 
		brands:["ABC Knit", "XYZ Fashion", "Flaxon Dress", "PM Fashion", "Fashion BD", "Corton House", "Next Fashion"]
	};
var products ={
	men: [
                {subCategory: "Formal Shirts", refCode: "FS1001", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1003.jpg", price: 450, off: 10},
                {subCategory: "Casual Shirts", refCode: "CS1001", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1001.jpg", price: 450, off: 20},
                {subCategory: "T-Shirts", refCode: "TS1001", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1001.jpg", price: 450, off: 10}, 
                {subCategory: "Jeans", refCode: "JN1001", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1001.jpg", price: 450, off: 10},
                
		{subCategory: "Casual Shirts", refCode: "CS1002", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1002.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1003", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1003.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1004", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1004.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1005", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1005.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1006", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1006.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1007", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1007.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1008", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1008.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1009", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1009.jpg", price: 450, off: 20},
		{subCategory: "Casual Shirts", refCode: "CS1010", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/men/CS1010.jpg", price: 450, off: 20},
		
		{subCategory: "Formal Shirts", refCode: "FS1001", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1001.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1002", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1002.jpg", price: 450, off: 10},  
		{subCategory: "Formal Shirts", refCode: "FS1004", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1004.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1005", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1005.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1006", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1006.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1007", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1007.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1008", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1008.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1009", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1009.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1010", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1010.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1011", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1011.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1012", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1012.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1013", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1013.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1014", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1014.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1015", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1015.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1016", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1016.jpg", price: 450, off: 10}, 
		{subCategory: "Formal Shirts", refCode: "FS1017", brandsName:"XYZ Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/men/FS1017.jpg", price: 450, off: 10}, 
		
		{subCategory: "T-Shirts", refCode: "TS1002", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1002.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1003", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1003.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1004", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1004.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1005", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1005.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1006", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1006.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1007", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1007.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1008", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1008.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1009", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1009.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1010", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1010.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1011", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1011.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1012", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1012.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1013", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1013.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1014", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1014.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1015", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1015.jpg", price: 450, off: 10}, 
		{subCategory: "T-Shirts", refCode: "TS1016", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/men/TS1016.jpg", price: 450, off: 10},
                
                                     {subCategory: "Jeans", refCode: "JN1002.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1002.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1003.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1003.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1004.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1004.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1005.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1005.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1006.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1006.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1007.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1007.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1008.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1008.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1009.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1009.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1010.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1010.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1011.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1011.jpg", price: 450, off: 10},
                                     {subCategory: "Jeans", refCode: "JN1012.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/men/JN1012.jpg", price: 450, off: 10},
                                     
                                    {subCategory: "Shors", refCode: "ST1001.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1001.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1002.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1002.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1003.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1003.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1004.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1004.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1005.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1005.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1006.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1006.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1007.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1007.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1008.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1008.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1009.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1009.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1010.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1010.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1011.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1011.jpg", price: 450, off: 10},
                                     {subCategory: "Shors", refCode: "ST1012.jpg", brandsName:"XYZ Text", productName: "Men Cotton Denim Shorts", url: "img/products/men/ST1012.jpg", price: 450, off: 10},
                
                
		
	], 
	women: [
		{subCategory: "Gown", refCode: "GN2001", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2001.jpg", price: 450, off: 20},
		{subCategory: "Tops & Skirts", refCode: "TS2001", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2001.jpg", price: 450, off: 20},
		{subCategory: "Jeans & Leggings", refCode: "JL2001", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2001.jpg", price: 450, off: 20},
		{subCategory: "Sarees", refCode: "SR2001", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2001.jpg", price: 450, off: 20},
		
		{subCategory: "Gown", refCode: "GN2002", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2002.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2003", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2003.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2004", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2004.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2005", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2005.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2006", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2006.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2007", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2007.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2008", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2008.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2009", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2009.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2010", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2010.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2011", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2011.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2012", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2012.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2013", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2013.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2014", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2014.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2015", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2015.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2016", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2016.jpg", price: 450, off: 20},
		{subCategory: "Gown", refCode: "GN2017", brandsName:"XYZ Knit", productName: "EXCLUSIVE LEHANGA", url: "img/products/women/GN2017.jpg", price: 450, off: 20},
                
  
		{subCategory: "Tops & Skirts", refCode: "TS2002", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2002.jpg", price: 450, off: 20},
		{subCategory: "Tops & Skirts", refCode: "TS2003", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2003.jpg", price: 450, off: 20},
		{subCategory: "Tops & Skirts", refCode: "TS2004", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2004.jpg", price: 450, off: 20},
		{subCategory: "Tops & Skirts", refCode: "TS2005", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2005.jpg", price: 450, off: 20},
		{subCategory: "Tops & Skirts", refCode: "TS2006", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2006.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2007", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2007.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2008", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2008.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2009", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2009.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2010", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2010.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2011", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2011.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2012", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2012.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2013", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2013.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2014", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2014.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2015", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2015.jpg", price: 450, off: 20},
                                    {subCategory: "Tops & Skirts", refCode: "TS2016", brandsName:"XYZ Knit", productName: "Women Cold Shoulder Top", url: "img/products/women/TS2015.jpg", price: 450, off: 20},
	
                                    
                                    {subCategory: "Jeans & Leggings", refCode: "JL2002", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2002.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2003", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2003.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2004", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2004.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2005", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2005.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2006", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2006.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2007", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2007.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2008", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2008.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2009", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2009.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2010", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2010.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2011", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2011.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2012", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2012.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2013", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2013.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2014", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2014.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2015", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2015.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2016", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2016.jpg", price: 450, off: 20},
                                    {subCategory: "Jeans & Leggings", refCode: "JL2017", brandsName:"XYZ Knit", productName: "Women Jeans & Leggings", url: "img/products/women/JL2017.jpg", price: 450, off: 20},
        
                                    
                                    {subCategory: "Sarees", refCode: "SR2002", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2002.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2003", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2003.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2004", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2004.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2005", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2005.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2006", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2006.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2007", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2007.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2008", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2008.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2009", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2009.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2010", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2010.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2011", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2011.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2012", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2012.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2013", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2013.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2014", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2014.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2015", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2015.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2016", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2016.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2017", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2017.jpg", price: 450, off: 20},
                                    {subCategory: "Sarees", refCode: "SR2018", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2018.jpg", price: 450, off: 20}, 
                                    {subCategory: "Sarees", refCode: "SR2019", brandsName:"XYZ Knit", productName: "Women Solid Sarees", url: "img/products/women/SR2019.jpg", price: 450, off: 20}

        
	], 
        kids:[
            {subCategory: "T-Shirts", refCode: "TS3001", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3002.jpg", price: 450, off: 40},
            {subCategory: "Shirts", refCode: "BS3001", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3001.jpg", price: 450, off: 20},
            {subCategory: "Jeans & Trousers", refCode: "BJT3001", brandsName:"XYZ Text", productName: "Solid Round Nick T-Shirts", url: "img/products/boys/BJT3001.jpg", price: 450, off: 10}, 
            {subCategory: "Shorts & Dungarees", refCode: "SD3001.jpg", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3001.jpg", price: 450, off: 10},
            {subCategory: "Track Pants & Pyjamas", refCode: "TP3001.jpg", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3001.jpg", price: 450, off: 10},
                
	    {subCategory: "T-Shirts", refCode: "TS3002", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3002.jpg", price: 450, off: 40},
   {subCategory: "T-Shirts", refCode: "TS3003", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3003.jpg", price: 450, off: 40},
   {subCategory: "T-Shirts", refCode: "TS3004", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3004.jpg", price: 450, off: 40},
    {subCategory: "T-Shirts", refCode: "TS3005", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3005.jpg", price: 450, off: 40},
   {subCategory: "T-Shirts", refCode: "TS3006", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3006.jpg", price: 450, off: 40},
   {subCategory: "T-Shirts", refCode: "TS3007", brandsName:"BITM Text", productName: "Men Slim Fit Formal Shirts", url: "img/products/boys/TS3007.jpg", price: 450, off: 40},
      


    {subCategory: "Shirts", refCode: "BS3002", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3002.jpg", price: 450, off: 20},
    {subCategory: "Shirts", refCode: "BS3003", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3003.jpg", price: 450, off: 20},
    {subCategory: "Shirts", refCode: "BS3004", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3004.jpg", price: 450, off: 20},
    {subCategory: "Shirts", refCode: "BS3005", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3005.jpg", price: 450, off: 20},
    {subCategory: "Shirts", refCode: "BS3006", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3006.jpg", price: 450, off: 20},
    {subCategory: "Shirts", refCode: "BS3007", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3007.jpg", price: 450, off: 20},
    {subCategory: "Shirts", refCode: "BS3008", brandsName:"XYZ Text", productName: "EXCLUSIVE DESIGNER SHIRTS", url: "img/products/boys/BS3008.jpg", price: 450, off: 20},

  {subCategory: "Jeans & Trousers", refCode: "BJT3002", brandsName:"XYZ Text", productName: "Solid Jeans & Trousers", url: "img/products/boys/BJT3002.jpg", price: 450, off: 10}, 
    {subCategory: "Jeans & Trousers", refCode: "BJT3003", brandsName:"XYZ Text", productName: "Solid Jeans & Trousers", url: "img/products/boys/BJT3003.jpg", price: 450, off: 10}, 
    {subCategory: "Jeans & Trousers", refCode: "BJT3004", brandsName:"XYZ Text", productName: "SolidJeans & Trousers", url: "img/products/boys/BJT3004.jpg", price: 450, off: 10}, 
    {subCategory: "Jeans & Trousers", refCode: "BJT3005", brandsName:"XYZ Text", productName: "Solid Jeans & Trousers", url: "img/products/boys/BJT3005.jpg", price: 450, off: 10}, 
    {subCategory: "Jeans & Trousers", refCode: "BJT3006", brandsName:"XYZ Text", productName: "Solid Jeans & Trousers", url: "img/products/boys/BJT3006.jpg", price: 450, off: 10}, 
  
  
   {subCategory: "Shorts & Dungarees", refCode: "SD3002", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3002.jpg", price: 450, off: 10},
  {subCategory: "Shorts & Dungarees", refCode: "SD3003", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3003.jpg", price: 450, off: 10},
  {subCategory: "Shorts & Dungarees", refCode: "SD3004", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3004.jpg", price: 450, off: 10},
  {subCategory: "Shorts & Dungarees", refCode: "SD3005", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3005.jpg", price: 450, off: 10},
  {subCategory: "Shorts & Dungarees", refCode: "SD3006", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3006.jpg", price: 450, off: 10},
  {subCategory: "Shorts & Dungarees", refCode: "SD3007", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3007.jpg", price: 450, off: 10},
  {subCategory: "Shorts & Dungarees", refCode: "SD3008", brandsName:"XYZ Text", productName: "Men Slim Fit Jeans", url: "img/products/boys/SD3008.jpg", price: 450, off: 10},
	


{subCategory: "Track Pants & Pyjamas", refCode: "TP3002", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3002.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3003", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3003.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3004", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3004.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3005", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3005.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3006", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3006.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3007", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3007.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3008", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3008.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP3009", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP3009.jpg", price: 450, off: 10},
 {subCategory: "Track Pants & Pyjamas", refCode: "TP30010", brandsName:"XYZ Text", productName: " SOLID Track Pants & Pyjamas", url: "img/products/boys/TP30010.jpg", price: 450, off: 10}
        ]
	
};