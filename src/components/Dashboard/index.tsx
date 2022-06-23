import { Link } from 'react-router-dom';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import * as S from './styles';

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
      <Link to="/sobre">Sobre nós</Link>
    </S.Container>
  );
}
