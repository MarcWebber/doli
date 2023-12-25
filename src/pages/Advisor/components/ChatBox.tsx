import {useState} from "react";
import {useIntl} from "@umijs/max";
import {Avatar, Badge, Card} from "antd";

export type ChatBoxProps = {
  message: Message;
}


const ChatBox: React.FC<ChatBoxProps> = ({message}) => {

  //get the current language

  //TODO: 对于不同语言进行不同处理
  const intl = useIntl();
  // const align = message.sender === 'dodo' ? 'left' : 'right';
  const [displayFirst,displaySecond] = ['false','true'];
  const justify = message.sender === 'dodo' ? 'start' : 'end';

  const styles = {
    backgroundColor: '#87d068',
  }



  return (
    <div>
      <div style={{alignItems: "center",display:'flex',justifyContent:justify}}>
        <Avatar style={{display: displayFirst,backgroundColor: styles.backgroundColor, verticalAlign: 'middle'}} size="large">
          {message.sender}
        </Avatar>

        <Badge.Ribbon text="Hippies">
          <Card title="tell me sth" size="small">
            <div style={{textAlign:"left"}}>{message.text}</div>

            <div style={{textAlign:"right"}}>{message.date}</div>

          </Card>
        </Badge.Ribbon>

        {/*<Avatar style={{display: displaySecond,backgroundColor: styles.backgroundColor, verticalAlign: 'middle'}} size="large">*/}
        {/*  {message.sender}*/}
        {/*</Avatar>*/}
      </div>
    </div>
  )
}

export default ChatBox;
