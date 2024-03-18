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

export const getAllUser = (req, res) => {
    res.status(200).json({ message: "get all user Route" });
}

//    2. Get Single user
export const getSingleUser = (req, res) => {
    res.status(200).json({ message: "get single user Route" });
}
// 3. Update user Router

export const updateUser = (req, res) => {
    res.status(200).json({ message: "update user Route" });
}
// 4. Delete user Router
export const deleteUser = (req, res) => {
    res.status(200).json({ message: "delete user Route" });
}