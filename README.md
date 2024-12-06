# Hazi | E-commerce Web App

**Live Link**: [Live Demo](https://hazi-ecommerce.onrender.com/)  

## Overview

Hazi is an intuitive and user-friendly e-commerce platform designed to sell dresses online. This platform allows users to browse through a variety of outfits, add them to their cart, and complete purchases seamlessly. The app focuses on providing a responsive and dynamic user interface on the frontend while ensuring robust backend performance for smooth operations.

## Features

- **User Authentication**: Users can register, log in, and manage their profiles to track orders.
- **Product Catalog**: A detailed product catalog with filters to easily browse through available dresses.
- **Product Images**: Users can view high-quality images of products, uploaded using Multer for seamless image management.
- **Shopping Cart & Checkout**: Users can add items to their shopping cart and proceed to checkout.
- **Order Management**: Admins can view, process, and manage customer orders.
- **Payment Integration**: Secure payment gateway integration for seamless transaction handling.

## Technologies Used

### **Frontend**

- **JavaScript**: Used to create a dynamic, interactive user interface.
- **HBS (Handlebars)**: A templating engine to create dynamic HTML views with reusable components.
- **CSS**: For styling and responsive layout.

### **Backend**

- **Node.js**: The backend of the application is built using Node.js to ensure scalable and efficient server-side operations.
- **Express.js**: A web framework used to build and handle routes, middleware, and server-side logic.
- **Multer**: For handling image uploads, making it easier to add product images.
- **MongoDB**: Database used for storing user and product data.


---

## **Setup Instructions**

### **Prerequisites**
- Node.js >= 14.x
- npm or yarn  

### **Installation**

1. Clone the repository:  
   ```bash
   git clone git@github.com:mubasirvc/Hazi_Ecommerce.git
   cd HAZI_ECOMMERCE

2. Setup environment variables:
   Create a .env file in the root directory with the following:
   ```bash
   PORT=5000
   MONGO_URL=<your-mongodb-url>
   key_id = <your-razorpay_key_id>,
   key_secret = <your-razorpay_key_secret>
   SMTP_HOST = <your-SMTP_HOST>
   SMTP_USER = <your-SMTP_USER >
   SMTP_PASS = <your-SMTP_PASSWORD>
   SMTP_PORT = <your-SMTP_PORT>

4. Install dependencies:  
   ```bash
   npm install

5. Start the development server:  
   ```bash
   npm start

4. Open your browser and navigate to http://localhost:3000:  

## **Dummy Accounts**
  
### **End User**
- **Email**: `mubasirumbi@gmail.com`  
- **Password**: `12345678`

## **Screenshots**

1. **Landing Page**  
   ![Landing Page](/public/ss/ss1.png)
   ![Landing Page](/public/ss/ss2.png)

2. **Products Page** 
*Select a product and view its details or add it to your wishlist.*   
   ![Landing Page](/public/ss/ss3.png)
   
 
*View single product details and add to cart.*   
   ![Landing Page](/public/ss/ss4.png)

3. **Cart Page** 
*View cart details.*   
   ![Landing Page](/public/ss/ss5.png)
   
4. **Checkout Page** 
*Select or add an address, choose a payment mode, and place the order*   
   ![Landing Page](/public/ss/ss6.png)
   
 
5. **Profile Page** 
*Manage user account details.* 
   ![Landing Page](/public/ss/ss7.png)


``

## **Contact**

**Mubasir VC**  
[Portfolio](https://my-portfolio-ten-sand-14.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/mubasir-vc/)
