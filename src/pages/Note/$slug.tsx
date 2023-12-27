import React, {useRouter, useState} from 'react';
import {PageContainer, useIntl} from "@ant-design/pro-components";

const Advisor: React.FC = () => {
  const intl=useIntl();
  const router = useRouter();
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  return (
    <PageContainer>
      <div>
        <h1>Advisor</h1>
      </div>
    </PageContainer>
  );
}

export default Advisor;
