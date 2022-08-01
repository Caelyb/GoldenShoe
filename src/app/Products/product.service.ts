export class ProductService{
    getProducts() {

            return [
            {   
                id: "1",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjR4qfqJ3Xg4dTmFrhjDt31GDPaA-yyCxKdA&usqp=CAU",
                productName: "Mens leather shoes",
                price: "£30",
                releasedDate: "June 5th 2016",
                description: "Fashionable mens leather shoes. Very comfortable. Made from genuine leather ",        
                rating: 4,
                numOfReviews: 20,
                sizes: [5,6,7,8,9,10,11],
                colours: [" brown", " black"],
                instock: true,
                uk_delivery: [1,3] // in days
            },
            { 
                id: "2",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQkRsfeQgmmgmjdMn3E87jy-EFSwoK4KZqw&usqp=CAU",
                price: "£50",
                productName: "Walking boots",
                releasedDate: "April 8th 2020",
                description: "These Boots are perfect for hiking, fishing, hill walking or general outdoor use. Durable with a steel toe cap and has stylish camo design. sizes 5-11",        
                rating: 3,
                numOfReviews: 12,
                sizes: [6,7,8,9,10],    
                colours: [" Oak brown"],
                instock: false,
                uk_delivery: [1,3] // in days      
            },
            {   
                id: "3",              
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJrLHmNxlhxiZGYNrG52BFAayDuEY4Tbuo8KwDiUZ1lmM6IKR6JvodyynjlELiFQYlXU&usqp=CAU",
                price: "£20",
                productName: "White trainers",
                releasedDate: "November 12th 2019",
                description: "All white stylish trainers with rubber soles for extra grip. sizes 5-11",        
                rating: 5,
                numOfReviews: 2,
                sizes: [5,6,7,8,9,11,12],
                colours: [" White with blue styling", " White with gold styling"],    
                instock: false,
                uk_delivery: [1,3] // in days 
            }];
        }     
    }
