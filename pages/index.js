import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(global.messages || []);
  }, []);

  const sortedMessages = messages.sort((a, b) => 
    moment(b.timestamp).tz('Pacific/Auckland').unix() - moment(a.timestamp).tz('Pacific/Auckland').unix()
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Webhook Messages (NZDT)</h1>
      <div className="space-y-4">
        {sortedMessages.map((msg, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p className="font-semibold">{msg.content}</p>
            <p className="text-sm text-gray-500">
              {moment(msg.timestamp).tz('Pacific/Auckland').format('YYYY-MM-DD HH:mm:ss z')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}