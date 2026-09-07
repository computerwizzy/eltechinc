export type Language = 'en' | 'es';

export interface Translations {
  // Common & Header
  topBarBadge: string;
  topBarAdvisory: string;
  usaOffice: string;
  mexicoOffice: string;
  navHome: string;
  navAbout: string;
  navBenefits: string;
  navMission: string;
  navCalculator: string;
  navClients: string;
  navAI: string;
  navContact: string;
  demoButton: string;
  mobileNavTitle: string;

  // Hero
  heroBadge: string;
  heroTitlePrefix: string;
  heroTitleGradient: string;
  heroSubtitle: string;
  heroSubtitleHighlight1: string;
  heroSubtitleHighlight2: string;
  heroCtaDemo: string;
  heroCtaCalc: string;
  metric1Val: string;
  metric1Label: string;
  metric2Val: string;
  metric2Label: string;
  metric3Val: string;
  metric3Label: string;
  metric4Val: string;
  metric4Label: string;
  endorsementsTitle: string;
  advisorBadge: string;

  // About
  aboutBadge: string;
  aboutTitle1: string;
  aboutTitleHighlight: string;
  aboutSubtitle: string;
  aboutBannerTag: string;
  aboutBannerHeading: string;
  aboutBannerText: string;
  aboutNonIntrusiveTitle: string;
  aboutNonIntrusiveText: string;
  aboutPhysicsTitle: string;
  aboutPhysicsTorqueLabel: string;
  aboutPhysicsTorqueVal: string;
  aboutPhysicsRpmLabel: string;
  aboutPhysicsRpmVal: string;
  aboutPhysicsConsumptionLabel: string;
  aboutPhysicsConsumptionVal: string;
  aboutPhysicsVerificationLabel: string;
  aboutPhysicsVerificationVal: string;
  q1Title: string;
  q1Text: string;
  q2Title: string;
  q2Text: string;
  q3Title: string;
  q3Text: string;
  q4Title: string;
  q4Text: string;
  factorsTitle: string;
  factor1Title: string;
  factor1Desc: string;
  factor2Title: string;
  factor2Desc: string;
  factor3Title: string;
  factor3Desc: string;
  factor4Title: string;
  factor4Desc: string;
  factor5Title: string;
  factor5Desc: string;
  factor6Title: string;
  factor6Desc: string;

  // Benefits
  benefitsBadge: string;
  benefitsTitle1: string;
  benefitsTitleHighlight: string;
  benefitsSubtitle: string;
  pillar1Title: string;
  pillar1Text: string;
  pillar1TrustNote: string;
  pillar3Title: string;
  pillar3Text: string;
  pillar4Title: string;
  pillar4Text: string;
  pillar5Title: string;
  pillar5Text: string;
  benefitsFootnote: string;
  advisoryTag: string;
  advisoryHeading: string;
  advisoryDesc: string;
  advisoryBullet1: string;
  advisoryBullet2: string;
  advisoryBullet3: string;
  advisoryCta: string;
  resultsSectionTitle: string;
  resultsSectionSubtitle: string;
  res1Title: string;
  res1Desc: string;
  res2Title: string;
  res2Desc: string;
  res3Title: string;
  res3Desc: string;
  res4Title: string;
  res4Desc: string;
  res5Title: string;
  res5Desc: string;
  res6Title: string;
  res6Desc: string;

  // Mission & Vision
  missionVisionBadge: string;
  missionVisionTitle: string;
  missionVisionSubtitle: string;
  missionTag: string;
  missionHeading: string;
  missionQuote: string;
  missionPill1: string;
  missionPill2: string;
  visionTag: string;
  visionHeading: string;
  visionQuote: string;
  visionPill1: string;
  visionPill2: string;

  // Clients
  clientsBadge: string;
  clientsTitle: string;
  clientsSubtitle: string;
  dbTag: string;
  dbHeading: string;
  dbText: string;
  dbBoxTitle: string;
  dbBoxStandards: string;
  dbBoxNote: string;

  // Fleet Calculator
  calcBadge: string;
  calcTitle1: string;
  calcTitleHighlight: string;
  calcSubtitle: string;
  calcParamsTitle: string;
  calcCurrencyLabel: string;
  calcResetTooltip: string;
  calcTrucksLabel: string;
  calcTrucksUnits: string;
  calcKmLabel: string;
  calcKmPerLiterLabel: string;
  calcKmPerLiterLowNote: string;
  calcDieselPriceLabel: string;
  calcSavingsTargetLabel: string;
  calcSavingsConservative: string;
  calcSavingsAverage: string;
  calcSavingsSevere: string;
  calcResultsTitle: string;
  calcResultsTelemetryBadge: string;
  calcMonthlyMoneyLabel: string;
  calcMonthlyLitersEq: string;
  calcAnnualMoneyLabel: string;
  calcAnnualLitersEq: string;
  calcCo2Headline: string;
  calcCo2Note: string;
  calcApplyCta: string;
  calcDisclaimer: string;

  // AI Consultant
  aiBadge: string;
  aiTitle: string;
  aiTitleHighlight: string;
  aiSubtitle: string;
  aiFaqHeader: string;
  aiFaq1: string;
  aiFaq2: string;
  aiFaq3: string;
  aiFaq4: string;
  aiInputLabel: string;
  aiInputPlaceholder: string;
  aiGuaranteedNote: string;
  aiSubmitBtn: string;
  aiLoadingMessage: string;
  aiLoadingSub: string;
  aiResponseHeader: string;
  aiResponseSupport: string;

