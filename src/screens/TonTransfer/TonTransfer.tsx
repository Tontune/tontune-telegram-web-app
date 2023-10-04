import { Counter } from 'components/Counter';
import { FlexBoxCol } from 'components/styled/styled';
import { TransferTon } from 'components/TransferTon';

export function TonTransfer() {
  return (
    <FlexBoxCol>
      {/* TBD: init the counter contract */}
      {/* <Counter /> */}
      <TransferTon />
    </FlexBoxCol>
  );
}
