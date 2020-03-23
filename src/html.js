import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          as="image"
          rel="preload"
          href="https://assets.vsco.co/assets/images/assets/Logo_white_24.png"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
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
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
