// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import User from "../../Data/user"
type Data = {
  message: string,
  status:boolean,
  data:any
}

export default function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method=="POST"){
    let {username,password}=req.body;
    if(username && password){
      let isValidUser=User.filter((user)=>user.username==username && user.password==password).length>0;
      if(isValidUser){
        res.status(200).send({
          status:true,
          data:null,
          message:"success"
        })
      } 
    }
    res.status(200).json({
      status:false,
      data:null,
      message:"authentication failed."
    })
  }
  else{
    res.send({
      status:false,
      data:null,
      message:"Wrong Signature"
    })
  }
}
