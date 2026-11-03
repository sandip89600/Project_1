
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

const marathiTranslations = {
    "Notice / सूचना": "सूचना",
    "Water supply pipeline maintenance scheduled on Thursday 2 PM - 6 PM / रविवारी सकाळी ७ वाजता रामकुंड परिसरात विशेष स्वच्छता मोहीम.": "गुरुवारी दुपारी २ ते ६ वाजेपर्यंत पाणीपुरवठा पाइपलाइनची देखभाल केली जाईल.",
    "Home": "मुख्यपृष्ठ",
    "About Vani": "वणीबद्दल",
    "Gram Panchayat": "ग्रामपंचायत",
    "Rural Services": "ग्रामीण सेवा",
    "Gallery": "छायाचित्रे",
    "Contact": "संपर्क",
    "Toggle navigation": "नेव्हिगेशन उघडा किंवा बंद करा",
    "Main navigation": "मुख्य नेव्हिगेशन",
    "Previous": "मागील",
    "Next": "पुढील",
    "Sacred Banks of River Godavari • South Kashi": "पवित्र गोदावरी तीर • दक्षिण काशी",
    "Welcome to": "आपले स्वागत आहे",
    "Panchavati, Nashik": "पंचवटी, नाशिक",
    "The epic land of five banyan trees, holy river ghats, rich heritage, and vibrant agricultural prosperity.": "पाच वडांच्या वृक्षांची पौराणिक भूमी, पवित्र नदीघाट, समृद्ध वारसा आणि संपन्न शेती.",
    "Explore Panchavati": "पंचवटी पाहा",
    "Ancient Jyotirlinga • Source of River Godavari": "प्राचीन ज्योतिर्लिंग • गोदावरी नदीचा उगम",
    "Discover": "जाणून घ्या",
    "Trimbakeshwar": "त्र्यंबकेश्वर",
    "One of the twelve sacred Jyotirlingas, surrounded by the majestic Brahmagiri hills and rich spiritual legacy.": "भव्य ब्रह्मगिरी पर्वत आणि समृद्ध आध्यात्मिक वारशाने वेढलेले बारा पवित्र ज्योतिर्लिंगांपैकी एक.",
    "Explore Temple": "मंदिर पाहा",
    "Wine Capital of India • Cultural Hub": "भारताची वाइन राजधानी • सांस्कृतिक केंद्र",
    "Experience": "अनुभवा",
    "Nashik City": "नाशिक शहर",
    "A perfect blend of ancient spiritual heritage, modern vineyards, and breathtaking natural scenery.": "प्राचीन आध्यात्मिक वारसा, आधुनिक द्राक्षबागा आणि निसर्गरम्य दृश्यांचा सुंदर संगम.",
    "Explore Nashik": "नाशिक पाहा",
    "Rich Heritage & Economy": "समृद्ध वारसा आणि अर्थव्यवस्था",
    "Nashik: Spiritual, Agricultural &": "नाशिक: आध्यात्मिक, कृषी आणि",
    "Industrial Powerhouse": "औद्योगिक सामर्थ्याचे केंद्र",
    "Located in northern Maharashtra on the banks of the sacred River Godavari, Nashik is one of the four holy cities hosting the grand": "महाराष्ट्राच्या उत्तरेस पवित्र गोदावरी नदीच्या तीरावर वसलेले नाशिक हे भव्य",
    "Simhastha Kumbh Mela": "सिंहस्थ कुंभमेळा",
    ". Beyond its deep spiritual roots in Ramayana history, Nashik is a leading industrial engine, defense manufacturing hub (HAL Ozar), and India's agricultural giant for grapes and onions.": "याचे आयोजन करणाऱ्या चार पवित्र शहरांपैकी एक आहे. रामायणातील आध्यात्मिक वारशासोबतच नाशिक हे प्रमुख औद्योगिक केंद्र, संरक्षण उत्पादन केंद्र (एचएएल ओझर) आणि द्राक्षे व कांद्याचे मोठे कृषी केंद्र आहे.",
    "District Population": "जिल्ह्याची लोकसंख्या",
    "48.50 (Rural Areas)": "४८.५० (ग्रामीण भाग)",
    "Grape Export": "द्राक्ष निर्यात",
    "India's Wine & Grape Hub": "भारताचे वाइन आणि द्राक्ष केंद्र",
    "Administrative": "प्रशासकीय",
    "15 Taluka": "१५ तालुके",
    "1,379 Gram Panchayats": "१,३७९ ग्रामपंचायती",
    "Literacy Rate": "साक्षरता दर",
    "77.19% Urban Literacy": "शहरी साक्षरता ७७.१९%",
    "Spiritual & Ramayana Heritage": "आध्यात्मिक आणि रामायण वारसा",
    "Home to Panchavati, Ramkund, Kalaram Temple, Sita Gufa, and Trimbakeshwar (one of the 12 Jyotirlingas). Millions visit during the sacred Simhastha Kumbh Mela every 12 years.": "पंचवटी, रामकुंड, काळाराम मंदिर, सीता गुंफा आणि बारा ज्योतिर्लिंगांपैकी एक असलेल्या त्र्यंबकेश्वराचे हे स्थान आहे. दर बारा वर्षांनी होणाऱ्या पवित्र सिंहस्थ कुंभमेळ्यास लाखो भाविक भेट देतात.",
    "Kalaram & Trimbakeshwar Belt": "काळाराम आणि त्र्यंबकेश्वर परिसर",
    "Nashik produces over 80% of India's wine, hosting over 50 wineries including Sula, Grover Zampa, and York. Its fertile soil yields table-grade grapes exported worldwide": "भारताच्या ८०% पेक्षा अधिक वाइनचे उत्पादन नाशिकमध्ये होते. सुला, ग्रोव्हर झाम्पा आणि यॉर्कसह ५० हून अधिक वाइनरी येथे आहेत. येथील सुपीक जमिनीत पिकणारी द्राक्षे जगभर निर्यात केली जातात.",
    "Sula Vineyards & Export Hub": "सुला द्राक्षबागा आणि निर्यात केंद्र",
    "Lasalgaon in Nashik district is Asia's largest wholesale market for onions, dictating onion trade across the Indian subcontinent along with sugarcane and pomegranates.": "नाशिक जिल्ह्यातील लासलगाव ही आशियातील सर्वात मोठी कांद्याची घाऊक बाजारपेठ आहे. ऊस आणि डाळिंबांसह कांद्याच्या व्यापाराचे हे प्रमुख केंद्र आहे.",
    "Asia's Largest APMC Yard": "आशियातील सर्वात मोठी कृषी उत्पन्न बाजार समिती",
    "Industrial & Defense Hub": "औद्योगिक आणि संरक्षण उत्पादन केंद्र",
    "Satpur, Ambad, and Sinnar MIDC belts power manufacturing, automobile, and defense production including Hindustan Aeronautics Limited (HAL) fighter aircraft facility at Ozar.": "सातपूर, अंबड आणि सिन्नर एमआयडीसी परिसरात उत्पादन, वाहन आणि संरक्षण उद्योग विकसित झाले आहेत. ओझर येथे हिंदुस्तान एरोनॉटिक्स लिमिटेडचे (एचएएल) लढाऊ विमान उत्पादन केंद्र आहे.",
    "HAL Ozar & MIDC Belts": "एचएएल ओझर आणि एमआयडीसी परिसर",
    "Civic & Agricultural Metrics": "नागरी आणि कृषी आकडेवारी",
    "Key Statistics & Demographic Analytics": "महत्त्वाची आकडेवारी आणि लोकसंख्याविषयक माहिती",
    "Real-time breakdown of Nashik district, municipal wards, and agricultural yield metrics.": "नाशिक जिल्हा, महानगरपालिका प्रभाग आणि कृषी उत्पादनाची अद्ययावत माहिती.",
    "Sex Ratio (F/M)": "लिंग गुणोत्तर (स्त्री/पुरुष)",
    "Metric Tons Onion Yield": "कांदा उत्पादन (मेट्रिक टन)",
    "NMC Municipal Wards": "नाशिक महानगरपालिका प्रभाग",
    "Total District Area": "जिल्ह्याचे एकूण क्षेत्रफळ",
    "Official Bulletins": "अधिकृत सूचना",
    "Important Notices & Gram Sabha Updates": "महत्त्वाच्या सूचना आणि ग्रामसभा अद्यतने",
    "Search and filter active municipal, health, water, and agricultural notices.": "महानगरपालिका, आरोग्य, पाणीपुरवठा आणि कृषीविषयक सूचना शोधा व निवडा.",
    "All Notice": "सर्व सूचना",
    "Water & Works": "पाणी आणि कामे",
    "Garm Sabha & Tax": "ग्रामसभा आणि कर",
    "Health and Health Camps": "आरोग्य आणि आरोग्य शिबिरे",
    "Type keyword to search notice. (e.g.,water,tax,complains)": "सूचना शोधण्यासाठी शब्द टाका. (उदा. पाणी, कर, तक्रारी)",
    "Water & Infrastructure": "पाणी आणि पायाभूत सुविधा",
    "Gangapur Dam Feeder Line Maintenance": "गंगापूर धरण फीडर पाइपलाइनची देखभाल",
    "Water supply across Nashik West, Satpur, and Panchavati will be shut on Friday for essential Gangapur main canal pipeline upgrades.": "गंगापूर मुख्य कालव्याच्या पाइपलाइनच्या आवश्यक कामासाठी शुक्रवारी नाशिक पश्चिम, सातपूर आणि पंचवटी येथील पाणीपुरवठा बंद राहील.",
    "Issuing Dept: NMC Water Supply": "जारी करणारा विभाग: नाशिक महानगरपालिका पाणीपुरवठा",
    "Gram Sabha & Tax": "ग्रामसभा आणि कर",
    "Special Gram Sabha Meeting & Tax Waiver Scheme": "विशेष ग्रामसभा बैठक आणि कर सवलत योजना",
    "Gram Panchayat and Municipal Wards announce Abhay Yojana 2026. Citizens paying pending property tax & water cess before 15th November will get 75% penalty waiver.": "ग्रामपंचायत आणि महानगरपालिका प्रभागांतर्फे अभय योजना २०२६ जाहीर. १५ नोव्हेंबरपूर्वी थकित मालमत्ता कर आणि पाणीपट्टी भरणाऱ्या नागरिकांना दंडात ७५% सवलत मिळेल.",
    "Issuing Dept: Revenue & Gram Vikas": "जारी करणारा विभाग: महसूल आणि ग्रामविकास",
    "Health & Camps": "आरोग्य आणि शिबिरे",
    "District Health Immunization & Dengue Drive": "जिल्हा आरोग्य लसीकरण आणि डेंग्यू प्रतिबंध मोहीम",
    "Special anti-dengue fogging and free health screening drive initiated across Godavari riverbanks, Trimbak Road, and rural primary health centers (PHC).": "गोदावरी नदीकिनारी, त्र्यंबक रस्ता आणि ग्रामीण प्राथमिक आरोग्य केंद्रांमध्ये डेंग्यू प्रतिबंधक फवारणी आणि मोफत आरोग्य तपासणी मोहीम सुरू.",
    "Issuing Dept: Nashik Civil Hospital": "जारी करणारा विभाग: नाशिक जिल्हा रुग्णालय",
    "Civic Discipline & Penalties": "नागरी शिस्त आणि दंड",
    "Civic Fines & Environmental Guidelines": "नागरी दंड आणि पर्यावरणविषयक नियम",
    "Help keep River Godavari clean and maintain city discipline. Fines regulated by Nashik Municipal Corporation": "गोदावरी नदी स्वच्छ ठेवण्यास आणि शहरातील शिस्त राखण्यास मदत करा. नाशिक महानगरपालिकेतर्फे दंड आकारला जातो.",
    "All Fine Value": "सर्व दंड",
    "Godavari River Protection": "गोदावरी नदी संरक्षण",
    "Plastic and waste management": "प्लास्टिक आणि कचरा व्यवस्थापन",
    "Traffic and Parking": "वाहतूक आणि पार्किंग",
    "Construction and Enforcement": "बांधकाम आणि अंमलबजावणी",
    "River Protection": "नदी संरक्षण",
    "Washing Clothes or Vehicles in Ramkund / Godavari": "रामकुंड / गोदावरी येथे कपडे किंवा वाहने धुणे",
    "Strict prohibition to prevent chemical pollution in holy water.": "पवित्र जलाचे रासायनिक प्रदूषण रोखण्यासाठी सक्त मनाई.",
    "Waste Norms": "कचऱ्याचे नियम",
    "Single-use Plastic Carry Bag Usages Policy In City Area": "शहरात एकदाच वापरल्या जाणाऱ्या प्लास्टिक पिशव्यांवरील धोरण",
    "Applicable to merchants, shopkeepers, and street vendors.": "व्यापारी, दुकानदार आणि फेरीवाल्यांना लागू.",
    "Traffic Norms": "वाहतुकीचे नियम",
    "Illegal Parking in Panchavati Temple Zone": "पंचवटी मंदिर परिसरात अवैध पार्किंग",
    "Obstructing narrow heritage roads and pilgrim walkways.": "अरुंद वारसा मार्ग आणि भाविकांच्या पायवाटांवर अडथळा निर्माण करणे.",
    "Construction": "बांधकाम",
    "Dumping Debris on Public Roads / Footpaths": "सार्वजनिक रस्ते / पदपथांवर बांधकामाचा राडारोडा टाकणे",
    "Unauthorised construction waste blockage in municipal area..": "महानगरपालिका क्षेत्रात अनधिकृत बांधकाम कचऱ्यामुळे अडथळा निर्माण करणे.",
    "Open Burning of Garbage or Agricultural Leaves": "कचरा किंवा शेतीतील पालापाचोळा उघड्यावर जाळणे",
    "Enforced to maintain air quality across residential belts..": "निवासी भागातील हवेची गुणवत्ता राखण्यासाठी हा नियम लागू आहे.",
    "Immersing Non-Organic Waste in River": "नदीत अजैविक कचरा विसर्जित करणे",
    "Poojan waste must be deposited in designated Nirmalya Kunds.": "पूजेचा कचरा निर्धारित निर्माल्य कुंडात जमा करावा.",
    "Gram Panchayat Portal": "ग्रामपंचायत पोर्टल",
    "Official unified citizen portal for Vani Village, Dindori Tehsil, Nashik District. Dedicated to rural governance, farming welfare, and local citizen services.": "वणी गाव, दिंडोरी तालुका, नाशिक जिल्ह्यासाठी अधिकृत एकीकृत नागरिक पोर्टल. ग्रामीण प्रशासन, शेतकरी कल्याण आणि स्थानिक नागरिक सेवांसाठी समर्पित.",
    "QUICK LINKS": "जलद दुवे",
    "GRAM PANCHAYAT OFFICE": "ग्रामपंचायत कार्यालय",
    "Gram Panchayat Karyalaya, Main Road,": "ग्रामपंचायत कार्यालय, मुख्य रस्ता,",
    "Near Old Bus Stand, At Post Vani,": "जुन्या बस स्थानकाजवळ, मु. पो. वणी,",
    "Taluka Dindori, District Nashik – 422204.": "तालुका दिंडोरी, जिल्हा नाशिक – ४२२२०४.",
    "Email:": "ईमेल:",
    "© Gram Panchayat Vani, Dindori Tehsil, Nashik District. All rights reserved.": "© ग्रामपंचायत वणी, दिंडोरी तालुका, नाशिक जिल्हा. सर्व हक्क राखीव.",
    "Designed for Citizens, Pilgrims & Farmers of Vani Village.": "वणी गावातील नागरिक, भाविक आणि शेतकऱ्यांसाठी तयार केलेले.",
    "Nashik City | About Vani Village": "नाशिक शहर | वणी गावाबद्दल",
    "Grape Capital": "द्राक्षांची राजधानी",
    "Lush Grape Orchards & Vineyards": "हिरव्यागार द्राक्षबागा आणि वाइनयार्ड",
    "Export-quality table grapes grown around Vani.": "वणी परिसरात निर्यातक्षम टेबल द्राक्षांचे उत्पादन.",
    "Administrative Hub": "प्रशासकीय केंद्र",
    "Gram Panchayat Administrative Hub": "ग्रामपंचायत प्रशासकीय केंद्र",
    "Serving citizens across Dindori Tehsil, Nashik District.": "नाशिक जिल्ह्यातील दिंडोरी तालुक्यातील नागरिकांना सेवा.",
    "Sacred Shrine": "पवित्र देवस्थान",
    "Saptashrungi Nivasini Devi Temple": "सप्तशृंगी निवासिनी देवी मंदिर",
    "A gateway to the revered Shakti Peeth pilgrimage site.": "पवित्र शक्तिपीठ तीर्थक्षेत्राचे प्रवेशद्वार.",
    "Dindori Tehsil, Nashik District": "दिंडोरी तालुका, नाशिक जिल्हा",
    "Welcome to Vani Village": "वणी गावात आपले स्वागत आहे",
    "Nestled at the foothills of the Sahyadri mountain range in Nashik district, Vani is a major historical and commercial village famous as a base for pilgrimage to the holy Saptashrungi Nivasini Devi Temple (Gad). Vani is also an agricultural hub, celebrated for its grape vineyards and onion markets.": "नाशिक जिल्ह्यातील सह्याद्री पर्वतरांगांच्या पायथ्याशी वसलेले वणी हे ऐतिहासिक आणि व्यावसायिकदृष्ट्या महत्त्वाचे गाव आहे. पवित्र सप्तशृंगी निवासिनी देवी मंदिराच्या (गड) यात्रेसाठी हे प्रसिद्ध केंद्र आहे. द्राक्षबागा आणि कांदा बाजारांसाठीही वणीचे महत्त्वाचे कृषी केंद्र म्हणून नाव आहे.",
    "Population": "लोकसंख्या",
    "Agro Hectares": "कृषी क्षेत्र (हेक्टर)",
    "Annual Pilgrims": "वार्षिक भाविक",
    "Panchayat Wards": "पंचायत प्रभाग",
    "Grape Export Hub": "द्राक्ष निर्यात केंद्र",
    "Shakti Peeth Gateway": "शक्तिपीठाचे प्रवेशद्वार",
    "Dindori-Kalwan Transit": "दिंडोरी- कळवण वाहतूक केंद्र",
    "Panchayat Leadership": "पंचायत नेतृत्व",
    "Sarpanch & Gram Sabha Administrati": "सरपंच आणि ग्रामसभा प्रशासन",
    "Sarpanch": "सरपंच",
    "Sarpanch, Gram Panchayat Vani": "सरपंच, ग्रामपंचायत वणी",
    "Our aim is to make Vani a benchmark Smart Village with clean drinking water, 100% solar lighting, enhanced facilities for pilgrims, and strong support for our grape farmers.": "स्वच्छ पिण्याचे पाणी, १००% सौर दिवे, भाविकांसाठी उत्तम सुविधा आणि द्राक्ष उत्पादक शेतकऱ्यांना भक्कम पाठबळ देऊन वणीला आदर्श स्मार्ट व्हिलेज बनवणे हे आमचे ध्येय आहे.",
    "Deputy Sarpanch": "उपसरपंच",
    "Focusing on infrastructure upgrades, internal concrete roads, drainage networks, and youth empowerment projects across all 8 wards.": "सर्व ८ प्रभागांमध्ये पायाभूत सुविधांचे अद्ययावतीकरण, अंतर्गत काँक्रीट रस्ते, जलनिस्सारण व्यवस्था आणि युवक सक्षमीकरण प्रकल्पांवर भर.",
    "Gram Sevak": "ग्रामसेवक",
    "Village Development Officer": "ग्रामविकास अधिकारी",
    "Managing daily administrative services, birth/death certificates, property tax records, and government welfare scheme implementation.": "दैनंदिन प्रशासकीय सेवा, जन्म-मृत्यू प्रमाणपत्रे, मालमत्ता कर नोंदी आणि शासकीय कल्याणकारी योजनांची अंमलबजावणी.",
    "Public Participation": "लोकसहभाग",
    "Gram Sabha Assembly Schedule & Decisions": "ग्रामसभा बैठक वेळापत्रक आणि निर्णय",
    "Upcoming Assembly": "आगामी सभा",
    "Past Resolutions": "मागील ठराव",
    "Next Scheduled Date": "पुढील नियोजित तारीख",
    "15th Nov 2026 | 11:00 AM": "१५ नोव्हेंबर २०२६ | सकाळी ११:००",
    "Location: Gram Panchayat Hall, Main Market Road, Vani.": "स्थळ: ग्रामपंचायत सभागृह, मुख्य बाजार रस्ता, वणी.",
    "Key Agenda Items for Discussion": "चर्चेचे प्रमुख विषय",
    "Review of Jal Jeevan Mission drinking water pipeline extension work.": "जल जीवन मिशनअंतर्गत पिण्याच्या पाण्याच्या पाइपलाइनच्या विस्तारीकरण कामाचा आढावा.",
    "Approval of annual development budget for Financial Year 2027-28.": "२०२७-२८ या आर्थिक वर्षाच्या वार्षिक विकास अर्थसंकल्पास मंजुरी.",
    "Pilgrim crowd management strategy for upcoming Navratri festival at Saptashrungi Gad.": "सप्तशृंगी गडावरील आगामी नवरात्रोत्सवासाठी भाविकांच्या गर्दी व्यवस्थापनाची योजना.",
    "Elected Representatives": "निवडून आलेले प्रतिनिधी",
    "Gram Panchayat Ward Members": "ग्रामपंचायत प्रभाग सदस्य",
    "Representing 8 administrative wards of Vani Village": "वणी गावातील ८ प्रशासकीय प्रभागांचे प्रतिनिधित्व",
    "Member": "सदस्य",
    "Portfolio: Water Supply": "जबाबदारी: पाणीपुरवठा",
    "Portfolio: Health & Sanitation": "जबाबदारी: आरोग्य आणि स्वच्छता",
    "Portfolio: Agriculture & Irrigation": "जबाबदारी: कृषी आणि सिंचन",
    "Portfolio: Electricity & Lighting": "जबाबदारी: वीज आणि प्रकाशयोजना",
    "Portfolio: Primary Education": "जबाबदारी: प्राथमिक शिक्षण",
    "Portfolio: Roads & Public Works": "जबाबदारी: रस्ते आणि सार्वजनिक बांधकाम",
    "Portfolio: Women & Child Care": "जबाबदारी: महिला आणि बालकल्याण",
    "Portfolio: Market & Commerce": "जबाबदारी: बाजार आणि व्यापार",
    "Infrastructure & Growth": "पायाभूत सुविधा आणि विकास",
    "5 Major Village Development Projects": "गावातील ५ प्रमुख विकास प्रकल्प",
    "Real-time status of ongoing public works in Vani": "वणीतील सुरू असलेल्या सार्वजनिक कामांची सद्यस्थिती",
    "1. Saptashrungi Tourist Facilitation Center & Bypass": "१. सप्तशृंगी पर्यटक सुविधा केंद्र आणि बायपास",
    "In Progress": "काम सुरू आहे",
    "Budget:": "अर्थसंकल्प:",
    "Funding:": "निधी:",
    "DPDC Nashik": "जिल्हा नियोजन समिती, नाशिक",
    "Completion: 75%": "पूर्णत्व: ७५%",
    "Target: Dec 2026": "लक्ष्य: डिसेंबर २०२६",
    "2. Jal Jeevan Mission Drinking Water Storage Tank": "२. जल जीवन मिशन पिण्याच्या पाण्याची साठवण टाकी",
    "Central Jal Jeevan": "केंद्र सरकारची जल जीवन योजना",
    "Completion: 90%": "पूर्णत्व: ९०%",
    "Target: Nov 2026": "लक्ष्य: नोव्हेंबर २०२६",
    "3. 100% Solar Smart Street Lighting Grid": "३. १००% सौर स्मार्ट पथदिवे यंत्रणा",
    "Completed": "पूर्ण",
    "Gram Urja Abhiyan": "ग्राम ऊर्जा अभियान",
    "Completion: 100%": "पूर्णत्व: १००%",
    "Status: Operational": "स्थिती: कार्यान्वित",
    "4. Grape Farmers Cold Storage & Market Hub": "४. द्राक्ष उत्पादकांसाठी शीतगृह आणि बाजार केंद्र",
    "Tendering": "निविदा प्रक्रिया सुरू",
    "NABARD & State Agro": "नाबार्ड आणि राज्य कृषी विभाग",
    "Completion: 40%": "पूर्णत्व: ४०%",
    "Target: March 2027": "लक्ष्य: मार्च २०२७",
    "5. Village Underground Drainage & Sewage Treatment Plant": "५. गावातील भूमिगत गटार आणि सांडपाणी प्रक्रिया केंद्र",
    "Swachh Bharat Gramin": "स्वच्छ भारत मिशन (ग्रामीण)",
    "Completion: 65%": "पूर्णत्व: ६५%",
    "Target: Jan 2027": "लक्ष्य: जानेवारी २०२७",
    "Transparency & Governance": "पारदर्शकता आणि प्रशासन",
    "Public Documents Desk": "सार्वजनिक दस्तऐवज कक्ष",
    "Download official Gram Panchayat audit reports, budgets & notices": "ग्रामपंचायतीचे अधिकृत लेखापरीक्षण अहवाल, अर्थसंकल्प आणि सूचना डाउनलोड करा",
    "Gram Sabha Master Resolution Register 2025-26": "ग्रामसभा मुख्य ठराव नोंदवही २०२५-२६",
    "File Size: 2.4 MB": "फाइलचा आकार: २.४ एमबी",
    "Annual Financial Audit Report 2025": "वार्षिक आर्थिक लेखापरीक्षण अहवाल २०२५",
    "File Size: 4.1 MB": "फाइलचा आकार: ४.१ एमबी",
    "Vani Master Village Development Plan": "वणी गावाचा सर्वंकष विकास आराखडा",
    "File Size: 5.8 MB": "फाइलचा आकार: ५.८ एमबी",
    "Citizen Rights Charter (Nagrik Sanad)": "नागरिक हक्क सनद",
    "File Size: 1.2 MB": "फाइलचा आकार: १.२ एमबी",
    "Approved Property Tax & Water Fee Chart": "मंजूर मालमत्ता कर आणि पाणीपट्टी दरपत्रक",
    "File Size: 1.7 MB": "फाइलचा आकार: १.७ एमबी",
    "Certified by Rural Development Department, Govt of Maharashtra.": "महाराष्ट्र शासनाच्या ग्रामविकास विभागाद्वारे प्रमाणित.",
    "Reach us": "आमच्याशी संपर्क साधा",
    "Office Contact & Emergency Helplines": "कार्यालयीन संपर्क आणि आपत्कालीन हेल्पलाइन",
    "Gram Panchayat Bhavan": "ग्रामपंचायत भवन",
    "Postal Address:": "टपालाचा पत्ता:",
    "Main Road, Near Old Bus Stand, At Post Vani, Taluka Dindori, District Nashik, Maharashtra - 422204.": "मुख्य रस्ता, जुन्या बस स्थानकाजवळ, मु. पो. वणी, तालुका दिंडोरी, जिल्हा नाशिक, महाराष्ट्र - ४२२२०४.",
    "Office Working Hours:": "कार्यालयीन वेळ:",
    "Monday to Saturday: 10:00 AM to 5:45 PM": "सोमवार ते शनिवार: सकाळी १०:०० ते संध्याकाळी ५:४५",
    "(Lunch Break: 1:30 PM - 2:00 PM)": "(दुपारची सुट्टी: १:३० ते २:००)",
    "Telephone / Desk:": "दूरध्वनी / कार्यालय:",
    "Official Email:": "अधिकृत ईमेल:",
    "Submit Online Grievance / Inquiry": "ऑनलाइन तक्रार / चौकशी नोंदवा",
    "Emergency Contacts": "आपत्कालीन संपर्क",
    "Vani Primary Health Center (PHC)": "वणी प्राथमिक आरोग्य केंद्र",
    "24/7 Ambulance Desk": "२४ तास रुग्णवाहिका सेवा",
    "Vani Police Station Desk": "वणी पोलीस ठाणे",
    "Law & Order Control": "कायदा आणि सुव्यवस्था नियंत्रण",
    "MSEDCL Electricity Power Fault": "महावितरण वीज बिघाड",
    "Substation Vani": "वणी उपकेंद्र",
    "Dindori Fire Station": "दिंडोरी अग्निशमन केंद्र",
    "Fire Response Center": "अग्निशमन प्रतिसाद केंद्र",
    "Location Map: Vani, Nashik": "स्थान नकाशा: वणी, नाशिक",
    "Open Maps": "नकाशा उघडा",
    "Located 40 km North of Nashik City on State Highway 17.": "नाशिक शहराच्या उत्तरेस राज्य महामार्ग १७ वर ४० किमी अंतरावर.",
    "© 2026 Gram Panchayat Vani. All Rights Reserved.": "© २०२६ ग्रामपंचायत वणी. सर्व हक्क राखीव.",
    "Developed under Digital India Gramin Portal Initiative.": "डिजिटल इंडिया ग्रामीण पोर्टल उपक्रमांतर्गत विकसित.",
    "Facebook": "फेसबुक",
    "X (Twitter)": "एक्स (ट्विटर)",
    "YouTube": "यूट्यूब",
    "WhatsApp": "व्हॉट्सॲप",
    "💧 Water supply pipeline maintenance scheduled on Thursday 2 PM - 6 PM / रविवारी सकाळी ७ वाजता रामकुंड परिसरात विशेष स्वच्छता मोहीम.": "गुरुवारी दुपारी २ ते ६ वाजेपर्यंत पाणीपुरवठा पाइपलाइनची देखभाल केली जाईल.",
    "Lasalgaon Onion APMC": "लासलगाव कांदा कृषी उत्पन्न बाजार समिती",
    "Wine Capital of India": "भारताची वाइन राजधानी",
    "22 Oct 2026": "२२ ऑक्टोबर २०२६",
    "Ward No. 1": "प्रभाग क्रमांक १",
    "Ward No. 2": "प्रभाग क्रमांक २",
    "Ward No. 3": "प्रभाग क्रमांक ३",
    "Ward No. 4": "प्रभाग क्रमांक ४",
    "Ward No. 5": "प्रभाग क्रमांक ५",
    "Ward No. 6": "प्रभाग क्रमांक ६",
    "Ward No. 7": "प्रभाग क्रमांक ७",
    "Ward No. 8": "प्रभाग क्रमांक ८",
    "Nashik Heritage": "नाशिकचा वारसा",
    "Nashik": "नाशिक",
    "Cold storage project completion": "शीतगृह प्रकल्पाची प्रगती",
    "Drainage project completion": "जलनिस्सारण प्रकल्पाची प्रगती",
    "Gram Panchayat administrative building": "ग्रामपंचायत प्रशासकीय इमारत",
    "Grape orchards and vineyards near Vani": "वणी परिसरातील द्राक्षबागा आणि वाइनयार्ड",
    "Saptashrungi project completion": "सप्तशृंगी प्रकल्पाची प्रगती",
    "Solar lighting project completion": "सौर प्रकाशयोजना प्रकल्पाची प्रगती",
    "Water storage project completion": "पाणी साठवण प्रकल्पाची प्रगती",
    "15,530 sq km": "१५,५३० चौ. किमी",
    "1.8+ Lakh Tonnes": "१.८+ लाख टन",
    "22.5 Lakh": "२२.५ लाख",
    "122 Wards": "१२२ प्रभाग",
    "8 Wards": "८ प्रभाग",
    "24,500+": "२४,५००+",
    "3,800+": "३,८००+",
    "1.5M+": "१५ लाख+",
    "75.01 Lakhs": "७५.०१ लाख",
    "82.3": "८२.३",
    "934/1000": "९३४/१०००",
    "🕒 22 Oct 2026": "🕒 २२ ऑक्टोबर २०२६",
    "PDF": "पीडीएफ",
    "₹2.40 Cr |": "₹२.४० कोटी |",
    "₹1.80 Cr |": "₹१.८० कोटी |",
    "₹65 Lakhs |": "₹६५ लाख |",
    "₹3.10 Cr |": "₹३.१० कोटी |",
    "₹1.95 Cr |": "₹१.९५ कोटी |",
    "₹₹500 + Towing": "₹५०० + टोइंग",
    "₹5,000": "₹५,०००",
    "₹1,000": "₹१,०००",
    "₹500": "₹५००",
    "Shri. Anil K. Shinde": "श्री. अनिल के. शिंदे",
    "Shri. Deepak B. More": "श्री. दीपक बी. मोरे",
    "Shri. Mahesh R. Thorat": "श्री. महेश आर. थोरात",
    "Shri. Prakash T. Bachhav": "श्री. प्रकाश टी. बच्छाव",
    "Shri. Ramesh G. Patil": "श्री. रमेश जी. पाटील",
    "Shri. Sanjay K. Pawar": "श्री. संजय के. पवार",
    "Shri. Vijay S. Gaikwad": "श्री. विजय एस. गायकवाड",
    "Smt. Kavita N. Shinde": "श्रीमती कविता एन. शिंदे",
    "Smt. Rekha M. Jadhav": "श्रीमती रेखा एम. जाधव",
    "Smt. Savita R. Deshmukh": "श्रीमती सविता आर. देशमुख",
    "Smt. Sunita A. Khairnar": "श्रीमती सुनीता ए. खैरनार",
    "“Our aim is to make Vani a benchmark Smart Village with clean drinking water, 100% solar lighting, enhanced facilities for pilgrims, and strong support for our grape farmers.”": "“स्वच्छ पिण्याचे पाणी, १००% सौर दिवे, भाविकांसाठी उत्तम सुविधा आणि द्राक्ष उत्पादक शेतकऱ्यांना भक्कम पाठबळ देऊन वणीला आदर्श स्मार्ट व्हिलेज बनवणे हे आमचे ध्येय आहे.”"
};

