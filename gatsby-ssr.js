/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
export function onRenderBody(
  { setHeadComponents }) {
setHeadComponents([
     <script
     dangerouslySetInnerHTML={{
        __html: `
        // javascript code
        (function(w, d){
            var b = d.getElementsByTagName('head')[0];
            var s = d.createElement("script");
            var v = ("IntersectionObserver" in w) ? "_no_poly" : "";
            s.async = true; // This includes the script as async.
            s.src = "https://d5jmkjjpb7yfg.cloudfront.net/v2/latest/optimole_lib" + v + ".min.js";
            w.optimoleData = {
                key: "mlpr65hp9lfb",
                quality: "85",
            };
            b.appendChild(s);
        }(window, document));    
   	 `
     }}
     />,
]);
}