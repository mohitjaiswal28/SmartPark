
import React from 'react'
import AboutItem, { AboutContactItem } from '../components/AboutItem'
import Instagram from '../assets/Social Logos/Instagram.png'
import Gmail from '../assets/Social Logos/Gmail.png'
import Vector4 from '../assets/Vector/4.png'
import Footer from '../layouts/Footer';

export default function About() {
    return (
        <section id="about">
            <div className="container-fluid px-0">

                <div className="container mb-md-0 mt-5">
                    <h1 className="heading-text au-text">About Us</h1>

                    {/* Row 1 */}
                    <img src={Vector4} alt="Vector4" className='Vector4' />
                    <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                        <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">

                            <AboutItem
                                q="What is SmartPark ? "
                                a="SmartPark is a revolutionary platform leveraging technology to provide real-time updates on available parking spaces."
                            />

                            <AboutItem
                                q="How does SmartPark work ?"
                                a="SmartPark aggregates data to offer accurate parking availability info, accessible via web or app for easy spot finding."
                            />

                            <AboutItem
                                q="What makes SmartPark different from other parking apps ?"
                                a="SmartPark prioritizes real-time updates and user-friendly features, guaranteeing accuracy and convenience for a seamless parking experience."
                            />

                            <AboutItem
                                q="Who can benefit from using SmartPark ?"
                                a="SmartPark is for anyone needing parking, whether running errands, meeting friends, or attending meetings, offering quick and efficient parking location assistance."
                            />

                            <AboutItem
                                q="How can I get started with SmartPark ?"
                                a="Getting started with SmartPark is easy! Simply download our app from Google Play Store, or visit our website to access our services online."
                            />

                            <AboutItem
                                q="Thank You "
                                a="Thank you for choosing SmartPark. We're committed to providing the best service and helping you navigate urban parking challenges."
                            />

                            <AboutItem
                                q="Contact Details:"
                                a="SmartPark, Pune, India +91-0123456789."
                            />

                            <AboutContactItem
                                q="Contact Us ?"
                                sociallogomail={Gmail}
                                sociallogoinstagram={Instagram}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </section>
    )
}