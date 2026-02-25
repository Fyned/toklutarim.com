import { images } from '@/assets/images';

export const post = { 
  id: 3, 
  slug: 'tarim-makinelerinde-kis-bakimi',
  title: 'Tarım Makinelerinde Kış Bakımının Önemi ve Püf Noktaları', 
  author: 'Servis Mühendisi Ali', 
  date: '2025-08-05', 
  readTime: '7 dk',
  excerpt: 'Makinelerinizin ömrünü uzatacak ve yeni sezona sorunsuz bir başlangıç yapmanızı sağlayacak basit ama etkili kış bakım tavsiyeleri.', 
  image: images.blogDefault, 
  alt: 'Traktör motoru bakımı - Toklu Tarım',
  tags: ["bakım", "kış bakımı", "makine ömrü", "servis", "toklu tarım"],
  content: `
    <p class="text-xl text-muted-foreground mb-6">Hasat sezonunun sona ermesi ve kışın yaklaşmasıyla birlikte, tarım makinelerimiz de hak ettikleri dinlenme dönemine giriyor. Ancak bu dönem, onları bir kenara bırakıp unutmak anlamına gelmemeli. Aksine, doğru bir kış bakımı, makinelerinizin ömrünü uzatacak, büyük arızaların önüne geçecek ve yeni sezona sorunsuz bir başlangıç yapmanızı sağlayacaktır.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Neden Kış Bakımı Yapmalıyız?</h2>
    <p>Kış aylarının zorlu koşulları (düşük sıcaklıklar, nem, don) makineler üzerinde yıpratıcı bir etkiye sahiptir. Bakım yapılmadan bırakılan bir makinede:</p>
    <ul class="list-disc list-inside space-y-2 my-4 pl-4">
      <li><strong>Paslanma ve Korozyon:</strong> Metal aksamlar nem ve çamur kalıntıları nedeniyle paslanabilir.</li>
      <li><strong>Yakıt Sistemi Sorunları:</strong> Depoda kalan yakıt zamanla bozulabilir, su yoğuşması oluşabilir.</li>
      <li><strong>Lastik Hasarları:</strong> Uzun süre aynı pozisyonda kalan lastiklerde deformasyonlar görülebilir.</li>
      <li><strong>Elektrik Aksamı Problemleri:</strong> Nem, kablo ve bağlantı noktalarında oksitlenmeye neden olabilir.</li>
    </ul>
    <p>Unutmayın, sezon başında yaşanacak bir arıza, size hem zaman hem de para kaybettirir. Kışın yapacağınız birkaç saatlik bakım, sezon ortasında yaşanacak günlerce süren bir arızadan çok daha ekonomiktir.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Adım Adım Kış Bakım Rehberi</h2>
    
    <h3 class="text-xl font-semibold mt-6 mb-2">1. Kapsamlı Temizlik</h3>
    <p>İşe makinenizi detaylı bir şekilde temizleyerek başlayın. Basınçlı su ve uygun temizleyiciler kullanarak tüm çamur, toz ve ürün artıklarını temizleyin. Özellikle hareketli parçalar, radyatör ve şase aralarını iyice temizlediğinizden emin olun. Temizlik sonrası makinenin tamamen kurumasını bekleyin.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">2. Yağ ve Sıvı Kontrolleri</h3>
    <p>Motor yağı, şanzıman yağı ve hidrolik sıvılarını kontrol edin. Üreticinin tavsiye ettiği periyot dolmuşsa, bu sıvıları ve filtrelerini değiştirin. Kirli yağ ile kışa girmek, motor ve şanzıman içinde tortu birikmesine neden olur. Antifriz seviyesini ve donma derecesini ölçtürün.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">3. Yakıt Deposu</h3>
    <p>Yakıt deposunu tamamen doldurun. Bu, depo içinde hava boşluğu kalmasını ve yoğuşma nedeniyle su birikmesini engeller. Yakıt stabilizatörü eklemek, yakıtın bozulmasını önleyecektir.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">4. Gresleme ve Koruma</h3>
    <p>Tüm gresörlüklere yeni gres basın. Bu, nemin içeri sızmasını ve paslanmayı önler. Boyası kalkmış veya çizilmiş metal yüzeyleri rötuş boyası ile kapatarak korozyona karşı koruyun.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">5. Akü ve Lastikler</h3>
    <p>Akünün kutup başlarını sökün. Mümkünse aküyü söküp donma riski olmayan, serin bir yerde muhafaza edin ve periyodik olarak şarj edin. Lastiklerin havasını fabrika değerlerine getirin ve makineyi takoz üzerine alarak lastiklerin üzerindeki yükü azaltın.</p>

    <blockquote class="border-l-4 border-primary pl-4 italic my-6">
      <strong>Profesyonel Destek:</strong> Kış bakımını kendiniz yapabileceğiniz gibi, Toklu Tarım yetkili servislerinden destek alarak makinenizin uzmanlar tarafından kontrol edilmesini sağlayabilirsiniz.
    </blockquote>
    <p>Bu basit adımları takip ederek, değerli yatırımınız olan makinelerinizi kışın yıpratıcı etkilerinden koruyabilir ve yeni sezona "marşa bas ve git" rahatlığıyla başlayabilirsiniz.</p>
  `
};
export default post;