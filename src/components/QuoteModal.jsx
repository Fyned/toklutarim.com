import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { Send } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SubmissionTypeSwitcher from './SubmissionTypeSwitcher';

const allProducts = [
  'Yem Karma 1 m³',
  'Yem Karma 1.5 m³ ECO',
  'Yem Karma 2 m³',
  'Yem Karma 3 m³',
  'Yem Karma 6 m³',
  'Mekanik Baskül',
  'Elektronik Baskül',
  'Otomatik Kaşağı',
  'Diğer',
];

const QuoteModal = () => {
    const { isQuoteModalOpen, closeQuoteModal, quoteProduct } = useContext(AppContext);
    const { toast } = useToast();
    const [selectedProduct, setSelectedProduct] = useState('');
    const PHONE = '905545069499';
    const [submissionType, setSubmissionType] = useState('email');
    
    useEffect(() => {
        if(quoteProduct) {
            setSelectedProduct(quoteProduct);
        } else {
            setSelectedProduct('');
        }
    }, [quoteProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (submissionType === 'whatsapp') {
            const message = `Merhaba, teklif almak istiyorum.
*Ürün:* ${data.product || 'Belirtilmedi'}
*Ad Soyad:* ${data.name}
*Telefon:* ${data.phone}
*Notlar:* ${data.notes || 'Yok'}`;

            window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
            toast({
                title: "WhatsApp'a Yönlendiriliyor...",
                description: "Teklif talebinizi göndermek için WhatsApp'ı kullanabilirsiniz.",
            });
            setTimeout(() => {
                closeQuoteModal();
                e.target.reset();
                setSelectedProduct('');
            }, 500);
        } else {
            const subject = `Teklif İsteği: ${data.product || 'Genel'}`;
            const body = `Merhaba, aşağıdaki ürün için teklif almak istiyorum:

Ürün: ${data.product || 'Belirtilmedi'}
Ad Soyad: ${data.name}
Telefon: ${data.phone}
Notlar: ${data.notes || 'Yok'}

---
Bu istek web sitesi üzerinden gönderilmiştir.`;
            
            window.location.href = `mailto:tokluagro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            toast({
                title: "📬 E-posta Programınız Açılıyor...",
                description: "Teklif talebinizi göndermek için e-posta istemcinizi kontrol edin.",
            });
            setTimeout(() => {
                closeQuoteModal();
                e.target.reset();
                setSelectedProduct('');
            }, 500);
        }
    };

    const handleProductChange = (value) => {
        setSelectedProduct(value);
    }
    
    return (
        <>
            <Dialog open={isQuoteModalOpen} onOpenChange={closeQuoteModal}>
                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle>Hızlı Teklif Al</DialogTitle>
                        <DialogDescription>
                            İlgilendiğiniz ürün için aşağıdaki formu doldurun, size hemen dönüş yapalım.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="product" className="text-right">
                                Ürün
                            </Label>
                            <Select value={selectedProduct} onValueChange={handleProductChange} name="product">
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="İlgilendiğiniz ürünü seçin" />
                                </SelectTrigger>
                                <SelectContent>
                                    {allProducts.map(product => (
                                        <SelectItem key={product} value={product}>{product}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Ad Soyad
                            </Label>
                            <Input id="name" name="name" placeholder="Adınız ve Soyadınız" className="col-span-3" required/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Telefon
                            </Label>
                            <Input id="phone" name="phone" type="tel" placeholder="Telefon Numaranız" className="col-span-3" required/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="notes" className="text-right">
                                Notlar
                            </Label>
                            <Textarea id="notes" name="notes" placeholder="Eklemek istediğiniz notlar (opsiyonel)" className="col-span-3" />
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">
                                Gönderim
                            </Label>
                            <div className="col-span-3">
                               <SubmissionTypeSwitcher submissionType={submissionType} setSubmissionType={setSubmissionType} />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" className="w-full">
                               <Send className="mr-2 h-4 w-4" /> Teklifi Gönder
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default QuoteModal;