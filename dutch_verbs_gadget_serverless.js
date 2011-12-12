aux = [null, "hebben", "zijn", "hebben/zijn"];
verbs =  [
  ["aandoen","deed aan","deden aan","aangedaan",1],
  ["aankomen","kwam aan","kwamen aan","aangekomen",2],
  ["afwassen","waste af","wasten af","afgewassen",1],
  ["bakken","bakte","bakten","gebakken",1],
  ["bannen","bande","banden","gebannen",1],
  ["barsten","barstte","barstten","gebarsten",2],
  ["bederven","bedierf","bedierven","bedorven",1],
  ["bedriegen","bedroog","bedrogen","bedrogen",1],
  ["beginnen","begon","begonnen","begonnen",2],
  ["begraven","begroef","begroeven","begraven",1],
  ["begrijpen","begreep","begrepen","begrepen",1],
  ["behangen","behing","behingen","behangen",1],
  ["bekijken","bekeek","bekeken","bekeken",1],
  ["benijden","beneed","beneden","beneden",1],
  ["bergen","borg","borgen","geborgen",1],
  ["beschrijven","beschreef","beschreven","beschreven",1],
  ["besluiten","besloot","besloten","besloten",1],
  ["bespreken","besprak","bespraken","besproken",1],
  ["bestaan","bestond","bestonden","bestaan",1],
  ["bevallen","beviel","bevielen","bevallen",2],
  ["bevelen","beval","bevalen","bevolen",1],
  ["bewegen","bewoog","bewogen","bewogen",1],
  ["bewijzen","bewees","bewezen","bewezen",1],
  ["bezoeken","bezocht","bezochten","bezocht",1],
  ["bezwijken","bezweek","bezweken","bezweken",2],
  ["bidden","bad","baden","gebeden",1],
  ["bieden","bood","boden","geboden",1],
  ["bijten","beet","beten","gebeten",1],
  ["binden","bond","bonden","gebonden",1],
  ["blazen","blies","bliezen","geblazen",1],
  ["blijken","bleek","bleken","gebleken",2],
  ["blijven","bleef","bleven","gebleven",2],
  ["blinken","blonk","blonken","geblonken",1],
  ["braden","braadde","braadden","gebraden",1],
  ["breken","brak","braken","gebroken",1],
  ["brengen","bracht","brachten","gebracht",1],
  ["brouwen","brouwde","brouwden","gebrouwen",1],
  ["buigen","boog","bogen","gebogen",1],
  ["denken","dacht","dachten","gedacht",1],
  ["dingen","dong","dongen","gedongen",1],
  ["doen","deed","deden","gedaan",1],
  ["doorlopen","liep door","liepen door","doorgelopen",2],
  ["dragen","droeg","droegen","gedragen",1],
  ["drijven","dreef","dreven","gedreven",1],
  ["dringen","drong","drongen","gedrongen",1],
  ["drinken","dronk","dronken","gedronken",1],
  ["druipen","droop","dropen","gedropen",1],
  ["duiken","dook","doken","gedoken",1],
  ["dwingen","dwong","dwongen","gedwongen",1],
  ["eten","at","aten","gegeten",1],
  ["fluiten","floot","floten","gefloten",1],
  ["gaan","ging","gingen","gegaan",2],
  ["gelden","gold","golden","gegolden",1],
  ["genezen","genas","genazen","genezen",3],
  ["genieten","genoot","genoten","genoten",1],
  ["geven","gaf","gaven","gegeven",1],
  ["gieten","goot","goten","gegoten",1],
  ["glijden","gleed","gleden","gegleden",1],
  ["glimmen","glom","glommen","geglommen",1],
  ["graven","groef","groeven","gegraven",1],
  ["grijpen","greep","grepen","gegrepen",1],
  ["hangen","hing","hingen","gehangen",1],
  ["hebben","had","hadden","gehad",1],
  ["heffen","hief","hieven","geheven",1],
  ["helpen","hielp","hielpen","geholpen",1],
  ["heten","heette","heetten","geheten",1],
  ["hijsen","hees","hesen","gehesen",1],
  ["hoeven","hoefde","hoefden","gehoeven",1],
  ["houden","hield","hielden","gehouden",1],
  ["houwen","houwde","houwden","gehouwen",1],
  ["inbreken","brak in","braken in","ingebroken",1],
  ["innemen","nam in","namen in","ingenomen",1],
  ["jagen","joeg","joegen","gejaagd",1],
  ["kiezen","koos","kozen","gekozen",1],
  ["kijken","keek","keken","gekeken",1],
  ["klimmen","klom","klommen","geklommen",3],
  ["klinken","klonk","klonken","geklonken",1],
  ["kluiven","kloof","kloven","gekloven",1],
  ["knijpen","kneep","knepen","geknepen",1],
  ["komen","kwam","kwamen","gekomen",2],
  ["kopen","kocht","kochten","gekocht",1],
  ["krijgen","kreeg","kregen","gekregen",1],
  ["krimpen","kromp","krompen","gekrompen",2],
  ["kruipen","kroop","kropen","gekropen",3],
  ["kunnen","kon","konden","gekund",1],
  ["kwijten","kweet","kweten","gekweten",1],
  ["lachen","lachte","lachten","gelachen",1],
  ["laden","laadde","laadden","geladen",1],
  ["laten","liet","lieten","gelaten",1],
  ["lezen","las","lazen","gelezen",1],
  ["liegen","loog","logen","gelogen",1],
  ["liggen","lag","lagen","gelegen",1],
  ["lijden","leed","leden","geleden",1],
  ["lijken","leek","leken","geleken",1],
  ["lopen","liep","liepen","gelopen",3],
  ["malen","maalde","maalden","gemalen",1],
  ["meegaan","ging mee","gingen mee","meegegaan",2],
  ["meenemen","nam mee","namen mee","meegenomen",1],
  ["melken","molk","molken","gemolken",1],
  ["meten","mat","maten","gemeten",1],
  ["mijden","meed","meden","gemeden",1],
  ["moeten","moest","moesten","gemoeten",1],
  ["mogen","mocht","mochten","gemogen",1],
  ["neerzijgen","zeeg neer","zegen neer","neergezegen",1],
  ["nemen","nam","namen","genomen",1],
  ["nijgen","neeg","negen","genegen",1],
  ["onderbreken","onderbrak","onderbraken","onderbroken",1],
  ["onderzoeken","onderzocht","onderzochten","onderzocht",1],
  ["ontbijten","ontbeet","ontbeten","ontbeten",1],
  ["ontbreken","ontbrak","ontbraken","ontbroken",1],
  ["ontginnen","ontgon","ontgonnen","ontgonnen",1],
  ["onthouden","onthield","onthielden","onthouden",1],
  ["ontluiken","ontlook","ontloken","ontloken",1],
  ["ontstaan","ontstond","ontstonden","ontstaan",2],
  ["ontvangen","ontving","ontvingen","ontvangen",1],
  ["opstaan","stond op","stonden op","opgestaan",2],
  ["optreden","trad op","traden op","opgetreden",1],
  ["overlijden","overleed","overleden","overleden",2],
  ["oversteken","stak over","staken over","overgestoken",2],
  ["overvallen","overviel","overvielen","overvallen",1],
  ["pluizen","ploos","plozen","geplozen",1],
  ["prijzen","prees","prezen","geprezen",1],
  ["raden","raadde","raadden","geraden",1],
  ["rijden","reed","reden","gereden",3],
  ["rijgen","reeg","regen","geregen",1],
  ["rijten","reet","reten","gereten",1],
  ["rijzen","rees","rezen","gerezen",2],
  ["roepen","riep","riepen","geroepen",1],
  ["ruiken","rook","roken","geroken",1],
  ["scheiden","scheidde","scheidden","gescheiden",2],
  ["schelden","schold","scholden","gescholden",1],
  ["schenden","schond","schonden","geschonden",1],
  ["schenken","schonk","schonken","geschonken",1],
  ["scheppen","shiep","schiepen","geschapen",1],
  ["scheren","scheerde","scheerden","geschoren",1],
  ["schieten","schoot","schoten","geschoten",1],
  ["schijnen","scheen","schenen","geschenen",1],
  ["schijten","scheet","scheten","gescheten",1],
  ["schrijden","schreed","schreden","geschreden",3],
  ["schrijven","schreef","schreven","geschreven",1],
  ["schrikken","schrok","schrokken","geschrokken",2],
  ["schuilen","school","scholen","gescholen",1],
  ["schuiven","schoof","schoven","geschoven",3],
  ["slaan","sloeg","sloegen","geslagen",1],
  ["slapen","sliep","sliepen","geslapen",1],
  ["slijpen","sleep","slepen","geslepen",1],
  ["slijten","sleet","sleten","gesleten",1],
  ["slinken","slonk","slonken","geslonken",1],
  ["sluipen","sloop","slopen","geslopen",1],
  ["sluiten","sloot","sloten","gesloten",1],
  ["smelten","smolt","smolten","gesmolten",3],
  ["smijten","smeet","smeten","gesmeten",1],
  ["snijden","sneed","sneden","gesneden",1],
  ["snuiten","snoot","snoten","gesnoten",1],
  ["snuiven","snoof","snoven","gesnoven",1],
  ["spannen","spande","spanden","gespannen",1],
  ["spijten","speet","","gespeten",1],
  ["spinnen","spon","sponnen","gesponnen",1],
  ["splijten","spleet","spleten","gespleten",1],
  ["spreken","sprak","spraken","gesproken",1],
  ["springen","sprong","sprongen","gesprongen",3],
  ["spruiten","sproot","sproten","gesproten",1],
  ["spuiten","spoot","spoten","gespoten",1],
  ["staan","stond","stonden","gestaan",1],
  ["steken","stak","staken","gestoken",1],
  ["stelen","stal","stalen","gestolen",1],
  ["sterven","stierf","stierven","gestorven",2],
  ["stijgen","steeg","stegen","gestegen",2],
  ["stijven","steef","steven","gesteven",1],
  ["stinken","stonk","stonken","gestonken",1],
  ["stoten","stootte","stootten","gestoten",1],
  ["strijden","streed","streden","gestreden",1],
  ["strijken","streek","streken","gestreken",1],
  ["stuiven","stoof","stoven","gestoven",1],
  ["treden","trad","traden","getreden",3],
  ["treffen","trof","troffen","getroffen",1],
  ["trekken","trok","trokken","getrokken",1],
  ["uitdoen","deed uit","deden uit","uitgedaan",1],
  ["uitgaan","ging uit","gingen uit","uitgegaan",2],
  ["uitsteken","stak uit","staken uit","uitgestoken",1],
  ["vallen","viel","vielen","gevallen",2],
  ["vangen","ving","vingen","gevangen",1],
  ["varen","voer","voeren","gevaren",3],
  ["vechten","vocht","vochten","gevochten",1],
  ["verbergen","verborg","verborgen","verborgen",1],
  ["verbieden","verbood","verboden","verboden",1],
  ["verdrieten","verdroot","verdroten","verdroten",1],
  ["verdrinken","verdronk","verdronken","verdronken",2],
  ["verdwijnen","verdween","verdwenen","verdwenen",2],
  ["vergelijken","vergeleek","vergeleken","vergeleken",1],
  ["vergeten","vergat","vergaten","vergeten",3],
  ["verkopen","verkocht","verkochten","verkocht",1],
  ["verlaten","verliet","verlieten","verlaten",1],
  ["verliezen","verloor","verloren","verloren",1],
  ["vermijden","vermeed","vermeden","vermeden",1],
  ["verraden","verried","verrieden","verraden",1],
  ["verslinden","verslond","verslonden","verslond",1],
  ["verstaan","verstond","verstonden","verstaan",1],
  ["vertrekken","vertrok","vertrokken","vertrokken",2],
  ["vervangen","verving","vervingen","vervangen",1],
  ["verzinnen","verzon","verzonnen","verzonnen",1],
  ["vinden","vond","vonden","gevonden",1],
  ["vlechten","vlocht","vlochten","gevlochten",1],
  ["vliegen","vloog","vlogen","gevlogen",3],
  ["vouwen","vouwde","vouwden","gevouwen",1],
  ["vragen","vroeg","vroegen","gevraagd",1],
  ["vreten","vrat","vraten","gevreten",1],
  ["vriezen","vroor","vroren","gevroren",3],
  ["vrijen","vree","vree\u00ebn","gevree\u00ebn",1],
  ["vrijen","vrijde","vrijden","gevrijd",1],
  ["wassen","waste","wasten","gewassen",1],
  ["wegen","woog","wogen","gewogen",1],
  ["werpen","wierp","wierpen","geworpen",1],
  ["werven","wierf","wierven","geworven",1],
  ["weten","wist","wisten","geweten",1],
  ["weven","weefde","weefden","geweven",1],
  ["wijken","week","weken","geweken",2],
  ["wijten","weet","weten","geweten",1],
  ["wijzen","wees","wezen","gewezen",1],
  ["willen","wou, wilde","wilden","gewild",1],
  ["winden","wond","wonden","gewonden",1],
  ["winnen","won","wonnen","gewonnen",1],
  ["worden","werd","werden","geworden",2],
  ["wreken","wreekte","wreekten","gewroken",1],
  ["wrijven","wreef","wreven","gewreven",1],
  ["wringen","wrong","wrongen","gewrongen",1],
  ["zeggen","zei","zeiden","gezegd",1],
  ["zenden","zond","zonden","gezonden",1],
  ["zien","zag","zagen","gezien",1],
  ["zijn","was","waren","geweest",2],
  ["zingen","zong","zongen","gezongen",1],
  ["zinken","zonk","zonken","gezonken",2],
  ["zinnen","zon","zonnen","gezonnen",1],
  ["zitten","zat","zaten","gezeten",1],
  ["zoeken","zocht","zochten","gezocht",1],
  ["zouten","zoutte","zoutten","gezoutten",1],
  ["zuigen","zoog","zogen","gezogen",1],
  ["zuipen","zoop","zopen","gezopen",1],
  ["zullen","zou","zouden","",1],
  ["zwelgen","zwolg","zwolgen","gezwolgen",1],
  ["zwellen","zwol","zwollen","gezwollen",2],
  ["zwemmen","zwom","zwommen","gezwommen",3],
  ["zweren","zwoer","zwoeren","gezworen",1],
  ["zwerven","zwierf","zwierven","gezworven",1],
  ["zwijgen","zweeg","zwegen","gezwegen",1]
]

