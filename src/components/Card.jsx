import { useState } from "react";

export default function ExpandingCards() {
  const [expanded, setExpanded] = useState(false);

 
  var maincontainer = document.getElementById("maincontainer");
  var arr = document.getElementsByClassName('card'); 
  var expandimg = document.getElementById('expandimg');

  var flag = 0;

  var windowwidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var windowheight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
 
  function expand() 
  {
      if (windowwidth >= 700) 
      {
          var ml = 0;
          for (let index = 0; index < arr.length; index++) 
          {
              arr[index].style.position = "absolute";
              arr[index].style.marginTop = ml+"px";
              arr[index].style.transition = "margin 1s, box-shadow 0.5s";
            
          }
          maincontainer.style.height = "400px";
          if(flag === 0)
          {
              maincontainer.style.width = "1235px"; 
              maincontainer.style.transition = "all 1s";
              expandimg.style.rotate = "180deg";
              expandimg.style.transition = "all 1s";
              var ml = 0;
              for (let index = 0; index < arr.length; index++) 
              {
                  arr[index].style.position = "absolute";
                  arr[index].style.marginLeft = ml+"px";
                  arr[index].style.transition = "margin 1s, box-shadow 0.5s";
                  ml = ml+300;
              }
              flag = 1;
              windowwidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              windowheight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

          }
          else
          {
              maincontainer.style.width = "500px"; 
              maincontainer.style.transition = "all 1s";
              expandimg.style.rotate = "0deg";
              expandimg.style.transition = "all 1s";
              var ml = 0;
              for (let index = 0; index < arr.length; index++) 
              {
                  arr[index].style.position = "absolute";
                  arr[index].style.marginLeft = ml+"px";
                  arr[index].style.transition = "margin 1s, box-shadow 0.5s";
                  ml = ml+50;
              }
              flag = 0;
              windowwidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              windowheight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

          }
      }
      else 
      {
          var mt = 0;
          for (let index = 0; index < arr.length; index++) 
          {
              arr[index].style.position = "absolute";
              arr[index].style.marginLeft = mt+"px";
              arr[index].style.transition = "margin 1s, box-shadow 0.5s";
         
          }
         
          if(flag === 0)
          {
              maincontainer.style.height = "800px"; 
              maincontainer.style.transition = "all 1s";
              expandimg.style.rotate = "270deg";
              expandimg.style.transition = "all 1s";
              var mt = 0;
              for (let index = 0; index < arr.length; index++) 
              {
                  arr[index].style.position = "absolute";
                  arr[index].style.marginTop = mt+"px";
                  arr[index].style.transition = "margin 1s, box-shadow 0.5s";
                  mt = mt+300;
              }
              flag = 1;
              windowwidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              windowheight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

          }
          else
          {
              maincontainer.style.height = "400px"; 
              maincontainer.style.transition = "all 1s";
              expandimg.style.rotate = "90deg";
              expandimg.style.transition = "all 1s";
              var mt = 0;
              for (let index = 0; index < arr.length; index++) 
              {
                  arr[index].style.position = "absolute";
                  arr[index].style.marginTop = mt+"px";
                  arr[index].style.transition = "margin 1s, box-shadow 0.5s";
                  mt = mt+50;
              }
              flag = 0;
              windowwidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              windowheight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

          }
      }
     
      
  }

  const items = [
    { title: "Burger", image: "https://img.icons8.com/pastel-glyph/100/beefburger.png" },
    { title: "Chicken", image: "https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/external-chicken-leg-grocery-flatart-icons-solid-flatarticons-2.png" },
    { title: "Pizza", image: "https://img.icons8.com/stamp/100/salami-pizza.png" },
    { title: "Lollipop", image: "https://img.icons8.com/pastel-glyph/100/chupa-chups.png" }
  ];

  return (
    <div class="spectacledcoder-expanding-cards-container" id="maincontainer">

    <div class="spectacledcoder-cards">
        <div class="card">
            <h2>Burger</h2>
            <div class="bigsquare">
                <div class="col">
                    <div class="sq1">
                        <div class="cl1"></div>
                    </div>
                    <div class="sq2">
                        <div class="cl2"></div>
                    </div>
                </div>
                <div class="col">
                    <div class="sq3">
                        <div class="cl3"></div>
                    </div>
                </div>
            </div>
            <div class="sq4">
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/100/ffffff/right--v1.png" alt="right--v1"/>
            </div>
        </div>
        <div class="card">
            <h2>Chicken</h2>
            <div class="bigsquare">
                <div class="col">
                    <div class="sq1">
                        <div class="cl1"></div>
                    </div>
                    <div class="sq2">
                        <div class="cl2"></div>
                    </div>
                </div>
                <div class="col">
                    <div class="sq3">
                        <div class="cl3"></div>
                    </div>
                </div>
            </div>
            <div class="sq4">
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/100/ffffff/right--v1.png" alt="right--v1"/>
            </div>
        </div>
        <div class="card">
            <h2>Pizza</h2>
            <div class="bigsquare">
                <div class="col">
                    <div class="sq1">
                        <div class="cl1"></div>
                    </div>
                    <div class="sq2">
                        <div class="cl2"></div>
                    </div>
                </div>
                <div class="col">
                    <div class="sq3">
                        <div class="cl3"></div>
                    </div>
                </div>
            </div>
            <div class="sq4">
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/100/ffffff/right--v1.png" alt="right--v1"/>
            </div>
        </div>
        <div class="card">
            <h2>Lollipop</h2>
            <div class="bigsquare">
                <div class="col">
                    <div class="sq1">
                        <div class="cl1"></div>
                    </div>
                    <div class="sq2">
                        <div class="cl2"></div>
                    </div>
                </div>
                <div class="col">
                    <div class="sq3">
                        <div class="cl3"></div>
                    </div>
                </div>
            </div>
            <div class="sq4">
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/100/ffffff/right--v1.png" alt="right--v1"/>
            </div>
        </div>
    </div>
 
    <div class="expanding-btn" onclick="expand()">
        <div class="square1">
            <div class="circle1"></div>
        </div>
        <div class="expand-btn-container">
            <img id="expandimg" width="35" height="35" src="https://img.icons8.com/forma-regular-filled/100/000000/forward.png" alt="forward"/>
        </div>
        <div class="square2">
            <div class="circle2"></div>
        </div>
    </div>
    
   
</div>
  );
}
