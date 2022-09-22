export interface Allstudentregistration {
     createdAt: string;
    name: string;
    avatar: string;
    id: string;
    gender: string;
    mobile: number;
    email: string;
    batch: string;
    address:{
        city: string;
        mandal: string;
        district: string;
        state: string;
        pincode: undefined;

    }
    educations:[{
        qualification: string;
        year: number;
        percentage: number;
    },
    {
    qualification: string;
    year: number;
    percentage:number;

    }
]


    
   company:{
    companyname: string;
    location: string;
    package: number;
    offerdate: undefined;
   },
   sourcetype: string;
   direct: string;
   referalname:undefined;
   source: string;
}


