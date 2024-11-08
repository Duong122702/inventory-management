  // Products_Items Interface (junction table)
  export interface ProductItem {
    products_id: number;  // Foreign key to Products
    items_id: number;     // Foreign key to Items
    created_at: Date;
    updated_at: Date;
  }