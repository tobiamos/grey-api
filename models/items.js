/* ID
    Name
    Description
    Price
    Category
    Image
    Color
 */

 module.exports = (sequelize, Datatypes) => {
   const product = sequelize.define( 'Product', {
     name: {
       type: Datatypes.STRING
     },
     description: {
      type: Datatypes.STRING
     },
     price: {
       type: Datatypes.INTEGER
     },
     category: {
       type: Datatypes.STRING
     },
     image: {
      type: Datatypes.STRING
     },
     color: {
      type: Datatypes.STRING
     }
   })
   return product;
 }