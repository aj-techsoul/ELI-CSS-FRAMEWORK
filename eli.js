function init(){

// TAB
Array.from(document.querySelectorAll('.tabs a')).forEach((item) => {
  item.addEventListener('click', function (e) {

    Array.from(document.querySelectorAll('.tabs a')).forEach((item2) => {
      item2.closest('li').classList.remove('active');
      var tabcontent2 = item2.getAttribute('href');
      document.querySelector(tabcontent2).classList.remove('active');
    });

  //  item.classList.add('active');
    e.path[1].classList.add('active');
    var tabcontent = item.getAttribute('href');
    document.querySelector(tabcontent).classList.add('active');
  });
})


// search result

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function httpsuccess(ev){
  var ev = JSON.parse(ev);
  if(ev.length  > 0){
    var li = "";
    ev.forEach((item) => {
      var countrycallingcode = item.callingCodes[0];
      var countryflag = item.flag;
        li = '<li value="'+ countrycallingcode +'"> <img src="'+ countryflag +'" height="10px" /> <strong> '+ countrycallingcode +' </strong></li>' + li;
        document.querySelector('.searchresult').innerHTML = li;
    })
  }
  else {
    console.log('No Data');
  }
}

function searchresult(field){
  var searchvalue = field.value;
  if(searchvalue.length > 0){
  var restapi = 'https://restcountries.eu/rest/v2/name/'+searchvalue;
  var ul = '<ul class="searchresult"></ul>';
  var cdiv = field.closest('div');
  if(Array.from(document.querySelectorAll('.searchresult')).length < 1){
    cdiv.innerHTML += ul;
  }

  //console.log(searchvalue);
// console.log(restapi);
  httpGetAsync(restapi,httpsuccess);
  //console.log(ret);
}
else {
  Array.from(document.querySelectorAll('.searchresult')).forEach((item) => {
    item.remove();
  })
}

}


    Array.from(document.querySelectorAll('.searchresult')).forEach((item) => {
        item.addEventListener('click', function (e) {
          var srval = e.target.value;
          var srinput = item.closest('div');
          var inputtag = srinput.getElementsByTagName('input');
          inputtag[0].value = srval;

          Array.from(document.querySelectorAll('.searchresult')).forEach((item) => {
            item.remove();
          })

          //.value = srval;
        });
    })



// INPUT FIELD
    Array.from(document.querySelectorAll('input:not(.default)')).forEach((item) => {

      var label = item.getAttribute('label');
      var licon = item.getAttribute('licon');
      var ricon = item.getAttribute('ricon');

      var inp = '';
      var gr = '';

      if(licon){
          var inp = inp + '<i class="'+ licon +'"></i>';
          gr = gr + 'a';
      }


      if(label){
          var inp = inp +  '<label>'+ label +'</label>';
      }


      inp = inp +  item.outerHTML;
      gr = gr + 1;

      if(ricon){
          var inp = inp +  '<i class="'+ ricon +'"></i>';
          gr = gr + 'a';
      }

      var starttag = '<p class="input-field ';
      var endtag = '</p>';

      var finalinput = starttag + 'g'+gr+' ">'+ inp + endtag;

      item.outerHTML = finalinput;

    })


Array.from(document.querySelectorAll('input:not(.default)')).forEach((item) => {

  if(item.value.length  > 0 || item.type == 'date' ){
    if(item.previousElementSibling){
      item.previousElementSibling.classList.add('active');
    }
  }
  else if(item.previousElementSibling) {
    item.previousElementSibling.classList.remove('active');
  }

//console.log(item.type);

    item.addEventListener('keyup', function (e) {

      if(e.target.value.length > 0 && e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL'){
        e.target.previousElementSibling.classList.add('active');
      }
      if(e.target.value.length < 1  &&  e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL') {
        e.target.previousElementSibling.classList.remove('active');
      }

    });

})

// TEXTAREA

    Array.from(document.querySelectorAll('textarea:not(.default)')).forEach((item) => {

//console.log(item);

      var label = item.getAttribute('label');
      if(label){
          var inp = '<p class="input-field"> <label>'+ label +'</label> '+ item.outerHTML +'</p>';
      }
      else {
        var inp = '<p class="input-field">'+ item.outerHTML +'</p>';
      }

      item.outerHTML = inp;

    })


Array.from(document.querySelectorAll('textarea:not(.default)')).forEach((item) => {
console.log(item.value);
  if(item.value.length  > 0){
    item.previousElementSibling.classList.add('active');
  }
  else if(item.previousElementSibling) {
    item.previousElementSibling.classList.remove('active');
  }


    item.addEventListener('keyup', function (e) {

      if(e.target.value.length > 0 && e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL'){
        e.target.previousElementSibling.classList.add('active');
      }
      if(e.target.value.length < 1  &&  e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL') {
        e.target.previousElementSibling.classList.remove('active');
      }

    });

})

// SELECT


    Array.from(document.querySelectorAll('select:not(.default)')).forEach((item) => {

      var label = item.getAttribute('label');
      if(label){
          var inp = '<p class="input-field"> <label>'+ label +'</label> '+ item.outerHTML +'</p>';
      }
      else {
        var inp = '<p class="input-field">'+ item.outerHTML +'</p>';
      }

      item.outerHTML = inp;

    })


Array.from(document.querySelectorAll('select:not(.default)')).forEach((item) => {
  if(item.value.length  > 0){
    item.previousElementSibling.classList.add('active');
  }
  else if(item.previousElementSibling) {
    item.previousElementSibling.classList.remove('active');
  }

    item.addEventListener('change', function (e) {

      if(e.target.value.length > 0 && e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL'){
        e.target.previousElementSibling.classList.add('active');
      }
      if(e.target.value.length < 1  &&  e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL') {
        e.target.previousElementSibling.classList.remove('active');
      }

    });

})

// MODAL
function modal(modalid,action){
  if(modalid){
    switch(action){
      case "open":
        document.querySelector(modalid).classList.add('active');
          var modcont = document.querySelector(modalid).children[0];
          var modheight = modcont.offsetHeight;
          var winheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          console.log(modheight + ' - ' + winheight);
          if(modheight >= winheight){
              document.querySelector(modalid).classList.add('large');
          }

          closemodalon();
      break;
      case "close":
        document.querySelector(modalid).classList.remove('active');
      break;
      default:
        document.querySelector(modalid).classList.add('active');
      break;
    }
  }
}

function closemodalon(){
  document.querySelector('.modal.active').addEventListener('click', function (e) {
    var mod = e.target.classList.contains('modal');
    if(mod == true){
      modal('#'+e.target.id,'close');
    }
  });

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if(e.key === "Escape") {
            var mod = document.querySelector('.modal.active');
            if(mod){
              modal('#'+mod.id,'close');
            }
        }

  });
}

