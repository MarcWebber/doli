import React, { useState,useRouter } from 'react';
import {PageContainer, useIntl} from "@ant-design/pro-components";

const Detail: React.FC = () => {
  const intl=useIntl();
  const router = useRouter();
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  return (
    <PageContainer>
      <div>
        <h1>Detail</h1>
      </div>
    </PageContainer>
  );
}

export default Detail;
