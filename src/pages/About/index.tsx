import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export function About() {
  return (
    <>
      <Helmet>
        <title>TS Money | sobre nós</title>
      </Helmet>
      <div>
        <h1>Sobre nós</h1>
        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}
