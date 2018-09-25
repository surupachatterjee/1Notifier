import { Friend } from './friend';


export const FRIENDS: Friend[] = [

    {id: 1, fname:"Atindra", lname:"Diesel", friendsince:"Aug 2015",
    imageURL: "https://timesofindia.indiatimes.com/photo/60087596.cms", location:"NYC",
    isActive: false,
    lastSeen: new Date("November 11, 2017 1:15:35 pm"),
    messages:[]},

    {id: 2, fname:"Suraj", lname:"Musk", friendsince:"Sept 2011",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg", location:"Palo Alto",
    isActive:true,
    lastSeen: new Date(Date.now()),
    messages:["Hi there", "What\'s up ?","Nothing much"]},

    {id: 3, fname:"Ellie", lname:"Goulding", friendsince:"Jan 2014",
    imageURL: "https://i.pinimg.com/736x/c6/9b/6f/c69b6fde59e1377f9de03e0da2d00566--hollywood-singers-ellie-goulding-haircut.jpg",
    location:"London", isActive:true,
    lastSeen: new Date("November 10, 2017 11:13:00 pm"),
    messages:["I am heading to USA for a concert.", "Do you have anything lined up ?"]},


    {id: 4, fname:"Mukul", lname:"Zuckerberg", friendsince:"Sept 2016",
    imageURL: "https://img.huffingtonpost.com/asset/58684f4c1500002300916aae.jpeg?ops=crop_198_47_1884_1792,scalefit_720_noupscale",
    location:"San Francisco", isActive:false,
    lastSeen: new Date("October 31, 2017 11:13:00 am"),
    messages:[]},

    {id: 5, fname:"Taylor", lname:"Swift", friendsince:"Sept 2017",
    imageURL: "https://pbs.twimg.com/profile_images/900399601282424832/sNDnYYZe_400x400.jpg",
    location:"New Jersey", isActive:true,
    lastSeen: new Date(Date.now()),
    messages:[]},



];
