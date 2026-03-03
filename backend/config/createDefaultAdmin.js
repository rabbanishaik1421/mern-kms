import users from "../models/users.js";
import bcrypt from "bcryptjs";

const createDefaultAdmin=async ()=>{
    try {
        const adminExists = await users.findOne({email:"admin@kms.com"});

        if(!adminExists){
            const hashedPassword = await bcrypt.hash("Admin@2025", 10);

            await users.create({
                "firstname":"KMS",
                "lastname":"Admin",
                "phone":"9876543210",
                "email":"admin@kms.com",
                "password":hashedPassword,
                "role":"superadmin"
            });

            console.log("Super Admin Created.");
        }
        else{
            console.log("Admin already exists.");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

export default createDefaultAdmin;