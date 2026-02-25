import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Truck, Wrench, Target, Eye, HelpCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { images } from '@/assets/images';

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};
const faqItems = [{
  question: "Toklu Tarım ürünlerinin garantisi ne kadar sürelidir?",
  answer: "Tüm Toklu Tarım markalı ürünler, üretim ve malzeme hatalarına karşı fatura tarihinden itibaren tam 2 yıl boyunca garantimiz altındadır. Kullanıcı hatası dışındaki tüm arızalar, garanti kapsamında ücretsiz olarak onarılır veya değiştirilir."
}, {
  question: "Türkiye'nin her yerine servis ve montaj hizmetiniz var mı?",
  answer: "Evet, Türkiye'nin 81 iline yayılmış geniş servis ağımız ve mobil servis ekiplerimizle hizmet veriyoruz. Satın aldığınız makinenin montajı, yerinde profesyonel ekibimiz tarafından yapılır ve ihtiyaç anında en hızlı şekilde size ulaşarak makinenizin kesintisiz çalışmasını sağlarız."
}, {
  question: "220V (ev elektriği) ile çalışan yem karma makinesi modeliniz var mı?",
  answer: "Evet, 1.5 m³ ECO modelimiz, trifaze (sanayi) elektriği olmayan çiftlikler için özel olarak 220V monofaze ev elektriği ile çalışacak şekilde tasarlanmıştır. Bu sayede, nerede bir priz varsa orada yem hazırlama özgürlüğü sunan ekonomik ve pratik bir çözümdür."
}, {
  question: "Makinelerin yedek parçalarını nasıl temin edebilirim?",
  answer: "Toklu Tarım olarak, ürettiğimiz tüm makinelerin orijinal yedek parçalarını stoklarımızda bulunduruyoruz. İletişim numaralarımızdan veya e-posta yoluyla bize ulaşarak ihtiyacınız olan parçayı hızlı bir şekilde sipariş edebilirsiniz. Siparişiniz aynı gün içerisinde kargoya verilir."
}];
const AboutPage = () => {
  return <PageTransition>
      <Helmet>
        <title>Hakkımızda | Toklu Tarım - Konya Yem Karma Makinesi Üreticisi</title>
        <meta name="description" content="Toklu Tarım'ın köklü geçmişini, kalite politikasını ve gelecek vizyonunu keşfedin. Konya'nın lider yem karma makinesi üreticisi Toklu Tarım (Toklu Agro), kaliteli ve dayanıklı makineleriyle daima çiftçinin yanındaki güç." />
         <meta property="og:title" content="Hakkımızda | Toklu Tarım - Konya Yem Karma Makinesi Üreticisi" />
        <meta property="og:description" content="Yılların tecrübesiyle dayanıklı ve verimli tarım makineleri üretiyoruz. Vizyonumuz, misyonumuz ve Toklu Tarım'ı sektör lideri yapan değerler hakkında daha fazla bilgi edinin." />
        <meta name="keywords" content="toklu tarım hakkımızda, konya yem karma üreticisi, tarım makineleri üreticisi, konya tarım firmaları, toklu agro, toklu tarım vizyon, toklu tarım misyon, kalite politikası" />
        <link rel="canonical" href="https://www.toklutarim.com/hakkimizda" />
      </Helmet>
      
      <PageHeader title="Toklu Tarım'ın Hikayesi" subtitle="Yılların tecrübesini, teknoloji ve kalite ile harmanlıyoruz." />

      <div className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          
          <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl font-bold text-secondary mb-4">Toklu Tarım: Konya'dan Doğan Güç ve Güven</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Toklu Tarım, Konya'nın bereketli topraklarında, çiftçinin alın terine ve emeğine değer katma misyonuyla kurulmuş lider bir tarım makineleri üreticisidir. Özellikle <strong className="text-primary">Konya yem karma makinesi</strong> denildiğinde akla gelen ilk marka olmanın gururunu yaşıyoruz. Yem karma makinelerinin yanı sıra, hassas hayvan baskülleri ve hayvan refahını artıran otomatik kaşağılar gibi geniş bir ürün yelpazesiyle modern hayvancılık sektörüne yön veriyoruz.
              </p>
              <p className="text-lg text-muted-foreground">
                Felsefemiz basit: En zorlu arazi ve çalışma koşullarında dahi ilk günkü performansını koruyan, uzun ömürlü, dayanıklı ve kullanımı kolay makineler üretmek. Satış sürecini bir başlangıç olarak görüyor, satış sonrası kesintisiz destek, hızlı yedek parça temini ve uzman servis hizmetlerimizle her zaman çiftçimizin yanında yer alıyoruz.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
               <div className="absolute -top-4 -left-4 w-full h-full bg-primary rounded-lg transform -rotate-2 z-0"></div>
               <img loading="lazy" alt="Toklu Tarım fabrikasının dış cephesi ve modern üretim tesisi" className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10" src={images.aboutFactoryExterior} width="500" height="350" />
            </motion.div>
          </motion.section>

          <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} className="grid md:grid-cols-2 gap-16 items-center mb-24">
             <motion.div variants={itemVariants} className="relative order-last md:order-first">
               <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg transform rotate-2 z-0"></div>
               <img loading="lazy" alt="Toklu Tarım Ar-Ge ve inovasyon merkezi, mühendisler çalışırken" className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10" src={images.aboutProductionWorkshop} width="500" height="350" />
            </motion.div>
             <motion.div variants={itemVariants} className="order-first md:order-last">
              <h2 className="text-3xl font-bold text-secondary mb-4">Vizyon & Misyon</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                    <Eye className="w-12 h-12 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-secondary">Vizyonumuz</h3>
                        <p className="text-muted-foreground">Sürekli Ar-Ge ve inovasyon gücümüzle, sadece Türkiye'de değil, uluslararası pazarda da tarım makineleri sektörünün, özellikle <strong className="text-secondary">yem karma makinesi</strong> alanında en güvenilir, yenilikçi ve tercih edilen markası olmak.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Target className="w-12 h-12 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-secondary">Misyonumuz</h3>
                        <p className="text-muted-foreground">Çiftçilerimizin verimliliğini ve karlılığını artıracak, en yüksek kalitede malzemeden üretilmiş, dayanıklı, kullanıcı dostu ve yaygın servis ağıyla desteklenen makineler sunarak Türkiye tarımının sürdürülebilir gelişimine katkıda bulunmak.</p>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section className="mb-24" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}}>
             <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Toklu Tarım Kalite Politikası: 4 Temel Değer</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Mükemmelliğe olan sarsılmaz bağlılığımız, üretimimizin her aşamasına ve size sunduğumuz her makineye yansır.</p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div variants={itemVariants} className="p-8 bg-card border rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Sınıfının En İyisi Malzeme</h3>
                <p className="text-muted-foreground">Aşınmaya dayanıklı ST52 çelik gövde, İtalyan şanzıman ve güçlü motorlar ile yıllara meydan okuyan uzun ömür.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 bg-card border rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Koşulsuz Garanti</h3>
                <p className="text-muted-foreground">Tüm ürünlerimizde, kullanıcı hatası hariç, 2 yıl boyunca sorgusuz sualsiz tam kapsamlı üretim hatası garantisi.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 bg-card border rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Wrench className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Anında Servis ve Yedek Parça</h3>
                <p className="text-muted-foreground">Türkiye geneli mobil ekiplerimizle yerinde destek ve stoktan anında yedek parça temini.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 bg-card border rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Truck className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Çiftçi Odaklı Çözümler</h3>
                <p className="text-muted-foreground">Sizi dinliyor, ihtiyaçlarınıza en uygun makineyi ve opsiyonları sunarak işinize değer katıyoruz.</p>
              </motion.div>
            </motion.div>
          </motion.section>

          <section className="bg-card p-8 md:p-16 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 text-primary/5 opacity-50">
              <HelpCircle size={300} strokeWidth={1} />
            </div>
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Sıkça Sorulan Sorular (SSS)</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Müşterilerimizden en sık aldığımız soruların yanıtlarını sizler için derledik.</p>
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="max-w-3xl mx-auto relative z-10">
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => <AccordionItem value={`item-${index + 1}`} key={index}>
                            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>)}
                </Accordion>
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>;
};
export default AboutPage;