// Open Modal
Array.from(document.querySelectorAll('.modal-target')).forEach((item) => {
item.addEventListener('click', function (e) {

  var href = item.getAttribute('href');
  var dtarget = item.getAttribute('modal-target');

  if(href){
    modal(href,'open');
  }
  else if (dtarget) {
    modal(dtarget,'open');
  }
  else {
    console.log('Unable to Specify Modal Target or href');
  }

  });

})



// Close Modal
Array.from(document.querySelectorAll('.modal .modalclosebtn')).forEach((item) => {
  item.addEventListener('click', function (e) {
    if(e.target.parentNode.parentNode.id){
      var modal = e.target.parentNode.parentNode.id;
      document.querySelector('#'+modal).classList.remove('active');
    }
  });
})



// Editable
Array.from(document.querySelectorAll('.editable')).forEach((item) => {
  item.setAttribute('readonly','true');


      item.addEventListener('keydown', function (e) {
          if(e.key === 'Enter'){
            item.setAttribute('readonly','true');
          }
      });

  item.addEventListener('dblclick', function (e) {
      if(e.target.hasAttribute('readonly')){
          e.target.removeAttribute('readonly');
      }
      else {
        e.target.setAttribute('readonly','true');
      }

  });
})


//////////////
}

window.addEventListener('load', init(), false )
