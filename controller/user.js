const user = {}

user.index = (req,res) => {

  const data = {
    firstName: "Carl",
    lastName: "chen",
    email: "hsipl206@xxx.com"
  }

  res.json(data);
};

user.list = async (req, res) => {

    const response = await user.findAll()
    .then(function(data){
      const res = { success: true, data: data }
      return res;
    })
    .catch(error =>{
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);
  
  }
  
  user.create = async ( req, res) =>{
  
    try {
  
      const response = await user.create({
        firstName:"Carl",
        lastName:"Chen",
        email:"hsipl206@xxx.com"
      })
      .then(function(data){
        const res = { success: true, data: data, message:"created successful" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  
  user.update = async ( req, res) =>{
  
    try {
  
      const id = 19;
  
      const response = await user.update({
        firstName:"Carl1",
        lastName:"Chen1",
        email:"hsipl2061@xxx.com"
      },{
        where: { id: id}
      })
      .then(function(data){
        const res = { success: true, data: data, message:"updated successful" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  

  
  
  user.delete = async ( req, res) =>{
  
    try {
  
      const { id } = req.params;
  
      const response = await user.destroy({
        where: { id: id }
      })
      .then( function(data){
        const res = { success: true, data: data, message:"Deleted successful" }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  

module.exports = userController;



