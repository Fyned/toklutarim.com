import { post as yemHazirlamaPost } from './blog/yem-hazirlamada-verim-ipuclari.js';
import { post as otomatikKasagiPost } from './blog/otomatik-kasagi-ile-konfor-ve-verim.js';
import { post as kisBakimiPost } from './blog/tarim-makinelerinde-kis-bakimi.js';
import { post as baskulSecimiPost } from './blog/dogru-baskul-secimi.js';
import { post as modernCiftlikPost } from './blog/modern-ciftlik-yonetimi-teknolojileri.js';
import { post as galvanizKaplamaPost } from './blog/tarim-makinelerinde-galvaniz-kaplama.js';
import { post as makineHatalariPost } from './blog/yem-karma-makinesi-alirken-yapilan-hatalar.js';
import { post as sicakStresiPost } from './blog/hayvanlarda-sicak-stresi-ile-mucadele.js';
import { post as dijitalDevrimPost } from './blog/suru-yonetiminde-dijital-devrim.js';
import { images } from '@/assets/images';

export const blogPosts = [
  yemHazirlamaPost,
  otomatikKasagiPost,
  kisBakimiPost,
  baskulSecimiPost,
  modernCiftlikPost,
  galvanizKaplamaPost,
  makineHatalariPost,
  sicakStresiPost,
  dijitalDevrimPost
];

export const relatedPosts = [
    {
      title: "Yem Karma Makinesi Seçim Rehberi",
      slug: "yem-hazirlamada-verim-ipuclari",
      image: images.yemKarma3m3,
      alt: "Farklı boyutlarda Toklu Tarım yem karma makineleri"
    },
    {
      title: "Hayvan Refahının Verime Etkisi",
      slug: "otomatik-kasagi-ile-konfor-ve-verim",
      image: images.blogHappyCows,
      alt: "Güneşli bir merada otlayan mutlu inekler"
    },
    {
      title: "Doğru Baskül Seçimi Nasıl Yapılır?",
      slug: "dogru-baskul-secimi",
      image: images.baskulElektronik,
      alt: "Elektronik hayvan baskülü üzerinde duran bir büyükbaş hayvan - Toklu Tarım"
    },
    {
      title: "Tarım Makinelerinde Galvaniz Kaplamanın Önemi",
      slug: "tarim-makinelerinde-galvaniz-kaplama",
      image: images.blogDefault,
      alt: "Galvaniz kaplı metal yüzey detayı"
    }
];