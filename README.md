## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

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

