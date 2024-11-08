  
  // Products Interface
export interface Product {
    products_id: number;  // Primary key
    name: string;
    image_url: string;
    color: string;
    quantity: number;
    category: string;
    weight: number;
    unit: string;
    total_price: number;
    customer_price: number;
    description: string;
    created_at: Date;
    updated_at: Date;
  } 
  