  // Contact
  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  contactMexicoTitle: string;
  contactMexicoTag: string;
  contactMexicoDesc: string;
  contactMexicoPhoneLabel: string;
  contactMexicoLocLabel: string;
  contactMexicoCity: string;
  contactUsaTitle: string;
  contactUsaTag: string;
  contactUsaDesc: string;
  contactUsaAddressLabel: string;
  contactUsaEmailLabel: string;
  contactGuaranteeTitle: string;
  contactGuaranteeDesc: string;
  contactSuccessTitle: string;
  contactResetBtn: string;
  contactFormHeading: string;
  contactFormSubtitle: string;
  contactFieldName: string;
  contactPlaceholderName: string;
  contactFieldCompany: string;
  contactPlaceholderCompany: string;
  contactFieldEmail: string;
  contactFieldPhone: string;
  contactFieldFleetSize: string;
  contactFleetSelectPlaceholder: string;
  contactFleetOption1: string;
  contactFleetOption2: string;
  contactFleetOption3: string;
  contactFleetOption4: string;
  contactFleetOption5: string;
  contactFieldEngines: string;
  contactPlaceholderEngines: string;
  contactDemoCheckboxStrong: string;
  contactDemoCheckboxText: string;
  contactFieldMessage: string;
  contactPlaceholderMessage: string;
  contactSubmitBtn: string;
  contactPrivacyNotice: string;

  // Footer
  footerDesc: string;
  footerTelemetryNote: string;
  footerSectionsTitle: string;
  footerContactTitle: string;
  footerTrustNote: string;
  footerCopyright: string;
  footerPill1: string;
  footerPill2: string;
  footerPill3: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Top & Header
    topBarBadge: "Over 24 years of leadership & proven automotive engineering",
    topBarAdvisory: "Independent technical consultants for commercial transport trust funds",
    usaOffice: "USA: 3031 Pelham Pkwy, Alabama 35124",
    mexicoOffice: "Ecu-Lab Mexico: +52 55 2224-5283",
    navHome: "Home",
    navAbout: "How It Works",
    navBenefits: "Benefits",
    navMission: "Mission",
    navCalculator: "Calculator",
    navClients: "Clients",
    navAI: "AI Consultant",
    navContact: "Contact",
    demoButton: "Free Demo",
    mobileNavTitle: "Eltech Inc. - Electronic Technology",

    // Hero
    heroBadge: "Over 24 years of proven leadership & scientific engineering",
    heroTitlePrefix: "Truck Fuel Boost: ",
    heroTitleGradient: "Fuel Savings & Increased Engine Torque",
    heroSubtitle: "We manufacture next-generation software for engine control units (ECU/ECM). We optimize torque delivery at lower RPMs, delivering real diesel fuel reductions of 3% to 5% across fleet averages and up to 18% in severe-duty vehicles, verifiable in real time with telemetry.",
    heroSubtitleHighlight1: "3% to 5% across fleet averages",
    heroSubtitleHighlight2: "up to 18% in specific vehicles",
    heroCtaDemo: "Request Free Pilot Demo",
    heroCtaCalc: "Calculate Fleet Savings",
    metric1Val: "3% - 5%",
    metric1Label: "Average fleet fuel savings (up to 18% on severe duty units)",
    metric2Val: "24+ Years",
    metric2Label: "Experience backed by empirical & scientific methodologies",
    metric3Val: "Telemetry",
    metric3Label: "Immediate certainty with second-by-second GPS tracking",
    metric4Val: "100%",
    metric4Label: "Self-funding: fully amortized by monthly diesel fuel savings",
    endorsementsTitle: "Featured Fleets & Backing:",
    advisorBadge: "Deutsche Bank Mexico Trust Advisors",

    // About
    aboutBadge: "Precision Automotive Technology",
    aboutTitle1: "How Does ",
    aboutTitleHighlight: "Truck Fuel Boost Work?",
    aboutSubtitle: "We manufacture cutting-edge software for internal combustion engines, installed directly into the vehicle's engine control unit (ECU/ECM).",
    aboutBannerTag: "From Traditional Mechanics to Intelligent Electronics",
    aboutBannerHeading: "The element that benefits vehicles the most is specialized SOFTWARE",
    aboutBannerText: "In past decades, gaining horsepower, torque, and efficiency required invasive mechanical engine alterations. Today, real performance and fuel economy are achieved through sophisticated electronics.",
    aboutNonIntrusiveTitle: "Non-Intrusive Engineering: ",
    aboutNonIntrusiveText: "Our reprogramming is executed exclusively at the software parameter level and does not alter or stress any internal mechanical engine components.",
    aboutPhysicsTitle: "Physical Principle of Efficiency",
    aboutPhysicsTorqueLabel: "Engine Torque Delivery:",
    aboutPhysicsTorqueVal: "Optimized at lower RPMs",
    aboutPhysicsRpmLabel: "Operating Range:",
    aboutPhysicsRpmVal: "Longer gear ratios at lower engine speeds",
    aboutPhysicsConsumptionLabel: "Specific Fuel Consumption:",
    aboutPhysicsConsumptionVal: "-3% to -5% (up to -18%)",
    aboutPhysicsVerificationLabel: "Verification:",
    aboutPhysicsVerificationVal: "Real-time GPS telemetry",
    q1Title: "1. How does it work?",
    q1Text: "Modern commercial vehicles incorporate an electronic computer (ECU/ECM) that collects and processes data from various sensors and components in milliseconds, optimizing the engine's performance continuously.",
    q2Title: "2. What do we do?",
    q2Text: "We engineer proprietary software for combustion dynamics, tailored specifically to each vehicle's operational profile and duty cycle. All results are verified through real-time telemetry shared transparently with our clients.",
    q3Title: "3. How do we do it?",
    q3Text: "Each vehicle is analyzed taking into account distinct variables: mileage, maintenance records, auxiliary equipment installed, regional fuel quality, altitude above sea level, climate, and duty application (heavy freight, passenger transit, mixed or severe mountain routes).",
    q4Title: "4. Why don't vehicle manufacturers do this?",
    q4Text: "Original equipment manufacturers (OEMs) flash generic, standardized software at the factory because they cannot anticipate each vehicle's exact operating conditions: payload weights, regional fuel cetane quality, operating altitude, or temperature extremes.",
    factorsTitle: "Key Factors Analyzed for Every Vehicle",
    factor1Title: "Mileage & Engine Wear",
    factor1Desc: "Calibrated to current compression and cylinder tolerances",
    factor2Title: "Maintenance History",
    factor2Desc: "Fine-tuned to fuel injectors, turbochargers, and emissions components",
    factor3Title: "Auxiliary Equipment & Payload",
    factor3Desc: "Calculated for gross vehicle weight and aerodynamic drag resistance",
    factor4Title: "Local Diesel Quality",
    factor4Desc: "Compensated for regional cetane ratings and fuel viscosity",
    factor5Title: "Geographic Altitude & Barometric Pressure",
    factor5Desc: "Custom pressure maps for high-altitude mountain highway passes",
    factor6Title: "Climate & Ambient Temperature",
    factor6Desc: "Thermal control for intake charge air and cooling management",

