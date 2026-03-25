import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'translateValue',
    standalone: false,
    pure: false
})
export class TranslateValuePipe implements PipeTransform {
    private translations: { [lang: string]: { [key: string]: string } } = {
        'ar': {
            // Months
            'janvier': 'يناير', 'février': 'فبراير', 'mars': 'مارس',
            'avril': 'أبريل', 'mai': 'مايو', 'juin': 'يونيو',
            'juillet': 'يوليوز', 'août': 'غشت', 'septembre': 'شتنبر',
            'octobre': 'أكتوبر', 'novembre': 'نونبر', 'décembre': 'دجنبر',
            'oct': 'أكتوبر', 'nov': 'نونبر', 'dec': 'دجنبر',
            'jan': 'يناير', 'feb': 'فبراير', 'mar': 'مارس',
            'apr': 'أبريل', 'may': 'مايو', 'jun': 'يونيو',
            'jul': 'يوليوز', 'aug': 'غشت', 'sep': 'شتنبر',
            'january': 'يناير', 'february': 'فبراير', 'march': 'مارس',
            'april': 'أبريل', 'june': 'يونيو',
            'july': 'يوليوز', 'august': 'غشت', 'september': 'شتنبر',
            'october': 'أكتوبر', 'november': 'نونبر', 'december': 'دجنبر',
            // Languages
            'arabe': 'العربية', 'français': 'الفرنسية', 'francais': 'الفرنسية',
            'tashelhit': 'تشلحيت', 'amazigh': 'الأمازيغية',
            'anglais': 'الإنجليزية', 'espagnol': 'الإسبانية',
            'arabic': 'العربية', 'french': 'الفرنسية',
            'english': 'الإنجليزية', 'spanish': 'الإسبانية',
            'tamazight': 'الأمازيغية', 'darija': 'الدارجة',
            'berbère': 'الأمازيغية', 'berbere': 'الأمازيغية',
            
            // Destinations & Cities (Morocco)
            'jemaa el-fnaa': 'ساحة جامع الفناء',
            'hassan ii mosque': 'مسجد الحسن الثاني',
            'ait ben haddou': 'آيت بن حدو',
            'merzouga desert': 'صحراء مرزوكة',
            'ouzoud waterfalls': 'شلالات أوزود',
            'fes el bali': 'فاس البالي',
            'todgha gorges': 'مضايق تودغى',
            'dades valley': 'وادي دادس',
            'essaouira medina': 'مدينة الصويرة القديمة',
            'rabat city center': 'مركز مدينة الرباط',
            'agadir beach': 'شاطئ أكادير',
            'sefrou city': 'مدينة صفرو',
            'guelmim gate': 'باب كلميم',
            'laayoune city': 'مدينة العيون',
            'imilchil village': 'قرية إملشيل',
            'dakhla lagoon': 'بحيرة الداخلة',
            'al hoceima bay': 'خليج الحسيمة',
            'bin el ouidane lake': 'بحيرة بين الويدان',
            'oualidia lagoon': 'بحيرة الوليدية',
            'azrou cedar forest': 'غابة أرز أزرو',
            'hercules caves': 'مغارة هرقل',
            'oukaimeden resort': 'منتجع أوكايمدن',
            'saidia beach': 'شاطئ السعيدية',
            'asilah old town': 'مدينة أصيلة القديمة',
            
            'marrakech': 'مراكش',
            'casablanca': 'الدار البيضاء',
            'ouarzazate': 'ورزازات',
            'errachidia': 'الرشيدية',
            'azilal': 'أزيلال',
            'fes': 'فاس',
            'tinghir': 'تنغير',
            'boumalne dades': 'بومالن دادس',
            'essaouira': 'الصويرة',
            'rabat': 'الرباط',
            'agadir': 'أكادير',
            'kelaat mgouna': 'قلعة مكونة',
            'sefrou': 'صفرو',
            'guelmim': 'كلميم',
            'laayoune': 'العيون',
            'imilchil': 'إملشيل',
            'dakhla': 'الداخلة',
            'al hoceima': 'الحسيمة',
            'oualidia': 'الوليدية',
            'azrou': 'أزرو',
            'tangier': 'طنجة',
            'berkane': 'بركان',
            'asilah': 'أصيلة',
            'tan-tan': 'طانطان',
            'ifrane': 'إفران',
            'meknes': 'مكناس',
            'cultural': 'ثقافي',
            'nature': 'طبيعة',
            'historical': 'تاريخي',
            'religious': 'ديني',
            'fes sacred music': 'مهرجان فاس للموسيقى الروحية',
            'fes sacred music.': 'مهرجان فاس للموسيقى الروحية.',
            'mawazine': 'موازين',
            'timitar': 'تيميتار',
            'festival gnaoua': 'مهرجان كناوة',
            'spiritual music': 'موسيقى روحية',
            'spiritual music.': 'موسيقى روحية.',
            'amazigh culture festival': 'مهرجان الثقافة الأمازيغية',
            'amazigh culture festival.': 'مهرجان الثقافة الأمازيغية.',
            'international music festival': 'مهرجان الموسيقى الدولي',
            'international music festival.': 'مهرجان الموسيقى الدولي.',
            'join us for this amazing cultural experience in morocco.': 'انضم إلينا في هذه التجربة الثقافية الرائعة في المغرب.'
        },
        'en': {
            'janvier': 'January', 'février': 'February', 'fevrier': 'February', 'mars': 'March',
            'avril': 'April', 'mai': 'May', 'juin': 'June',
            'juillet': 'July', 'août': 'August', 'aout': 'August', 'septembre': 'September',
            'octobre': 'October', 'novembre': 'November', 'décembre': 'December', 'decembre': 'December',
            'oct': 'Oct', 'nov': 'Nov', 'dec': 'Dec',
            'arabe': 'Arabic', 'français': 'French', 'francais': 'French',
            'tashelhit': 'Tashelhit', 'amazigh': 'Amazigh',
            'anglais': 'English', 'espagnol': 'Spanish',
            'darija': 'Darija', 'berbère': 'Berber', 'berbere': 'Berber',
            'cultural': 'Cultural', 'nature': 'Nature', 'historical': 'Historical', 'religious': 'Religious',
            'fes': 'Fes', 'marrakech': 'Marrakech', 'casablanca': 'Casablanca', 'agadir': 'Agadir', 'rabat': 'Rabat', 'tangier': 'Tangier', 'tanger': 'Tangier', 'essaouira': 'Essaouira',
            'fes sacred music': 'Fes Sacred Music',
            'fes sacred music.': 'Fes Sacred Music.',
            'mawazine': 'Mawazine',
            'timitar': 'Timitar',
            'festival gnaoua': 'Gnaoua Festival',
            'spiritual music': 'Spiritual Music',
            'spiritual music.': 'Spiritual Music.',
            'amazigh culture festival': 'Amazigh Culture Festival',
            'amazigh culture festival.': 'Amazigh Culture Festival.',
            'international music festival': 'International Music Festival',
            'international music festival.': 'International Music Festival.',
            'join us for this amazing cultural experience in morocco.': 'Join us for this amazing cultural experience in Morocco.'
        },
        'es': {
            'janvier': 'Enero', 'février': 'Febrero', 'fevrier': 'Febrero', 'mars': 'Marzo',
            'avril': 'Abril', 'mai': 'Mayo', 'juin': 'Junio',
            'juillet': 'Julio', 'août': 'Agosto', 'aout': 'Agosto', 'septembre': 'Septiembre',
            'octobre': 'Octubre', 'novembre': 'Noviembre', 'décembre': 'Diciembre', 'decembre': 'Diciembre',
            'oct': 'Oct', 'nov': 'Nov', 'dec': 'Dic',
            'arabe': 'Árabe', 'français': 'Francés', 'francais': 'Francés',
            'tashelhit': 'Tashelhit', 'amazigh': 'Amazigh',
            'anglais': 'Inglés', 'espagnol': 'Español',
            'darija': 'Darija', 'berbère': 'Bereber', 'berbere': 'Bereber',
            'cultural': 'Cultural', 'nature': 'Naturaleza', 'historical': 'Histórico', 'religious': 'Religioso',
            'fes': 'Fez', 'marrakech': 'Marrakech', 'casablanca': 'Casablanca', 'agadir': 'Agadir', 'rabat': 'Rabat', 'tangier': 'Tánger', 'tanger': 'Tánger', 'essaouira': 'Esauira',
            'fes sacred music': 'Festival de Músicas Sacras de Fez',
            'fes sacred music.': 'Festival de Músicas Sacras de Fez.',
            'mawazine': 'Mawazine',
            'timitar': 'Timitar',
            'festival gnaoua': 'Festival de Gnaoua',
            'spiritual music': 'Música espiritual',
            'spiritual music.': 'Música espiritual.',
            'amazigh culture festival': 'Festival de cultura amazigh',
            'amazigh culture festival.': 'Festival de cultura amazigh.',
            'international music festival': 'Festival internacional de música',
            'international music festival.': 'Festival internacional de música.',
            'join us for this amazing cultural experience in morocco.': 'Únete a nosotros para esta increíble experiencia cultural en Marruecos.'
        },
        'fr': {
            'january': 'janvier', 'february': 'février', 'march': 'mars',
            'april': 'avril', 'may': 'mai', 'june': 'juin',
            'july': 'juillet', 'august': 'août', 'september': 'septembre',
            'october': 'octobre', 'november': 'novembre', 'december': 'décembre',
            'arabic': 'arabe', 'french': 'français', 'english': 'anglais', 'spanish': 'espagnol',
            'berber': 'berbère',
            'fes': 'Fès', 'marrakech': 'Marrakech', 'casablanca': 'Casablanca', 'agadir': 'Agadir', 'rabat': 'Rabat', 'tangier': 'Tanger', 'tanger': 'Tanger', 'essaouira': 'Essaouira',
            'fes sacred music': 'Festival des Musiques Sacrées',
            'fes sacred music.': 'Festival des Musiques Sacrées.',
            'mawazine': 'Mawazine',
            'timitar': 'Timitar',
            'festival gnaoua': 'Festival Gnaoua',
            'spiritual music': 'Musique spirituelle',
            'spiritual music.': 'Musique spirituelle.',
            'amazigh culture festival': 'Festival de la culture amazighe',
            'amazigh culture festival.': 'Festival de la culture amazighe.',
            'international music festival': 'Festival international de musique',
            'international music festival.': 'Festival international de musique.',
            'join us for this amazing cultural experience in morocco.': 'Rejoignez-nous pour cette incroyable expérience culturelle au Maroc.'
        }
    };

    constructor(private translate: TranslateService) {}

    transform(value: string | undefined | null, fallbackKey?: string): string {
        if (!value && fallbackKey) {
            return this.translate.instant(fallbackKey);
        }
        if (!value) return '';

        const lang = this.translate.currentLang || this.translate.defaultLang || 'en';
        const map = this.translations[lang];
        if (!map) return value;

        // Check if the entire string (lowercased) exists in the map
        const fullMatch = map[value.toLowerCase()];
        if (fullMatch) {
            return fullMatch;
        }

        // Split by common separators, translate each part, rejoin
        return value.replace(/[\wÀ-ÿ-]+/gi, (word) => {
            const lower = word.toLowerCase();
            return map[lower] || word;
        });
    }
}
