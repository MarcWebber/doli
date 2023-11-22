// import React,{useState,useRef} from 'react';
import React, {useState} from 'react';
import {PageContainer} from "@ant-design/pro-components";
import {useIntl} from "@umijs/max";
// const handleSendMessage = (message) => {
//   console.log(message);
// }


const Advisor: React.FC = () => {

  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  const intl=useIntl();

  return (
    <PageContainer>
      <div>

        {/*<iframe src="http://localhost:3000/" width="100%" height="1000px" frameBorder="0"></iframe>*/}
      </div>
    </PageContainer>
  );
}

export default Advisor;
