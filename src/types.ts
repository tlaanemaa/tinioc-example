/**
 * This is the interface for our Employee objects that we receive from the API in the employees client.
 * Ideally this type should be together with incoming response validation schema,
 * since that's what gives the response it's shape but that's out of scope for this example
 * so it's just here.
 */
export interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
