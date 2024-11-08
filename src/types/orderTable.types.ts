  // Orders_Tables Interface (junction table)
  export interface OrderTable {
    orders_id: number;    // Foreign key to Orders
    tables_id: number;    // Foreign key to Tables
    created_at: Date;
    updated_at: Date;
  }
  