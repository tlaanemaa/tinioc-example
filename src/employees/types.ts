// TODO: This should actually belong to whoever owns that object.
// Probably the incoming response schema? Since that gives it shape?
export interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
