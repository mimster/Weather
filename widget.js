var widget=function(){var e=function(){var e=new XMLHttpRequest;e.open("GET","http://api.wunderground.com/api/f4de0f94a19a7665/conditions/q/ca/berkeley.json",!0),e.responseType="json",e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=e.response,n=document.createElement("div");n.textContent=t.current_observation.display_location.full,n.setAttribute("id","city");var r=document.createElement("div");r.textContent=t.current_observation.temperature_string,r.setAttribute("id","temperature");var i=document.createElement("img");i.src=t.current_observation.icon_url;var a=document.getElementById("widget");a.appendChild(n),a.appendChild(r),a.appendChild(i)}},e.send(null)};return{init:e}}();widget.init();