    // Benefits
    benefitsBadge: "Guaranteed Return on Investment",
    benefitsTitle1: "Why Invest in Technology with ",
    benefitsTitleHighlight: "Eltech?",
    benefitsSubtitle: "Over 24 years of experience delivering measurable outcomes in real time, backed by leading transportation consortiums.",
    pillar1Title: "1. Automotive Technology Specialists with Proven Results",
    pillar1Text: "Over 24 years of experience founded on empirical and scientific engineering methodologies.",
    pillar1TrustNote: "Independent technical consultants for Deutsche Bank Mexico for the annual maintenance budget of trust funds covering GHO, ETN, TAP, AERS, AMEALSENSES, and PARIKUNI.",
    pillar3Title: "3. We Provide Real-Time Certainty",
    pillar3Text: "Fuel economy and performance results are immediately verifiable in real time through high-precision telemetry and GPS equipment installed on your own pilot test units.",
    pillar4Title: "4. 100% Self-Funding",
    pillar4Text: "The investment is accessible and amortizes itself completely through the immediate monthly diesel fuel savings generated across your fleet.",
    pillar5Title: "5. *Testing Is Completely Free",
    pillar5Text: "We develop free pilot test units so you can verify fuel savings on your own real routes before making any investment.",
    benefitsFootnote: "*Restrictions apply.",
    advisoryTag: "Specialized Engineering Advisory",
    advisoryHeading: "Custom Tooling & Continuous Support",
    advisoryDesc: "In addition to ECU engine reprogramming, we supply specialized tooling and engineering guidance to maintain vehicles correctly and sustain maximum savings long-term.",
    advisoryBullet1: "Driver training on optimal RPM operating bands and progressive shifting",
    advisoryBullet2: "Continuous telemetry monitoring and periodic diagnostic audits",
    advisoryBullet3: "Auditing of fuel consumables and diesel burn rates",
    advisoryCta: "Request Free Pilot Demo Unit",
    resultsSectionTitle: "2. Comprehensive Operational Impact Across Your Entire Fleet",
    resultsSectionSubtitle: "Direct, quantifiable cost reductions throughout your transportation operations",
    res1Title: "Fuel Economy",
    res1Desc: "Proven 3% to 5% reduction across fleet averages and up to 18% in severe-duty applications.",
    res2Title: "Extended Component Lifespan",
    res2Desc: "Increased durability for engines, pulleys, timing belts, and oil lubrication pumps.",
    res3Title: "Lower Maintenance Expenses",
    res3Desc: "Optimized savings across all 3 maintenance levels: predictive, preventive, and unscheduled repairs.",
    res4Title: "Environmental Responsibility",
    res4Desc: "Drastic reduction in annual metric tons of CO₂ and greenhouse emissions, supporting green fleet audits.",
    res5Title: "Reduced Accident Rates",
    res5Desc: "Smoother torque curves and progressive acceleration reduce driver fatigue and roadway incident risks.",
    res6Title: "Lower Insurance Premiums",
    res6Desc: "Demonstrated reduction in fleet accident frequency empowers negotiation of better insurance rates.",

    // Mission & Vision
    missionVisionBadge: "Corporate Purpose & Commitment",
    missionVisionTitle: "Our Mission & Vision",
    missionVisionSubtitle: "The foundational principles guiding our excellence in automotive electronics worldwide.",
    missionTag: "Our Mission",
    missionHeading: "Automotive Leadership & Innovation",
    missionQuote: "\"Our mission is to be known and recognized for our leadership through our passion for high standards in automotive electronics, always providing innovative products of the highest quality. Electronics laboratory and ECU reprogramming. Always committed to the environment.\"",
    missionPill1: "Specialized ECU Laboratory",
    missionPill2: "Environmental Commitment",
    visionTag: "Our Vision",
    visionHeading: "Our Highest Global Aspiration",
    visionQuote: "\"Our vision represents our greatest aspiration. It is our purpose and our reason for being as a company, reflected in the history we are writing worldwide.\"",
    visionPill1: "International Presence",
    visionPill2: "Scientifically Proven Methods",

