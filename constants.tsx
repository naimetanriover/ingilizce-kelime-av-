
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
  },
  {
    id: ThemeId.LifeInNature,
    titleTr: "Tema 7: Doğada Yaşam",
    titleEn: "Theme 7: Life in Nature",
    color: "bg-emerald-500",
    icon: "fa-leaf"
  },
  {
    id: ThemeId.LifeInUniverse,
    titleTr: "Tema 8: Evrende Yaşam",
    titleEn: "Theme 8: Life in the Universe",
    color: "bg-slate-700",
    icon: "fa-shuttle-space"
  },
  {
    id: ThemeId.ArtSchool,
    titleTr: "Tema 9: Sanat ve Okul Hayatı",
    titleEn: "Theme 9: Art and School Life",
    color: "bg-rose-500",
    icon: "fa-palette"
  },
  {
    id: ThemeId.TechDigital,
    titleTr: "Tema 10: Teknoloji ve Dijital Dünya",
    titleEn: "Theme 10: Technology and Digital World",
    color: "bg-cyan-600",
    icon: "fa-microchip"
  },
  {
    id: ThemeId.HealthBody,
    titleTr: "Tema 11: Sağlık ve Vücudumuz",
    titleEn: "Theme 11: Health and Body",
    color: "bg-red-500",
    icon: "fa-heart-pulse"
  },
  {
    id: ThemeId.HomeFamily,
    titleTr: "Tema 12: Ev, Aile ve Etkinlikler",
    titleEn: "Theme 12: Home, Family and Activities",
    color: "bg-amber-600",
    icon: "fa-people-roof"
  },
  {
    id: ThemeId.TravelCuisine,
    titleTr: "Tema 13: Seyahat ve Mutfak",
    titleEn: "Theme 13: Travel and Cuisine",
    color: "bg-teal-600",
    icon: "fa-plane-departure"
  },
  {
    id: ThemeId.CitiesSports,
    titleTr: "Tema 14: Şehirler ve Spor",
    titleEn: "Theme 14: Cities and Sports",
    color: "bg-fuchsia-600",
    icon: "fa-volleyball"
  },
  {
    id: ThemeId.EnvironmentNature,
    titleTr: "Tema 15: Çevre ve Doğa",
    titleEn: "Theme 15: Environment and Nature",
    color: "bg-green-700",
    icon: "fa-seedling"
  },
  {
    id: ThemeId.SpaceFuture,
    titleTr: "Tema 16: Uzay ve Gelecek",
    titleEn: "Theme 16: Space and Future",
    color: "bg-indigo-900",
    icon: "fa-rocket"
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
artist (n),Sanatçı,Kelime Listesi
attic (n),"Tavan arası, çatı katı",Kelime Listesi
basement (n),Bodrum katı,Kelime Listesi
boss (n),Patron,Kelime Listesi
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
Africa,Afrika,Kelime Listesi
American,"Amerikalı, Amerikan",Kelime Listesi
Antarctica,Antarktika,Kelime Listesi
Asia,Asya,Kelime Listesi
Australia,Avustralya,Kelime Listesi
Australian,Avustralyalı,Kelime Listesi
Azerbaijan,Azerbaycan,Kelime Listesi
Azerbaijani,Azerbaycanlı (Azeri),Kelime Listesi
bake,Fırında pişirmek,Kelime Listesi
barbecue,Mangal,Kelime Listesi
boil,Kaynatmak,Kelime Listesi
bowl,"Kase, çanak",Kelime Listesi
Brazil,Brezilya,Kelime Listesi
Canada,Kanada,Kelime Listesi
celebrate,Kutlamak,Kelime Listesi
chef,"Şef, aşçıbaşı",Kelime Listesi
cherry,Kiraz,Kelime Listesi
China,Çin,Kelime Listesi
continent,Kıta,Kelime Listesi
cooker,"Ocak, fırın",Kelime Listesi
country,Ülke,Kelime Listesi
cream,"Krema, kaymak",Kelime Listesi
crowd,Kalabalık,Kelime Listesi
cuisines,"Mutfaklar, yemek kültürleri",Kelime Listesi
cup,"Fincan, kupa",Kelime Listesi
delicious,Lezzetli,Kelime Listesi
dessert,Tatlı,Kelime Listesi
dish,"Yemek, tabak",Kelime Listesi
dumpling,Mantı,Kelime Listesi
England,İngiltere,Kelime Listesi
Europe,Avrupa,Kelime Listesi
event,"Etkinlik, olay",Kelime Listesi
food festivals,Yemek festivalleri,Kelime Listesi
France,Fransa,Kelime Listesi
French,"Fransız, Fransızca",Kelime Listesi
fried,"Kızarmış, kızartılmış",Kelime Listesi
fry,Kızartmak,Kelime Listesi
garlic,Sarımsak,Kelime Listesi
Germany,Almanya,Kelime Listesi
glass,"Bardak, cam",Kelime Listesi
grape,Üzüm,Kelime Listesi
grill,Izgara,Kelime Listesi
grilled,Izgara yapılmış,Kelime Listesi
healthy,Sağlıklı,Kelime Listesi
Ireland,İrlanda,Kelime Listesi
Italy,İtalya,Kelime Listesi
jam,Reçel,Kelime Listesi
Japan,Japonya,Kelime Listesi
join,Katılmak,Kelime Listesi
Kazakhstan,Kazakistan,Kelime Listesi
knife,Bıçak,Kelime Listesi
Kyrgyzstan,Kırgızistan,Kelime Listesi
lobster,Istakoz,Kelime Listesi
marinate,"Marine etmek, terbiyelemek",Kelime Listesi
meal,Öğün,Kelime Listesi
meat,Et,Kelime Listesi
mix,Karıştırmak,Kelime Listesi
mushroom,Mantar,Kelime Listesi
nationality,"Milliyet, uyruk",Kelime Listesi
New Zealand,Yeni Zelanda,Kelime Listesi
North America,Kuzey Amerika,Kelime Listesi
omelette,Omlet,Kelime Listesi
onion,Soğan,Kelime Listesi
pear,Armut,Kelime Listesi
plate,Tabak,Kelime Listesi
Portugal,Portekiz,Kelime Listesi
Russia,Rusya,Kelime Listesi
salty,Tuzlu,Kelime Listesi
sauce,Sos,Kelime Listesi
serve,Servis yapmak,Kelime Listesi
snack,Atıştırmalık,Kelime Listesi
South America,Güney Amerika,Kelime Listesi
Spain,İspanya,Kelime Listesi
spicy,"Baharatlı, acı",Kelime Listesi
steak,Biftek,Kelime Listesi
sweet,Tatlı (şekerli),Kelime Listesi
The USA,ABD (Amerika Birleşik Devletleri),Kelime Listesi
toast,"Tost, kızarmış ekmek",Kelime Listesi
tradition,Gelenek,Kelime Listesi
Turkish,"Türk, Türkçe",Kelime Listesi
Uzbekistan,Özbekistan,Kelime Listesi
world,Dünya,Kelime Listesi`,

  [ThemeId.LifeInNature]: `english,turkish,unit
Nature,Doğa,Kelime Listesi
Animal,Hayvan,Kelime Listesi
Habitat,Doğal yaşam alanı,Kelime Listesi
Wild,Vahşi,Kelime Listesi
Wind,Rüzgar,Kelime Listesi
Swing,Sallanmak,Kelime Listesi
Track,İz veya yol,Kelime Listesi
Underground,Yer altı,Kelime Listesi
Wet,Islak,Kelime Listesi
Whisper,Fısıldamak,Kelime Listesi
World,Dünya,Kelime Listesi
Treehouse,Ağaç ev,Kelime Listesi
Forest,Orman,Kelime Listesi
Sea,Deniz,Kelime Listesi
Sky,Gökyüzü,Kelime Listesi
To camp,Kamp yapmak,Kelime Listesi
To climb,Tırmanmak,Kelime Listesi
To fish,Balık tutmak,Kelime Listesi
To fly,Uçmak,Kelime Listesi
To jump,Zıplamak,Kelime Listesi
To swim,Yüzmek,Kelime Listesi
Stay in a tent,Çadırda kalmak,Kelime Listesi
Hut,Kulübe,Kelime Listesi
Cottage,Dağ evi / Köy evi,Kelime Listesi
Farmhouse,Çiftlik evi,Kelime Listesi`,

  [ThemeId.LifeInUniverse]: `english,turkish,unit
Planet,Gezegen,Kelime Listesi
Solar System,Güneş Sistemi,Kelime Listesi
Earth,Dünya,Kelime Listesi
Jupiter,Jüpiter,Kelime Listesi
Massive,Devasa / Çok büyük,Kelime Listesi
Size,Boyut / Büyüklük,Kelime Listesi
Incredible,İnanılmaz,Kelime Listesi
The biggest,En büyük,Kelime Listesi
Bigger than,...den daha büyük,Kelime Listesi
Universe,Evren,Kelime Listesi
Future,Gelecek,Kelime Listesi
Space,Uzay,Kelime Listesi
Star,Yıldız,Kelime Listesi
Moon,Ay,Kelime Listesi
Sun,Güneş,Kelime Listesi
Orbit,Yörünge,Kelime Listesi
Satellite,Uydu,Kelime Listesi
Astronaut,Astronot,Kelime Listesi
Telescope,Teleskop,Kelime Listesi
Galaxy,Galaksi,Kelime Listesi
Gravity,Yerçekimi,Kelime Listesi
Surface,Yüzey,Kelime Listesi
Atmosphere,Atmosfer,Kelime Listesi
Temperature,Sıcaklık,Kelime Listesi
Distance,Mesafe,Kelime Listesi
Explore,Keşfetmek,Kelime Listesi
Space shuttle,Uzay mekiği,Kelime Listesi
Mission,Görev,Kelime Listesi
Comet,Kuyruklu yıldız,Kelime Listesi
Meteor,Göktaşı,Kelime Listesi
Observe,Gözlemlemek,Kelime Listesi
Sky,Gökyüzü,Kelime Listesi
Space station,Uzay istasyonu,Kelime Listesi
Voyage,Yolculuk,Kelime Listesi
Vacuum,Boşluk,Kelime Listesi
Alien,Uzaylı,Kelime Listesi
Evidence,Kanıt,Kelime Listesi
Milky Way,Samanyolu,Kelime Listesi
Black hole,Kara delik,Kelime Listesi
Discover,Keşfetmek,Kelime Listesi`,

  [ThemeId.ArtSchool]: `english,turkish,unit
Art,Sanat,Kelime Listesi
Art Club,Sanat Kulübü,Kelime Listesi
Basketball,Basketbol,Kelime Listesi
Basketball court,Basketbol sahası,Kelime Listesi
Biology,Biyoloji,Kelime Listesi
Boarding school,Yatılı okul,Kelime Listesi
Cafeteria,Yemekhane,Kelime Listesi
Chemistry,Kimya,Kelime Listesi
Chess Club,Satranç Kulübü,Kelime Listesi
Coding Club,Kodlama Kulübü,Kelime Listesi
College,Kolej,Kelime Listesi
Courtyard,Avlu,Kelime Listesi
Cycling,Bisiklet sürme,Kelime Listesi
Debate Club,Münazara Kulübü,Kelime Listesi
Diploma,Diploma,Kelime Listesi
Drama Club,Tiyatro Kulübü,Kelime Listesi
Exam,Sınav,Kelime Listesi
Exhibition,Sergi,Kelime Listesi
Experiment,Deney,Kelime Listesi
Football,Futbol,Kelime Listesi
Geography,Coğrafya,Kelime Listesi
Graduate,Mezun olmak,Kelime Listesi
Gym,Spor salonu,Kelime Listesi
Gymnastics,Jimnastik,Kelime Listesi
History,Tarih,Kelime Listesi
IT,Bilişim teknolojileri,Kelime Listesi
Literature,Edebiyat,Kelime Listesi
Maths,Matematik,Kelime Listesi
Music,Müzik,Kelime Listesi
Philosophy,Felsefe,Kelime Listesi
Physics,Fizik,Kelime Listesi
Presentation,Sunum,Kelime Listesi
Primary school,İlkokul,Kelime Listesi
Private school,Özel okul,Kelime Listesi
Robotics Club,Robotik Kulübü,Kelime Listesi
Science Club,Bilim Kulübü,Kelime Listesi
Swimming pool,Yüzme havuzu,Kelime Listesi
University,Üniversite,Kelime Listesi`,

  [ThemeId.TechDigital]: `english,turkish,unit
3D printer,3D yazıcı,Kelime Listesi
Access,Erişmek,Kelime Listesi
Analyse,Analiz etmek,Kelime Listesi
Assignment,Ödev,Kelime Listesi
Brainstorming,Beyin fırtınası,Kelime Listesi
Cardinal numbers,Asıl sayılar,Kelime Listesi
Click,Tıklamak,Kelime Listesi
Compare,Karşılaştırmak,Kelime Listesi
Conclude,Sonuçlandırmak,Kelime Listesi
Connect,Bağlanmak,Kelime Listesi
Connection,Bağlantı,Kelime Listesi
Define,Tanımlamak,Kelime Listesi
Discuss,Tartışmak,Kelime Listesi
Download,İndirmek,Kelime Listesi
File,Dosya,Kelime Listesi
Guess,Tahmin etmek,Kelime Listesi
Headset,Kulaklık,Kelime Listesi
Homepage,Ana sayfa,Kelime Listesi
Keyboard,Klavye,Kelime Listesi
Laptop,Dizüstü bilgisayar,Kelime Listesi
Log in,Giriş yapmak,Kelime Listesi
Log out,Çıkış yapmak,Kelime Listesi
Ordinal numbers,Sıra sayıları,Kelime Listesi
PC,Kişisel bilgisayar,Kelime Listesi
Presentation,Sunum,Kelime Listesi
Print,Yazdırmak,Kelime Listesi
Printer,Yazıcı,Kelime Listesi
Role-play,Canlandırma,Kelime Listesi
Screen,Ekran,Kelime Listesi
Search,Aramak,Kelime Listesi
Send,Göndermek,Kelime Listesi
Server,Sunucu,Kelime Listesi
Share,Paylaşmak,Kelime Listesi
Smartphone,Akıllı telefon,Kelime Listesi
Solve a problem,Sorun çözmek,Kelime Listesi
Summarise,Özetlemek,Kelime Listesi
Text,Mesaj yazmak,Kelime Listesi
Upload,Yüklemek,Kelime Listesi
Website,Web sitesi,Kelime Listesi`,

  [ThemeId.HealthBody]: `english,turkish,unit
Allergic reaction,Alerjik reaksiyon,Kelime Listesi
Allergy,Alerji,Kelime Listesi
Ankle,Ayak bileği,Kelime Listesi
Arm,Kol,Kelime Listesi
Back,Sırt,Kelime Listesi
Backache,Sırt ağrısı,Kelime Listesi
Blood,Kan,Kelime Listesi
Brain,Beyin,Kelime Listesi
Breathe,Nefes almak,Kelime Listesi
Chest,Göğüs,Kelime Listesi
Chin,Çene,Kelime Listesi
Cold,Soğuk algınlığı,Kelime Listesi
Cough,Öksürmek,Kelime Listesi
Earache,Kulak ağrısı,Kelime Listesi
Emergency,Acil durum,Kelime Listesi
Examine,Muayene etmek,Kelime Listesi
Exercise,Egzersiz yapmak,Kelime Listesi
Feel dizzy,Başı dönmek,Kelime Listesi
Feel sick,Hasta hissetmek,Kelime Listesi
Flu,Grip,Kelime Listesi
Headache,Baş ağrısı,Kelime Listesi
Heart,Kalp,Kelime Listesi
Hurt,İncitmek,Kelime Listesi
Keep fit,Formda kalmak,Kelime Listesi
Medical help,Tıbbi yardım,Kelime Listesi
Mindfulness,Farkındalık,Kelime Listesi
Pain,Ağrı,Kelime Listesi
Painful,Ağrılı,Kelime Listesi
Painkiller,Ağrı kesici,Kelime Listesi
Patient,Hasta,Kelime Listesi
Sore throat,Boğaz ağrısı,Kelime Listesi
Stomach ache,Mide ağrısı,Kelime Listesi
Treatment,Tedavi,Kelime Listesi
Vomit,Kusmak,Kelime Listesi
Weak,Güçsüz,Kelime Listesi`,

  [ThemeId.HomeFamily]: `english,turkish,unit
Act,Rol yapmak,Kelime Listesi
Attached house,Bitişik ev,Kelime Listesi
Babysit,Bakıcılık yapmak,Kelime Listesi
Barbecue,Mangal yapmak,Kelime Listesi
Block of flats,Apartman bloğu,Kelime Listesi
Build,İnşa etmek,Kelime Listesi
Bungalow,Tek katlı ev,Kelime Listesi
Camp,Kamp yapmak,Kelime Listesi
Catch,Tutmak,Kelime Listesi
Climb,Tırmanmak,Kelime Listesi
Code,Kodlama yapmak,Kelime Listesi
Collect,Biriktirmek,Kelime Listesi
Communicate,İletişim kurmak,Kelime Listesi
Cottage,Küçük ev,Kelime Listesi
Create,Yaratmak,Kelime Listesi
Cycle,Bisiklete binmek,Kelime Listesi
Decide,Karar vermek,Kelime Listesi
Describe,Tarif etmek,Kelime Listesi
Design,Tasarlamak,Kelime Listesi
Detached house,Müstakil ev,Kelime Listesi
Develop,Gelişmek,Kelime Listesi
Duplex,Dubleks ev,Kelime Listesi
Explain,Açıklamak,Kelime Listesi
Extended family,Geniş aile,Kelime Listesi
Farmhouse,Çiftlik evi,Kelime Listesi
Film,Kaydetmek,Kelime Listesi
Fish,Balık tutmak,Kelime Listesi
Flat,Daire,Kelime Listesi
Fly,Uçmak,Kelime Listesi
Foster family,Koruyucu aile,Kelime Listesi
Go shopping,Alışverişe gitmek,Kelime Listesi
Go to a festival,Festivale gitmek,Kelime Listesi
Go to a museum,Müzeye gitmek,Kelime Listesi
Houseboat,Ev tekne,Kelime Listesi
Hut,Kulübe,Kelime Listesi
Igloo,İglo,Kelime Listesi
Immediate family,Çekirdek aile,Kelime Listesi
Improve,Geliştirmek,Kelime Listesi
Join,Katılmak,Kelime Listesi
Jump,Zıplamak,Kelime Listesi
Manage time,Zamanı yönetmek,Kelime Listesi
Organise,Düzenlemek,Kelime Listesi
Paint,Boyamak,Kelime Listesi
Peel,Soymak,Kelime Listesi
Penthouse,En üst kat daire,Kelime Listesi
Perform,Sahnelemek,Kelime Listesi
Play the guitar,Gitar çalmak,Kelime Listesi
Run,Koşmak,Kelime Listesi
Sail,Yelken açmak,Kelime Listesi
Skateboard,Kaykay yapmak,Kelime Listesi
Solve,Çözmek,Kelime Listesi
Surf,Sörf yapmak,Kelime Listesi
Take a photograph,Fotoğraf çekmek,Kelime Listesi
Tree house,Ağaç ev,Kelime Listesi
Villa,Villa,Kelime Listesi`,

  [ThemeId.TravelCuisine]: `english,turkish,unit
Accommodation,Konaklama,Kelime Listesi
Admire,Hayran olmak,Kelime Listesi
Advert,Reklam,Kelime Listesi
Aeroplane,Uçak,Kelime Listesi
Affordable,Uygun fiyatlı,Kelime Listesi
Airline,Hava yolu,Kelime Listesi
Ancient,Antik,Kelime Listesi
Announce,Duyurmak,Kelime Listesi
Arrival,Varış,Kelime Listesi
Attraction,Gezilecek yer,Kelime Listesi
Backpacking,Sırt çantalı gezi,Kelime Listesi
Barbeque,Mangal,Kelime Listesi
Beef,Sığır eti,Kelime Listesi
Boarding pass,Biniş kartı,Kelime Listesi
Booking,Rezervasyon,Kelime Listesi
Celebration,Kutlama,Kelime Listesi
Check in,Giriş yapmak,Kelime Listesi
Check out,Çıkış yapmak,Kelime Listesi
Cheerful,Neşeli,Kelime Listesi
Coconut,Hindistan cevizi,Kelime Listesi
Cuisine,Mutfak kültürü,Kelime Listesi
Custom,Gelenek,Kelime Listesi
Departure,Ayrılış,Kelime Listesi
Destination,Hedef,Kelime Listesi
Discount,İndirim,Kelime Listesi
Embassy,Büyükelçilik,Kelime Listesi
Entertain,Eğlendirmek,Kelime Listesi
Exchange,Döviz bozdurmak,Kelime Listesi
Feast,Ziyafet,Kelime Listesi
Ferry,Feribot,Kelime Listesi
Flour,Un,Kelime Listesi
Freeze,Donmak,Kelime Listesi
Gather,Toplanmak,Kelime Listesi
Historic,Tarihi,Kelime Listesi
Hitchhike,Otostop çekmek,Kelime Listesi
Ingredients,Malzemeler,Kelime Listesi
Journey,Yolculuk,Kelime Listesi
Land,İniş yapmak,Kelime Listesi
Landmark,Simge yapı,Kelime Listesi
Leftover,Artan yemek,Kelime Listesi
Local,Yerel,Kelime Listesi
Luggage,Bagaj,Kelime Listesi
Peaceful,Huzurlu,Kelime Listesi
Pineapple,Ananas,Kelime Listesi
Pour,Dökmek,Kelime Listesi
Public transport,Toplu taşıma,Kelime Listesi
Roundabout,Kavşak,Kelime Listesi
Seafood,Deniz ürünü,Kelime Listesi
Spicy,Baharatlı,Kelime Listesi
Street food,Sokak lezzeti,Kelime Listesi
Take off,Havalanmak,Kelime Listesi
Traditional,Geleneksel,Kelime Listesi
Translate,Çevirmek,Kelime Listesi
Vehicle,Araç,Kelime Listesi`,

  [ThemeId.CitiesSports]: `english,turkish,unit
Architecture,Mimari,Kelime Listesi
Athlete,Sporcu,Kelime Listesi
Athletic,Atletik,Kelime Listesi
Athletics,Atletizm,Kelime Listesi
Attract,İlgi çekmek,Kelime Listesi
Border,Sınır,Kelime Listesi
Boxing,Boks,Kelime Listesi
Calm,Sakin,Kelime Listesi
Captain,Kaptan,Kelime Listesi
Central,Merkezi,Kelime Listesi
Champion,Şampiyon,Kelime Listesi
Changing room,Soyunma odası,Kelime Listesi
Championship,Şampiyona,Kelime Listesi
Cheat,Hile yapmak,Kelime Listesi
City centre,Şehir merkezi,Kelime Listesi
Climber,Dağcı,Kelime Listesi
Coach,Antrenör,Kelime Listesi
Collection,Koleksiyon,Kelime Listesi
Compete,Yarışmak,Kelime Listesi
Competitive,Rekabetçi,Kelime Listesi
Contest,Yarışma,Kelime Listesi
Court,Kort/Saha,Kelime Listesi
Cyclist,Bisikletçi,Kelime Listesi
Decorate,Süslemek,Kelime Listesi
Diver,Dalgıç,Kelime Listesi
Diving board,Atlama tahtası,Kelime Listesi
Exhibition,Sergi,Kelime Listesi
Extreme sport,Ekstrem spor,Kelime Listesi
Familiar,Tanıdık,Kelime Listesi
Flag,Bayrak,Kelime Listesi
Goalkeeper,Kaleci,Kelime Listesi
Gold medal,Altın madalya,Kelime Listesi
Hit,Vurmak,Kelime Listesi
Hostel,Hostel,Kelime Listesi
Hub,Merkez,Kelime Listesi
Impressive,Etkileyici,Kelime Listesi
Indoors,İç mekan,Kelime Listesi
Instructor,Eğitmen,Kelime Listesi
Leader,Lider,Kelime Listesi
Locate,Yerini belirlemek,Kelime Listesi
Long jump,Uzun atlama,Kelime Listesi
Luxury,Lüks,Kelime Listesi
Modern,Modern,Kelime Listesi
Nation,Ulus,Kelime Listesi
Neighbourhood,Mahalle,Kelime Listesi
Olympic Games,Olimpiyat Oyunları,Kelime Listesi
Outdoor,Dış mekan,Kelime Listesi
Political,Siyasi,Kelime Listesi
Population,Nüfus,Kelime Listesi
Powerful,Güçlü,Kelime Listesi
Queue,Sıra/Kuyruk,Kelime Listesi
Race,Yarış,Kelime Listesi
Record holder,Rekor sahibi,Kelime Listesi
Represent,Temsil etmek,Kelime Listesi
Scenery,Manzara,Kelime Listesi
Sculpture,Heykel,Kelime Listesi
Skyscraper,Gökdelen,Kelime Listesi
Sports facilities,Spor tesisleri,Kelime Listesi
Stadium,Stadyum,Kelime Listesi
Statue,Heykel,Kelime Listesi
Town hall,Belediye binası,Kelime Listesi
Unique,Benzersiz,Kelime Listesi`,

  [ThemeId.EnvironmentNature]: `english,turkish,unit
Air pollution,Hava kirliliği,Kelime Listesi
Asian elephant,Asya fili,Kelime Listesi
Avoid,Kaçınmak,Kelime Listesi
Cheetah,Çita,Kelime Listesi
Chimpanzee,Şempanze,Kelime Listesi
Climate change,İklim değişikliği,Kelime Listesi
Coral reefs,Mercan resifleri,Kelime Listesi
Cut down on,Azaltmak,Kelime Listesi
Deforestation,Ormansızlaşma,Kelime Listesi
Disease,Hastalık,Kelime Listesi
Dolphin,Yunus,Kelime Listesi
Donate,Bağış yapmak,Kelime Listesi
Endangered,Nesli tükenmekte olan,Kelime Listesi
Energy crisis,Enerji krizi,Kelime Listesi
Environment,Çevre,Kelime Listesi
Environmental problems,Çevresel sorunlar,Kelime Listesi
Food source,Besin kaynağı,Kelime Listesi
Forest,Orman,Kelime Listesi
Freshwater,Tatlı su,Kelime Listesi
Geothermal energy,Jeotermal enerji,Kelime Listesi
Global warming,Küresel ısınma,Kelime Listesi
Groundwater,Yer altı suyu,Kelime Listesi
Hunt,Avlanmak,Kelime Listesi
Island,Ada,Kelime Listesi
Jungle,Balta girmemiş orman,Kelime Listesi
Landslide,Heyelan,Kelime Listesi
Lessen,Azaltmak,Kelime Listesi
Limit,Sınırlamak,Kelime Listesi
Litter,Çöp,Kelime Listesi
Loss of biodiversity,Biyoçeşitlilik kaybı,Kelime Listesi
Natural gas,Doğal gaz,Kelime Listesi
Non-renewable resources,Yenilenemeyen kaynaklar,Kelime Listesi
Oceans,Okyanuslar,Kelime Listesi
Overfishing,Aşırı avlanma,Kelime Listesi
Overpopulation,Aşırı nüfus,Kelime Listesi
Panda,Panda,Kelime Listesi
Penguin,Penguen,Kelime Listesi
Petrol,Benzin,Kelime Listesi
Polar bear,Kutup ayısı,Kelime Listesi
Pollution,Kirlilik,Kelime Listesi
Prevent,Önlemek,Kelime Listesi
Produce,Üretmek,Kelime Listesi
Protect,Korumak,Kelime Listesi
Protect wildlife,Yaban hayatını korumak,Kelime Listesi
Rainforest,Yağmur ormanı,Kelime Listesi
Raise awareness,Farkındalık yaratmak,Kelime Listesi
Recycle,Geri dönüştürmek,Kelime Listesi
Reduce consumption,Tüketimi azaltmak,Kelime Listesi
Renewable resources,Yenilenebilir kaynaklar,Kelime Listesi
Reuse,Yeniden kullanmak,Kelime Listesi
Rubbish,Çöp,Kelime Listesi
Sea turtle,Deniz kaplumbağası,Kelime Listesi
Survive,Hayatta kalmak,Kelime Listesi
Tiger,Kaplan,Kelime Listesi
Urbanisation,Şehirleşme,Kelime Listesi
Valley,Vadi,Kelime Listesi`,

  [ThemeId.SpaceFuture]: `english,turkish,unit
3D printing,3D baskı,Kelime Listesi
Adapt,Uyum sağlamak,Kelime Listesi
Aerospace,Havacılık ve uzay,Kelime Listesi
AI home assistants,Yapay zeka ev asistanları,Kelime Listesi
Airlock,Hava kilidi,Kelime Listesi
Alert,Uyarmak,Kelime Listesi
AR glasses,Artırılmış gerçeklik gözlükleri,Kelime Listesi
Artificial intelligence,Yapay zeka,Kelime Listesi
Asteroid,Asteroit,Kelime Listesi
Astronaut,Astronot,Kelime Listesi
Atmosphere,Atmosfer,Kelime Listesi
Autopilot,Otopilot,Kelime Listesi
Capture,Yakalamak,Kelime Listesi
Comet,Kuyruklu yıldız,Kelime Listesi
Crewed,Mürettebatlı,Kelime Listesi
Digital elements,Dijital öğeler,Kelime Listesi
Discovery,Keşif,Kelime Listesi
Drones,Dronlar,Kelime Listesi
Earthbound,Dünya'ya bağlı,Kelime Listesi
Exist,Var olmak,Kelime Listesi
Exploration,Araştırma,Kelime Listesi
Faster-than-light,Işıktan hızlı,Kelime Listesi
Flying saucer,Uçan daire,Kelime Listesi
Headsets,Kulaklıklar,Kelime Listesi
Interplanetary,Gezegenler arası,Kelime Listesi
Launch,Fırlatmak,Kelime Listesi
Launcher,Fırlatıcı,Kelime Listesi
Life forms,Yaşam formları,Kelime Listesi
Moonwalk,Ay yürüyüşü,Kelime Listesi
Mother ship,Ana gemi,Kelime Listesi
Mysterious,Gizemli,Kelime Listesi
Predict,Tahmin etmek,Kelime Listesi
Rare,Nadir,Kelime Listesi
Return to Earth,Dünya'ya dönmek,Kelime Listesi
Revolve,Etrafında dönmek,Kelime Listesi
Robotics,Robotik,Kelime Listesi
Robots,Robotlar,Kelime Listesi
Rotate,Kendi etrafında dönmek,Kelime Listesi
Self-driving vehicles,Sürücüsüz araçlar,Kelime Listesi
Smart homes,Akıllı evler,Kelime Listesi
Solar panels,Güneş panelleri,Kelime Listesi
Space capsule,Uzay kapsülü,Kelime Listesi
Space colonies,Uzay kolonileri,Kelime Listesi
Space station,Uzay istasyonu,Kelime Listesi
Space suit,Uzay giysisi,Kelime Listesi
Space travel,Uzay yolculuğu,Kelime Listesi
Spacecraft,Uzay aracı,Kelime Listesi
Spacewalk,Uzay yürüyüşü,Kelime Listesi
Starship,Yıldız gemisi,Kelime Listesi
Telecommuting,Evden çalışma,Kelime Listesi
Telescope,Teleskop,Kelime Listesi
Transform,Dönüştürmek,Kelime Listesi
Uncrewed,İnsansız,Kelime Listesi
Virtual reality,Sanal gerçeklik,Kelime Listesi
Wearable technology,Giyilebilir teknoloji,Kelime Listesi
Wireless earbuds,Kablosuz kulaklıklar,Kelime Listesi`
};