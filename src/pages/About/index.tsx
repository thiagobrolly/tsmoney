import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export function About() {
  return (
    <>
      <Helmet>
        <title>tsmoney | sobre nós</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PV12PBN3DW"
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-PV12PBN3DW');
          `}
        </script>
      </Helmet>
      <div>
        <h1>Sobre nós</h1>
        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}
