
function process (){
 var search_term = _gel('search_term').value;
 var request_url = 'http://leikind.org/lookup.xml?v='  + encodeURIComponent(search_term) ;
 var content = '';

 _IG_FetchXmlContent(request_url, function (response) {
   if (response == null || typeof(response) != "object" || response.firstChild == null) {
     _gel("dcontent").innerHTML =
       '<div class="error_message">__MSG_server_error__</div>';
     return;
   }

   var top = response.getElementsByTagName("response").item(0);

   if (top.getAttribute("found") != 'true'){
     _gel('dcontent').innerHTML = '<div class="no_results_message">__MSG_no_verb_found__</div>';
   }else{
     content =  '<table class="dresults"><tr><th class="no_bottom_border">__MSG_infinitive__</th><th colspan="2" class="no_bottom_border">__MSG_imperfectum__</th><th class="no_bottom_border">__MSG_perfectum__</th></tr>';
     content +=        '<tr><th class="no_top_border"></th><th class="no_top_border">__MSG_singular__</th><th class="no_top_border">__MSG_plural__</th><th class="no_top_border"></th></tr>';
     var words = response.getElementsByTagName("word");

     for (var j = 0; j < words.length ; j++) {
       var word = words.item(j);

       var word_struct = {
         auxiliary_verb : '',
         infinitive : '',
         past_singular : '',
         past_plural : '',
         perfect : ''
       };

       var forms = word.childNodes;
       for (var i = 0; i < forms.length ; i++) {
         var form = forms.item(i);

         for (nodeName in word_struct){
           if ((form.nodeName == nodeName) && form.firstChild) {
             word_struct[nodeName] = form.firstChild.nodeValue;
             if (form.getAttribute("match") == 'true'){
               word_struct[nodeName] = '<b>' + word_struct[nodeName] + '</b>';
             }
           }
         }
       }

       content = content + '<tr><td>' + word_struct.infinitive + '</td><td>' + 
         word_struct.past_singular + '</td><td>' + word_struct.past_plural + '</td><td>' ;

       if ( word_struct.perfect != ''){
         content = content + '(' + word_struct.auxiliary_verb + ') ' + word_struct.perfect ;
       }

       content = content + '</td></tr>';
     }
     content += '</table>';
     _gel('dcontent').innerHTML = content;
   }
 });
}