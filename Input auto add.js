Filling input fields of a website by the data of google sheets

Step1.
Install this plugin chrome: https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en

Step2:
File > publish-web from google sheet

Step3:
add this code to extension

var data_id = 10
$.getJSON("https://spreadsheets.google.com/feeds/list/1TLwF7ldm03_IFcxTsS4hPSXDfN8FMDgRzo471LBoPRI/1/public/values?alt=json", function(data) {
              //first row "title" column
             
             
            data.feed.entry.map(function($selector){
                if($selector.gsx$dataid.$t==data_id){
                    $('input[name="model"]').val($selector.gsx$tyresize.$t);
                    $('input[name="price"]').val($selector.gsx$normalprice.$t);
                    $('input[name="selling_price"]').val($selector.gsx$sellingprice.$t);
                    $('input[name="type"][value="R"').attr('checked','checked')
                    $('input[name="sort_order"]').val(1);
                   
                    $('input[name="quantity"]').val(10);
                    $('input[name="year"]').val($selector.gsx$model.$t);
                    $('input[name="country"]').val($selector.gsx$made.$t);
                   
                    $('input[name="sku"]').val($selector.gsx$tyresize.$t);
                    if ($selector.gsx$waranty.$t===""){
                        $('input[name="warranty"]').val('1 Year');
                    }else{
                         $('input[name="warranty"]').val($selector.gsx$waranty.$t);
                    }
                   
                   if ($selector.gsx$fueleficiency.$t==""){
                       $('input[name="fuel_efficiency"]').val('Nil');
                   }else{
                       $('input[name="fuel_efficiency"]').val($selector.gsx$fueleficiency.$t);
                   }
                   
                    if ($selector.gsx$wetgrip.$t===""){
                        $('input[name="wet_grip_rating"]').val('Nil');
                    }else{
                        $('input[name="wet_grip_rating"]').val($selector.gsx$wetgrip.$t);
                    }
                    if ($selector.gsx$externalnoice.$t===""){
                         $('input[name="external_noise"]').val('Nil');
                    }else{
                         $('input[name="external_noise"]').val($selector.gsx$externalnoice.$t);
                    }
                   
                    if ($selector.gsx$sidewall.$t===""){
                        $('input[name="sidewall_style"]').val('Nil');
                    }else{
                        $('input[name="sidewall_style"]').val($selector.gsx$sidewall.$t);
                    }
                   
                    if ($selector.gsx$utqgtemptractiontreadwear.$t===""){
                        $('input[name="utqg"]').val('Nil');
                    }else{
                        $('input[name="utqg"]').val($selector.gsx$utqgtemptractiontreadwear.$t);
                    }
                   
                   
                   var meta_tytle = $selector.gsx$brandname.$t +' ' + $selector.gsx$pattern.$t +' ' +$selector.gsx$tyresize.$t +' ' + $selector.gsx$speedrate.$t
                    $('input[name="meta_title"]').val(meta_tytle);
                    $('input[name="meta_key_word"]').val(meta_tytle);
                    $('textarea[name="meta_description"]').val(meta_tytle);
                    $('input[name="og_title"]').val(meta_tytle);
                    $('textarea[name="og_description"]').val(meta_tytle);
                   
                    // add verients
                    addVarienceArea('0');
                    $('input[name="vspeed[]"]').val($selector.gsx$speedrate.$t);
                    $('input[name="vprice[]"]').val($selector.gsx$normalprice.$t);
                    $('input[name="vsprice[]"]').val($selector.gsx$sellingprice.$t);
                    $('input[name="stock[]"]').val(10);
                    console.log('------------------------------------------------------')
                }
                // console.log($selector['content'])
            // console.log($selector['content']['$t'])
            });
     
      console.log(data)
});