    // Clients
    clientsBadge: "Success Stories & Industry Trust",
    clientsTitle: "Commercial Fleet Clients & Endorsements",
    clientsSubtitle: "The most demanding transportation enterprises across North America trust Eltech's engineering and consulting.",
    dbTag: "Financial & Technical Advisory",
    dbHeading: "Independent Technical Consultants for Deutsche Bank Mexico",
    dbText: "Eltech acts as an independent technical consultant for the annual maintenance budgets of the autotransport trust funds of GHO, ETN, TAP, AERS, AMEALSENSES, and PARIKUNI, demonstrating our scientific and financial rigor.",
    dbBoxTitle: "Quality Management Systems",
    dbBoxStandards: "ISO 9000 & ISO 14000",
    dbBoxNote: "Continuous improvement and logistics",

    // Fleet Calculator
    calcBadge: "Return on Investment Simulator",
    calcTitle1: "Truck Fuel Boost ",
    calcTitleHighlight: "Savings Calculator",
    calcSubtitle: "Adjust your fleet's operational parameters to discover your immediate financial and environmental return.",
    calcParamsTitle: "Fleet Parameters",
    calcCurrencyLabel: "Currency:",
    calcResetTooltip: "Reset to default values",
    calcTrucksLabel: "Fleet Size (Trucks / Motorcoaches)",
    calcTrucksUnits: "units",
    calcKmLabel: "Average Monthly Distance per Unit",
    calcKmPerLiterLabel: "Current Fuel Economy",
    calcKmPerLiterLowNote: "Heavy Cargo / Severe Mountain Routes",
    calcDieselPriceLabel: "Diesel Price per Liter",
    calcSavingsTargetLabel: "Estimated Fuel Savings with Eltech (3% to 5% fleet average)",
    calcSavingsConservative: "3.0% (Conservative)",
    calcSavingsAverage: "4.5% - 5.0% (Fleet Average)",
    calcSavingsSevere: "8.0% (Severe Duty)",
    calcResultsTitle: "Verifiable Projected Savings",
    calcResultsTelemetryBadge: "Telemetry Certified",
    calcMonthlyMoneyLabel: "Estimated Monthly Cost Savings:",
    calcMonthlyLitersEq: "Equivalent to saving",
    calcAnnualMoneyLabel: "Projected Annual Cost Savings:",
    calcAnnualLitersEq: "Cumulative annual savings of",
    calcCo2Headline: "Reduction of",
    calcCo2Note: "Supports compliance with environmental management standards and ISO 14000 certification.",
    calcApplyCta: "Request Free Pilot Demo for this Fleet",
    calcDisclaimer: "*Results are verifiable in real time with telemetry. Certain demo restrictions apply.",

    // AI Consultant
    aiBadge: "Specialized Fleet Artificial Intelligence",
    aiTitle: "Engineering & Fleet Technical Consultant ",
    aiTitleHighlight: "Eltech AI",
    aiSubtitle: "Consult our engineering assistant trained on 24 years of experience in ECU reprogramming, torque optimization, and diesel fuel economy.",
    aiFaqHeader: "Technical Frequently Asked Questions (Click to consult):",
    aiFaq1: "How does Eltech optimize torque on Cummins X15 / ISX to reduce consumption?",
    aiFaq2: "Why is OEM factory vehicle software configured with generic maps?",
    aiFaq3: "How does ECU reprogramming extend the lifespan of belts, pulleys, and pumps?",
    aiFaq4: "What does the free pilot demo unit consist of for our commercial fleet?",
    aiInputLabel: "Describe your fleet, engine models, or technical questions about ECU reprogramming:",
    aiInputPlaceholder: "Example: I have 30 semi-trucks with Detroit DD15 and Cummins X15 engines on mountainous routes. What percentage of fuel savings can we expect and how are the turbo and belts protected?",
    aiGuaranteedNote: "Non-intrusive software analysis verified with real-time telemetry.",
    aiSubmitBtn: "Get Technical Diagnostic",
    aiLoadingMessage: "Eltech AI is analyzing engine parameters, torque curves, and telemetry...",
    aiLoadingSub: "Consulting automotive engineering knowledge base and fleet telemetry records.",
    aiResponseHeader: "Eltech Engineering Diagnostic",
    aiResponseSupport: "Supported by Ecu-Lab Mexico & Eltech USA",

