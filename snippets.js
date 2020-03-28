// To remove special characters

$('#id_description').keyup(function() {
        var $th = $(this);
        $th.val($th.val().replace(/[^a-zA-Z0-9]/g, function(str) { $('#description_error').html('Please use only letters and numbers.'); return ''; }));
    });
// _________________________________
// To element height
```
function equalCard() {
        let ids = [
            '#similar div.bottom div.item a.thumb .content h4',
            '#similar div.bottom div.item a.thumb .content p',
        ];

        ids.forEach(function(id) {
            let h = 0;
            $(id).height('auto');
            $(id).each(function() {
                let height = $(this).height();
                if (height > h) {
                    h = height;
                }
            });
            $(id).height(h);
        });

    }
    equalCard();
```
//_______________________________
//_________slider________________
 let link = "";
             let images=new Array();
            {% for item in slider_data %}

                link= "{{item.image.url}}";
                images.push(link)
                
            {%endfor%}
				
                images.forEach(element => console.log(element));

                var nextimage=0;
                doSlideshow();

                function doSlideshow(){
                   if(nextimage>=images.length){nextimage=0;}
                   $('#spotlight')
                   .css('background-image','url("'+images[nextimage++]+'")')
                   .fadeIn(1000,function(){
                           setTimeout(doSlideshow,5000);
                   });
                }
 //________________________
