import React, { Component } from 'react';

// acá definimos el layout de nuestro HTML donde están los tags html, head, body, etc.
class Layout extends Component {
  render() {
    return (
      <html lang="es">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/home.css" />
        </head>
        <body>
          {this.props.children}
          <script src="/js/home.js"></script>
        </body>
      </html>
    )
  }
}

export default Layout;
