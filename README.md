﻿<h1>ThunkFlix: Film Dünyasına Yolculuk</h1>

ThunkFlix, The Movie Database (TMDB) sitesinden alınan verilerle zengin bir film koleksiyonunu kullanıcılara sunan bir web uygulamasıdır. Kullanıcılar, arama özelliği ve farklı kategoriler aracılığıyla istedikleri filmleri bulabilir ve keşfedebilirler. Her film için ayrıntılı sayfalarda fragmanlar, yapımcı bilgileri ve film özetleri gibi detaylı bilgiler bulunur. Ayrıca, kullanıcılar favori filmlerini işaretleyebilir ve izlemek üzere listelerini oluşturabilirler. ThunkFlix, kullanıcılarına sadece film izleme deneyimi sunmanın ötesinde, film dünyasını keşfetme imkanı sağlar ve responsive tasarımıyla farklı cihazlarda sorunsuz bir deneyim sunar.

Canlı:https://thunkflix.netlify.app/

<h2>Teknolojiler ve Kütüphaneler</h2>

- ReactJS: Kullanıcı dostu arayüz ve bileşen tabanlı yapı için tercih edildi.
- Axios: HTTP istekleri yapmak ve TMDB verilerine erişmek için kullanıldı.
- Millify: Sayısal verileri okunabilir biçimde formatlamak için kullanıldı.
- React-Redux: Uygulama genelinde durumu yönetmek ve bileşenler arasında veri akışını sağlamak için kullanıldı. Redux kullanarak tek bir depoda tüm uygulama durumu yönetildi.
- Redux-Thunk: Redux ile asenkron işlemleri yönetmek için kullanıldı. Özellikle Redux ile API çağrıları yaparken ve yan etkileri ele alırken kullanışlı oldu.
- React Splide: Görsel olarak etkileyici bir kaydırıcı oluşturmak için kullanıldı.
- React Router DOM: Sayfa yönlendirmelerini ve gezintiyi sağlamak için kullanıldı.
- React Player: Film fragmanlarını oynatmak için kullanıldı.
- React YouTube: YouTube'dan film fragmanlarını almak için kullanıldı.
- Tailwind CSS: Hızlı ve özelleştirilebilir kullanıcı arayüzleri oluşturmak için kullanılan bir CSS çerçevesi olarak tercih edildi. Stil belirtmek için sınıfları kullanıldı ve daha az CSS yazmayı gerektirdi.

<h2>Proje İçeriği</h2>
Sayfa her yenilendiğinde önerilen filmler değişir. "Film İzle" seçeneğine tıklayarak veya altta kategoriler şeklinde listelenmiş filmlere tıklayarak filmin detayına ulaşabilirsiniz. Detay sayfasında kategoriler, yapımcı şirketler, konuşulan diller, yapımcı ülkeler, filmin özeti ve fragmanı gösterilir. Fragman verileri YouTube videolarından alınır ve kolaylıkla izlenebilir.

📱 Responsive Tasarım: Proje, kullanıcıların farklı cihazlarda rahatça gezinebilmesi için responsive bir tasarım içerir. Mobil, tablet ve masaüstü cihazlarda sorunsuz bir kullanıcı deneyimi sunar.

<h2>Ekran Görüntüsü</h2>

![](ekran.gif)
