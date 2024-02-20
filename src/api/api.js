import axios from 'axios';
import Cors from 'micro-cors';

const cors = Cors({
  allowedMethods: ['POST'],
});

export default cors(async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { formData } = req.body;

      const response = await axios.post(`/lp/contactForm/create`, { formData });
      console.log(response)

      res.status(200).json({ success: true, message: msg });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
});