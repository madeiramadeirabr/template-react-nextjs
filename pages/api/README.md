# pages/api

Esta pasta representa a API de rotas fornecida built-in pelo Next.js.

Qualquer arquivo dentro da pasta `pages/api` é mapeado para `/api/*` e será tratado como um endpoint no lugar de uma página. Os arquivos são compilados como bundle do server.

Para API funcionar é necessário exportar uma função como default - que servira como um **request handler**, que deve receber os paramêtros `req, res` representando as intancias de `http.IncomingMessage` e `http.ServerResponse`.
