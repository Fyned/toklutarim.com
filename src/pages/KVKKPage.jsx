import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';

const KVKKPage = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>KVKK Aydınlatma Metni - Toklu Tarım</title>
                <meta name="description" content="Toklu Tarım Mak. San. Tic. Ltd. Şti. olarak kişisel verilerinizin korunmasına yönelik aydınlatma metnimiz." />
                <meta property="og:title" content="KVKK Aydınlatma Metni - Toklu Tarım" />
                <meta property="og:description" content="Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri işleme politikalarımız ve haklarınız." />
            </Helmet>

            <PageHeader
                title="Kişisel Verilerin Korunması Kanunu (KVKK)"
                subtitle="Aydınlatma Metni"
            />

            <div className="py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 prose prose-lg max-w-4xl">
                    <p>
                        <strong>Toklu Tarım Mak. San. Tic. Ltd. Şti.</strong> ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK” veya “Kanun”) uyarınca, Veri Sorumlusu sıfatıyla, kişisel verilerinizi aşağıda belirtilen amaçlar kapsamında ve mevzuata uygun olarak işlemekteyiz.
                    </p>

                    <h2>1. Veri Sorumlusu</h2>
                    <p>
                        KVKK uyarınca kişisel verileriniz, veri sorumlusu olarak <strong>Toklu Tarım Mak. San. Tic. Ltd. Şti.</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                    </p>
                    <p>
                        <strong>Adres:</strong> Tatlıcak Mah. Konya Ereğli Cad. No:17CA Karatay / KONYA <br />
                        <strong>E-posta:</strong> tokluagro@gmail.com
                    </p>

                    <h2>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
                    <p>
                        Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, ticari ve/veya iş stratejilerinin planlanması ve icrası, Şirket'in ve Şirket'le iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini amaçlarıyla; KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir. Bu kapsamda kişisel verileriniz özellikle şu amaçlarla işlenmektedir:
                    </p>
                    <ul>
                        <li>İletişim formları aracılığıyla ilettiğiniz talep, soru ve teklif isteklerinize yanıt vermek.</li>
                        <li>Ürün ve hizmetlerimiz hakkında bilgi sunmak.</li>
                        <li>Sipariş ve satış süreçlerini yönetmek.</li>
                        <li>Satış sonrası destek ve servis hizmetlerini sağlamak.</li>
                        <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
                        <li>Web sitemizin performansını analiz etmek ve kullanıcı deneyimini iyileştirmek.</li>
                    </ul>

                    <h2>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
                    <p>
                        Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda ve Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde; iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumları ve özel kişilere aktarılabilecektir.
                    </p>

                    <h2>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                    <p>
                        Kişisel verileriniz, web sitemizdeki iletişim ve teklif formları, e-posta, telefon gibi kanallar aracılığıyla otomatik veya otomatik olmayan yollarla toplanmaktadır. Kişisel verileriniz, Kanun'un 5. maddesinde belirtilen “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” ve “bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” hukuki sebeplerine dayalı olarak işlenmektedir.
                    </p>

                    <h2>5. Kişisel Veri Sahibinin KVKK’nın 11. Maddesinde Sayılan Hakları</h2>
                    <p>
                        Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                    </p>
                    <ul>
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                        <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                        <li>KVKK’da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
                        <li>(d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                        <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                        <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                    </ul>
                    <p>
                        Yukarıda belirtilen haklarınızı kullanmak için taleplerinizi, yukarıda belirtilen iletişim adresimize yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da Şirketimize daha önce bildirdiğiniz ve sistemimizde kayıtlı bulunan elektronik posta adresinizi kullanmak suretiyle iletebilirsiniz. Başvurunuzda, kimliğinizi tevsik edici belgelerin de eklenmesi gerekmektedir.
                    </p>
                    <p>
                        Başvurunuzda yer alan talepleriniz, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır.
                    </p>
                </div>
            </div>
        </PageTransition>
    );
};

export default KVKKPage;