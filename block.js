function explode(){


  var els = document.querySelectorAll("iframe");
  for (var i = 0; i<els.length; i++) {
    var el = els[i];
    var src = el.src;


    if(el.id == "AMAdIframe_artiMediaSDK1"){
      el.src = "";
    }



  }


}


function printWorking(){
  //alert("hllaslas");
}

var url = [];
var found = false;


function OpenPopupCenter(pageURL, title, w, h) {

           var left = (screen.width - w) / 2;

           var top = (screen.height - h) / 4;

           var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

       }


$( document ).ready(function() {

          setTimeout(explode, 2500);


          var t = document.getElementsByClassName("block B1 spacer");
          if(t.length > 0){
            t[0].parentNode.removeChild(t[0]);
          }


          //video-container
          var k = document.getElementById("ads.top");
          if(k != null && k != 'undefined'){
            k.parentNode.removeChild(k);
          }



          var els = document.querySelectorAll("iframe");

          for (var i = 0; i<els.length; i++) {
            var el = els[i];


            if(el.id == "AMAdIframe_artiMediaSDK1"){
              found = true;
            }


          }

          if(found == true){


          }
          else{

            var els = document.querySelectorAll("iframe");

            for (var i = 0; i<els.length; i++) {
              var el = els[i];

              var src = el.src;

              if(el.id == "AMAdIframe_artiMediaSDK1"){
                el.src = "";
              }

              if( el.src != "http://www.ynet.co.il/Ext/Comp/Ticker/Dhtml_Flash_Ticker/0,12114,L-184-253-150,00.html?js=1" && !src.includes("/video/") && el.id != "AMAdIframe_artiMediaSDK1" )
              {
                el.parentNode.removeChild(el);
              }


              if( el.src.includes("/video/") )
              {

                var ur = el.src;

                var a = document.createElement('a');
                var linkText = document.createTextNode("לחץ כאן לצפייה בסרטון ללא פרסומות");
                a.appendChild(linkText);
                a.setAttribute('target', '_blank');
                a.title = "לחץ כאן לצפייה בסרטון ללא פרסומות";
                a.href = ur;
                a.setAttribute("style", "font-size: 25px; text-align:center; text-decoration: none; width:490px; color: #fff; margin:10px; margin-top:50px; margin-bottom:50px;");
                el.parentElement.parentElement.getElementsByClassName("sharingFooter")[0].appendChild(a);

              }
            }
          }



            //delete video
            var v = document.getElementsByClassName("video-container");
            if(v.length > 0){

              for(var i=0;i<v.length;i++){
                v[i].parentNode.removeChild(v[i]);
              }

            }




          var a = document.querySelectorAll("a");


          for (var i = 0; i<a.length; i++) {
            var ai = a[i];
            if (ai.hasAttributes()) {
               var attrs = paragraph.attributes;
               var output = "";
               for(var i = attrs.length - 1; i >= 0; i--) {
                 output += attrs[i].name + "->" + attrs[i].value;
               }
             }

          }


});
