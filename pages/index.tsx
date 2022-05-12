import { mdiAccount } from '@mdi/js';
import RhombusButton from 'components/theme-rhombus/button/rhombus-button';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className="index">
      <RhombusButton iconMdi={mdiAccount} label="Example" />
    </div>
  );
};

export default Index;
