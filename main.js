/* global describe loadprojs_hired */

function loadJSON(filename,callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', filename, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
 }
var DATA;
var CURR_DATA;
var SORT_CRIT;
var IS_HIRED = window.location.href.split('#')[1]=='hired';
var DATA_HIRED;

function randChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}
function mapval(value,istart,istop,ostart,ostop){
    return ostart + (ostop - ostart) * ((value - istart)*1.0 / (istop - istart))
}

function loadprojs(data){

  if (data.length == 0){
    return "<div style='color:grey'>No results.</div>"
  }

  var out = ""
  for (var i = 0; i < data.length; i++){
    var proj = data[i]
    var im = proj.images[0]
    out += "<div class='cell-w'><div class='cell'>"
    
    out +="<div class='imbg'"
        + "style=\""
        + "background-image:url("+im.url+");"
        + "background-position: "+im.position+";"
        + "background-size : auto "+im.size+";"
        + "opacity: 0.9;"
        + "filter: ;"
        + "width:256px;height:180px;"
        + "border-radius : 3px 3px 0px 0px"
        + "\"></div>"
        console.log("Images successfully loaded from data.json,background-image:url("+im.url+");");
    var outlinks = "<table style='max-height:24px; display: block;'><tr>"
    outlinks += "<td><i class='material-icons' "
             +  "style='font-size:20px;color:grey'>link&nbsp;</i></td><td><table><tr>"
    var linklbl = Object.keys(proj.links)
    for (var j = 0 ; j < linklbl.length; j++){
      outlinks += "<td style='font-size:12px; line-height:14px'>"
      outlinks += "<a href='"+proj.links[linklbl[j]]+"'>"+linklbl[j]+"</a>"
      outlinks += "</td>"
      if (j != linklbl.length - 1){
        outlinks += "<td>|</td>"
        if (j % 2 == 0 && j != 0){
          outlinks += "</tr><tr>"
        }
      }
    }
    outlinks += "</tr></table></td></tr></table>"
    var months = ["?","Jan","Feb","Mar","Apr","May","Jun",
                      "Jul","Aug","Sep","Oct","Nov","Dec"]
    var titlesize = 18
    if (proj.title.length > 20){
      titlesize = 16
    }

    out +="<div "
        + "style=\""
        + "padding: 10px 15px 0px 15px;"
        + "\">"
        + "<table width=100%><tr>"
        + "<td style='font-size: "+titlesize+"px; font-style:bold;'>"+proj.title
        + "</td>"
        + "</tr></table>"
        + "<p><i>"+proj.description+"</i></p>"
        + "<p>"+proj.medium.join(" - ")
        + "&nbsp;•&nbsp;"+months[proj.date.month]+" "+proj.date.year+"</p>"
        + "<div class='hrz'></div>"
        + "<p>"+outlinks+"</p>"
        + "</div>"

    out += "</div></div>"
  }
  return out
}
function searchprojs(data,k){
  var newdata = []
  for (var i = 0; i < data.length; i++){
    var proj = JSON.stringify(data[i]).toLowerCase();
    //console.log(proj)
    if (proj.includes(k.toLowerCase())){
      newdata.push(data[i])
    }
  }
  return newdata
}
function calcdate(d){
  return d.month-1+d.year*12
}

function hint(t,e){
  var h = document.getElementById("hint");
  h.style.display = "block";

  h.style.left = window.scrollX+10+e.x+"px"
  h.style.top = window.scrollY+10+e.y+"px"
  h.innerHTML = t;
}
function nohint(){
  var h = document.getElementById("hint");
  h.style.display = "none";
}

