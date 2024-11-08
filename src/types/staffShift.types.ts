  // Staff_Shift Interface (junction table)
  export interface StaffShift {
    staff_id: number;    // Foreign key to Staff
    shift_id: number;    // Foreign key to Shift
    date: Date;
    created_at: Date;
    updated_at: Date;
  }