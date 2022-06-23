import logoImg from '../../assets/logo.svg';
import * as S from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="ts money" />
        <button
          id="btn_new_transaction"
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova Trasação
        </button>
      </S.Content>
    </S.Container>
  );
}
