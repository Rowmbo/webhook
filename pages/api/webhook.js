export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { content, timestamp } = req.body;

  if (!content || !timestamp) {
    return res.status(400).json({ error: 'Missing content or timestamp' });
  }

  if (!global.messages) {
    global.messages = [];
  }

  global.messages.push({ content, timestamp });
  
  res.status(200).json({ message: 'Webhook received' });
}