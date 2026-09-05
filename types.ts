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
