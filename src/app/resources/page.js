import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AdditionalResources from '@/components/AdditionalResources'
import Link from 'next/link'

export default function Resources() {
  return (
    <div className="bg-[#E4EAEE]">
      <Header />
      <div className="mx-auto max-w-sm border-l-4 ">
        <h1 className="flex justify-center mt-10 mb-10 text-4xl font-bold text-blue-950">
          Resources
        </h1>
        <AdditionalResources />
        <div className="justify-center mt-10 text-center px-4">
          <div className="px-8 pb-6 border-b border-black">
            <p className="text-lg font-bold text-blue-900">
              You&apos;re part of the future of testing.
            </p>
            <p className="mt-2 px-2">
              Improve America&apos;s understanding of at-home test use.
            </p>
            <Link href="/about">
              <p className="mt-2 underline decoration-solid">
                Learn more about our vision
              </p>
            </Link>
          </div>
          <div className="px-8 pb-6 border-b border-black mt-10">
            <p className="text-lg font-bold text-blue-900">
              You&apos;re information is secure.
            </p>
            <p className="mt-2 px-2">
              All data is managed according to strict guidelines.
            </p>
            <Link href="/privacy">
              <p className="mt-2 underline decoration-solid">
                Learn more about this site&apos;s privacy protections.
              </p>
            </Link>
          </div>
          <div className="px-8 pb-6 mt-10">
            <p className="text-lg font-bold text-blue-900">
              We&apos;re here to support you.
            </p>
            <p className="mt-2 px-2">
              Up-to-date info helps keep you safe and healthy.
            </p>
            <Link href="https://www.whentotest.org/" target="_blank">
              <p className="mt-2 underline decoration-solid">
                Learn more at WhenToTest.org.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
