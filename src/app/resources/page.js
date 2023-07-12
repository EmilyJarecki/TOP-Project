import AdditionalResources from '@/components/AdditionalResources'
import Link from 'next/link'

export default function Resources() {
  return (
    <>
      <div className="mx-auto max-w-sm border-l-4 border-r-4 border-white">
        <h1 className="flex justify-center mt-10 mb-10 text-3xl text-blue-950">
          Resources
        </h1>
        <AdditionalResources />
        <div className="justify-center mt-4 text-center h-screen">
          <h2 className="text-lg font-semibold mt-10 text-blue-900">
            You're part of the future of testing.
          </h2>
          <h3 className="mt-4">
            Improve America's understanding of at-home test use.
          </h3>
          <h3 className="mt-4 mb-4 underline decoration-solid">
            Learn more about our vision
          </h3>
          <hr></hr>
          <h2 className="text-lg font-semibold mt-4 text-blue-900">
            Your information is secure.
          </h2>
          <h3 className="mt-4">
            All data is managed according to strict guidelines.
          </h3>
          <h3 className="mt-4 mb-4 underline decoration-solid">
            Learn more about this site's privacy protections
          </h3>
          <hr></hr>
          <h2 className="text-lg font-semibold mt-4 text-blue-900">
            We're here to support you.
          </h2>
          <h3 className="mt-4">
            Up-to-date info helps keep you safe and healthy.
          </h3>
          <h3 className="mt-4 mb-4 underline decoration-solid">
            Learn more at WhenToTest.org
          </h3>
        </div>
      </div>
    </>
  )
}
