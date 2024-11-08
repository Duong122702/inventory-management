// Transactions Interface
export interface Transaction {
    transactions_id: number;  // Primary key
    providers_id: number;     // Foreign key to Providers
    products_id: number;      // Foreign key to Products
    status: string;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    description: string;
    created_at: Date;
    updated_at: Date;
  }