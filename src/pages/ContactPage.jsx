import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import PageHeader from '@/components/layout/PageHeader';
import SubmissionTypeSwitcher from '@/components/SubmissionTypeSwitcher';

const PHONE = '905545069499';
const EMAIL = 'tokluagro@gmail.com';

const ContactPage = () => {
    const { toast } = useToast();
    const [submissionType, setSubmissionType] = useState('email');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (submissionType === 'whatsapp') {
            const message = `Merhaba, web siteniz üzerinden iletişime geçiyorum.
*Ad Soyad:* ${data.name}
*E-posta:* ${data.email}
*Konu:* ${data.subject}

*Mesajım:*
${data.message}`;
            const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            toast({
                title: "WhatsApp'a Yönlendiriliyor!",
                description: "Mesajınızı göndermek için WhatsApp'ı kullanabilirsiniz.",
            });
            e.target.reset();
        } else {
            const subject = data.subject || 'Web Sitesi İletişim Formu';
            const body = `Merhaba,

Aşağıdaki bilgilerle web siteniz üzerinden bir mesaj gönderilmiştir:

Ad Soyad: ${data.name}
E-posta: ${data.email}
Konu: ${data.subject}

Mesaj:
${data.message}
`;

            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            toast({
                title: "E-posta İstemciniz Açılıyor...",
                description: "Mesajınızı göndermek için lütfen e-posta programınızı kontrol edin.",
            });
            e.target.reset();
        }
    };

    return (
        <PageTransition>
            <Helmet>
                <title>İletişim | Toklu Tarım Resmi Üretici İletişim Bilgileri</title>
                <meta name="description" content="Fiyat teklifi almak, teknik destek istemek veya ürünlerimiz hakkında bilgi almak için Konya'daki üretici Toklu Tarım ile iletişime geçin. Adres, telefon ve harita bilgileri." />
                <meta property="og:title" content="İletişim | Toklu Tarım (Toklu Agro) Resmi İletişim Bilgileri" />
                <meta property="og:description" content="Konya'daki merkezimizden bize ulaşın. Satış, servis ve tüm sorularınız için telefon numaralarımız ve e-posta adresimiz burada." />
                <meta name="keywords" content="toklu tarım iletişim, toklu agro telefon, toklu tarım adres, konya tarım makineleri iletişim" />
                <link rel="canonical" href="https://www.toklutarim.com/iletisim" />
            </Helmet>

            <PageHeader
                title="Bize Ulaşın"
                subtitle="Sorularınız, talepleriniz ve iş birlikleriniz için her zaman yanınızdayız."
            />
            <h1 className="sr-only">Toklu Tarım İletişim Bilgileri</h1>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Mesaj Gönderin</h2>
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name">Adınız Soyadınız</Label>
                                    <Input id="name" name="name" type="text" placeholder="Adınız ve soyadınız" required />
                                </div>
                                <div>
                                    <Label htmlFor="email">E-posta Adresiniz</Label>
                                    <Input id="email" name="email" type="email" placeholder="ornek@eposta.com" required />
                                </div>
                                <div>
                                    <Label htmlFor="subject">Konu</Label>
                                    <Input id="subject" name="subject" type="text" placeholder="Fiyat Teklifi, Teknik Destek, Bayilik Başvurusu vb." required />
                                </div>
                                <div>
                                    <Label htmlFor="message">Mesajınız</Label>
                                    <Textarea id="message" name="message" rows={5} placeholder="Mesajınızı buraya detaylı olarak yazabilirsiniz..." required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Gönderim Yöntemini Seçin</Label>
                                    <SubmissionTypeSwitcher submissionType={submissionType} setSubmissionType={setSubmissionType} />
                                </div>
                                <Button type="submit" size="lg" className="w-full">
                                    <Send className="mr-2 h-5 w-5" /> Mesajı Gönder
                                </Button>
                            </form>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="text-3xl font-bold text-secondary mb-6">İletişim Kanallarımız</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-10 h-10 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-secondary">Üretim Tesisi ve Ofis</h3>
                                        <p className="text-muted-foreground">Toklu Tarım Mak. San. Tic. Ltd. Şti.</p>
                                        <p className="text-muted-foreground">Tatlıcak Mah. Konya Ereğli Cad. No:17CA, 42100 Karatay/Konya</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="w-10 h-10 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-secondary">Kurumsal E-posta</h3>
                                        <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary">{EMAIL}</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-10 h-10 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-secondary">Genel Müdür</h3>
                                        <p className="text-muted-foreground">Anıl Akalın</p>
                                        <a href={`tel:+${PHONE}`} className="text-muted-foreground hover:text-primary block mt-1">
                                            +90 554 506 94 99
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MessageSquare className="w-10 h-10 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-secondary">WhatsApp</h3>
                                        <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                            WhatsApp ile yazın
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-secondary mb-4">Haritadaki Konumumuz</h3>
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                                    <iframe
                                        src="https://maps.google.com/maps?q=37.865365728958764,32.5793755&z=17&output=embed&t=k"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full"
                                        title="Toklu Tarım Üretim Tesisi Konumu"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ContactPage;
