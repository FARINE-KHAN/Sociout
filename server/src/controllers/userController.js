const { user } = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { get } = require("../routes");
//association
// const { uploadFile } = require("../AWS/aws");


const register = async (req, res) => {
  try {
    let files = req.files;
    const data = req.body;
    const { profileImage, fullName, email, phone, password, confirmPassword } = data;


    //==========to upload files into AWS S3==============
    // let validImage = files[0].mimetype.split("/");
    // if (validImage[0] != "image") {
    //   return res
    //     .status(400)
    //     .send({ status: false, message: "Please Provide Valid Image.." });
    // }
    // let uploadedFileURL = await uploadFile(files[0]);
    // data.profileImage = uploadedFileURL;

    //======= Name validation =======
    if(!fullName) return res.status(400).json("Please provide Full Name")
    if((/^[0-9]/).test(fullName)) return res.status(400).json("Please provide valid Name")
    
    //========= email validation ==========
    if(!email) return res.status(400).json("Please provide email")
    
    const Emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Email = Emailregx.test(email);
    if (!Email) {
        return res.status(400).json("Please enter valid email.");
    }

    //========= Checking for duplicate email  ===========
    const dublicateEmail = await user.findOne({ where: { email : email } });
    if (dublicateEmail) {
      return res.status(400).json(" Email Already Exists");
    }
    
    //========= phone validation ==========
    if(!phone) return res.status(400).json("Please provide phone number")
    
    const Phoneregx = /^[0-9]{10}$/;
    let Phone = Phoneregx.test(phone);
    if (!Phone) {
        return res.status(400).json("Please enter valid Phone number.");
    }
    
    //========= Checking for duplicate phone  ===========
    const dublicatePhone = await user.findOne({ where: { phone : phone } });
    if (dublicatePhone) {
      return res.status(400).json(" Phone number Already Exists");
    }
    
    //========= password validation ==========
    if(!password) return res.status(400).json("Please enter password")
    if(!confirmPassword) return res.status(400).json("Please enter confirmation password")

    if(password != confirmPassword) return res.status(400).json("password is not matching")

    const Passregx =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/;
    let Password = Passregx.test(password);
    if (!Password) {
      return res
        .status(400)
        .json(
          "Password must have atleast 1 uppercase\n, 1 lowercase, 1 special charecter\n 1 number and must consist atleast 8 charectors."
        );
    }

    //========= Hashing the password =========
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    //======= Saving Data =========
    const saveData = await user.create(data);
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
    try {
        let data = req.body
        let {body, password} = data

        // body can be either email or a phone number
        if(!body) return res.status(400).json("Please enter email or phone")

        let obj = {}
        
        if (!isNaN(body)) {
            obj.phone=body
        }
        else{
            obj.email = body
        }
        if(!password) return res.status(400).json("Please enter password");
        
        let getUser = await user.findOne({ where: obj  });
        if (!getUser) return res.status(401).json("Email or Password is incorrect.");
        
        let matchPassword = await bcrypt.compare(password, getUser.password);
        if (!matchPassword) return res.status(401).json("Email or Password is incorrect.");
    
        //====== genarating token ===========
    
        const token = jwt.sign(
        {
            userId: getUser.id.toString(),
        },
            "shhhhhh",
        { expiresIn: "1h" }
        );
        res.cookie("access_token", token, 
      {
        httpOnly: true,
      }).status(200).json({getUser, token});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const logout = (req, res) => {
    try {
        res.clearCookie("access_token", {sameSite : "none", secure:true }).status(200).json( "User has been logged out. ")
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const editUser = async (req, res) => {
  try {
    const data = req.body;
    const { profileImage, fullName, email, phone, password } = data;
    if(fullName){
        if((/^[0-9]/).test(fullName)) return res.status(400).json("Please provide valid Name")
    }

    if(email) {
        const Emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Email = Emailregx.test(email);
    if (!Email) {
        return res.status(400).json("Please enter valid email.");
    }

    //========= Checking for duplicate email  ===========
    const dublicateEmail = await user.findOne({ where: { email : email } });
    if (dublicateEmail) {
      return res.status(400).json(" Email Already Exists");
    }
    }

    if(phone){
        const Phoneregx = /^[0-9]{10}$/;
    let Phone = Phoneregx.test(phone);
    if (!Phone) {
        return res.status(400).json("Please enter valid Phone number.");
    }
    
    //========= Checking for duplicate phone  ===========
    const dublicatePhone = await user.findOne({ where: { phone : phone } });
    if (dublicatePhone) {
      return res.status(400).json(" Phone number Already Exists");
    }
    }

    if(password){
        const Passregx =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/;
    let Password = Passregx.test(password);
    if (!Password) {
      return res.status(400).json(
          "Password must have atleast 1 uppercase\n, 1 lowercase, 1 special charecter\n 1 number and must consist atleast 8 charectors."
        );
    }

    //========= Hashing the password =========
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    await user.update(data,{ where: { id: req.params.id }});
    res.status(200).json(Object.keys(data)+" updated successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    let password = req.body.password
    if(!password) return res.status(403).json("Please enter password");

    let getUser = await user.findOne({ where: {id : req.params.id}  });
    if (!getUser) return res.status(401).json("Password is incorrect.");
        
    let matchPassword = await bcrypt.compare(password, getUser.password);
    if (!matchPassword) return res.status(401).json("Password is incorrect.");

    await user.destroy({where : {id : req.params.id}});
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const fetchUser = async (req, res) => {
  try {
    const saveData = await user.findOne(req.body);
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const fetchAnotherUser = async (req, res) => {
  try {
    const saveData = await user.findAll(req.body);
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { register, login, logout, editUser, deleteUser, fetchUser, fetchAnotherUser };