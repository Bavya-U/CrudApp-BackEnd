import userModal from "../modal/userModal.js";

// 1. Add user Router
export const addUser = async(req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new userModal({
            name,
            email
        })
      await newUser.save()
        res.status(200).json({ message: "User Added Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
// 2. Get user Router
//    1. Get All user

export const getAllUser = async(req, res) => {
   try {
       const Alluser = await userModal.find();
       res.status(200).json(Alluser);
   } catch (error) {
    res.status(500).json({ error: error.message })
   }
}

//    2. Get Single user
export const getSingleUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await userModal.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// 3. Update user Router

export const updateUser = async(req, res) => {
   try {
       const { id } = req.params;
       const user = req.body;
       const updateduser = await userModal.findByIdAndUpdate(id, user, { new: true, });
       res.status(200).json({message:"user updated successfully"})
   } catch (error) {
    res.status(500).json({ error: error.message })
   }
}
// 4. Delete user Router
export const deleteUser = async(req, res) => {
try {
    const { id } = req.params;
    await userModal.findByIdAndDelete(id);
    res.status(200).json({message:"user deleted successfully"})
} catch (error) {
    res.status(500).json({ error: error.message })
}
}