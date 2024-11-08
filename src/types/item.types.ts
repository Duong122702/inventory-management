  // Items Interface
  export interface Item {
    items_id: number;  // Primary key
    name: string;
    image_url: string;
    quantity: number;
    unit: string;
    category: string;
    price: number;
    created_at: Date;
    updated_at: Date;
  }