import {useState} from "react";
import {useIntl} from "@umijs/max";
import {Avatar, Badge, Card} from "antd";

export type ChatBoxProps = {
  message: Message;
}



const ChatBox:React.FC<ChatBoxProps> = ({message}) => {

  //get the current language

  //TODO: 对于不同语言进行不同处理
  const intl = useIntl();
  const align=message.sender==='dodo'?'left':'right';

  const styles = {
    backgroundColor: '#87d068',
  }


  return(
    <div>
      <Avatar style={{ backgroundColor: styles.backgroundColor, verticalAlign: 'middle' }} size="large">
        {message.sender}
      </Avatar>
      <Badge.Ribbon text="Hippies">
        <Card title="Pushes open the window" size="small">
          {message.date}
        </Card>
      </Badge.Ribbon>
    </div>
  )
}

export default ChatBox;