function timeline(data){
  var out = "<table style='width: 90%; margin:0px 10% 0px 0%; color: grey; table-layout: fixed;' cellspacing='0'><tr>"
  var mind = 3000*12;
  var maxd = 0;
  for (var i = 0; i < data.length; i++){
    var dt = calcdate(data[i].date)
    if (dt > 2000*12){
      if (dt < mind){mind = dt}
      if (dt > maxd){maxd = dt}
    }
  }
  for (var t = mind; t < maxd+1; t++){
    (function(){
      var projs = [];
      for (var i = 0; i < data.length; i++){
        var dt = calcdate(data[i].date)
        if (dt == t){
          projs.push(data[i])
        }
      }
      out += "<td style='vertical-align:top; font-size:10px;"
      var lbl = "&nbsp;"
      if (t%12 == 0){
        lbl = Math.floor(t/12)+"";
        out += "border-left: 1px solid grey;"
      }else{
        out += "border-left: 1px solid #eeeeee;"
      }
      out += "'>"
      out +="<div style='"
          + "display:table;"
          + "width:100%; height:5px;"
          + "margin: -5px 0px 1px 0px;"
          + "'>"+lbl+"</div>"
      for (var i = 0; i < projs.length; i++){

        out +="<div style='"
            + "display:table;"
            + "background-color:#787b8b99;"
            + "width:100%; height:5px;"
            + "margin: 1px 0px 1px 0px"
            + "' onmouseenter='this.style[\"background-color\"]=\"grey\";hint(\""
            + projs[i].title
            + "\",event)' "
            + "onmouseleave='nohint();this.style[\"background-color\"]=\"#787b8b99\";'"
            + "></div>"
      }
      out += "</td>"
    })();
  }
  out += "</tr></table>"
  return out;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function togglesort(el){
  SORT_CRIT = el.options[el.selectedIndex].value
  updatecontent()
}
function updatecontent(){
  if (SORT_CRIT == "Newest"){
    CURR_DATA.sort((x,y)=>(-calcdate(x.date)+calcdate(y.date)))
  }else if (SORT_CRIT == "Oldest"){
    CURR_DATA.sort((x,y)=>(calcdate(x.date)-calcdate(y.date)))
  }else if (SORT_CRIT == "Alphabetical"){
    CURR_DATA.sort((x,y)=>(x.title>y.title?1:-1))
  }else if (SORT_CRIT == "Shuffle"){
    shuffle(CURR_DATA)
  }
  document.getElementById("content").innerHTML = loadprojs(CURR_DATA)
}

function hamburgermenu(links){
  var opened = document.getElementById("hamburger-menu");
  if (opened){
    document.getElementById("hamburger-btn").classList.remove("rotated");
    opened.parentNode.removeChild(opened);
    return;
  }
  document.getElementById("hamburger-btn").classList.add("rotated");
  var out = ""
  for (var k in links){
    if (out.length){
      out += `<div class='hrz' style="width:80%;margin:auto;"></div>`
    }
    out += `<div class='hamburger-item' onclick="window.location.href='${links[k]}'">${k}</a></div>`
  }
  var div = document.createElement("div");
  div.style.position="fixed";
  div.style.top="45px";
  div.style.right="10px";
  div.id="hamburger-menu"
  
  div.innerHTML = out;
  div.style.opacity = 0;
  document.body.appendChild(div);
  setTimeout(function(){
    div.style.opacity = 1;
  },100);
  if (event){
    event.stopPropagation();
  }
}

var prev_width = window.innerWidth;
function hidebywidth(){
  
  if (IS_HIRED ){
    if (((window.innerWidth > 800 && prev_width <= 800) || (window.innerWidth < 800 && prev_width >= 800))){
      document.getElementById("content").innerHTML = loadprojs_hired(DATA_HIRED,window.innerWidth<800);
    }
    document.getElementById("viz-n-sort").style.display = "none";
    document.getElementById("search-td").style.display = document.getElementById("search-icon-td").style.display = "none";
    document.getElementById("contenttoppad").style.display = "none";

  }else{
    document.getElementById("viz-n-sort").style.display = (window.innerWidth < 800) ? "none" : "block";
    document.getElementById("search-td").style.display = document.getElementById("search-icon-td").style.display = (window.innerWidth < 700) ? "none" : "table-cell";
    document.getElementById("contenttoppad").style.display = "block";
  }
  prev_width = window.innerWidth;
}


console.log("hello there.")


var SEARCH_TIMEOUT;

function init(){
  hidebywidth();
  window.addEventListener('resize', function(){
    hidebywidth();
  });
  
  loadJSON("data.json",function(response) {
    // Debug line to indicate if "data.json" successfully loaded


    DATA = JSON.parse(response);
    DATA.sort((x,y)=>(-calcdate(x.date)+calcdate(y.date)))
    CURR_DATA = DATA;
    if (!IS_HIRED){
      updatecontent()
      document.getElementById("viz").innerHTML = timeline(DATA);
    }
  });
  

  
  // loadJSON("/hired_work/data.json",function(response) {
    loadJSON("data.json",function(response) {
    DATA_HIRED = JSON.parse(response);
    DATA_HIRED.sort((x,y)=>(-calcdate(x.date)+calcdate(y.date)))
    if (IS_HIRED){
      hidebywidth();
      document.getElementById("content").innerHTML = loadprojs_hired(DATA_HIRED,window.innerWidth<800);
    }
  });

  document.getElementById("search-box").addEventListener("keydown", 
    function(event) {
      clearTimeout(SEARCH_TIMEOUT);
      SEARCH_TIMEOUT = setTimeout(function(){
        var k = document.getElementById("search-box").value;
        //console.log(k)
        CURR_DATA = searchprojs(DATA,k)
        updatecontent()
        return false;
      },100);
  });
  
  document.getElementById("tab0").addEventListener("click",function(){
    IS_HIRED = false;
    document.getElementById("tab0").classList.add("tabopt-on");
    document.getElementById("tab1").classList.remove("tabopt-on");
    
    hidebywidth();
    updatecontent();
    
  })
  document.getElementById("tab1").addEventListener("click",function(){
    IS_HIRED = true;
    document.getElementById("tab1").classList.add("tabopt-on");
    document.getElementById("tab0").classList.remove("tabopt-on");
    
    hidebywidth();
    document.getElementById("content").innerHTML = loadprojs_hired(DATA_HIRED,window.innerWidth<800);
  })

}
