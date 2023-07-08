import Link from 'next/link'

export default function Resources() {
  return (
    <>
      <h1 className="flex justify-center mt-10 mb-10 text-3xl text-blue-950">
        Resources
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-between flex-wrap">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1101732/pexels-photo-1101732.jpeg?cs=srgb&dl=two-people-holding-hands-1101732.jpg&fm=jpg"
              className="rounded-lg  ml-4 mb-4 w-40 h-28"
            />
            <div className="absolute bottom-0 left-3.5 right-0 p-4 bg-gray-500 rounded-bl-md rounded-br-md">
              <p className="text-sm font-semibold ">We're here to help</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q="
              className="rounded-lg mr-4  mb-4  w-40 h-28"
            />
            <div className="absolute bottom-0 left-0 right-3.5  p-4 bg-gray-500  rounded-bl-md rounded-br-md">
              <p className="text-sm font-semibold">
                You're information is secure
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://www.nih.gov/sites/default/files/news-events/research-matters/2022/20220927-test.jpg"
              className="rounded-lg mt-8 ml-4 mb-4 w-40 h-28"
            />
            <div className="absolute bottom-0 left-3.5 right-0  p-4 bg-gray-500  rounded-bl-md rounded-br-md">
              <p className="text-sm font-semibold">
                You are part of the future of testing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center ml-10">
        <img
          src="https://i.ytimg.com/vi/yoZL1BVP9Bs/maxresdefault.jpg"
          className="w-80 h-44 mt-6"
        />
      </div>
      <div className="justify-center mt-4 text-center h-screen">
        <h2 className="text-lg font-semibold mt-10 ">
          You're part of the future of testing.
        </h2>
        <h3 className="mt-4">
          Improve America's understanding of at-home test use.
        </h3>
        <h3 className="mt-4 mb-4 underline decoration-solid">
          Learn more about our vision
        </h3>
        <hr></hr>
        <h2 className="text-lg font-semibold mt-4">
          Your information is secure.
        </h2>
        <h3 className="mt-4">
          All data is managed according to strict guidelines.
        </h3>
        <h3 className="mt-4 mb-4 underline decoration-solid">
          Learn more about this site's privacy protections
        </h3>
        <hr></hr>
        <h2 className="text-lg font-semibold mt-4">
          We're here to support you.
        </h2>
        <h3 className="mt-4">
          Up-to-date info helps keep you safe and healthy.
        </h3>
        <h3 className="mt-4 mb-4 underline decoration-solid">
          Learn more at WhenToTest.org
        </h3>
      </div>
    </>
  )
}
