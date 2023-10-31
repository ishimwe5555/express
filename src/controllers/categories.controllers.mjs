// import { v4 as uuidv4 } from 'uuid';
// import { categoryServices } from '../services';

const getCategories = async (req, res) => {
  //const categories = await categoryServices.getCategories();

  return res.status(200).json({
    code: '200',
    message: `Fetched all categories`,
   // categories,
  });
};


export default {
  getCategories,
};
