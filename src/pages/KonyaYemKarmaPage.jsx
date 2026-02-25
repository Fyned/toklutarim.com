import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { AppContext } from '@/context/AppContext';
import ProductCard from '@/components/products/ProductCard';
import PageHeader from '@/components/layout/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Wrench, Truck, Sparkles } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const faqItems = [
    {
      question: "Neden Konya'da üretilen bir yem karma makinesi tercih etmeliyim?",
      answer: "Konya, Türkiye'nin tarım ve hayvancılık sanayisinin kalbidir. Konya'da üretilen bir makine, bölge çiftçisinin gerçek ihtiyaçlarına göre tasarlanmış, zorlu arazi koşullarına uygun, yedek parça ve servis ağının en güçlü olduğu bir çözüm demektir. Toklu Tarım olarak biz de bu ekosistemin bir parçası olmaktan gurur duyuyoruz."
    },
    {
      question: "Toklu Tarım yem karma makinelerini rakiplerinden ayıran en önemli özellik nedir?",
      answer: "Kaliteye olan sarsılmaz bağlılığımız. Rakiplerimizden farklı olarak, makinelerimizde sektör standardının üzerinde kalınlıkta ST52 çelik sac, İtalyan malı şanzımanlar ve yüksek verimli motorlar kullanıyoruz. Bu da daha uzun ömürlü, daha az arıza yapan ve daha dayanıklı makineler anlamına geliyor."
    },
    {
      question: "Hangi kapasitedeki yem karma makinesi benim için uygun?",
      answer: "Doğru kapasite seçimi, hayvan sayınıza ve türüne (büyükbaş/küçükbaş) bağlıdır. Genel bir kural olarak, hayvan sayınıza yetecek kapasiteden bir miktar daha büyük bir model seçmek, gelecekteki büyüme potansiyelinizi karşılamanıza yardımcı olur. Uzman satış ekibimiz, işletmeniz için en ideal modeli belirlemenize yardımcı olmaktan mutluluk duyar."
    },
    {
        question: "Makinenin kurulumu ve servis hizmetlerini nasıl sağlıyorsunuz?",
        answer: "Toklu Tarım olarak Türkiye'nin 81 iline yayılmış geniş servis ağımız bulunmaktadır. Satın aldığınız makinenin kurulumu, mobil servis ekibimiz tarafından çiftliğinizde yapılır ve makinenin doğru kullanımı hakkında detaylı eğitim verilir. Herhangi bir arıza durumunda da en hızlı şekilde müdahale ederiz."
    }
];

const KonyaYemKarmaPage = () => {
    const { products } = useContext(AppContext);
    const yemKarmaProducts = products.filter(p => p.category === 'yem-karma').sort((a,b) => parseFloat(a.name.match(/(\\d+,?)+/)) - parseFloat(b.name.match(/(\\d+,?)+/)));
    
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    return (
        <PageTransition>
            <Helmet>
                <title>Konya Yem Karma Makinesi | Lider Üretici Toklu Tarım</title>
                <meta name="description" content="Konya'nın lider üreticisi Toklu Tarım'dan, her çiftliğe uygun, yüksek verimli ve dayanıklı yem karma makineleri. Modelleri inceleyin, fiyat teklifi alın!" />
                <meta property="og:title" content="Konya Yem Karma Makinesi | Toklu Tarım Kalitesi ve Güvencesi" />
                <meta property="og:description" content="Dayanıklılık, verimlilik ve güçlü servis ağı... Konya'nın en iyi yem karma makinelerini keşfedin. Toklu Tarım, çiftçinin yanında." />
                <meta name="keywords" content="konya yem karma makinesi, konya yem karma, yem karma makinesi konya, toklu tarım yem karma, yem karma makinesi fiyatları konya" />
                <link rel="canonical" href="https://www.toklutarim.com/konya-yem-karma-makinesi" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <PageHeader 
                title="Konya Yem Karma Makineleri"
                subtitle="Kalite, Güven ve Yüksek Verim Arayanların Adresi: Toklu Tarım"
            />
            <h1 className="sr-only">Konya Yem Karma Makineleri: Kalite ve Güvenin Adresi</h1>

            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-4">Neden Konya'dan Bir Yem Karma Makinesi Almalısınız?</h2>
                        <p className="text-lg text-muted-foreground">
                            Konya, Türkiye'nin tarım sanayisinin merkezidir. Buradan alacağınız bir makine, sadece çelik ve motordan ibaret değildir; aynı zamanda yılların tecrübesi, yaygın servis ağı ve çiftçinin dilinden anlayan bir üretim anlayışının ürünüdür. Toklu Tarım olarak, Konya'nın bu gücünü arkamıza alarak sizlere en kaliteli ve en dayanıklı makineleri sunuyoruz.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {yemKarmaProducts.map((machine, index) => (
                            <motion.div 
                                key={machine.slug} 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            >
                                <ProductCard product={machine} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.section 
                        className="bg-card p-8 md:p-12 rounded-2xl shadow-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-secondary text-center mb-10">Toklu Tarım Farkı: Konya'nın Gücüyle Tanışın</h2>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                        >
                            <motion.div variants={itemVariants} className="flex flex-col items-center">
                                <Award className="w-12 h-12 text-primary mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-secondary">Üstün Malzeme Kalitesi</h3>
                                <p className="text-muted-foreground">Aşınmaya dayanıklı ST52 çelik, İtalyan şanzıman ve güçlü motorlarla uzun ömürlü kullanım.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-col items-center">
                                <Wrench className="w-12 h-12 text-primary mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-secondary">Yaygın Servis Ağı</h3>
                                <p className="text-muted-foreground">Konya merkezli mobil ekiplerimizle Türkiye'nin her noktasına hızlı servis ve yedek parça desteği.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-col items-center">
                                <Truck className="w-12 h-12 text-primary mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-secondary">Doğrudan Üreticiden</h3>
                                <p className="text-muted-foreground">Aracısız, doğrudan fabrika fiyatları ve 2 yıl tam kapsamlı üretici garantisi güvencesi.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-col items-center">
                                <Sparkles className="w-12 h-12 text-primary mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-secondary">Çiftçi Dostu Tasarım</h3>
                                <p className="text-muted-foreground">Kolay kullanım, basit bakım ve işletme maliyetlerinizi düşüren verimli çözümler.</p>
                            </motion.div>
                        </motion.div>
                    </motion.section>

                    <section className="mt-24 max-w-4xl mx-auto">
                        <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.7}} className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Konya Yem Karma Makineleri Hakkında Sıkça Sorulan Sorular</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Aklınızdaki soruların yanıtlarını burada bulabilirsiniz.</p>
                        </motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5, delay: 0.3}}>
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, index) => (
                                    <AccordionItem value={`item-${index + 1}`} key={index} className="bg-card border-b">
                                        <AccordionTrigger className="text-left p-6 font-semibold text-lg">{item.question}</AccordionTrigger>
                                        <AccordionContent className="p-6 pt-0 text-base text-muted-foreground">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    </section>
                </div>
            </section>
            
            <ContactCTA />

        </PageTransition>
    );
};

export default KonyaYemKarmaPage;