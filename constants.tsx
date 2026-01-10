
import { ThemeId, Theme } from './types';

export const THEMES: Theme[] = [
  {
    id: ThemeId.SchoolLife,
    titleTr: "Okul Hayatı",
    titleEn: "School Life",
    color: "bg-blue-400",
    icon: "fa-school"
  },
  {
    id: ThemeId.ClassroomLife,
    titleTr: "Sınıf Hayatı",
    titleEn: "Classroom Life",
    color: "bg-green-400",
    icon: "fa-chalkboard-user"
  },
  {
    id: ThemeId.PersonalLife,
    titleTr: "Kişisel Hayat",
    titleEn: "Personal Life",
    color: "bg-purple-400",
    icon: "fa-user-astronaut"
  },
  {
    id: ThemeId.FamilyLife,
    titleTr: "Aile Hayatı",
    titleEn: "Family Life",
    color: "bg-rose-400",
    icon: "fa-house-chimney-window"
  },
  {
    id: ThemeId.NeighbourhoodCity,
    titleTr: "Mahallede ve Şehirde Hayat",
    titleEn: "Life in the Neighbourhood & City",
    color: "bg-orange-400",
    icon: "fa-city"
  },
  {
    id: ThemeId.LifeInTheWorld,
    titleTr: "Dünyada Hayat",
    titleEn: "Life in the World",
    color: "bg-teal-400",
    icon: "fa-globe-americas"
  }
];

export const SRS_INTERVALS = [0, 1, 3, 7, 14, 30]; // Days

