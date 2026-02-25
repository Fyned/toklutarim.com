import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import HeroSlider from '@/components/home/HeroSlider';
import FeaturedMachines from '@/components/home/FeaturedMachines';
import WhyUs from '@/components/home/WhyUs';
import ProductionAndRDE from '@/components/home/ProductionAndRDE';
import TechDocs from '@/components/home/TechDocs';
import ContactCTA from '@/components/home/ContactCTA';


const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Yem Karma Makinesi | Toklu Tarım | Resmi Üretici Sitesi</title>
        <meta name="description" content="Yem karma makinesi üretiminde lider marka Toklu Tarım (Toklu Agro). Resmi üretici sitesinden yüksek kaliteli, dayanıklı ve verimli yem karma makinelerini, baskül ve otomatik kaşağıları inceleyin." />
        <meta property="og:title" content="Yem Karma Makinesi | Toklu Tarım | Resmi Üretici Sitesi" />
        <meta property="og:description" content="Dayanıklı ve verimli yem karma makineleri, hassas hayvan baskülleri ve konfor sağlayan otomatik kaşağılar. Çiftliğiniz için en iyi çözümler, lider üreticisi Toklu Tarım'da." />
        <meta name="keywords" content="yem karma, yem karma makinesi, toklu tarım, toklu agro, yem karma makinesi, hayvan baskülü, otomatik kaşağı, tarım makineleri" />
        <link rel="canonical" href="https://www.toklutarim.com" />
      </Helmet>
      
      <h1 className="sr-only">Yem Karma Makinesi Üreticisi - Toklu Tarım</h1>
      <HeroSlider />
      <FeaturedMachines />
      <WhyUs />
      <ProductionAndRDE />
      <TechDocs />
      <ContactCTA />

    </PageTransition>
  );
};

export default HomePage;