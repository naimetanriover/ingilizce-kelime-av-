
import { ThemeId, Theme } from './types.ts';

export const THEMES: Theme[] = [
  {
    id: ThemeId.SchoolLife,
    titleTr: "Tema 1: Okul Hayatı",
    titleEn: "Theme 1: School Life",
    color: "bg-blue-500",
    icon: "fa-school"
  },
  {
    id: ThemeId.ClassroomLife,
    titleTr: "Tema 2: Sınıf Hayatı",
    titleEn: "Theme 2: Classroom Life",
    color: "bg-indigo-500",
    icon: "fa-chalkboard-user"
  },
  {
    id: ThemeId.PersonalLife,
    titleTr: "Tema 3: Kişisel Hayat",
    titleEn: "Theme 3: Personal Life",
    color: "bg-pink-500",
    icon: "fa-person"
  },
  {
    id: ThemeId.FamilyLife,
    titleTr: "Tema 4: Aile Hayatı",
    titleEn: "Theme 4: Family Life",
    color: "bg-green-600",
    icon: "fa-house-chimney-window"
  },
  {
    id: ThemeId.NeighbourhoodCity,
    titleTr: "Tema 5: Mahallede ve Şehirde Hayat",
    titleEn: "Theme 5: Life in Neighbourhood & City",
    color: "bg-orange-500",
    icon: "fa-city"
  },
  {
    id: ThemeId.LifeInTheWorld,
    titleTr: "Tema 6: Dünyada Hayat",
    titleEn: "Theme 6: Life in the World",
    color: "bg-purple-500",
    icon: "fa-earth-americas"
  }
];

