"use client"
import Link from "next/link"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PawPrint, Search, Menu, Apple, PlayCircle } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <PawPrint className="h-6 w-6" />
          <span className="sr-only">Namo Pashu</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden absolute right-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-800 p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
                Features
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
                Pricing
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about-us">
                About us
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Namo Pashu
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The ultimate marketplace for buying and selling animals. Connect with pet lovers and find your perfect companion.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Search for animals" type="text" />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <PawPrint className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Wide Selection</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Browse through a diverse range of animals from trusted sellers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Search className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Easy Search</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Find your perfect pet with our advanced search filters.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 mb-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h2 className="text-xl font-bold">Community</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Connect with other animal lovers and share your experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Download Our App
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get the Namo Pashu app on your mobile device. Available for both Android and iOS.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="inline-flex items-center" variant="outline">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
                <Button className="inline-flex items-center" variant="outline">
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I list an animal for sale?</AccordionTrigger>
                <AccordionContent>
                  To list an animal for sale, log into your account, click on Sell in the navigation menu, and follow the prompts to create your listing. Make sure to include clear photos and detailed information about the animal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it safe to buy animals online?</AccordionTrigger>
                <AccordionContent>
                  We prioritize the safety of both buyers and sellers. Always meet in person to see the animal before making a purchase, and follow our safety guidelines. We also recommend verifying the sellers credentials and asking for health certificates when applicable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How does payment work?</AccordionTrigger>
                <AccordionContent>
                  Namo Pashu does not handle payments directly. We recommend discussing payment methods with the seller or buyer and choosing a secure option that works for both parties. Always be cautious of potential scams and never send money before seeing the animal in person.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Namo Pashu. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms & Conditions
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/about-us">
            About Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