// Default Data for initial launch
export const DEFAULT_CSV_DATA: Record<ThemeId, string> = {
  [ThemeId.SchoolLife]: `attend (v),"Katılmak, devam etmek"
boy (n),Erkek çocuk
bring (v),Getirmek
bully (v),Zorbalık yapmak
caretaker (n),"Okul hademesi, görevli"
celebration (n),Kutlama
classmate (n),Sınıf arkadaşı
classroom (n),"Sınıf, derslik"
cleaner (n),Temizlikçi
counsellor (n),"Rehber öğretmen, danışman"
decide (v),Karar vermek
do tasks (v),Görevleri yapmak
enter (v),Girmek
fix problems (v),"Sorunları çözmek, problemleri gidermek"
follow safety instructions (v),Güvenlik talimatlarına uymak
girl (n),Kız çocuk
give health advice (v),Sağlık tavsiyesi vermek
guide (v),"Rehberlik etmek, yol göstermek"
have a break (v),"Mola vermek, teneffüse çıkmak"
headmaster (n),Okul müdürü (erkek)
headmistress (n),Okul müdiresi (kadın)
headteacher (n),Okul müdürü
learn (v),Öğrenmek
leave (v),"Ayrılmak, terk etmek"
make decisions (v),Kararlar almak
make noise (v),Gürültü yapmak
man (n),"Adam, erkek"
manage (v),"Yönetmek, idare etmek"
noticeboard (n),"Duyuru panosu, ilan panosu"
obey rules (v),"Kurallara uymak, itaat etmek"
offer support (v),"Destek teklif etmek, destek olmak"
organise books (v),Kitapları düzenlemek
participate in (v),"Katılmak, yer almak"
prepare (v),"Hazırlamak, hazırlanmak"
provide (v),"Sağlamak, temin etmek"
raise your hand (v),"El kaldırmak, parmak kaldırmak"
responsibility (n),Sorumluluk
school nurse (n),Okul hemşiresi
shout (v),Bağırmak
student (n),Öğrenci
support classmates (v),Sınıf arkadaşlarına destek olmak
take care of (v),"İlgilenmek, bakmak"
teach (v),Öğretmek
teacher (n),Öğretmen
throw rubbish (v),Çöp atmak
use (v),Kullanmak
wear a uniform (v),Üniforma giymek`,
  [ThemeId.ClassroomLife]: `assistant,"Asistan, yardımcı."
assistant to the headmaster,Müdür yardımcısı.
borrow,Ödünç almak.
check,Kontrol etmek.
complete,Tamamlamak.
copy,"Kopyalamak, aynısını yapmak."
counsellor,"Rehber öğretmen, danışman."
dictionary,Sözlük.
discuss,"Tartışmak, bir konu hakkında konuşmak."
do practice,"Alıştırma yapmak, pratik yapmak."
finish your task,Görevini bitirmek.
follow the rules,Kurallara uymak.
give examples,Örnekler vermek.
helper,Yardımcı olan kişi.
Information Technology (IT),Bilişim Teknolojileri (BT).
match,Eşleştirmek.
monitor,Sınıf başkanı (öğretmene yardım eden öğrenci).
on time,"Zamanında, vaktinde."
organise,"Düzenlemek, organize etmek."
pair,"Çift, ikili."
present,"Sunmak, sunum yapmak."
presentation,Sunum.
raise your hand,Elini kaldırmak.
Religion and Morals,Din Kültürü ve Ahlak Bilgisi.
remind,Hatırlatmak.
repeat,Tekrar etmek.
responsibility,Sorumluluk.
responsible for,Bir şeyden sorumlu olmak.
return,"Geri vermek, iade etmek."
review,"Gözden geçirmek, tekrar çalışmak."
Robotic Coding,Robotik Kodlama.
rubbish,Çöp.
screen,Ekran.
seat,"Oturak, sıra, koltuk."
share,Paylaşmak.
smart board,Akıllı tahta.
stand in line,"Sıraya girmek, sırada beklemek."
study alone/individually,Yalnız / bireysel olarak çalışmak.
study for exams,Sınavlara çalışmak.
subject,"Okul dersi, konu."
take notes,Not almak.
Tales and Legends,Masallar ve Efsaneler.
tidy,"Toparlamak, düzenlemek."
turn on/off,Açmak / kapatmak (bir cihazı).
Visual Arts,Görsel Sanatlar.
write down,"Yazmak, not etmek."`,
  [ThemeId.PersonalLife]: `attractive,"çekici, alımlı"
back (body part),sırt
beard,sakal
belt,kemer
blond(e),sarışın
bracelet,bilezik
brave,cesur
bright,parlak
brunette,esmer (kadın)
cardigan,hırka
chin,çene
creative,yaratıcı
earring,küpe
eyebrow,kaş
eyelash,kirpik
finger,parmak (el)
flipflops,parmak arası terlik
get dressed,giyinmek
gloves,eldiven
good-looking,"yakışıklı, güzel görünüşlü"
handbag,el çantası
heart,kalp
height,boy (uzunluk)
helmet,kask
hoodie,kapüşonlu svetşört
jacket,ceket
jewellery,"mücevher, takı"
jumper,kazak
knee,diz
leggings,tayt
moustache,bıyık
naughty,yaramaz
necklace,kolye
personality trait,kişilik özelliği
physical appearance,"dış görünüş, fiziksel görünüm"
plump,"tombul, balık etli"
pyjamas,pijama
ring,yüzük
scarf,"atkı, eşarp"
shoulder,omuz
silver,gümüş
skin,"cilt, deri"
slippers,terlik (ev)
straight (hair),düz (saç)
suit,takım elbise
swimming costume,mayo
tie,kravat
tights,külotlu çorap
tongue,dil (organ)
try on,(kıyafet) denemek
wardrobe,"gardırop, giysi dolabı"`,
  [ThemeId.FamilyLife]: `act (v),"Rol yapmak, oynamak"
actor (n),"Aktör, erkek oyuncu"
airport (n),"Havalimanı, havaalanı"
artist (n),Sanatçı
attic (n),"Tavan arası, çatı katı"
basement (n),Bodrum katı
boss (n),Patron
bungalow (n),"Tek katlı ev, bungalov"
businessman (n),İş adamı
businesswoman (n),İş kadını
cabin (n),Kulübe
caravan (n),Karavan
chemist (n),Eczacı
chemist’s (n),Eczane
clinic (n),Klinik
coach (n),"Antrenör, koç"
company (n),Şirket
concert hall (n),Konser salonu
construction site (n),"İnşaat alanı, şantiye"
corridor (n),Koridor
cook (n),Aşçı
countryside (n),"Kırsal bölge, taşra"
customer (n),Müşteri
dentist (n),"Diş hekimi, dişçi"
doctor (n),Doktor
driver (n),"Şoför, sürücü"
engineer (n),Mühendis
explorer (n),Kâşif
factory (n),Fabrika
farm (n),Çiftlik
farmer (n),Çiftçi
fix cars or machines (v),Araba veya makine tamir etmek
floor (n),Kat (bina katı)
footballer (n),Futbolcu
gallery (n),Galeri
guest room (n),Misafir odası
gym (n),Spor salonu
hospital (n),Hastane
interview (n),"Röportaj, mülakat"
journalist (n),Gazeteci
kitchen (n),Mutfak
laboratory (n),Laboratuvar
laundry room (n),Çamaşır odası
manager (n),"Yönetici, müdür"
mechanic (n),"Tamirci, makinist"
musician (n),Müzisyen
newsroom (n),Haber merkezi
nurse (n),Hemşire
office (n),"Ofis, büro"
patio (n),"Veranda, avlu"
pilot (n),Pilot
porch (n),"Sundurma, veranda"
receptionist (n),Resepsiyonist
restaurant (n),"Restoran, lokanta"
sculptor (n),Heykeltıraş
seaside (n),"Sahil, deniz kenarı"
shop (n),"Dükkan, mağaza"
skyscraper (n),Gökdelen
sports centre (n),Spor merkezi
stadium (n),Stadyum
stairs (n),Merdivenler
storage room (n),"Depo, kiler"
studio (n),Stüdyo
teacher (n),Öğretmen
tiny house (n),"Küçük ev, mikro ev"
travel (v),Seyahat etmek
treat (v),Tedavi etmek
workplace (n),İş yeri`,
  [ThemeId.NeighbourhoodCity]: `aeroplane (n),uçak
airport (n),"havalimanı, havaalanı"
ambulance (n),ambulans
amusement park (n),"lunapark, eğlence parkı"
attractions (n),"turistik yerler, gezilecek yerler"
bakery (n),"fırın, pastane"
boat (n),"tekne, bot"
bookshop (n),kitapçı
bridge (n),köprü
bus (n),otobüs
bus station (n),"otogar, otobüs terminali"
café (n),kafe
car (n),"araba, otomobil"
car park (n),otopark
castle (n),kale
cinema (n),sinema
city (n),"şehir, kent"
coach (n),"şehirlerarası otobüs, yolcu otobüsü"
concert hall (n),konser salonu
department store (n),çok katlı mağaza
destination (n),"varış noktası, gidilecek yer"
fire station (n),itfaiye istasyonu
gallery (n),galeri
garage (n),garaj
hall (n),"salon, hol"
helicopter (n),helikopter
hospital (n),hastane
hotel (n),otel
journey (n),"yolculuk, seyahat"
library (n),kütüphane
lorry (n),kamyon
motorbike (n),motosiklet
motorway (n),otoyol
museum (n),müze
neighbourhood (n),"mahalle, semt"
park (n),park
petrol station (n),benzin istasyonu
platform (n),peron
playground (n),"oyun parkı, oyun alanı"
police station (n),"karakol, polis merkezi"
post office (n),postane
railway (n),demiryolu
railway station (n),"tren istasyonu, gar"
recreational place (n),"dinlenme yeri, rekreasyon alanı"
restaurant (n),"restoran, lokanta"
seat (n),"koltuk, oturak"
service (n),(otoyoldaki) dinlenme tesisi
ship (n),gemi
shop (n),"dükkan, mağaza"
shopping mall (n),alışveriş merkezi (AVM)
sports stadium (n),spor stadyumu
station (n),"istasyon, durak"
swimming pool (n),yüzme havuzu
theatre (n),tiyatro
tool (n),"alet, araç"
train (n),tren
train station (n),"tren istasyonu, gar"
transportation (n),"ulaşım, taşıma"
underground (n),"metro, yeraltı treni"
van (n),"minibüs, kamyonet"
zoo (n),hayvanat bahçesi`,
  [ThemeId.LifeInTheWorld]: `What is the Turkish for 'Africa (n)'?,Afrika
What is the Turkish for 'American (n)'?,"Amerikalı, Amerikan"
What is the Turkish for 'Antarctica (n)'?,Antarktika
What is the Turkish for 'Asia (n)'?,Asya
What is the Turkish for 'Australia (n)'?,Avustralya
What is the Turkish for 'Australian (n)'?,Avustralyalı
What is the Turkish for 'Azerbaijan (n)'?,Azerbaycan
What is the Turkish for 'Azerbaijani (Azeri) (n)'?,Azerbaycanlı (Azeri)
What is the Turkish for 'bake (v)'?,Fırında pişirmek
What is the Turkish for 'barbecue (n)'?,Mangal
What is the Turkish for 'boil (v)'?,Kaynatmak
What is the Turkish for 'bowl (n)'?,"Kase, çanak"
What is the Turkish for 'Brazil (n)'?,Brezilya
What is the Turkish for 'Canada (n)'?,Kanada
What is the Turkish for 'celebrate (v)'?,Kutlamak
What is the Turkish for 'chef (n)'?,"Şef, aşçıbaşı"
What is the Turkish for 'cherry (n)'?,Kiraz
What is the Turkish for 'China (n)'?,Çin
What is the Turkish for 'continent (n)'?,Kıta
What is the Turkish for 'cooker (n)'?,"Ocak, fırın"
What is the Turkish for 'country (n)'?,Ülke
What is the Turkish for 'cream (n)'?,"Krema, kaymak"
What is the Turkish for 'crowd (n)'?,Kalabalık
What is the Turkish for 'cuisines (n)'?,"Mutfaklar, yemek kültürleri"
What is the Turkish for 'cup (n)'?,"Fincan, kupa"
What is the Turkish for 'delicious (adj)'?,Lezzetli
What is the Turkish for 'dessert (n)'?,Tatlı
What is the Turkish for 'dish (n)'?,"Yemek, tabak"
What is the Turkish for 'dumpling (n)'?,Mantı
What is the Turkish for 'England (n)'?,İngiltere
What is the Turkish for 'Europe (n)'?,Avrupa
What is the Turkish for 'event (n)'?,"Etkinlik, olay"
What is the Turkish for 'food festivals (n)'?,Yemek festivalleri
What is the Turkish for 'France (n)'?,Fransa
What is the Turkish for 'French (n)'?,"Fransız, Fransızca"
What is the Turkish for 'fried (adj)'?,"Kızarmış, kızartılmış"
What is the Turkish for 'fry (v)'?,Kızartmak
What is the Turkish for 'garlic (n)'?,Sarımsak
What is the Turkish for 'Germany (n)'?,Almanya
What is the Turkish for 'glass (n)'?,"Bardak, cam"
What is the Turkish for 'grape (n)'?,Üzüm
What is the Turkish for 'grill (n)'?,Izgara
What is the Turkish for 'grilled (adj)'?,Izgara yapılmış
What is the Turkish for 'healthy (adj)'?,Healthy
What is the Turkish for 'Ireland (n)'?,İrlanda
What is the Turkish for 'Italy (n)'?,İtalya
What is the Turkish for 'jam (n)'?,Reçel
What is the Turkish for 'Japan (n)'?,Japonya
What is the Turkish for 'join (v)'?,Katılmak
What is the Turkish for 'Kazakh (Russian) (n)'?,Kazak (Rus)
What is the Turkish for 'Kazakhstan (n)'?,Kazakistan
What is the Turkish for 'knife (n)'?,Bıçak
What is the Turkish for 'Kyrgyz (Russian) (n)'?,Kırgız (Rus)
What is the Turkish for 'Kyrgyzstan (n)'?,Kırgızistan
What is the Turkish for 'lobster (n)'?,Istakoz
What is the Turkish for 'marinate (v)'?,"Marine etmek, terbiyelemek"
What is the Turkish for 'meal (n)'?,Öğün
What is the Turkish for 'meat (n)'?,Et
What is the Turkish for 'mix (v)'?,Karıştırmak
What is the Turkish for 'mushroom (n)'?,Mantar
What is the Turkish for 'nationality (n)'?,"Milliyet, uyruk"
What is the Turkish for 'New Zealand (n)'?,Yeni Zelanda
What is the Turkish for 'North America (n)'?,Kuzey Amerika
What is the Turkish for 'omelette (n)'?,Omlet
What is the Turkish for 'onion (n)'?,Soğan
What is the Turkish for 'pear (n)'?,Armut
What is the Turkish for 'plate (n)'?,Tabak
What is the Turkish for 'Portugal (n)'?,Portekiz
What is the Turkish for 'roasted (adj)'?,"Fırında kızartılmış, kavrulmuş"
What is the Turkish for 'Russia (n)'?,Rusya
What is the Turkish for 'salty (adj)'?,Tuzlu
What is the Turkish for 'sauce (n)'?,Sos
What is the Turkish for 'serve (v)'?,Servis yapmak
What is the Turkish for 'snack (n)'?,Atıştırmalık
What is the Turkish for 'South America (n)'?,Güney Amerika
What is the Turkish for 'Spain (n)'?,İspanya
What is the Turkish for 'spicy (adj)'?,"Baharatlı, acı"
What is the Turkish for 'stand (n)'?,"Stand, tezgah"
What is the Turkish for 'steak (n)'?,Biftek
What is the Turkish for 'sweet (adj)'?,Tatlı (şekerli)
What is the Turkish for 'taste (n)'?,"Tat, lezzet"
What is the Turkish for 'The USA (n)'?,ABD (Amerika Birleşik Devletleri)
What is the Turkish for 'toast (n)'?,"Tost, kızarmış ekmek"
What is the Turkish for 'tradition (n)'?,Gelenek
What is the Turkish for 'Turkish (n)'?,"Türk, Türkçe"
What is the Turkish for 'Turkish Cypriot (n)'?,Kıbrıslı Türk
What is the Turkish for 'Turkish Republic of Northern Cyprus (n)'?,Kuzey Kıbrıs Türk Kuruluşu
What is the Turkish for 'Turkmen (n)'?,Türkmen
What is the Turkish for 'Uzbek (n)'?,Özbek
What is the Turkish for 'Uzbekistan (n)'?,Özbekistan
What is the Turkish for 'wash up (v)'?,Bulaşıkları yıkamak
What is the Turkish for 'world (n)'?,Dünya`
};
