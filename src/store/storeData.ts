import {writable ,type Writable } from "svelte/store";

 export const showAllProducts = false

 type Product={
    id: string;
    name:string,
    desc:string,
    price:string;
  }

  export  const productStore: Writable<Product[]> = writable([
      { id:'1',name : 'iphone', desc : '6gb ram' , price : '43000' },
      { id:'2',name : 'iphonexr', desc : '4gb ram' , price : '40000' },
      { id:'3',name : 'iphone14', desc : '4gb ram' , price : '40000' },
      { id:'4',name : 'iphone13', desc : '6gb ram' , price : '50000' },
      { id:'5',name : 'iphone14pro', desc : '8gb ram' , price : '65000' },
      { id:'6',name : 'iphone14plus', desc : '8gb ram' , price : '55000' },
      { id:'7',name : 'iphone7', desc : '6gb ram' , price : '43000' },
      { id:'8',name : 'iphone8', desc : '4gb ram' , price : '40000' },
      { id:'9',name : 'iphone11', desc : '4gb ram' , price : '40000' },
      { id:'10',name : 'iphone12', desc : '6gb ram' , price : '50000' },
      { id:'11',name : 'iphoneXR', desc : '8gb ram' , price : '65000' },
      { id:'12',name : 'iphoneSE', desc : '8gb ram' , price : '55000' },
      { id:'13',name : 'iphone', desc : '6gb ram' , price : '43000' },
      { id:'14',name : 'Watch', desc : '4gb ram' , price : '40000' },
      { id:'15',name : 'WatchSe', desc : '4gb ram' , price : '40000' },
      { id:'16',name : 'Watch altra', desc : '6gb ram' , price : '50000' },
      { id:'17',name : 'ipad pro', desc : '8gb ram' , price :'65000'},
      { id:'18',name : 'Apple Hometv', desc : '8gb ram' , price : '55000' },
      { id:'19',name : 'iphone7', desc : '6gb ram' , price : '43000' },
      { id:'20',name : 'iphone8', desc : '4gb ram' , price : '40000' },
      { id:'21',name : 'iphone11', desc : '4gb ram' , price : '40000' },
      { id:'22',name : 'iphone12', desc : '6gb ram' , price : '50000' },
      { id:'23',name : 'iphoneXR', desc : '8gb ram' , price : '65000' },
      { id:'24',name : 'Apple Airtages', desc : '8gb ram' , price : '55000' },
      { id:'25',name : 'iPad5S', desc : '8gb ram' , price : '55000' },
    ]);
    
    

  type Contact = {
    name: string,
    email: string,
    number: string;
  }


export const contactStore: Writable<Contact[]> = writable([
    {name:'shubham',email:'shubham@gmail.com',number:'1234567896'},
    {name:'nikunj',email:'nikunj@gmail.com',number:'9734567896'},
    {name:'jayesh',email:'jayesh@gmail.com',number:'9834567896'},
    {name:'jitendra',email:'jitendra@gmail.com',number:'9935567896'},
    {name:'hardik',email:'hardik@gmail.com',number:'1234567896'},
    {name:'hiren',email:'hiren@gmail.com',number:'9734565896'},
    {name:'shyam',email:'shyam@gmail.com',number:'9134564896'},
    {name:'hitesh',email:'hitesh@gmail.com',number:'9535667896'},
    {name:'harsh',email:'harsh@gmail.com',number:'8934567896'},
    {name:'sanjeev',email:'sanjeev@gmail.com',number:'9994565896'},
    {name:'lay',email:'lay@gmail.com',number:'9139864896'},
    {name:'heena',email:'heena@gmail.com',number:'7535667896'},
    {name:'shivangi',email:'shivangi@gmail.com',number:'7934567896'},
    {name:'prachi',email:'prachi@gmail.com',number:'9994565896'},
    {name:'harish',email:'harish@gmail.com',number:'9737864896'},
    {name:'bhvyansh',email:'bhvyansh@gmail.com',number:'7535667896'},
    {name:'rana',email:'rana@gmail.com',number:'7934567896'},
    {name:'deep',email:'deep@gmail.com',number:'9994565896'},
    {name:'aayush',email:'aayush@gmail.com',number:'9737864896'},
    {name:'nihar',email:'nihar@gmail.com',number:'7535667896'},
    {name:'guarva',email:'guarva@gmail.com',number:'7934567896'},
    {name:'shailesh',email:'shailesh@gmail.com',number:'9994565896'},
    {name:'mohit',email:'mohit@gmail.com',number:'9737864896'},
    {name:'akshay',email:'akshay@gmail.com',number:'7535667896'},
    {name:'suresh',email:'suresh@gmail.com',number:'7535667896'},

]);

