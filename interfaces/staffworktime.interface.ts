interface StaffWork {
    staff_id: number;
    name: string;
    gender: "nam" | "nữ" | "khác"; // Assuming gender can be "nam" (male), "nữ" (female), or "khác" (other)
    birthday: string; // ISO 8601 formatted date-time string
    image_url: string;
    phone: string;
    citizen_id: string;
    role: string; // Staff role (e.g., Bồi Bàn)
    wage: string; // Assuming wage is represented as a string
    username: string;
    password_hash: string; // Sensitive information, consider omitting from the interface
    email: string;
    created_at: string; // ISO 8601 formatted date-time string
    updated_at: string; // ISO 8601 formatted date-time string
    shifts: StaffShift[]; // Array of StaffShift objects
  }
  
  interface StaffShift {
    staff_shift_id: number;
    shift_name: string;
    start_time: string; // Time format (e.g., "20:00:00")
    end_time: string;   // Time format (e.g., "24:00:00")
    date: string;       // ISO 8601 formatted date-time string
    is_attendance: boolean;
  }