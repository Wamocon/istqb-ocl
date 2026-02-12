import { supabase } from './supabase'
import type {
    Lead,
    Order,
    Product,
    SelbsttestResult,
    Testimonial,
    FaqItem,
    InsertOrder,
} from '@/types/database'

// ============================================
// CUSTOM ERROR CLASS
// ============================================

export class ApiError extends Error {
    code: string

    constructor(message: string, code: string) {
        super(message)
        this.name = 'ApiError'
        this.code = code
    }
}

// ============================================
// LEADS API (Newsletter Subscriptions)
// ============================================

/**
 * Check if a lead with given email already exists
 */
export async function checkLeadExists(email: string): Promise<boolean> {
    const { data, error } = await supabase
        .from('leads')
        .select('id')
        .eq('email', email.toLowerCase().trim())
        .maybeSingle()

    if (error) {
        console.error('Error checking lead:', error)
        return false
    }

    return !!data
}

/**
 * Create a new lead (e.g., from LeadMagnet dialog, newsletter signup)
 * Throws ApiError with code 'DUPLICATE_EMAIL' if email already exists
 */
export async function createLead(data: {
    email: string
    source?: string
    consent_given: boolean
    consent_text?: string
    phone?: string
}): Promise<Lead> {
    const normalizedEmail = data.email.toLowerCase().trim()

    // Check for existing lead with same email
    const exists = await checkLeadExists(normalizedEmail)
    if (exists) {
        throw new ApiError(
            'Du hast dich bereits für unseren Newsletter angemeldet. Wir senden regelmäßig Updates an deine E-Mail-Adresse.',
            'DUPLICATE_EMAIL'
        )
    }

    const { data: lead, error } = await supabase
        .from('leads')
        .insert({
            email: normalizedEmail,
            source: data.source || 'website',
            consent_given: data.consent_given,
            consent_text: data.consent_text,
            phone: data.phone,
        })
        .select()
        .single()

    if (error) {
        console.error('Error creating lead:', error)
        // Handle unique constraint violation
        if (error.code === '23505') {
            throw new ApiError(
                'Du hast dich bereits für unseren Newsletter angemeldet. Wir senden regelmäßig Updates an deine E-Mail-Adresse.',
                'DUPLICATE_EMAIL'
            )
        }
        throw error
    }

    return lead
}

/**
 * Get all leads (for admin view)
 */
export async function getLeads(): Promise<Lead[]> {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching leads:', error)
        throw error
    }

    return data || []
}

// ============================================
// ORDERS API (Course Purchases)
// ============================================

/**
 * Check if user has a pending order for the same product
 */
export async function checkPendingOrder(email: string, productName: string): Promise<boolean> {
    const { data, error } = await supabase
        .from('orders')
        .select('id')
        .eq('email', email.toLowerCase().trim())
        .eq('product_name', productName)
        .in('status', ['pending', 'paid'])
        .limit(1)

    if (error) {
        console.error('Error checking pending order:', error)
        return false
    }

    return data !== null && data.length > 0
}

/**
 * Create a new order from purchase form
 * Throws ApiError with code 'DUPLICATE_ORDER' if user already has pending/paid order for same product
 */
export async function createOrder(data: {
    // Personal Info
    anrede: string
    vorname: string
    nachname: string
    email: string
    // Billing Address
    strasse: string
    hausnummer: string
    plz: string
    ort: string
    land: string
    // Company Info (Optional)
    firma?: string
    ustIdNr?: string
    // Product Info
    productName: string
    price: number
    // Payment
    zahlungsart: 'einmalzahlung' | 'ratenzahlung'
    totalAmount: number
    // Legal
    agbAkzeptiert: boolean
    widerrufsbelehrungAkzeptiert: boolean
    datenschutzAkzeptiert: boolean
}): Promise<Order> {
    const normalizedEmail = data.email.toLowerCase().trim()

    // Check for existing pending/paid order with same email and product
    const hasPendingOrder = await checkPendingOrder(normalizedEmail, data.productName)
    if (hasPendingOrder) {
        throw new ApiError(
            'Du hast diesen Kurs bereits bestellt. Falls du Fragen zu deiner Bestellung hast, kontaktiere uns bitte unter info@test-it-academy.de',
            'DUPLICATE_ORDER'
        )
    }

    const orderData: InsertOrder = {
        anrede: data.anrede,
        vorname: data.vorname,
        nachname: data.nachname,
        email: normalizedEmail,
        strasse: data.strasse,
        hausnummer: data.hausnummer,
        plz: data.plz,
        ort: data.ort,
        land: data.land,
        firma: data.firma || null,
        ust_id_nr: data.ustIdNr || null,
        product_name: data.productName,
        price: data.price,
        zahlungsart: data.zahlungsart,
        total_amount: data.totalAmount,
        agb_akzeptiert: data.agbAkzeptiert,
        widerrufsbelehrung_akzeptiert: data.widerrufsbelehrungAkzeptiert,
        datenschutz_akzeptiert: data.datenschutzAkzeptiert,
    }

    const { data: order, error } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single()

    if (error) {
        console.error('Error creating order:', error)
        throw error
    }

    return order
}

/**
 * Get all orders (for admin view)
 */
export async function getOrders(): Promise<Order[]> {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching orders:', error)
        throw error
    }

    return data || []
}

// ============================================
// SELBSTTEST API
// ============================================

/**
 * Save selbsttest results
 */
export async function saveSelbsttestResult(data: {
    email?: string
    lead_id?: string
    answers: Record<number, number>
    total_score: number
    level: 'starter' | 'fortgeschritten' | 'ready'
}): Promise<SelbsttestResult> {
    const { data: result, error } = await supabase
        .from('selbsttest_results')
        .insert({
            email: data.email,
            lead_id: data.lead_id,
            answers: data.answers,
            total_score: data.total_score,
            level: data.level,
        })
        .select()
        .single()

    if (error) {
        console.error('Error saving selbsttest result:', error)
        throw error
    }

    return result
}

// ============================================
// PRODUCTS API
// ============================================

/**
 * Get all active products
 */
export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('price', { ascending: true })

    if (error) {
        console.error('Error fetching products:', error)
        throw error
    }

    return data || []
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single()

    if (error) {
        console.error('Error fetching product:', error)
        return null
    }

    return data
}

// ============================================
// TESTIMONIALS API
// ============================================

/**
 * Get all active testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true })

    if (error) {
        console.error('Error fetching testimonials:', error)
        throw error
    }

    return data || []
}

/**
 * Get featured testimonials only
 */
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .eq('is_featured', true)
        .order('display_order', { ascending: true })

    if (error) {
        console.error('Error fetching featured testimonials:', error)
        throw error
    }

    return data || []
}

/**
 * Get video testimonials only (non-featured active ones)
 */
export async function getVideoTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .eq('is_featured', false)
        .order('display_order', { ascending: true })

    if (error) {
        console.error('Error fetching video testimonials:', error)
        throw error
    }

    return data || []
}

// ============================================
// FAQ API
// ============================================

/**
 * Get all active FAQ items
 */
export async function getFaqItems(): Promise<FaqItem[]> {
    const { data, error } = await supabase
        .from('faq_items')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true })

    if (error) {
        console.error('Error fetching FAQ items:', error)
        throw error
    }

    return data || []
}
