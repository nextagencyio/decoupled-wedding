'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-[#f5f2ee] text-gray-800 pt-16 pb-8 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display text-primary-900 mb-4">Community Collective</h3>
              <p className="text-gray-600">Thoughtful programs, trusted service, and a welcoming experience for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/programs" className="hover:text-primary-800 transition-colors">Programs</Link></li>
                <li><Link href="/events" className="hover:text-primary-800 transition-colors">Events</Link></li>
                <li><Link href="/about" className="hover:text-primary-800 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary-800 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>info@example.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Community Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
