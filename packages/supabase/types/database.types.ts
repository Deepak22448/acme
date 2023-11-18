export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      CartItem: {
        Row: {
          created_at: string;
          id: string;
          productId: string;
          quantity: number;
          size: Database["public"]["Enums"]["Size"];
          userId: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          productId: string;
          quantity: number;
          size: Database["public"]["Enums"]["Size"];
          userId: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          productId?: string;
          quantity?: number;
          size?: Database["public"]["Enums"]["Size"];
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "CartItem_productId_fkey";
            columns: ["productId"];
            referencedRelation: "Product";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "CartItem_userId_fkey";
            columns: ["userId"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      Product: {
        Row: {
          created_at: string;
          id: string;
          imgUrl: string;
          name: string;
          price: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          imgUrl: string;
          name?: string;
          price: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          imgUrl?: string;
          name?: string;
          price?: number;
        };
        Relationships: [];
      };
      ProductSizeStock: {
        Row: {
          id: string;
          productId: string;
          quantity: number;
          size: Database["public"]["Enums"]["Size"];
        };
        Insert: {
          id?: string;
          productId?: string;
          quantity: number;
          size: Database["public"]["Enums"]["Size"];
        };
        Update: {
          id?: string;
          productId?: string;
          quantity?: number;
          size?: Database["public"]["Enums"]["Size"];
        };
        Relationships: [
          {
            foreignKeyName: "ProductSizeStock_Product_fkey";
            columns: ["productId"];
            referencedRelation: "Product";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      Size: "S" | "M" | "L" | "XL";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];
