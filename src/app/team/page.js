import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import './team.css'



export default function Team() {

    return (
        <>
            <Header />
            <div className="bg-[#E4EAEE]">
            <center className="px-6 ">
                <p className="MTT text-3xl font-medium flex place-content-center pt-12 text-hych-title-blue">Meet the Team</p>
                {/* <p className="statement p-8">In vitro diagnostic (IVD) tests, such as SARS-CoV-2 or COVID-19 tests, are critical data sources for the healthcare ecosystem. But with the advent of new at-anywhere and non-lab based tests, capturing data these tests generate requires innovation and new digital technologies. We challenge teams to create tools that integrate emerging technologies, such as image capture and IoT, into IVD testing devices, to help easily capture and transmit this information, while doing so in accordance with best practice data standards.</p> */}
                <p className="statement px-8 pt-4 pb-12 text-hych-title-blue">This website was made through the collaborative effort of UX, software engineering, and data teams to help focus on capturing harmonized data from in-vitro take-home Covid-19 diagnostics through open-sourced federal data.</p>
            </center>
            <center>
                <div class="grid grid-cols-6 gap-4 mb-5 w-full px-6 sm:grid-cols-2 md:grid-cols-4 pb-8">
                    
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/D4E03AQFZnaZKpRbt3w/profile-displayphoto-shrink_800_800/0/1687213442976?e=1697068800&v=beta&t=Drz2UZuIrm8qxXfLtgml4vd2xt8sYxzv9R6iS2uNpQo" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Ceina Ellison
                            </h2>
                            <p class="text-black-700 mb-2">Product Manager <br /> Software Engineer</p>
                            <a target="_blank" href="https://docs.google.com/document/d/1KTQGdWdv8DpUy7wVG4P_t8jZrh6xPG243oVZavHpGow/edit?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm">Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/ceinaellison/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://media.licdn.com/dms/image/D4E03AQH3H7TvCVcqgA/profile-displayphoto-shrink_400_400/0/1669666755402?e=1697068800&v=beta&t=o5l-19siZUWoOaSKcaqeTvK7DCNMLzgqguUA0x5NSio" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-black-800">Ralph Rezza
                        </h2>
                        <p class="text-black-700 mb-2">Product Manager <br /> UX/UI Lead</p>
                        <a target="_blank" href="https://docs.google.com/document/d/1X436Dt5QzrBrGz-F089tNscOWeg_gRLqJd_xC1keF1o/edit?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm">Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/ralph-john-rezza/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/C5603AQHTi3Pdm4GlQA/profile-displayphoto-shrink_400_400/0/1531189064544?e=1697068800&v=beta&t=NIC7LqCTGgQ8TSFN9xKZeT5rl0TbYUnF85Br5Y2MsYw" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Josh Bellon
                            </h2>
                            <p class="text-black-700 mb-2">Lead Software Engineer</p>
                            <a target="_blank" href="https://docs.google.com/document/d/18GaipFPA3G17Y2obIWgcQrbkCW345BrO/edit?usp=sharing&ouid=101137335363524302635&rtpof=true&sd=true" class="text-black-600 hover:text-black-500 underline text-sm">Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/joshbellon/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://media.licdn.com/dms/image/D5635AQGaCm6mEApw_w/profile-framedphoto-shrink_200_200/0/1680552187978?e=1692586800&v=beta&t=DxWCVYGVDShtRT8sSJGnve8Bav7I_URaOy81mEKEZdg" alt="" class="rounded-t-lg" />
                    <div class="p-6">
                        <h2 class="font-bold mb-2 text-2xl text-black-800">Bekzod Tolipov
                        </h2>
                        <p class="text-black-700 mb-2">Data Lead</p>
                        <a target="_blank" href="https://drive.google.com/file/d/18u7p7ZwLKMpjy5mpjNmghMz3Wmce9gGk/view?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm">Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/bekzod-tolipov/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                </div>
                <div class="grid grid-cols-6 gap-4 mb-5 w-full px-6 sm:grid-cols-2 md:grid-cols-4">
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://avatars.githubusercontent.com/u/104471453?v=4" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Abdiresac Sheikdon
                            </h2>
                            <p class="text-black-700 mb-2">Software Engineer</p>
                            <a target="_blank" href="https://drive.google.com/file/d/13iQZtzUi-qSNhMDe1AnoQs6_sBTZ3Q5-/view?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm">Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/abdiresac-sheikdon/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/D4E03AQG2Zx5iOCdNkA/profile-displayphoto-shrink_400_400/0/1666985821397?e=1697068800&v=beta&t=vpsQpGA_8Qp8oKT3i09E6htZSR5e8VbqpSAxowf1yIg" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Alaysia Veal
                            </h2>
                            <p class="text-black-700 mb-2">Software Engineer</p>
                            <a target="_blank" href="https://docs.google.com/document/d/1IA90wWc4-yGIssioHjHuXc0Db-rvgfekegRmOinoCBI/edit?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm">Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/alaysia-veal/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/D4E35AQHsq6AStM61Jw/profile-framedphoto-shrink_200_200/0/1676427305513?e=1692586800&v=beta&t=YirSaYwwSvQHW97dyIE6jYUCx3yDnF6Ex6tt66CKMdM" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Cindy Amaya
                            </h2>
                            <p class="text-black-700 mb-2">Software Engineer</p>
                            <a target="_blank" href="https://docs.google.com/document/d/1e82JLykIIkQ0YoqBquWLN1C6DZjU0-ekReQCKt5AHrk/edit?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/cindyamayaswe/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/D5603AQGHMUF17TR1uQ/profile-displayphoto-shrink_200_200/0/1675902257269?e=1697673600&v=beta&t=SLyxvzEnr1Ycgje2bsVMY-UEJUyWIC5ohSdJ4RAXuE8" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Emily Jarecki
                            </h2>
                            <p class="text-black-700 mb-2">Software Engineer</p>
                            <a target="_blank" href="https://drive.google.com/file/d/1KxtmLLNcm7zXaGGFVc7JEVCTX3P4wHO_/view?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/emilyjarecki22/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/D4E35AQEKkB_7rVfajQ/profile-framedphoto-shrink_200_200/0/1683575700968?e=1692586800&v=beta&t=cgo_2CbjJijbu4uPNrL7VK_jc2-Wh3adsaouhXdT5IM" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Mary Lueder
                            </h2>
                            <p class="text-black-700 mb-2">Software Engineer</p>
                            <a target="_blank" href="https://docs.google.com/document/d/1YQ4qWm2krafjRJQzGg1jzOeDzky2kYIeY3BrZrN3ARg/edit?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/marylueder/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <img src="https://media.licdn.com/dms/image/D4E35AQHU_UPCnNw3Bg/profile-framedphoto-shrink_200_200/0/1684146356147?e=1692586800&v=beta&t=0ovcH0NEyunEswg6g6X1Eo3NHkqZ27TadB0DivFRfKI" alt="" class="rounded-t-lg" />
                        <div class="p-6">
                            <h2 class="font-bold mb-2 text-2xl text-black-800">Youssef Shabo
                            </h2>
                            <p class="text-black-700 mb-2">Software Engineer</p>
                            <a target="_blank" href="https://docs.google.com/document/d/1KUO9Hun26VBhlIoHJRVfGxnwL-cZemRYki9soIat3Wk/edit" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                            <a className='Link' target="_blank" href="https://www.linkedin.com/in/youssefshabo/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                        </div>
                    </div>

                    <br></br>
                    <br />
                </div></center>
            <div class="grid grid-cols-6 gap-4 mb-8 w-full sm:grid-cols-2 md:grid-cols-4 px-6 text-center ">
                
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://media.licdn.com/dms/image/D5635AQHz8Ojf6ynD4A/profile-framedphoto-shrink_200_200/0/1658339498034?e=1692586800&v=beta&t=kTXXN2F1AeMBL9oNCcuIuuXVDKNsCgQ8Q7OX2RIVg2U" alt="" class="rounded-t-lg" />
                    <div class="p-6 flex flex-col items-center">
                        <h2 class="font-bold mb-2 text-2xl text-black-800">Farnoosh Sharbafi
                        </h2>
                        <p class="text-black-700 mb-2">UX/UI Researcher / Designer</p>
                        <a target="_blank" href="https://drive.google.com/file/d/1NBqNgQgeqAyQBnqUU3xwgf4JBxMz_9FL/view?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/farnoosh-sharbafi/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://media.licdn.com/dms/image/C4E03AQH3pRThT4F3jw/profile-displayphoto-shrink_400_400/0/1656212335507?e=1697068800&v=beta&t=Wa3vztC9TjB0_velC4SXWJTzUmmDkgvUZf5jLem6RUs" alt="" class="rounded-t-lg" />
                    <div class="p-6 flex flex-col items-center">
                        <h2 class="font-bold mb-2 text-2xl text-black-800">Kelly KuyKendall
                        </h2>
                        <p class="text-black-700 mb-2">UX/UI Researcher / Designer</p>
                        <a target="_blank" href="https://docs.google.com/document/d/1T-W8me7SJwA0jL4hSEB5L3bYtxBGfW41JhvGSh-qCeQ/edit?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/kelly-kuykendall-pdx/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>

                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://media.licdn.com/dms/image/D4E35AQHRvt95BkyMOQ/profile-framedphoto-shrink_200_200/0/1680838516041?e=1692586800&v=beta&t=khJpLk7ir7n0PrY01nCHtpmttFCSlsKXiljR3LV6wZk" alt="" class="rounded-t-lg" />
                    <div class="p-6 flex flex-col items-center">
                        <h2 class="font-bold mb-2 text-2xl text-black-800">Dan Rossetti
                        </h2>
                        <p class="text-black-700 mb-2">Data Scientist</p>

                        <a target="_blank" href="https://drive.google.com/file/d/1790tQ8l6JGqhyEcbICJpgNvOjDB__jnp/view?usp=sharing" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/dan-rossetti/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>


                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg">
                    <img src="https://media.licdn.com/dms/image/D4E35AQEe4l6qeykx4g/profile-framedphoto-shrink_200_200/0/1676299709761?e=1692586800&v=beta&t=nv3TNZThjZf5Y0mv8pqUG_BGle0XRkYqsKUzybB-hxk" alt="" class="rounded-t-lg" />
                    <div class="p-6 flex flex-col items-center">
                        <h2 class="font-bold mb-2 text-2xl text-black-800">Ricky Everest
                        </h2>
                        <p class="text-black-700 mb-2">Data Scientist</p>

                        <a target="_blank" href="https://docs.google.com/document/d/1OY0FT6H_i5l6FqBadGd59z3RArd1eOE3p9osEJYZ29w/edit?usp=drivesdk" class="text-black-600 hover:text-black-500 underline text-sm"> Resume</a>

                        <a className='Link' target="_blank" href="https://www.linkedin.com/in/ricky-everest/" class="text-black-600 hover:text-black-500 underline text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>


                    </div>
                </div>
            </div>


            <h1 className="thanks text-center text-hych-title-blue pb-4 pt-2" >Thank You!</h1>
            <h2 className="message px-6 text-center font-semibold text-hych-title-blue">A special thank you to The Opportunity Project 2023, General Assembly, and the US Census Bureau for creating this chance for us to showcase our skills.</h2>
            </div>
            <Footer />
        </>

    )
};