    // Contact
    contactBadge: "Direct Support & Demonstrations",
    contactTitle: "Contact Us & Experience the Results",
    contactSubtitle: "Headquartered in Alabama, USA, with our regional engineering laboratory in Mexico. We coordinate free pilot tests for qualified commercial fleets.",
    contactMexicoTitle: "Ecu-Lab Mexico",
    contactMexicoTag: "Regional Engineering Lab",
    contactMexicoDesc: "Regional automotive electronics laboratory, diagnostic facility, and field recalibration center.",
    contactMexicoPhoneLabel: "Mexico City Office Phone:",
    contactMexicoLocLabel: "Laboratory Location:",
    contactMexicoCity: "Mexico City (CDMX), Mexico",
    contactUsaTitle: "Eltech, Inc.",
    contactUsaTag: "Main Global Headquarters",
    contactUsaDesc: "Global corporate headquarters and central automotive electronics engineering center for Truck Fuel Boost Technology.",
    contactUsaAddressLabel: "Main Headquarters Address:",
    contactUsaEmailLabel: "Official Inquiries Email:",
    contactGuaranteeTitle: "Certainty & Telemetry Guarantee",
    contactGuaranteeDesc: "Our pilot tests do not interrupt daily operations. The installation of telemetry logging and software maps is seamless, transparent, and 100% auditable.",
    contactSuccessTitle: "Request Received Successfully!",
    contactResetBtn: "Submit another inquiry",
    contactFormHeading: "Inquiry & Free Pilot Demo Request",
    contactFormSubtitle: "Complete the form below and we will coordinate a preliminary fleet evaluation at zero cost.",
    contactFieldName: "Full Name & Title *",
    contactPlaceholderName: "e.g. John Doe, Maintenance Director",
    contactFieldCompany: "Transportation Company / Fleet Name *",
    contactPlaceholderCompany: "e.g. Continental Freight Logistics",
    contactFieldEmail: "Email Address *",
    contactFieldPhone: "Phone / WhatsApp Contact *",
    contactFieldFleetSize: "Approximate Fleet Size",
    contactFleetSelectPlaceholder: "Select fleet size...",
    contactFleetOption1: "1 to 5 units",
    contactFleetOption2: "6 to 20 units",
    contactFleetOption3: "21 to 50 units",
    contactFleetOption4: "51 to 100 units",
    contactFleetOption5: "100+ units",
    contactFieldEngines: "Engine Models / Makes in Operation",
    contactPlaceholderEngines: "e.g. Cummins X15, Detroit DD15, Scania, Volvo D13",
    contactDemoCheckboxStrong: "Request Free Pilot Demo (*Pilot Unit): ",
    contactDemoCheckboxText: "I wish to schedule a route test with telemetry to verify diesel fuel savings on my vehicles before making any investment.",
    contactFieldMessage: "Route Details or Operating Conditions",
    contactPlaceholderMessage: "Enter details about your routes (payload weights, mountain passes, ambient temperatures, operating goals)...",
    contactSubmitBtn: "Submit Request to Eltech Engineering",
    contactPrivacyNotice: "By submitting this form, your data will be handled with strict confidentiality in accordance with our fleet privacy and telemetry policies.",

