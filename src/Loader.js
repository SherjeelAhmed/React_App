import React from 'react';
import './Loader.css';
import App from './App';

function Loader({myVar,showPage}) {
return <div>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </head>

            <body onload="myFunction()" style="margin:0;">

            <div id="loader"></div>

            <div style="display:none;" id="myDiv" class="animate-bottom">
            <App></App>
            </div>

            <script>
            var myVar;

            function myFunction() {
            myVar = setTimeout(showPage, 3000)
            }

            function showPage() {
            document.getElementById("root").style.display = "none",
            document.getElementById("myDiv").style.display = "block"
            }
            </script>
        </body>
      </div>
}

export default Loader;
