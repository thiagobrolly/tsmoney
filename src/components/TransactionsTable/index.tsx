import * as S from './styles';

export function TransactionsTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Criação de Site</td>
            <td className="deposit">R$10.000</td>
            <td>DEselvoljsdkjfh</td>
            <td>20/24/1212</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$10.000</td>
            <td>DEselvoljsdkjfh</td>
            <td>20/24/1212</td>
          </tr>
          <tr>
            <td>Dex</td>
            <td className="deposit">R$7.000</td>
            <td>DEselvoljsdkjfh</td>
            <td>20/24/1212</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
