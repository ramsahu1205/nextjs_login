## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

now open http://localhost:3000
## Login User detail
  Add or modify  user in /Data/user.ts file
## Login api detail
Dir path:- page/api/login
```bash    
    url: /api/login
    method: POST
    body:{username:"",password:""}
```
Success response
```bash
        {
          status:true,
          data:null,
          message:"success"
        }
```

Failure response
```bash
   {
      status:false,
      data:null,
      message:"authentication failed."
    }  
```