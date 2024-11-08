  // Tables_Reservations Interface (junction table)
  export interface TableReservation {
    tables_id: number;         // Foreign key to Tables
    reservations_id: number;   // Foreign key to Reservations
    created_at: Date;
    updated_at: Date;
  }
  