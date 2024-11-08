  // Shift Interface
  export interface Shift {
    shift_id: number;  // Primary key
    name: string;
    start_time: string;  // TIME
    end_time: string;    // TIME
    created_at: Date;
    updated_at: Date;
  }
  