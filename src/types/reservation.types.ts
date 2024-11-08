  // Reservations Interface
  export interface Reservation {
    reservations_id: number;  // Primary key
    quantity: number;
    name: string;
    phone: string;
    email: string;
    time: Date;
    created_at: Date;
    updated_at: Date;
  }
  