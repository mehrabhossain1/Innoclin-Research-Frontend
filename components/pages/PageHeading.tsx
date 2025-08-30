"use client"
import Image from "next/image";
import { ChevronDown, ArrowRight, Star } from "lucide-react";

interface PageHeadingProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
    subtitle2?: string;
    breadcrumbs?: Array<{ name: string; href?: string }>;
    showScrollIndicator?: boolean;
    ctaText?: string;
    ctaLink?: string;
    stats?: Array<{ label: string; value: string; icon?: React.ReactNode }>;
}

export default function PageHeading({
    title,
    subtitle,
    bgImage,
    subtitle2,
    breadcrumbs,
    showScrollIndicator = true,
    ctaText,
    ctaLink,
    stats,
}: PageHeadingProps) {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('section:nth-of-type(2)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90" />
                </div>
            )}

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-10 animate-pulse delay-2000"></div>
            </div>

            {/* Decorative SVG Lines */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0CB39A" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#0A9B85" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#089B7A" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <path d="M0 200 Q300 100 600 200 T1200 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                    <path d="M0 600 Q300 500 600 600 T1200 600" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex justify-center items-center mb-8 text-sm">
                        <ol className="flex items-center space-x-2">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index} className="flex items-center">
                                    {index > 0 && <ChevronDown className="w-4 h-4 rotate-[-90deg] text-slate-400 mx-2" />}
                                    {crumb.href ? (
                                        <a
                                            href={crumb.href}
                                            className="text-slate-300 hover:text-[#0CB39A] transition-colors"
                                        >
                                            {crumb.name}
                                        </a>
                                    ) : (
                                        <span className="text-[#0CB39A] font-medium">{crumb.name}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                {/* Main Content */}
                <div className="mb-12">
                    {/* Title with Enhanced Styling */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-white via-slate-100 to-[#0CB39A] bg-clip-text text-transparent">
                            {title}
                        </span>
                    </h1>

                    {/* Subtitle with Enhanced Layout */}
                    {(subtitle || subtitle2) && (
                        <div className="max-w-4xl mx-auto mb-8">
                            {subtitle && (
                                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-4 font-light">
                                    {subtitle}
                                </p>
                            )}
                            {subtitle2 && (
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                                    {subtitle2}
                                </p>
                            )}
                        </div>
                    )}

                    {/* CTA Button */}
                    {ctaText && ctaLink && (
                        <div className="mb-12">
                            <a
                                href={ctaLink}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    )}
                </div>

                {/* Stats Section */}
                {stats && stats.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center justify-center mb-3">
                                    {stat.icon && (
                                        <div className="w-12 h-12 bg-[#0CB39A] rounded-full flex items-center justify-center mr-3">
                                            {stat.icon}
                                        </div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-slate-300 text-sm">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#0CB39A]" />
                        <span>500+ Successful Trials</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#0CB39A]" />
                        <span>Global Expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#0CB39A]" />
                        <span>Patient-Centric Approach</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <button
                        onClick={scrollToNextSection}
                        className="flex flex-col items-center gap-2 text-slate-300 hover:text-[#0CB39A] transition-colors cursor-pointer group"
                    >
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-slate-300 group-hover:border-[#0CB39A] rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-slate-300 group-hover:bg-[#0CB39A] rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </button>
                </div>
            )}
        </section>
    );
}
