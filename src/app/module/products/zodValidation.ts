import { z } from "zod";

export const StationeryProductValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, "Name must be at least 2 characters long"),

  brand: z
    .string({
      required_error: "Brand is required",
    })
    .min(2, "Brand must be at least 2 characters long"),

  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be greater than 0"),

  category: z.enum(["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"], {
    required_error: "Category is required",
  }),

  description: z
    .string({
      required_error: "Description is required",
    })
    .min(10, "Description must be at least 10 characters long"),

  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative"),

  inStock: z
    .boolean({
      required_error: "InStock status is required",
    }),
});


export default StationeryProductValidationSchema;
