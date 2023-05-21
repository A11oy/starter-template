import { CheerioAPI } from 'cheerio'
require('dotenv').config()

export default ($: CheerioAPI) => {
  $('head').append(`
    <script defer>
      function initEdgioRum() {
        new Layer0.Metrics({
          token: "${process.env.EDGIO_RUM_TOKEN}"
        }).collect()
      }
    </script>
    <script src="https://rum.layer0.co/latest.js" defer onload="initEdgioRum()"></script>
    <script src="/__edgio__/main.js" defer="defer"></script>
  `)
}
