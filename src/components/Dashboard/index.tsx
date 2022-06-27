import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import * as S from './styles';

export function Dashboard() {
  return (
    <>
      <Helmet>
        <title>TS Money</title>
      </Helmet>
      <S.Container>
        <Summary />
        <TransactionsTable />
        <Link to="/sobre">Sobre nós</Link>
      </S.Container>
    </>
  );
}
