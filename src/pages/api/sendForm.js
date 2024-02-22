import axios from 'axios';
import Cors from 'micro-cors';
require('env')


const cors = Cors({
  allowedMethods: ['POST'],
});

export default cors(async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { formData } = req.body;
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lp/formContact/create`, { formData });
      res.status(200).json({ success: true, message: 'ok' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
});