import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Xsre handle VAT?',
      answer:
        'Yes, we are fully compliant with all EU VAT regulations. We also handle VAT for the UK, Australia, and New Zealand.',
    },
    {
      question: 'Can I pay for my subscription via purchase order?',
      answer: 'Absolutely, we accept purchase orders as well as credit cards.',
    },
    {
      question: 'How do I apply for a job at Xsre?',
      answer:
        'We are always looking for talented people to join our team. Send us an email with your resume and we will get back to you.',
    },
  ],
  [
    {
      question:
        'Does Xsre integrate with my existing accounting software? (e.g. Quickbooks, Xero, etc.)',
      answer:
        'We are currently working on integrating with Quickbooks, Xero, and other popular accounting software. We will let you know when we are ready.',
    },
    {
      question:
        'Xsre is great, but I need something more advanced. Do you offer enterprise solutions?',
      answer:
        'We are currently working on an enterprise solution that will be available in 2023. We will let you know when we are ready.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'Xsre creates reports by pulling data from our database and then formatting it into a PDF. These PDFs are available for export on the dashboard.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will support you further.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