export const DEFAULT_CSV_DATA: Record<string, string> = {
  [ThemeId.SchoolLife]: `english,turkish,unit
attend (v),"Katılmak, devam etmek",Kelime Listesi
boy (n),Erkek çocuk,Kelime Listesi
bring (v),Getirmek,Kelime Listesi
bully (v),Zorbalık yapmak,Kelime Listesi
caretaker (n),"Okul hademesi, görevli",Kelime Listesi
celebration (n),Kutlama,Kelime Listesi
classmate (n),Sınıf arkadaşı,Kelime Listesi
classroom (n),"Sınıf, derslik",Kelime Listesi
cleaner (n),Temizlikçi,Kelime Listesi
counsellor (n),"Rehber öğretmen, danışman",Kelime Listesi
decide (v),Karar vermek,Kelime Listesi
do tasks (v),Görevleri yapmak,Kelime Listesi
enter (v),Girmek,Kelime Listesi
fix problems (v),"Sorunları çözmek, problemleri gidermek",Kelime Listesi
follow safety instructions (v),Güvenlik talimatlarına uymak,Kelime Listesi
girl (n),Kız çocuk,Kelime Listesi
give health advice (v),Sağlık tavsiyesi vermek,Kelime Listesi
guide (v),"Rehberlik etmek, yol göstermek",Kelime Listesi
have a break (v),"Mola vermek, teneffüse çıkmak",Kelime Listesi
headmaster (n),Okul müdürü (erkek),Kelime Listesi
headmistress (n),Okul müdiresi (kadın),Kelime Listesi
headteacher (n),Okul müdürü,Kelime Listesi
learn (v),Öğrenmek,Kelime Listesi
leave (v),"Ayrılmak, terk etmek",Kelime Listesi
make decisions (v),Kararlar almak,Kelime Listesi
make noise (v),Gürültü yapmak,Kelime Listesi
man (n),"Adam, erkek",Kelime Listesi
manage (v),"Yönetmek, idare etmek",Kelime Listesi
noticeboard (n),"Duyuru panosu, ilan panosu",Kelime Listesi
obey rules (v),"Kurallara uymak, itaat etmek",Kelime Listesi
offer support (v),"Destek teklif etmek, destek olmak",Kelime Listesi
organise books (v),Kitapları düzenlemek,Kelime Listesi
participate in (v),"Katılmak, yer almak",Kelime Listesi
prepare (v),"Hazırlamak, hazırlanmak",Kelime Listesi
provide (v),"Sağlamak, temin etmek",Kelime Listesi
raise your hand (v),"El kaldırmak, parmak kaldırmak",Kelime Listesi
responsibility (n),Sorumluluk,Kelime Listesi
school nurse (n),Okul hemşiresi,Kelime Listesi
shout (v),Bağırmak,Kelime Listesi
student (n),Öğrenci,Kelime Listesi
support classmates (v),Sınıf arkadaşlarına destek olmak,Kelime Listesi
take care of (v),"İlgilenmek, bakmak",Kelime Listesi
teach (v),Öğretmek,Kelime Listesi
teacher (n),Öğretmen,Kelime Listesi
throw rubbish (v),Çöp atmak,Kelime Listesi
use (v),Kullanmak,Kelime Listesi
wear a uniform (v),Üniforma giymek,Kelime Listesi`,

  [ThemeId.ClassroomLife]: `english,turkish,unit
assistant,"Asistan, yardımcı.",Kelime Listesi
assistant to the headmaster,Müdür yardımcısı.,Kelime Listesi
borrow,Ödünç almak.,Kelime Listesi
check,Kontrol etmek.,Kelime Listesi
complete,Tamamlamak.,Kelime Listesi
copy,"Kopyalamak, aynısını yapmak.",Kelime Listesi
counsellor,"Rehber öğretmen, danışman.",Kelime Listesi
dictionary,Sözlük.,Kelime Listesi
discuss,"Tartışmak, bir konu hakkında konuşmak.",Kelime Listesi
do practice,"Alıştırma yapmak, pratik yapmak.",Kelime Listesi
finish your task,Görevini bitirmek.,Kelime Listesi
follow the rules,Kurallara uymak.,Kelime Listesi
give examples,Örnekler vermek.,Kelime Listesi
helper,Yardımcı olan kişi.,Kelime Listesi
Information Technology (IT),Bilişim Teknolojileri (BT).,Kelime Listesi
match,Eşleştirmek.,Kelime Listesi
monitor,Sınıf başkanı (öğretmene yardım eden öğrenci).,Kelime Listesi
on time,"Zamanında, vaktinde.",Kelime Listesi
organise,"Düzenlemek, organize etmek.",Kelime Listesi
pair,"Çift, ikili.",Kelime Listesi
present,"Sunmak, sunum yapmak.",Kelime Listesi
presentation,Sunum.,Kelime Listesi
raise your hand,Elini kaldırmak.,Kelime Listesi
Religion and Morals,Din Kültürü ve Ahlak Bilgisi.,Kelime Listesi
remind,Hatırlatmak.,Kelime Listesi
repeat,Tekrar etmek.,Kelime Listesi
responsibility,Sorumluluk.,Kelime Listesi
responsible for,Bir şeyden sorumlu olmak.,Kelime Listesi
return,"Geri vermek, iade etmek.",Kelime Listesi
review,"Gözden geçirmek, tekrar çalışmak.",Kelime Listesi
Robotic Coding,Robotik Kodlama.,Kelime Listesi
rubbish,Çöp.,Kelime Listesi
screen,Ekran.,Kelime Listesi
seat,"Oturak, sıra, koltuk.",Kelime Listesi
share,Paylaşmak.,Kelime Listesi
smart board,Akıllı tahta.,Kelime Listesi
stand in line,"Sıraya girmek, sırada beklemek.",Kelime Listesi
study alone/individually,Yalnız / bireysel olarak çalışmak.,Kelime Listesi
study for exams,Sınavlara çalışmak.,Kelime Listesi
subject,"Okul dersi, konu.",Kelime Listesi
take notes,Not almak.,Kelime Listesi
Tales and Legends,Masallar ve Efsaneler.,Kelime Listesi
tidy,"Toparlamak, düzenlemek.",Kelime Listesi
turn on/off,Açmak / kapatmak (bir cihazı).,Kelime Listesi
Visual Arts,Görsel Sanatlar.,Kelime Listesi
write down,"Yazmak, not etmek.",Kelime Listesi`,

  [ThemeId.PersonalLife]: `english,turkish,unit
attractive,"çekici, alımlı",Kelime Listesi
back (body part),sırt,Kelime Listesi
beard,sakal,Kelime Listesi
belt,kemer,Kelime Listesi
blond(e),sarışın,Kelime Listesi
bracelet,bilezik,Kelime Listesi
brave,cesur,Kelime Listesi
bright,parlak,Kelime Listesi
brunette,esmer (kadın),Kelime Listesi
cardigan,hırka,Kelime Listesi
chin,çene,Kelime Listesi
creative,yaratıcı,Kelime Listesi
earring,küpe,Kelime Listesi
eyebrow,kaş,Kelime Listesi
eyelash,kirpik,Kelime Listesi
finger,parmak (el),Kelime Listesi
flipflops,parmak arası terlik,Kelime Listesi
get dressed,giyinmek,Kelime Listesi
gloves,eldiven,Kelime Listesi
good-looking,"yakışıklı, güzel görünüşlü",Kelime Listesi
handbag,el çantası,Kelime Listesi
heart,kalp,Kelime Listesi
height,boy (uzunluk),Kelime Listesi
helmet,kask,Kelime Listesi
hoodie,kapüşonlu svetşört,Kelime Listesi
jacket,ceket,Kelime Listesi
jewellery,"mücevher, takı",Kelime Listesi
jumper,kazak,Kelime Listesi
knee,diz,Kelime Listesi
leggings,tayt,Kelime Listesi
moustache,bıyık,Kelime Listesi
naughty,yaramaz,Kelime Listesi
necklace,kolye,Kelime Listesi
personality trait,kişilik özelliği,Kelime Listesi
physical appearance,"dış görünüş, fiziksel görünüm",Kelime Listesi
plump,"tombul, balık etli",Kelime Listesi
pyjamas,pijama,Kelime Listesi
ring,yüzük,Kelime Listesi
scarf,"atkı, eşarp",Kelime Listesi
shoulder,omuz,Kelime Listesi
silver,gümüş,Kelime Listesi
skin,"cilt, deri",Kelime Listesi
slippers,terlik (ev),Kelime Listesi
straight (hair),düz (saç),Kelime Listesi
suit,takım elbise,Kelime Listesi
swimming costume,mayo,Kelime Listesi
tie,kravat,Kelime Listesi
tights,külotlu çorap,Kelime Listesi
tongue,dil (organ),Kelime Listesi
try on,(kıyafet) denemek,Kelime Listesi
wardrobe,"gardırop, giysi dolabı",Kelime Listesi`,

  [ThemeId.FamilyLife]: `english,turkish,unit
act (v),"Rol yapmak, oynamak",Kelime Listesi
actor (n),"Aktör, erkek oyuncu",Kelime Listesi
airport (n),"Havalimanı, havaalanı",Kelime Listesi
artist (n),Sanatçı,Kelime Listesi
attic (n),"Tavan arası, çatı katı",Kelime Listesi
basement (n),Bodrum katı,Kelime Listesi
boss (n),Patron,Kelime Listesi
bungalow (n),"Tek katlı ev, bungalov",Kelime Listesi
businessman (n),İş adamı,Kelime Listesi
businesswoman (n),İş kadını,Kelime Listesi
cabin (n),Kulübe,Kelime Listesi
caravan (n),Karavan,Kelime Listesi
chemist (n),Eczacı,Kelime Listesi
chemist’s (n),Eczane,Kelime Listesi
clinic (n),Klinik,Kelime Listesi
coach (n),"Antrenör, koç",Kelime Listesi
company (n),Şirket,Kelime Listesi
concert hall (n),Konser salonu,Kelime Listesi
construction site (n),"İnşaat alanı, şantiye",Kelime Listesi
corridor (n),Koridor,Kelime Listesi
cook (n),Aşçı,Kelime Listesi
countryside (n),"Kırsal bölge, taşra",Kelime Listesi
customer (n),Müşteri,Kelime Listesi
dentist (n),"Diş hekimi, dişçi",Kelime Listesi
doctor (n),Doktor,Kelime Listesi
driver (n),"Şoför, sürücü",Kelime Listesi
engineer (n),Mühendis,Kelime Listesi
explorer (n),Kâşif,Kelime Listesi
factory (n),Fabrika,Kelime Listesi
farm (n),Çiftlik,Kelime Listesi
farmer (n),Çiftçi,Kelime Listesi
fix cars or machines (v),Araba veya makine tamir etmek,Kelime Listesi
floor (n),Kat (bina katı),Kelime Listesi
footballer (n),Futbolcu,Kelime Listesi
gallery (n),Galeri,Kelime Listesi
guest room (n),Misafir odası,Kelime Listesi
gym (n),Spor salonu,Kelime Listesi
hospital (n),Hastane,Kelime Listesi
interview (n),"Röportaj, mülakat",Kelime Listesi
journalist (n),Gazeteci,Kelime Listesi
kitchen (n),Mutfak,Kelime Listesi
laboratory (n),Laboratuvar,Kelime Listesi
laundry room (n),Çamaşır odası,Kelime Listesi
manager (n),"Yönetici, müdür",Kelime Listesi
mechanic (n),"Tamirci, makinist",Kelime Listesi
musician (n),Müzisyen,Kelime Listesi
newsroom (n),Haber merkezi,Kelime Listesi
nurse (n),Hemşire,Kelime Listesi
office (n),"Ofis, büro",Kelime Listesi
patio (n),"Veranda, avlu",Kelime Listesi
pilot (n),Pilot,Kelime Listesi
porch (n),"Sundurma, veranda",Kelime Listesi
receptionist (n),Resepsiyonist,Kelime Listesi
restaurant (n),"Restoran, lokanta",Kelime Listesi
sculptor (n),Heykeltıraş,Kelime Listesi
seaside (n),"Sahil, deniz kenarı",Kelime Listesi
shop (n),"Dükkan, mağaza",Kelime Listesi
skyscraper (n),Gökdelen,Kelime Listesi
sports centre (n),Spor merkezi,Kelime Listesi
stadium (n),Stadyum,Kelime Listesi
stairs (n),Merdivenler,Kelime Listesi
storage room (n),"Depo, kiler",Kelime Listesi
studio (n),Stüdyo,Kelime Listesi
teacher (n),Öğretmen,Kelime Listesi
tiny house (n),"Küçük ev, mikro ev",Kelime Listesi
travel (v),Seyahat etmek,Kelime Listesi
treat (v),Tedavi etmek,Kelime Listesi
workplace (n),İş yeri,Kelime Listesi`,

  [ThemeId.NeighbourhoodCity]: `english,turkish,unit
aeroplane (n),uçak,Kelime Listesi
airport (n),"havalimanı, havaalanı",Kelime Listesi
ambulance (n),ambulans,Kelime Listesi
amusement park (n),"lunapark, eğlence parkı",Kelime Listesi
attractions (n),"turistik yerler, gezilecek yerler",Kelime Listesi
bakery (n),"fırın, pastane",Kelime Listesi
boat (n),"tekne, bot",Kelime Listesi
bookshop (n),kitapçı,Kelime Listesi
bridge (n),köprü,Kelime Listesi
bus (n),otobüs,Kelime Listesi
bus station (n),"otogar, otobüs terminali",Kelime Listesi
café (n),kafe,Kelime Listesi
car (n),"araba, otomobil",Kelime Listesi
car park (n),otopark,Kelime Listesi
castle (n),kale,Kelime Listesi
cinema (n),sinema,Kelime Listesi
city (n),"şehir, kent",Kelime Listesi
coach (n),"şehirlerarası otobüs, yolcu otobüsü",Kelime Listesi
concert hall (n),concert salonu,Kelime Listesi
department store (n),çok katlı mağaza,Kelime Listesi
destination (n),"varış noktası, gidilecek yer",Kelime Listesi
fire station (n),itfaiye istasyonu,Kelime Listesi
gallery (n),galeri,Kelime Listesi
garage (n),garaj,Kelime Listesi
hall (n),"salon, hol",Kelime Listesi
helicopter (n),helikopter,Kelime Listesi
hospital (n),hastane,Kelime Listesi
hotel (n),otel,Kelime Listesi
journey (n),"yolculuk, seyahat",Kelime Listesi
library (n),kütüphane,Kelime Listesi
lorry (n),kamyon,Kelime Listesi
motorbike (n),motosiklet,Kelime Listesi
motorway (n),otoyol,Kelime Listesi
museum (n),müze,Kelime Listesi
neighbourhood (n),"mahalle, semt",Kelime Listesi
park (n),park,Kelime Listesi
petrol station (n),benzin istasyonu,Kelime Listesi
platform (n),peron,Kelime Listesi
playground (n),"oyun parkı, oyun alanı",Kelime Listesi
police station (n),"karakol, polis merkezi",Kelime Listesi
post office (n),postane,Kelime Listesi
railway (n),demiryolu,Kelime Listesi
railway station (n),"tren istasyonu, gar",Kelime Listesi
recreational place (n),"dinlenme yeri, rekreasyon alanı",Kelime Listesi
restaurant (n),"restoran, lokanta",Kelime Listesi
seat (n),"koltuk, oturak",Kelime Listesi
service (n),(otoyoldaki) dinlenme tesisi,Kelime Listesi
ship (n),gemi,Kelime Listesi
shop (n),"dükkan, mağaza",Kelime Listesi
shopping mall (n),alışveriş merkezi (AVM),Kelime Listesi
sports stadium (n),spor stadyumu,Kelime Listesi
station (n),"istasyon, durak",Kelime Listesi
swimming pool (n),yüzme havuzu,Kelime Listesi
theatre (n),tiyatro,Kelime Listesi
tool (n),"alet, araç",Kelime Listesi
train (n),tren,Kelime Listesi
train station (n),"tren istasyonu, gar",Kelime Listesi
transportation (n),"ulaşım, taşıma",Kelime Listesi
underground (n),"metro, yeraltı treni",Kelime Listesi
van (n),"minibüs, kamyonet",Kelime Listesi
zoo (n),hayvanat bahçesi,Kelime Listesi`,

  [ThemeId.LifeInTheWorld]: `english,turkish,unit
What is the Turkish for 'Africa (n)'?,Afrika,Kelime Listesi
What is the Turkish for 'American (n)'?,"Amerikalı, Amerikan",Kelime Listesi
What is the Turkish for 'Antarctica (n)'?,Antarktika,Kelime Listesi
What is the Turkish for 'Asia (n)'?,Asya,Kelime Listesi
What is the Turkish for 'Australia (n)'?,Avustralya,Kelime Listesi
What is the Turkish for 'Australian (n)'?,Avustralyalı,Kelime Listesi
What is the Turkish for 'Azerbaijan (n)'?,Azerbaycan,Kelime Listesi
What is the Turkish for 'Azerbaijani (Azeri) (n)'?,Azerbaycanlı (Azeri),Kelime Listesi
What is the Turkish for 'bake (v)'?,Fırında pişirmek,Kelime Listesi
What is the Turkish for 'barbecue (n)'?,Mangal,Kelime Listesi
What is the Turkish for 'boil (v)'?,Kaynatmak,Kelime Listesi
What is the Turkish for 'bowl (n)'?,"Kase, çanak",Kelime Listesi
What is the Turkish for 'Brazil (n)'?,Brezilya,Kelime Listesi
What is the Turkish for 'Canada (n)'?,Kanada,Kelime Listesi
What is the Turkish for 'celebrate (v)'?,Kutlamak,Kelime Listesi
What is the Turkish for 'chef (n)'?,"Şef, aşçıbaşı",Kelime Listesi
What is the Turkish for 'cherry (n)'?,Kiraz,Kelime Listesi
What is the Turkish for 'China (n)'?,Çin,Kelime Listesi
What is the Turkish for 'continent (n)'?,Kıta,Kelime Listesi
What is the Turkish for 'cooker (n)'?,"Ocak, fırın",Kelime Listesi
What is the Turkish for 'country (n)'?,Ülke,Kelime Listesi
What is the Turkish for 'cream (n)'?,"Krema, kaymak",Kelime Listesi
What is the Turkish for 'crowd (n)'?,Kalabalık,Kelime Listesi
What is the Turkish for 'cuisines (n)'?,"Mutfaklar, yemek kültürleri",Kelime Listesi
What is the Turkish for 'cup (n)'?,"Fincan, kupa",Kelime Listesi
What is the Turkish for 'delicious (adj)'?,Lezzetli,Kelime Listesi
What is the Turkish for 'dessert (n)'?,Tatlı,Kelime Listesi
What is the Turkish for 'dish (n)'?,"Yemek, tabak",Kelime Listesi
What is the Turkish for 'dumpling (n)'?,Mantı,Kelime Listesi
What is the Turkish for 'England (n)'?,İngiltere,Kelime Listesi
What is the Turkish for 'Europe (n)'?,Avrupa,Kelime Listesi
What is the Turkish for 'event (n)'?,"Etkinlik, olay",Kelime Listesi
What is the Turkish for 'food festivals (n)'?,Yemek festivalleri,Kelime Listesi
What is the Turkish for 'France (n)'?,Fransa,Kelime Listesi
What is the Turkish for 'French (n)'?,"Fransız, Fransızca",Kelime Listesi
What is the Turkish for 'fried (adj)'?,"Kızarmış, kızartılmış",Kelime Listesi
What is the Turkish for 'fry (v)'?,Kızartmak,Kelime Listesi
What is the Turkish for 'garlic (n)'?,Sarımsak,Kelime Listesi
What is the Turkish for 'Germany (n)'?,Almanya,Kelime Listesi
What is the Turkish for 'glass (n)'?,"Bardak, cam",Kelime Listesi
What is the Turkish for 'grape (n)'?,Üzüm,Kelime Listesi
What is the Turkish for 'grill (n)'?,Izgara,Kelime Listesi
What is the Turkish for 'grilled (adj)'?,Izgara yapılmış,Kelime Listesi
What is the Turkish for 'healthy (adj)'?,Sağlıklı,Kelime Listesi
What is the Turkish for 'Ireland (n)'?,İrlanda,Kelime Listesi
What is the Turkish for 'Italy (n)'?,İtalya,Kelime Listesi
What is the Turkish for 'jam (n)'?,Reçel,Kelime Listesi
What is the Turkish for 'Japan (n)'?,Japonya,Kelime Listesi
What is the Turkish for 'join (v)'?,Katılmak,Kelime Listesi
What is the Turkish for 'Kazakh (Russian) (n)'?,Kazak (Rus),Kelime Listesi
What is the Turkish for 'Kazakhstan (n)'?,Kazakistan,Kelime Listesi
What is the Turkish for 'knife (n)'?,Bıçak,Kelime Listesi
What is the Turkish for 'Kyrgyz (Russian) (n)'?,Kırgız (Rus),Kelime Listesi
What is the Turkish for 'Kyrgyzstan (n)'?,Kırgızistan,Kelime Listesi
What is the Turkish for 'lobster (n)'?,Istakoz,Kelime Listesi
What is the Turkish for 'marinate (v)'?,"Marine etmek, terbiyelemek",Kelime Listesi
What is the Turkish for 'meal (n)'?,Öğün,Kelime Listesi
What is the Turkish for 'meat (n)'?,Et,Kelime Listesi
What is the Turkish for 'mix (v)'?,Karıştırmak,Kelime Listesi
What is the Turkish for 'mushroom (n)'?,Mantar,Kelime Listesi
What is the Turkish for 'nationality (n)'?,"Milliyet, uyruk",Kelime Listesi
What is the Turkish for 'New Zealand (n)'?,Yeni Zelanda,Kelime Listesi
What is the Turkish for 'North America (n)'?,Kuzey Amerika,Kelime Listesi
What is the Turkish for 'omelette (n)'?,Omlet,Kelime Listesi
What is the Turkish for 'onion (n)'?,Soğan,Kelime Listesi
What is the Turkish for 'pear (n)'?,Armut,Kelime Listesi
What is the Turkish for 'plate (n)'?,Tabak,Kelime Listesi
What is the Turkish for 'Portugal (n)'?,Portekiz,Kelime Listesi
What is the Turkish for 'roasted (adj)'?,"Fırında kızartılmış, kavrulmuş",Kelime Listesi
What is the Turkish for 'Russia (n)'?,Rusya,Kelime Listesi
What is the Turkish for 'salty (adj)'?,Tuzlu,Kelime Listesi
What is the Turkish for 'sauce (n)'?,Sos,Kelime Listesi
What is the Turkish for 'serve (v)'?,Servis yapmak,Kelime Listesi
What is the Turkish for 'snack (n)'?,Atıştırmalık,Kelime Listesi
What is the Turkish for 'South America (n)'?,Güney Amerika,Kelime Listesi
What is the Turkish for 'Spain (n)'?,İspanya,Kelime Listesi
What is the Turkish for 'spicy (adj)'?,"Baharatlı, acı",Kelime Listesi
What is the Turkish for 'stand (n)'?,"Stand, tezgah",Kelime Listesi
What is the Turkish for 'steak (n)'?,Biftek,Kelime Listesi
What is the Turkish for 'sweet (adj)'?,Tatlı (şekerli),Kelime Listesi
What is the Turkish for 'taste (n)'?,"Tat, lezzet",Kelime Listesi
What is the Turkish for 'The USA (n)'?,ABD (Amerika Birleşik Devletleri),Kelime Listesi
What is the Turkish for 'toast (n)'?,"Tost, kızarmış ekmek",Kelime Listesi
What is the Turkish for 'tradition (n)'?,Gelenek,Kelime Listesi
What is the Turkish for 'Turkish (n)'?,"Türk, Türkçe",Kelime Listesi
What is the Turkish for 'Turkish Cypriot (n)'?,Kıbrıslı Türk,Kelime Listesi
What is the Turkish for 'Turkish Republic of Northern Cyprus (n)'?,Kuzey Kıbrıs Türk Cumhuriyeti,Kelime Listesi
What is the Turkish for 'Turkmen (n)'?,Türkmen,Kelime Listesi
What is the Turkish for 'Uzbek (n)'?,Özbek,Kelime Listesi
What is the Turkish for 'Uzbekistan (n)'?,Özbekistan,Kelime Listesi
What is the Turkish for 'wash up (v)'?,Bulaşıkları yıkamak,Kelime Listesi
What is the Turkish for 'world (n)'?,Dünya,Kelime Listesi`
};
