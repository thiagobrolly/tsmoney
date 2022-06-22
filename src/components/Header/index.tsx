import logoImg from '../../assets/logo.svg';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="ts money" />
        <button type="button">Nova Trasação</button>
      </S.Content>
    </S.Container>
  );
}
