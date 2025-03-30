import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact in the database
      const contact = await storage.createContact({
        name: validatedData.name,
        email: validatedData.email,
        business: validatedData.business,
        message: validatedData.message,
      });
      
      // Email is now sent from the client side, we just store the contact
      
      res.status(200).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Server error processing your request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}