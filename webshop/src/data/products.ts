export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export const products: Product[] = [
    { id: "1", name: "Wireless Mouse", price: 29.99, image: "../src/components/assets/image/mouse.jpg" },
    { id: "2", name: "Bluetooth Headphones", price: 99.99, image: "../src/components/assets/image/headphone.jpg" },
    { id: "3", name: "4K Smart TV", price: 499.99, image: "../src/components/assets/image/tv.png" },
    { id: "4", name: "Gaming Keyboard", price: 79.99, image: "../src/components/assets/image/keyboard.jpg" },  // Image generation failed for this one
    { id: "5", name: "Laptop Stand", price: 29.99, image: "../src/components/assets/image/stand.avif" },  // Add an image if available
    { id: "6", name: "Smartphone Charger", price: 19.99, image: "../src/components/assets/image/charger.webp" },  // Add an image if available
    { id: "7", name: "Portable Power Bank", price: 39.99, image: "../src/components/assets/image/powerbank.webp" },  // Add an image if available
    { id: "8", name: "Smartwatch", price: 149.99, image: "../src/components/assets/image/smartwatch.webp" },  // Add an image if available
    { id: "9", name: "Ergonomic Chair", price: 199.99, image: "../src/components/assets/image/chair.jpg" },  // Add an image if available
    { id: "10", name: "Noise Cancelling Earbuds", price: 89.99, image: "../src/components/assets/image/buds.jpg" },  // Add an image if available
    { id: "11", name: "LED Desk Lamp", price: 39.99, image: "../src/components/assets/image/lamp.jpg" },  // Add an image if available
    { id: "12", name: "External SSD", price: 129.99, image: "../src/components/assets/image/ssd.webp" },  // Add an image if available
    { id: "13", name: "HD Webcam", price: 69.99, image: "../src/components/assets/image/cam.jpg" },  // Add an image if available
    { id: "14", name: "Wireless Keyboard", price: 49.99, image: "../src/components/assets/image/keyboard2.jpg" },  // Add an image if available
    { id: "15", name: "Bluetooth Speaker", price: 59.99, image: "../src/components/assets/image/speaker.jpg" }  // Add an image if available
];
