import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';

const CookiePolicyPage = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Çerez Politikası - Toklu Tarım</title>
                <meta name="description" content="Toklu Tarım web sitesi olarak kullandığımız çerezler ve bu çerezlerin kullanım amaçları hakkındaki politikamız." />
                <meta property="og:title" content="Çerez Politikası - Toklu Tarım" />
                <meta property="og:description" content="Web sitemizde daha iyi bir kullanıcı deneyimi sunmak için çerezleri nasıl kullandığımızı öğrenin." />
            </Helmet>

            <PageHeader
                title="Çerez Politikası"
                subtitle="Web Sitemizde Çerezlerin Kullanımı"
            />

            <div className="py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 prose prose-lg max-w-4xl">
                    <p>
                        <strong>Toklu Tarım Mak. San. Tic. Ltd. Şti.</strong> olarak, web sitemizi ziyaretiniz sırasında kullanıcı deneyiminizi geliştirmek amacıyla çerezler (cookies) kullanmaktayız. Bu politika, hangi tür çerezleri neden kullandığımızı ve bu çerezleri nasıl kontrol edebileceğinizi açıklamaktadır.
                    </p>

                    <h2>1. Çerez Nedir?</h2>
                    <p>
                        Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin tercihlerinizi (kullanıcı adı, dil vb.) hatırlamasına, site performansını analiz etmesine ve size daha kişiselleştirilmiş bir deneyim sunmasına yardımcı olur.
                    </p>
                    
                    <h2>2. Hangi Tür Çerezleri Kullanıyoruz?</h2>
                    <p>Web sitemizde aşağıdaki çerez türleri kullanılmaktadır:</p>
                    <ul>
                        <li>
                            <strong>Zorunlu Çerezler:</strong> Bu çerezler, web sitesinin temel işlevlerinin çalışması için gereklidir. Sitede gezinmenizi ve güvenlikli alanlara erişim gibi özellikleri kullanmanızı sağlarlar. Bu çerezler olmadan web sitesi düzgün çalışmaz.
                        </li>
                        <li>
                            <strong>Performans ve Analiz Çerezleri:</strong> Bu çerezler, ziyaretçilerin web sitesini nasıl kullandığı hakkında (örneğin en çok ziyaret edilen sayfalar, hata mesajları) anonim bilgiler toplar. Bu veriler, web sitesinin performansını iyileştirmek için kullanılır.
                        </li>
                        <li>
                            <strong>İşlevsel Çerezler:</strong> Bu çerezler, web sitesinin yaptığınız seçimleri (kullanıcı adı, dil, bölge vb.) hatırlamasını ve size daha gelişmiş, kişisel özellikler sunmasını sağlar.
                        </li>
                    </ul>

                    <h2>3. Çerezleri Neden Kullanıyoruz?</h2>
                    <p>Çerezleri aşağıdaki amaçlarla kullanmaktayız:</p>
                    <ul>
                        <li>Web sitemizin doğru ve güvenli bir şekilde çalışmasını sağlamak.</li>
                        <li>Kullanıcı deneyimini iyileştirmek ve tercihlerinizi hatırlayarak siteyi sizin için kişiselleştirmek.</li>
                        <li>Web sitemizin kullanımını analiz ederek performansını artırmak.</li>
                        <li>Hangi sayfaların daha popüler olduğunu anlamak ve içeriğimizi buna göre geliştirmek.</li>
                    </ul>

                    <h2>4. Çerezleri Nasıl Kontrol Edebilir veya Silebilirsiniz?</h2>
                    <p>
                        Çoğu web tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Ancak, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir, silebilir veya çerez gönderildiğinde uyarı alabilirsiniz. Çerezleri yönetme yöntemleri tarayıcıdan tarayıcıya farklılık gösterir. Tarayıcınızın "Yardım" menüsünü kullanarak detaylı bilgi alabilirsiniz.
                    </p>
                    <p>
                        Lütfen unutmayın ki, çerezleri devre dışı bırakmanız veya silmeniz durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir ve kullanıcı deneyiminiz olumsuz etkilenebilir.
                    </p>

                    <h2>5. Politika Değişiklikleri</h2>
                    <p>
                        Bu Çerez Politikası, yasal düzenlemeler veya çerez kullanımındaki değişiklikler doğrultusunda güncellenebilir. Politikadaki önemli değişiklikler web sitemiz aracılığıyla duyurulacaktır.
                    </p>
                    <p>
                        Çerez politikamız hakkında daha fazla bilgi için <strong>tokluagro@gmail.com</strong> e-posta adresinden bizimle iletişime geçebilirsiniz.
                    </p>
                </div>
            </div>
        </PageTransition>
    );
};

export default CookiePolicyPage;