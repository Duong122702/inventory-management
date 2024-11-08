  // Bill Interface
export interface Bill {
    bill_id: number;      // Primary key
    total: number;
    orders_id: number;    // Foreign key to Orders
    staff_id: number;     // Foreign key to Staff (assuming Staff table exists)
    created_at: Date;
    updated_at: Date;
  }
  