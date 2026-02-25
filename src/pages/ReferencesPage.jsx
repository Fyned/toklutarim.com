import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Toklu Tarım'ın yem karma makinesi sayesinde rasyon hazırlamak artık çok daha hızlı ve kolay. Karışımın homojenliği hayvanların yem seçmesini engelledi. Konya'dan aldığım en doğru karar.",
    author: "Ahmet Yılmaz",
    location: "Konya",
    alt: "Memnun müşteri Ahmet Yılmaz'ın portresi",
    image: "/images/references/ref-1.jpg"
  },
  {
    quote: "Satış sonrası servis desteği gerçekten olağanüstü. Ufak bir sorun yaşadık, mobil ekipleri aynı gün gelip çözdü. Makinenin arkasında duran bir firma.",
    author: "Ayşe Kaya",
    location: "Afyonkarahisar",
    alt: "Memnun müşteri Ayşe Kaya'nın portresi",
    image: "/images/references/ref-2.jpg"
  },
  {
    quote: "Fiyat/performans olarak piyasanın açık ara en iyisi. Bu kadar sağlam ve kaliteli bir makineyi bu fiyatlara bulmak imkansız. Tüm çiftçi dostlarıma gözüm kapalı tavsiye ederim.",
    author: "Mustafa Öztürk",
    location: "Erzurum",
    alt: "Memnun müşteri Mustafa Öztürk'ün portresi",
    image: "/images/references/ref-3.jpg"
  },
  {
    quote: "Otomatik hayvan kaşağısını ilk başta lüks sanmıştım ama yanılmışım. Hayvanların stresi azaldı, daha sakinler ve süt veriminde gözle görülür bir artış oldu. Harika bir yatırım.",
    author: "Fatma Demir",
    location: "İzmir",
    alt: "Memnun müşteri Fatma Demir'in portresi",
    image: "/images/references/ref-4.jpg"
  },
  {
    quote: "Elektronik baskül ile sürü takibi yapmak çok pratikleşti. Hangi hayvan ne kadar kilo almış, anında görüyoruz. Veriye dayalı yönetim sayesinde karlılığımız arttı. Teşekkürler Toklu Tarım!",
    author: "Hasan Çelik",
    location: "Kayseri",
    alt: "Memnun müşteri Hasan Çelik'in portresi",
    image: "/images/references/ref-5.jpg"
  },
  {
    quote: "Makinemin şasesi galvaniz kaplı. Yıllardır en zorlu koşullarda kullanıyorum, en ufak bir paslanma veya çürüme belirtisi yok. Toklu Tarım kalitesi gerçekten tartışılmaz.",
    author: "Mehmet Arslan",
    location: "Adana",
    alt: "Memnun müşteri Mehmet Arslan'ın portresi",
    image: "/images/references/ref-6.jpg"
  }
];

const ReferencesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Referanslarımız | Toklu Tarım Müşteri Memnuniyeti</title>
        <meta name="description" content="Türkiye'nin dört bir yanındaki mutlu Toklu Tarım müşterilerinin yorumları ve deneyimleri. Kalitemiz ve güvenilirliğimiz hakkında müşterilerimizin ne dediğini kendiniz görün." />
        <meta property="og:title" content="Referanslarımız | Toklu Tarım Müşteri Başarı Hikayeleri" />
        <meta property="og:description" content="Toklu Tarım makinelerini kullanan çiftçilerin deneyimlerini, verim artışlarını ve memnuniyetlerini birinci ağızdan okuyun." />
        <meta name="keywords" content="toklu tarım referans, toklu tarım yorum, müşteri memnuniyeti, çiftçi yorumları, yem karma makinesi yorum" />
        <link rel="canonical" href="https://www.toklutarim.com/referanslar" />
      </Helmet>

      <PageHeader 
        title="Müşterilerimiz Bizim İçin Ne Dedi?"
        subtitle="Türkiye'nin Dört Bir Yanından Gelen Gerçek Kullanıcı Yorumları"
      />
      <h1 className="sr-only">Toklu Tarım Müşteri Yorumları ve Referansları</h1>

      <div className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full p-8 text-center bg-card shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <img loading="lazy" alt={testimonial.alt} className="w-24 h-24 rounded-full mb-6 object-cover ring-4 ring-primary/20 mx-auto" src={testimonial.image} width="96" height="96" />
                  <p className="text-muted-foreground italic text-base flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-6">
                    <p className="font-bold text-lg text-secondary">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.location}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ReferencesPage;