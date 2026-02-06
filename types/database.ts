export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            faq_items: {
                Row: {
                    answer: string
                    category: string | null
                    created_at: string
                    display_order: number
                    id: string
                    is_active: boolean
                    question: string
                    updated_at: string
                }
                Insert: {
                    answer: string
                    category?: string | null
                    created_at?: string
                    display_order?: number
                    id?: string
                    is_active?: boolean
                    question: string
                    updated_at?: string
                }
                Update: {
                    answer?: string
                    category?: string | null
                    created_at?: string
                    display_order?: number
                    id?: string
                    is_active?: boolean
                    question?: string
                    updated_at?: string
                }
                Relationships: []
            }
            leads: {
                Row: {
                    consent_given: boolean
                    consent_text: string | null
                    converted_to_user: boolean
                    created_at: string
                    email: string
                    id: string
                    ip_address: string | null
                    source: string | null
                }
                Insert: {
                    consent_given?: boolean
                    consent_text?: string | null
                    converted_to_user?: boolean
                    created_at?: string
                    email: string
                    id?: string
                    ip_address?: string | null
                    source?: string | null
                }
                Update: {
                    consent_given?: boolean
                    consent_text?: string | null
                    converted_to_user?: boolean
                    created_at?: string
                    email?: string
                    id?: string
                    ip_address?: string | null
                    source?: string | null
                }
                Relationships: []
            }
            orders: {
                Row: {
                    id: string
                    order_number: string
                    anrede: string
                    vorname: string
                    nachname: string
                    email: string
                    strasse: string
                    hausnummer: string
                    plz: string
                    ort: string
                    land: string
                    firma: string | null
                    ust_id_nr: string | null
                    product_name: string
                    price: number
                    zahlungsart: string
                    total_amount: number
                    status: string
                    agb_akzeptiert: boolean
                    widerrufsbelehrung_akzeptiert: boolean
                    datenschutz_akzeptiert: boolean
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    order_number?: string
                    anrede: string
                    vorname: string
                    nachname: string
                    email: string
                    strasse: string
                    hausnummer: string
                    plz: string
                    ort: string
                    land?: string
                    firma?: string | null
                    ust_id_nr?: string | null
                    product_name: string
                    price: number
                    zahlungsart: string
                    total_amount: number
                    status?: string
                    agb_akzeptiert?: boolean
                    widerrufsbelehrung_akzeptiert?: boolean
                    datenschutz_akzeptiert?: boolean
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    order_number?: string
                    anrede?: string
                    vorname?: string
                    nachname?: string
                    email?: string
                    strasse?: string
                    hausnummer?: string
                    plz?: string
                    ort?: string
                    land?: string
                    firma?: string | null
                    ust_id_nr?: string | null
                    product_name?: string
                    price?: number
                    zahlungsart?: string
                    total_amount?: number
                    status?: string
                    agb_akzeptiert?: boolean
                    widerrufsbelehrung_akzeptiert?: boolean
                    datenschutz_akzeptiert?: boolean
                    created_at?: string
                    updated_at?: string
                }
                Relationships: []
            }
            products: {
                Row: {
                    created_at: string
                    description: string | null
                    features: Json | null
                    id: string
                    installment_count: number | null
                    installment_price: number | null
                    is_active: boolean
                    name: string
                    price: number
                    updated_at: string
                }
                Insert: {
                    created_at?: string
                    description?: string | null
                    features?: Json | null
                    id?: string
                    installment_count?: number | null
                    installment_price?: number | null
                    is_active?: boolean
                    name: string
                    price: number
                    updated_at?: string
                }
                Update: {
                    created_at?: string
                    description?: string | null
                    features?: Json | null
                    id?: string
                    installment_count?: number | null
                    installment_price?: number | null
                    is_active?: boolean
                    name?: string
                    price?: number
                    updated_at?: string
                }
                Relationships: []
            }
            selbsttest_results: {
                Row: {
                    answers: Json
                    created_at: string
                    email: string | null
                    id: string
                    lead_id: string | null
                    level: string
                    total_score: number
                }
                Insert: {
                    answers: Json
                    created_at?: string
                    email?: string | null
                    id?: string
                    lead_id?: string | null
                    level: string
                    total_score: number
                }
                Update: {
                    answers?: Json
                    created_at?: string
                    email?: string | null
                    id?: string
                    lead_id?: string | null
                    level?: string
                    total_score?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "selbsttest_results_lead_id_fkey"
                        columns: ["lead_id"]
                        isOneToOne: false
                        referencedRelation: "leads"
                        referencedColumns: ["id"]
                    },
                ]
            }
            testimonials: {
                Row: {
                    category: string | null
                    challenge: Json | null
                    company: string | null
                    created_at: string
                    display_order: number
                    goal: Json | null
                    id: string
                    image_url: string | null
                    is_active: boolean
                    is_featured: boolean
                    name: string
                    quote: string
                    rating: number | null
                    results: Json | null
                    role: string | null
                    stats: Json | null
                    video_thumbnail: string | null
                    video_url: string | null
                }
                Insert: {
                    category?: string | null
                    challenge?: Json | null
                    company?: string | null
                    created_at?: string
                    display_order?: number
                    goal?: Json | null
                    id?: string
                    image_url?: string | null
                    is_active?: boolean
                    is_featured?: boolean
                    name: string
                    quote: string
                    rating?: number | null
                    results?: Json | null
                    role?: string | null
                    stats?: Json | null
                    video_thumbnail?: string | null
                    video_url?: string | null
                }
                Update: {
                    category?: string | null
                    challenge?: Json | null
                    company?: string | null
                    created_at?: string
                    display_order?: number
                    goal?: Json | null
                    id?: string
                    image_url?: string | null
                    is_active?: boolean
                    is_featured?: boolean
                    name?: string
                    quote?: string
                    rating?: number | null
                    results?: Json | null
                    role?: string | null
                    stats?: Json | null
                    video_thumbnail?: string | null
                    video_url?: string | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

// Helper types for easier usage
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Specific table types for convenience
export type Lead = Tables<'leads'>
export type Order = Tables<'orders'>
export type Product = Tables<'products'>
export type SelbsttestResult = Tables<'selbsttest_results'>
export type Testimonial = Tables<'testimonials'>
export type FaqItem = Tables<'faq_items'>

// Insert types
export type InsertLead = InsertTables<'leads'>
export type InsertOrder = InsertTables<'orders'>
export type InsertSelbsttestResult = InsertTables<'selbsttest_results'>