const languageToggle = document.querySelector(".language-toggle");
const language = localStorage.getItem("site-language") === "mr" ? "mr" : "en";
const textNodes = [];
const textWalker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
        if (!node.nodeValue.trim() || node.parentElement.closest("script, style, .language-toggle")) {
            return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
    }
});

while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    textNodes.push({ node, original: node.nodeValue });
}

const translatedAttributes = ["alt", "aria-label", "placeholder", "title"];
const attributeValues = [];
document.querySelectorAll(translatedAttributes.map(attribute => `[${attribute}]`).join(",")).forEach(element => {
    translatedAttributes.forEach(attribute => {
        if (element.hasAttribute(attribute)) {
            attributeValues.push({ element, attribute, original: element.getAttribute(attribute) });
        }
    });
});

function setLanguage(nextLanguage) {
    const useMarathi = nextLanguage === "mr";

    textNodes.forEach(({ node, original }) => {
        if (!useMarathi) {
            node.nodeValue = original;
            return;
        }

        const parts = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
        const translation = marathiTranslations[parts[2].replace(/\s+/g, " ").trim()];
        if (translation) {
            node.nodeValue = `${parts[1]}${translation}${parts[3]}`;
        }
    });

    attributeValues.forEach(({ element, attribute, original }) => {
        element.setAttribute(attribute, useMarathi ? marathiTranslations[original] || original : original);
    });

    document.documentElement.lang = useMarathi ? "mr" : "en";
    if (languageToggle) {
        languageToggle.textContent = useMarathi ? "English" : "मराठी";
        languageToggle.setAttribute("aria-label", useMarathi ? "Switch to English" : "Switch to Marathi");
    }
    localStorage.setItem("site-language", useMarathi ? "mr" : "en");
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        setLanguage(document.documentElement.lang === "mr" ? "en" : "mr");
    });
    setLanguage(language);
}
