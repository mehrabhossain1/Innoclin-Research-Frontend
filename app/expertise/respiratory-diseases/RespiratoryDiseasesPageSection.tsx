import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RespiratoryDiseasesPageSection() {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Respiratory Diseases Research
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Advanced clinical solutions for complex respiratory conditions, from asthma to rare lung diseases
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Patient-Centered Solutions Section */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Patient-Centered Solutions
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Respiratory diseases often involve fluctuating symptoms, environmental triggers, and 
                                overlapping comorbidities. We design trials that capture the real-world variability of 
                                respiratory illness through advanced digital spirometry, wearable monitoring devices, 
                                and longitudinal patient-reported outcomes.
                            </p>
                            
                            {/* Technology Features */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-blue-50 rounded-xl p-4 text-center">
                                    <div className="text-blue-600 font-semibold mb-2">Digital Spirometry</div>
                                    <div className="text-sm text-gray-600">Advanced Monitoring</div>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 text-center">
                                    <div className="text-green-600 font-semibold mb-2">Wearable Devices</div>
                                    <div className="text-sm text-gray-600">Real-time Tracking</div>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-4 text-center">
                                    <div className="text-purple-600 font-semibold mb-2">Patient Outcomes</div>
                                    <div className="text-sm text-gray-600">Longitudinal Data</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            <div className="w-full h-80 relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Respiratory research and monitoring"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Advanced Monitoring</h3>
                                    <p className="text-lg">Real-world data for better outcomes</p>
                                </div>
                            </div>
                        </div>

                        {/* Trial Accessibility Section */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Enhanced Trial Accessibility
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Respiratory patients often face mobility and travel challenges. To address this, we integrate 
                                home health visits, decentralized trial technologies, and remote pulmonary function testing 
                                into study designs. This not only improves patient retention but also reflects the real-world 
                                use of therapies.
                            </p>
                            
                            {/* Accessibility Features */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Home health visits for patient convenience</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Decentralized trial technologies</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Remote pulmonary function testing</span>
                                </div>
                            </div>
                        </div>

                        {/* Regulatory Expertise Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold">
                                    Regulatory & Safety Expertise
                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed mb-6 opacity-90">
                                Our regulatory experts are adept at navigating evolving guidance on inhaled medicines, 
                                biologics, and advanced therapies for respiratory diseases. From device-related safety 
                                to long-term monitoring of pulmonary function, we prioritize patient safety while 
                                expediting regulatory approvals.
                            </p>
                            
                            {/* Regulatory Areas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-2">Inhaled</div>
                                    <div className="text-sm opacity-80">Medicines</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-2">Biologics</div>
                                    <div className="text-sm opacity-80">Advanced Therapies</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-2">Safety</div>
                                    <div className="text-sm opacity-80">Monitoring</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Respiratory Spectrum Card */}
                            <Card className="shadow-xl rounded-2xl border-0 bg-white">
                                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 rounded-t-2xl">
                                    <CardTitle className="text-xl font-bold text-gray-900">
                                        Respiratory Spectrum Expertise
                                    </CardTitle>
                                    <p className="text-gray-600 text-sm">
                                        Our teams support clinical development across:
                                    </p>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <div className="group hover:bg-blue-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-blue-600 group-hover:text-blue-700">
                                                Asthma & COPD
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Biologics, inhaled therapies, and combination treatments.
                                        </p>
                                    </div>
                                    
                                    <div className="group hover:bg-green-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-green-600 group-hover:text-green-700">
                                                Pulmonary Hypertension
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Targeted vasodilator therapies and novel molecular agents.
                                        </p>
                                    </div>
                                    
                                    <div className="group hover:bg-purple-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-purple-600 group-hover:text-purple-700">
                                                Cystic Fibrosis & Rare Diseases
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Specialized endpoints and long-term registries.
                                        </p>
                                    </div>

                                    <div className="group hover:bg-red-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-red-600 group-hover:text-red-700">
                                                Acute Respiratory Infections
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Influenza, COVID-19, RSV - antivirals and vaccines.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Cross-disciplinary Card */}
                            <Card className="shadow-xl rounded-2xl border-0 bg-white">
                                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                                    <CardTitle className="text-xl font-bold text-gray-900">
                                        Cross-Disciplinary Insights
                                    </CardTitle>
                                    <p className="text-gray-600 text-sm">
                                        Leveraging expertise from other therapeutic areas:
                                    </p>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <div className="group hover:bg-red-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-red-600 group-hover:text-red-700">
                                                Cardiology
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Cardiovascular comorbidities in COPD and pulmonary hypertension.
                                        </p>
                                    </div>
                                    
                                    <div className="group hover:bg-blue-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-blue-600 group-hover:text-blue-700">
                                                Infectious Diseases
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Respiratory support in viral pneumonia and pandemic studies.
                                        </p>
                                    </div>
                                    
                                    <div className="group hover:bg-green-50 rounded-xl p-4 transition-all duration-200">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-green-600 group-hover:text-green-700">
                                                Pediatrics
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Age-appropriate endpoints in pediatric asthma and cystic fibrosis.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* CTA Card */}
                            <Card className="shadow-xl rounded-2xl border-0 bg-gradient-to-br from-blue-600 to-green-600 text-white">
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-3">Ready to Breathe Better?</h3>
                                    <p className="text-sm opacity-90 mb-4">
                                        Let&apos;s discuss your respiratory clinical research needs.
                                    </p>
                                    <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                        Get in Touch
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