function Clone() { }
function clone(obj) {
  Clone.prototype = obj;
  return new Clone();
}

function findVerbs(word){
  var word = word.trim().toLowerCase().replace(/ +/, ' ');
  var foundWords = [];
  for(var i = 0;  i < verbs.length ;i++){
    var wordTuple = clone(verbs[i]);
    var index = wordTuple.slice(0, 3).indexOf(word);
    if (index >= 0){
      wordTuple[index] = '<b>' + wordTuple[index] + '</b>';

      foundWords.push({
        auxiliary_verb : aux[wordTuple[4]],
        infinitive     : wordTuple[0],
        past_singular  : wordTuple[1],
        past_plural    : wordTuple[2],
        perfect        : wordTuple[3]
      })
    }
  }
  return foundWords;
}

function setContent(content){
  // _gel('dcontent').innerHTML = content
  console.log(content);
}

function getSearchTerm(){
  // return _gel('search_term').value;
  return "vallen";
}

function process (){
  var search_term = getSearchTerm();
  var content = '';

  foundWords = findVerbs(search_term);

  if (foundWords.length == 0){
    setContent('<div  class="no_results_message">__MSG_no_verb_found__</div>');
  } else {
    content = '<table class="dresults"><tr><th class="no_bottom_border">__MSG_infinitive__</th><th colspan="2" class="no_bottom_border">__MSG_imperfectum__</th><th class="no_bottom_border">__MSG_perfectum__</th></tr>';
    content +=  '<tr><th class="no_top_border"></th><th class="no_top_border">__MSG_singular__</th><th class="no_top_border">__MSG_plural__</th><th class="no_top_border"></th></tr>';

    for (var j = 0; j < foundWords.length ; j++) {
      var word_struct = foundWords[j];

      content = content + '<tr><td>' + word_struct.infinitive + '</td><td>' + 
        word_struct.past_singular + '</td><td>' + word_struct.past_plural + '</td><td>' ;

      if ( word_struct.perfect != ''){
        content = content + '(' + word_struct.auxiliary_verb + ') ' + word_struct.perfect ;
      }

      content = content + '</td></tr>';
    }  
    content += '</table>';
    setContent(content);
  }
}

process();