    // Footer
    footerDesc: "Leading corporation founded with over 24 years of cumulative expertise in automotive electronics and ECU reprogramming for heavy commercial fleets and passenger motorcoaches.",
    footerTelemetryNote: "Results measured with second-by-second GPS telemetry in real time",
    footerSectionsTitle: "Navigation",
    footerContactTitle: "Official Headquarters & Contacts",
    footerTrustNote: "Independent consultants for Deutsche Bank Mexico for annual fleet maintenance budgets in transport trusts (GHO, ETN, TAP, AERS, AMEALSENSES, PARIKUNI).",
    footerCopyright: "Eltech Inc. - Electronic Technology. All rights reserved.",
    footerPill1: "Precision Automotive Technology",
    footerPill2: "ISO 9000 & 14000 Quality Management",
    footerPill3: "Real-Time Telemetry"
  },
  es: {
    // Top & Header
    topBarBadge: "Eltech Inc. - Más de 24 años en tecnología automotriz",
    topBarAdvisory: "Consultores independientes para fideicomisos de transporte",
    usaOffice: "USA: 3031 Pelham Pkwy, Alabama 35124",
    mexicoOffice: "Ecu-Lab México: +52 55 2224-5283",
    navHome: "Inicio",
    navAbout: "Cómo Funciona",
    navBenefits: "Beneficios",
    navMission: "Misión",
    navCalculator: "Calculadora",
    navClients: "Clientes",
    navAI: "Consultor IA",
    navContact: "Contacto",
    demoButton: "Demo Gratuita",
    mobileNavTitle: "Eltech Inc. - Electronic Technology",

    // Hero
    heroBadge: "Más de 24 años de liderazgo e ingeniería automotriz comprobada",
    heroTitlePrefix: "Truck Fuel Boost: ",
    heroTitleGradient: "Ahorro de Combustible y Mayor Torque",
    heroSubtitle: "Somos fabricantes de software de última generación para computadoras de motor (ECU/ECM). Optimizamos la entrega de torque a menores revoluciones (RPM), logrando reducciones reales en consumo de diésel del 3% al 5% en promedio de flota y de hasta un 18% en unidades de servicio severo, comprobables en tiempo real mediante telemetría.",
    heroSubtitleHighlight1: "del 3% al 5% en promedio de flota",
    heroSubtitleHighlight2: "hasta un 18% en unidades de servicio severo",
    heroCtaDemo: "Solicitar Demo Gratuita",
    heroCtaCalc: "Calcular Ahorro de mi Flota",
    metric1Val: "3% - 5%",
    metric1Label: "Ahorro promedio en flota (hasta 18% en servicio severo)",
    metric2Val: "24+ Años",
    metric2Label: "Experiencia y metodologías científicas comprobadas",
    metric3Val: "Telemetría",
    metric3Label: "Certidumbre inmediata con GPS segundo a segundo",
    metric4Val: "100%",
    metric4Label: "Autofinanciable: se amortiza con el ahorro de diésel",
    endorsementsTitle: "Flotas y Avales Destacados:",
    advisorBadge: "Consultores Deutsche Bank México",

    // About
    aboutBadge: "Tecnología Automotriz de Precisión",
    aboutTitle1: "¿Cómo Funciona ",
    aboutTitleHighlight: "Truck Fuel Boost?",
    aboutSubtitle: "Somos fabricantes de software de última generación para motores de combustión, instalado directamente en la computadora del vehículo (ECU).",
    aboutBannerTag: "De la Mecánica Tradicional a la Electrónica Inteligente",
    aboutBannerHeading: "El elemento que más beneficia al vehículo es el SOFTWARE específico",
    aboutBannerText: "En las décadas pasadas, obtener potencia, rendimiento y otros beneficios de un motor se hacía mediante modificaciones mecánicas invasivas. Hoy en día esto se hace en base a la electrónica.",
    aboutNonIntrusiveTitle: "Mejora No Intrusiva: ",
    aboutNonIntrusiveText: "Nuestra reprogramación se realiza a nivel de parámetros de software y no afecta ninguno de los componentes mecánicos internos del motor.",
    aboutPhysicsTitle: "Principio Físico de Eficiencia",
    aboutPhysicsTorqueLabel: "Entrega de Par Motor (Torque):",
    aboutPhysicsTorqueVal: "Optimizado a bajas RPM",
    aboutPhysicsRpmLabel: "Régimen de Giro:",
    aboutPhysicsRpmVal: "Marchas más largas a menos RPM",
    aboutPhysicsConsumptionLabel: "Consumo Específico:",
    aboutPhysicsConsumptionVal: "-3% a -5% (hasta -18%)",
    aboutPhysicsVerificationLabel: "Verificación:",
    aboutPhysicsVerificationVal: "Telemetría GPS en tiempo real",
    q1Title: "1. ¿Cómo funciona?",
    q1Text: "Los vehículos incorporan una computadora (ECU/ECM), la cual procesa y recoge los datos recibidos de diferentes sensores y componentes del vehículo, de tal manera que puede controlar y optimizar al máximo el funcionamiento de éste en milisegundos.",
    q2Title: "2. ¿Qué hacemos nosotros?",
    q2Text: "Fabricamos un software especial para el área de combustión, desarrollado según las necesidades específicas de cada unidad y tipo de operación. Los resultados son verificados con telemetría que compartimos en tiempo real con el cliente.",
    q3Title: "3. ¿Cómo lo hacemos?",
    q3Text: "Cada vehículo se analiza tomando en cuenta factores únicos: kilometraje, historial de mantenimiento, equipo adicional montado, calidad del combustible, altitud sobre el nivel del mar, clima y el uso específico: carga pesada, transporte de pasajeros, rutas mixtas o severas.",
    q4Title: "4. ¿Por qué esto no lo hacen los fabricantes?",
    q4Text: "Cuando el fabricante del vehículo instala un software en la armadora, lo hace de manera estándar y genérica porque no saben cuáles serán las condiciones reales de uso del vehículo: el tipo de carga, el clima, la altitud ni la calidad del combustible en cada región.",
    factorsTitle: "Factores Clave en el Análisis de Cada Vehículo",
    factor1Title: "Kilometraje & Desgaste",
    factor1Desc: "Ajuste a la compresión y tolerancia actual de la unidad",
    factor2Title: "Historial de Mantenimiento",
    factor2Desc: "Calibración acorde al estado de inyectores y turbo",
    factor3Title: "Equipo Adicional & Carga",
    factor3Desc: "Cálculo de masa transportada y resistencia aerodinámica",
    factor4Title: "Calidad del Diésel Local",
    factor4Desc: "Compensación de cetano y viscosidad del carburante",
    factor5Title: "Altitud Geográfica & Presión",
    factor5Desc: "Mapas de presión barométrica para rutas de montaña",
    factor6Title: "Clima & Temperatura Operativa",
    factor6Desc: "Control térmico y enfriamiento de carga de admisión",

    // Benefits
    benefitsBadge: "Retorno de Inversión Garantizado",
    benefitsTitle1: "¿Por Qué Invertir en Tecnología con ",
    benefitsTitleHighlight: "Eltech?",
    benefitsSubtitle: "Más de 24 años de experiencia con resultados medibles en tiempo real y respaldo de los mayores consorcios de autotransporte.",
    pillar1Title: "1. Especialistas en Tecnología Automotriz con Resultados Comprobables",
    pillar1Text: "Contamos con más de 24 años de experiencia basada en metodologías empíricas y científicas.",
    pillar1TrustNote: "Consultores independientes de Deutsche Bank México para el presupuesto anual de mantenimiento de los fideicomisos de GHO, ETN, TAP, AERS, AMEALSENSES y PARIKUNI.",
    pillar3Title: "3. Ofrecemos Certidumbre en Tiempo Real",
    pillar3Text: "Los resultados obtenidos de rendimiento y desempeño son comprobables de inmediato, porque son medidos en tiempo real mediante equipos de GPS y telemetría de alta precisión instalados en sus propias unidades de prueba.",
    pillar4Title: "4. Autofinanciable",
    pillar4Text: "El costo de inversión es accesible y se amortiza al 100% con los beneficios y ahorros inmediatos que se generan mes a mes.",
    pillar5Title: "5. *Comprobarlo es Gratuito",
    pillar5Text: "Desarrollamos demos (unidades piloto) sin costo para que compruebe los resultados en su propia ruta antes de invertir.",
    benefitsFootnote: "*Aplican restricciones.",
    advisoryTag: "Asesoría Especializada Integral",
    advisoryHeading: "Herramental y Acompañamiento Continuo",
    advisoryDesc: "Adicionalmente a la reprogramación de software de motor, ofrecemos asesoría y herramental para mantener correctamente los vehículos y obtener los mejores resultados a corto, mediano y largo plazo.",
    advisoryBullet1: "Capacitación sobre régimen óptimo de revoluciones",
    advisoryBullet2: "Monitoreo continuo de telemetría y diagnósticos periódicos",
    advisoryBullet3: "Auditoría de insumos y consumos de combustible",
    advisoryCta: "Solicitar Prueba Piloto Gratuita",
    resultsSectionTitle: "2. Proyectos Integrales con Resultados en Toda la Operación",
    resultsSectionSubtitle: "Impacto directo y cuantificable en los costos operativos de su flota",
    res1Title: "Economía en Combustible",
    res1Desc: "Reducción comprobada del 3% al 5% en promedio de flota y hasta 18% en unidades con condiciones de servicio severo.",
    res2Title: "Incremento en Vida Útil",
    res2Desc: "Mayor durabilidad del motor y componentes periféricos críticos: poleas, bandas de distribución y bombas de lubricación.",
    res3Title: "Menores Costos de Mantenimiento",
    res3Desc: "Optimización radical en los 3 niveles: mantenimiento predictivo, preventivo y disminución de correctivos imprevistos.",
    res4Title: "Responsabilidad Ecológica",
    res4Desc: "Reducción drástica de toneladas de CO₂ y gases contaminantes a la atmósfera, respaldando auditorías ambientales.",
    res5Title: "Menor Índice de Accidentes",
    res5Desc: "Mayor control del par motor y suavidad de marcha que reducen la fatiga del operador y el riesgo de incidentes viales.",
    res6Title: "Ahorro en Primas de Seguros",
    res6Desc: "La disminución comprobada en la tasa de siniestralidad permite negociar mejores condiciones y primas con aseguradoras.",

    // Mission & Vision
    missionVisionBadge: "Propósito y Compromiso Corporativo",
    missionVisionTitle: "Nuestra Misión y Visión",
    missionVisionSubtitle: "Los cimientos que guían nuestra excelencia en ingeniería y electrónica automotriz en todo el mundo.",
    missionTag: "Nuestra Misión",
    missionHeading: "Liderazgo e Innovación Automotriz",
    missionQuote: "\"Nuestra misión es ser conocidos y reconocidos por nuestro liderazgo a través de nuestra pasión por los altos estándares en el ramo de la Electrónica Automotriz, brindando siempre productos innovadores de la más alta calidad. Laboratorio de electrónica y reprogramación de ECU’s. Siempre comprometidos con el medio ambiente.\"",
    missionPill1: "Laboratorio Especializado de ECU",
    missionPill2: "Compromiso Ambiental",
    visionTag: "Nuestra Visión",
    visionHeading: "Nuestra Mayor Aspiración Global",
    visionQuote: "\"Nuestra visión representa nuestra mayor aspiración. Es nuestro propósito y nuestra razón de existir como empresa y se refleja en la historia que estamos escribiendo en todo el mundo.\"",
    visionPill1: "Presencia Internacional",
    visionPill2: "Metodologías Científicas Comprobadas",

    // Clients
    clientsBadge: "Casos de Éxito & Confianza Empresarial",
    clientsTitle: "Clientes y Avales de Autotransporte",
    clientsSubtitle: "Las empresas más exigentes de México y Norteamérica confían en la tecnología y consultoría de Eltech.",
    dbTag: "Auditoría & Consultoría Financiera",
    dbHeading: "Consultores Independientes de Deutsche Bank México",
    dbText: "Eltech funge como consultor técnico independiente para el presupuesto anual de mantenimiento de los fideicomisos de GHO, ETN, TAP, AERS, AMEALSENSES y PARIKUNI, avalando la rigurosidad científica y financiera de nuestras soluciones.",
    dbBoxTitle: "Sistemas de Calidad",
    dbBoxStandards: "ISO 9000 & ISO 14000",
    dbBoxNote: "Mejora continua y logística",

    // Fleet Calculator
    calcBadge: "Simulador de Retorno de Inversión",
    calcTitle1: "Calculadora de Ahorro ",
    calcTitleHighlight: "Truck Fuel Boost",
    calcSubtitle: "Ajuste los parámetros operativos de su flota y descubra el impacto económico y ecológico inmediato.",
    calcParamsTitle: "Parámetros de su Flota",
    calcCurrencyLabel: "Moneda:",
    calcResetTooltip: "Restablecer valores",
    calcTrucksLabel: "Número de Unidades (Camiones / Autobuses)",
    calcTrucksUnits: "unidades",
    calcKmLabel: "Kilometraje Promedio Mensual por Unidad",
    calcKmPerLiterLabel: "Rendimiento Actual de Combustible",
    calcKmPerLiterLowNote: "Carga Pesada / Sierra",
    calcDieselPriceLabel: "Precio del Litro de Diésel",
    calcSavingsTargetLabel: "Ahorro Estimado con Eltech (3% a 5% promedio)",
    calcSavingsConservative: "3.0% (Conservador)",
    calcSavingsAverage: "4.5% - 5.0% (Promedio Flota)",
    calcSavingsSevere: "8.0% (Servicio Severo)",
    calcResultsTitle: "Proyección de Ahorro Comprobable",
    calcResultsTelemetryBadge: "Telemetría Certificada",
    calcMonthlyMoneyLabel: "Ahorro Económico Mensual Estimado:",
    calcMonthlyLitersEq: "Equivalente a",
    calcAnnualMoneyLabel: "Ahorro Económico Anual Proyectado:",
    calcAnnualLitersEq: "Ahorro acumulado de",
    calcCo2Headline: "Reducción de",
    calcCo2Note: "Apoya el cumplimiento de normas de gestión ambiental y certificación ISO 14000.",
    calcApplyCta: "Solicitar Demo Gratuita para esta Flota",
    calcDisclaimer: "*Los resultados son verificables en tiempo real con telemetría. Aplican restricciones en demos.",

    // AI Consultant
    aiBadge: "Inteligencia Artificial Especializada en Flotas",
    aiTitle: "Consultor Técnico de Ingeniería & Flotas ",
    aiTitleHighlight: "Eltech IA",
    aiSubtitle: "Consulte a nuestro asistente entrenado en 24 años de experiencia sobre reprogramación de ECU, optimización de par motor y ahorro de diésel.",
    aiFaqHeader: "Preguntas Frecuentes Técnicas (Clic para consultar):",
    aiFaq1: "¿Cómo optimiza Eltech el par motor en Cummins X15 / ISX para reducir consumo?",
    aiFaq2: "¿Por qué el software del fabricante armador viene configurado de forma genérica?",
    aiFaq3: "¿Cómo influye la reprogramación en la vida útil de poleas, bandas y bombas?",
    aiFaq4: "¿En qué consiste la demostración gratuita (unidad piloto) para mi flota?",
    aiInputLabel: "Describa su flota, motores en operación o duda sobre la reprogramación:",
    aiInputPlaceholder: "Ejemplo: Tengo 30 tractocamiones con motores Detroit DD15 y Cummins X15 en rutas de montaña. ¿Qué porcentaje de ahorro puedo esperar y cómo se protege el turbo y las bandas?",
    aiGuaranteedNote: "Análisis no intrusivo fundamentado en telemetría en tiempo real.",
    aiSubmitBtn: "Obtener Diagnóstico Técnico",
    aiLoadingMessage: "El consultor Eltech IA está analizando los parámetros del motor y curvas de par...",
    aiLoadingSub: "Consultando base de ingeniería automotriz y telemetría de autotransporte.",
    aiResponseHeader: "Diagnóstico de Ingeniería Eltech",
    aiResponseSupport: "Soporte Ecu-Lab México & Eltech USA",

    // Contact
    contactBadge: "Atención Directa & Demostraciones",
    contactTitle: "Contáctenos y Compruebe los Resultados",
    contactSubtitle: "Sede principal en Alabama, USA, y laboratorio regional de ingeniería en México. Coordinamos pruebas piloto gratuitas para flotas calificadas.",
    contactMexicoTitle: "Ecu-Lab México",
    contactMexicoTag: "Laboratorio Regional",
    contactMexicoDesc: "Laboratorio regional de electrónica automotriz, diagnóstico y centro de reprogramación en campo.",
    contactMexicoPhoneLabel: "Teléfono de Oficina México, D.F.:",
    contactMexicoLocLabel: "Ubicación Laboratorio:",
    contactMexicoCity: "México, D.F. (CDMX)",
    contactUsaTitle: "Eltech, Inc.",
    contactUsaTag: "Sede Principal Global",
    contactUsaDesc: "Sede corporativa global y centro central de ingeniería en electrónica automotriz para la tecnología Truck Fuel Boost.",
    contactUsaAddressLabel: "Dirección Sede Principal:",
    contactUsaEmailLabel: "Correo Electrónico Oficial:",
    contactGuaranteeTitle: "Garantía de Certidumbre y Telemetría",
    contactGuaranteeDesc: "Nuestras pruebas no interfieren con la operación diaria de su empresa. La instalación de equipos de telemetría y software es transparente y 100% auditable.",
    contactSuccessTitle: "¡Solicitud Recibida con Éxito!",
    contactResetBtn: "Enviar otra consulta",
    contactFormHeading: "Solicitud de Contacto & Demo Gratuita",
    contactFormSubtitle: "Complete el formulario y coordinaremos un análisis preliminar de su flota sin costo.",
    contactFieldName: "Nombre y Apellidos *",
    contactPlaceholderName: "Ej. Ing. Carlos Mendoza",
    contactFieldCompany: "Empresa de Transporte / Razón Social *",
    contactPlaceholderCompany: "Ej. Transportes del Bajío S.A.",
    contactFieldEmail: "Correo Electrónico *",
    contactFieldPhone: "Teléfono / WhatsApp de Contacto *",
    contactFieldFleetSize: "Tamaño Aproximado de Flota",
    contactFleetSelectPlaceholder: "Seleccione número de unidades...",
    contactFleetOption1: "1 a 5 unidades",
    contactFleetOption2: "6 a 20 unidades",
    contactFleetOption3: "21 a 50 unidades",
    contactFleetOption4: "51 to 100 unidades",
    contactFleetOption5: "Más de 100 unidades",
    contactFieldEngines: "Motores / Marcas en Operación",
    contactPlaceholderEngines: "Ej. Cummins X15, Detroit DD15, Scania, Volvo",
    contactDemoCheckboxStrong: "Solicitar Demostración Gratuita (*Unidad Piloto): ",
    contactDemoCheckboxText: "Deseo coordinar una prueba en ruta con telemetría para comprobar el ahorro de combustible en mis vehículos antes de cualquier inversión.",
    contactFieldMessage: "Comentarios o Detalles de Rutas",
    contactPlaceholderMessage: "Escriba aquí cualquier detalle sobre sus rutas (altitud, carga, tipo de servicio)...",
    contactSubmitBtn: "Enviar Solicitud a Ecu-Lab México",
    contactPrivacyNotice: "Al enviar este formulario, sus datos serán tratados con estricta confidencialidad según nuestras políticas de privacidad y telemetría.",

    // Footer
    footerDesc: "Empresa líder fundada con más de 24 años de experiencia acumulada en electrónica automotriz y reprogramación de ECU para flotas de autotransporte, carga pesada y autobuses.",
    footerTelemetryNote: "Resultados medidos con telemetría GPS en tiempo real",
    footerSectionsTitle: "Secciones",
    footerContactTitle: "Sedes Oficiales & Contacto",
    footerTrustNote: "Consultores independientes de Deutsche Bank México para presupuestos anuales de mantenimiento en fideicomisos de autotransporte (GHO, ETN, TAP, AERS, AMEALSENSES, PARIKUNI).",
    footerCopyright: "Eltech Inc. - Electronic Technology. Todos los derechos reservados.",
    footerPill1: "Tecnología Automotriz de Precisión",
    footerPill2: "Gestión de Calidad ISO 9000 & 14000",
    footerPill3: "Telemetría en Tiempo Real"
  }
};
