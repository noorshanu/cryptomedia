"use client";
import Hero from "../components/Home/Hero";
import React from "react";
import Services from "../components/Home/Services";
import Whyus from "../components/Home/Whyus";
import UseCases from "../components/Home/UseCases";
import CTA from "../components/Home/CTA";
export default function Home() {
  return (
    <>
    <Hero />
    <Services />
    <Whyus />
    <UseCases />
    <CTA />
    </>
  );
}