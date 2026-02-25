import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AppContext } from '@/context/AppContext';
import SubmissionTypeSwitcher from '@/components/SubmissionTypeSwitcher';

const ProductDetailPage = () => {
    const { slug } = useParams();
    const { products } = useContext(AppContext);
    const product = products.find(p => p.slug === slug);
    
    const PHONE = '905545069499';
    const EMAIL = 'tokluagro@gmail.com';
    const { toast } = useToast();
    const { openQuoteModal } = useContext(AppContext);
    const [submissionType, setSubmissionType] = useState('email');

    if (!product) {
       return <Navigate to="/404" replace />;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (submissionType === 'whatsapp') {
            const message = `Merhaba, *${product.name}* ürünü hakkında bir sorum var.
*Ad Soyad:* ${data.name}
*E-posta:* ${data.email}

*Sorum:*
${data.message}`;

            window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
            toast({
                title: "WhatsApp'a Yönlendiriliyor!",
                description: "Mesajınızı göndermek için WhatsApp'ı kullanabilirsiniz.",
            });
            e.target.reset();

        } else {
            const subject = `${product.name} Hakkında Soru`;
            const body = `Merhaba, ${product.name} ürünü hakkında bir sorum var:

Ad Soyad: ${data.name}
E-posta: ${data.email}

Soru:
${data.message}

---
Bu mesaj Toklu Tarım web sitesi ürün detay sayfası üzerinden gönderilmiştir.`;

            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            toast({
                title: "E-posta İstemciniz Açılıyor...",
                description: "Sorunuzu göndermek için lütfen e-posta programınızı kontrol edin.",
            });
            e.target.reset();
        }
    };

    const pageTitle = product.category === 'yem-karma' 
        ? `Konya Yem Karma Makinesi - ${product.name}` 
        : product.name;

    return (
        <PageTransition>
            <Helmet>
                <title>{`${pageTitle} | Toklu Tarım | Resmi Üretici`}</title>
                <meta name="description" content={`${product.description} Toklu Tarım (Toklu Agro) kalitesi ve güvencesiyle. Teknik özellikleri ve detaylar için resmi üretici sayfamızı ziyaret edin.`} />
                <meta property="og:title" content={`${pageTitle} | Toklu Tarım | Resmi Üretici Sitesi`} />
                <meta property="og:description" content={`${product.description} Toklu Tarım (Toklu Agro) kalitesiyle.`} />
                <meta property="og:image" content={product.image} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={`https://www.toklutarim.com/urunler/${slug}`} />
                <meta name="keywords" content={`toklu tarım, toklu agro, ${product.name}, ${product.category.replace('-', ' ')}, konya yem karma makinesi, hayvan baskülü, otomatik kaşağı`} />
                <link rel="canonical" href={`https://www.toklutarim.com/urunler/${slug}`} />
            </Helmet>
            
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                       <div className="overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-10">
                           <img  
                                alt={`${product.alt} - Resmi Toklu Tarım Ürünü`}
                                className="w-full h-full object-cover"
                                src={product.image} 
                                width="800"
                                height="500"
                            />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{pageTitle}</h1>
                        <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
                        <h2 className="text-xl font-semibold text-secondary mb-3">Temel Avantajları:</h2>
                        <ul className="space-y-2 mb-8">
                            {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center text-foreground">
                                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                         <Button size="lg" onClick={() => openQuoteModal(product.name)}>Hemen Fiyat Teklifi Alın</Button>
                    </motion.div>
                </div>

                <div className="mt-16 sm:mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">Detaylı Teknik Özellikler</h2>
                    <div className="border rounded-lg overflow-hidden max-w-4xl mx-auto shadow-lg">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead className="w-1/3 font-semibold text-base text-secondary">Özellik</TableHead>
                                    <TableHead className="font-semibold text-base text-secondary">Değer</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {product.specs.map((spec, index) => (
                                    <TableRow key={index} className="even:bg-muted/20">
                                        <TableCell className="font-medium text-secondary">{spec.label}</TableCell>
                                        <TableCell>{spec.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                 <div className="mt-16 sm:mt-24 grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-xl font-semibold text-secondary mb-4">Standart Donanım Paketi</h3>
                        <ul className="space-y-2">
                            {product.standard.map((item, i) => (
                                <li key={i} className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-secondary mb-4">Opsiyonel Eklentiler</h3>
                        <ul className="space-y-2">
                             {product.options.map((item, i) => (
                                <li key={i} className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-yellow-500" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 max-w-2xl mx-auto bg-card border p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">Bu Ürün Hakkında Uzmanına Sorun</h2>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name">Adınız Soyadınız</Label>
                            <Input id="name" name="name" type="text" placeholder="Adınız Soyadınız" required />
                        </div>
                        <div>
                            <Label htmlFor="email">E-posta Adresiniz</Label>
                            <Input id="email" name="email" type="email" placeholder="ornek@mail.com" required />
                        </div>
                        <div>
                            <Label htmlFor="message">Sorunuz</Label>
                            <Textarea id="message" name="message" placeholder="Bu ürünle ilgili merak ettiklerinizi buraya yazın..." required />
                        </div>
                        <div className="space-y-2">
                            <Label>Gönderim Yöntemini Seçin</Label>
                            <SubmissionTypeSwitcher submissionType={submissionType} setSubmissionType={setSubmissionType} />
                        </div>
                        <div className="text-center pt-2">
                            <Button type="submit" size="lg" className="w-full">
                                <Send className="mr-2 h-5 w-5" /> Soruyu Gönder
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </PageTransition>
    );
};

export default ProductDetailPage;