import React from 'react';

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  iconName: string;
}

export interface ClientPartner {
  name: string;
  category: string;
  description: string;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FleetCalculationInput {
  trucks: number;
  monthlyKmPerTruck: number;
  currentKmPerLiter: number;
  dieselPricePerLiter: number;
  expectedSavingsPct: number;
}

export interface FleetCalculationResult {
  currentMonthlyLiters: number;
  savedMonthlyLiters: number;
  savedAnnualLiters: number;
  monthlySavingsMoney: number;
  annualSavingsMoney: number;
  co2ReductionTonsAnnual: number;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  fleetSize: string;
  engineTypes: string;
  message: string;
  requestDemo: boolean;
}

/**
 * Signals collected by the form to let the Apps Script endpoint separate real
 * submissions from bot spam. None of this is lead data; it is never stored in
 * the Leads sheet, only used to decide whether a submission is quarantined.
 */
export interface AntiSpamSignals {
  /** Honeypot field. Hidden from real users, so any value means a bot filled it. */
  hp: string;
  /** Milliseconds between the form rendering and the user submitting it. */
  elapsedMs: number;
  /** Marker proving the payload came from the form rather than a direct POST. */
  fv: string;
}

export interface LeadRecord {
  id: string;
  timestamp: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  fleetSize: string;
  engineTypes: string;
  message: string;
  requestDemo: boolean;
  syncedToGoogleSheets: boolean;
  syncedAt?: string;
}

export interface GoogleSheetsConfig {
  spreadsheetId: string;
  spreadsheetUrl: string;
  spreadsheetTitle: string;
  webhookUrl?: string;
  lastConnectedEmail?: string;
}
