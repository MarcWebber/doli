// import React,{useState,useRef} from 'react';

import React, { useState } from 'react';
import {PageContainer, useIntl} from "@ant-design/pro-components";
// import {useIntl} from "@umijs/max";
import ChatBot from "@/pages/Advisor/components/ChatBot";

// const handleSendMessage = (message) => {
//   console.log(message);
// }


const Advisor: React.FC = () => {

  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  const intl=useIntl();
  return (
    <PageContainer>
      <div>
        <ChatBot/>
      </div>
    </PageContainer>
  );
}

export default Advisor;
