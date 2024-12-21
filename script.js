// Liste complète des sourates et invocations pour la roqya
const ayatList = [
    // Sourate Al-Fatiha (1)
    `سورة الفاتحة:
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
    الحمد لله رب العالمين
    الرحمن الرحيم
    مالك يوم الدين
    إياك نعبد وإياك نستعين
    اهدنا الصراط المستقيم
    صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين.`,
    
    // Sourate Al-Fatiha (1)
    `سورة الفاتحة:
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
    الحمد لله رب العالمين
    الرحمن الرحيم
    مالك يوم الدين
    إياك نعبد وإياك نستعين
    اهدنا الصراط المستقيم
    صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين.`,
    
    // Ayat Al-Kursi (Al-Baqara 255)
    `آية الكرسي (البقرة 255):
    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ
    لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ
    لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ
    مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ
    يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ
    وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ
    وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ
    وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.`,
    
    // Sourate Al-Baqara (102)
    `سورة البقرة (102):
    وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ عَلَى مُلْكِ سُلَيْمَانَ
    وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا
    يُعَلِّمُونَ النَّاسَ السِّحْرَ وَمَا أُنْزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوتَ وَمَارُوتَ
    وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّى يَقُولا إِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ
    فَيَتَعَلَّمُونَ مِنْهُمَا مَا يُفَرِّقُونَ بِهِ بَيْنَ الْمَرْءِ وَزَوْجِهِ
    وَمَا هُمْ بِضَارِّينَ بِهِ مِنْ أَحَدٍ إِلَّا بِإِذْنِ اللَّهِ.`,

    // Sourate Al-A'raf (117-122)
    `سورة الأعراف (117-122):
    وَأَوْحَيْنَا إِلَى مُوسَى أَنْ أَلْقِ عَصَاكَ
    فَإِذَا هِيَ تَلْقَفُ مَا يَأْفِكُونَ
    فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوا يَعْمَلُونَ
    فَغُلِبُوا هُنَالِكَ وَانْقَلَبُوا صَاغِرِينَ.`,

    // Sourate Yunus (79-82)
    `سورة يونس (79-82):
    وَقَالَ فِرْعَوْنُ ائْتُونِي بِكُلِّ سَاحِرٍ عَلِيمٍ
    فَلَمَّا جَاءَ السَّحَرَةُ قَالَ لَهُمْ مُوسَى أَلْقُوا مَا أَنْتُمْ مُلْقُونَ
    فَلَمَّا أَلْقَوْا قَالَ مُوسَى مَا جِئْتُمْ بِهِ السِّحْرُ
    إِنَّ اللَّهَ سَيُبْطِلُهُ إِنَّ اللَّهَ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِينَ.`,

    // Sourate Al-Ikhlas (112)
    `سورة الإخلاص:
    قُلْ هُوَ اللَّهُ أَحَدٌ
    اللَّهُ الصَّمَدُ
    لَمْ يَلِدْ وَلَمْ يُولَدْ
    وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ.`,

    // Sourate Al-Falaq (113)
    `سورة الفلق:
    قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
    مِن شَرِّ مَا خَلَقَ
    وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
    وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
    وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.`,

    // Sourate An-Nas (114)
    `سورة الناس:
    قُلْ أَعُوذُ بِرَبِّ النَّاسِ
    مَلِكِ النَّاسِ
    إِلَهِ النَّاسِ
    مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
    الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
    مِنَ الْجِنَّةِ وَالنَّاسِ.`,

    // Adhkar et douaa
    `اللهم رب الناس أذهب البأس، اشفِ أنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يغادر سقماً.`,
    `أعوذ بكلمات الله التامة من شر ما خلق.`,
    `باسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.`
];


let currentAyatIndex = 0; // Index de l'élément actuel
let repeatCount = 7; // Compteur initial

function countAndNext() {
    const button = document.getElementById("countButton");
    const ayatText = document.getElementById("ayat");

    // Décrémenter le compteur
    repeatCount--;
    button.innerText = `تكرار: ${repeatCount} مرات`;

    // Si le compteur atteint 0, passer à l'élément suivant
    if (repeatCount === 0) {
        currentAyatIndex++;
        if (currentAyatIndex < ayatList.length) {
            ayatText.innerText = ayatList[currentAyatIndex];
            repeatCount = 7; // Réinitialiser le compteur
            button.innerText = `تكرار: ${repeatCount} مرات`;
        } else {
            ayatText.innerText = "انتهت الرُقية! بارك الله فيكم واشرب الماء بنية الشفاء العاجل";
            button.disabled = true;
        }
    }
}
// Fonction de réinitialisation
function resetRoqya() {
    currentAyatIndex = 0; // Réinitialiser l'index de l'élément actuel
    repeatCount = 7; // Réinitialiser le compteur
    const button = document.getElementById("countButton");
    const ayatText = document.getElementById("ayat");

    // Mettre à jour l'interface utilisateur
    ayatText.innerText = ayatList[currentAyatIndex];
    button.innerText = `تكرار: ${repeatCount} مرات`;
    button.disabled = false;
}

// Ajouter un gestionnaire d'événements pour le bouton "reset"
document.getElementById("resetButton").addEventListener("click", resetRoqya);