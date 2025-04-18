import { users, type User, type InsertUser, contacts, type Contact, type InsertContact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private userId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.userId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const now = new Date().toISOString();
    const newContact: Contact = { 
      ...contact, 
      id, 
      createdAt: now 
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
}

export const storage = new MemStorage();
