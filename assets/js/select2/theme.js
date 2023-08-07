/*
Template:  		Metovo - NFT Marketplace HTML Template
Written by: 	Harnish Design - (http://www.harnishdesign.net)
*/

(function ($) {
	"use strict";


/*---------------------------------------------------
    Primary Menu
----------------------------------------------------- */

/*--------------------------------
   Copy the text
---------------------------------- */
$('#wallet-id').on('click', function() {
  var a = $(this);
  var b = $(this).find('#wallet-id-inner');
  var c = $(b).text();
  navigator.clipboard.writeText(c).then(
	function () {
		b.html("Copied!");
		a.addClass("text-body bg-light-5");
		setTimeout(function () {
			b.html(c);
			a.removeClass("text-body bg-light-5");
		}, 1100);
	}
   );
});



/*--------------------------------
   Load More Items
---------------------------------- */
$("#nftload > .load-item").slice(0, 8).show();
  if($("#nftload > .load-item:hidden").length == 0) {
	  $("#loadmore").hide();
	}
  $("#loadmore").on("click", function(e){
	e.preventDefault();
	$("#nftload > .load-item:hidden").slice(0, 4).slideDown();
	if($("#nftload > .load-item:hidden").length == 0) {
	  $("#loadmore").hide();
	}
	call_portrait();
	call_height();
});

/*--------------------------------
   Load More Items In Tabs
---------------------------------- */
function call_loadMoreTabs() {
	var tabId = $('.tab-content').find('> .active').attr('id');
	var tabIdClass = "#" + tabId + " .load-item";
	var tabIdClassHidden = tabIdClass + ":hidden";
	var loadMoreBtn = "#" + tabId + " .loadmore";
	
	$(tabIdClass).slice(0, 8).show();
	  if($(tabIdClassHidden).length == 0) {
		  $(loadMoreBtn).hide();
		}
	  $(loadMoreBtn).on("click", function(e){
		e.preventDefault();
		$(tabIdClassHidden).slice(0, 4).slideDown();
		if($(tabIdClassHidden).length == 0) {
		  $(loadMoreBtn).hide();
		}
		call_height();
		call_portrait();
	});
	call_height();
	call_portrait();
}

/*--------------------
   Tabs
-------------------- */
var triggerTabList = [].slice.call(document.querySelectorAll('a[data-bs-toggle="tab"]'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('shown.bs.tab', function (event) {
	call_loadMoreTabs();
	call_height();
	call_portrait();
	
  })
})

$(document).ready(function () {
	call_loadMoreTabs();
});
$(window).on("load",function(){
	call_height();
	call_portrait();
});

$(window).on("resize",function(){
	call_height();
});


/*--------------------------------
   File Upload
---------------------------------- */
$("#uploadFile").on("change",function(){
   var nameReplace = $(this).val().replace(/^.*\\/, "");
   $("#fileName").text(nameReplace);
});

/*-------------------------------------------
   Select Method Option (create single page)
------------------------------------------- */
function methodOption() {
	var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").hide();
    $(targetBox).show();
}
$('#selectMethod input[type="radio"]:checked').each(methodOption);
$('#selectMethod input[type="radio"]').on("change",methodOption);




/*------------------------
   tooltips
-------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
			



})(jQuery);


