import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateValuePipe } from './translate-value.pipe';

@Pipe({
    name: 'offerTranslate',
    standalone: false,
    pure: false
})
export class OfferTranslatePipe implements PipeTransform {
    
    // Exact static matches
    private statics: any = {
        'Fine dining experience featuring traditional Moroccan gastronomy.': {
            en: 'Fine dining experience featuring traditional Moroccan gastronomy.',
            fr: 'Expérience gastronomique raffinée mettant en valeur la gastronomie marocaine traditionnelle.',
            es: 'Experiencia gastronómica que ofrece gastronomía tradicional marroquí.',
            ar: 'تجربة طعام راقية تتميز بفن الطهو المغربي التقليدي.'
        },
        'Casual dining with fresh local ingredients and modern twist.': {
            en: 'Casual dining with fresh local ingredients and modern twist.',
            fr: 'Dîner décontracté avec des ingrédients locaux frais et une touche moderne.',
            es: 'Comida informal con ingredientes locales frescos y un toque moderno.',
            ar: 'طعام غير رسمي بمكونات محلية طازجة ولمسة عصرية.'
        },
        'Private guided tour sharing the deepest secrets of this city.': {
            en: 'Private guided tour sharing the deepest secrets of this city.',
            fr: 'Visite guidée privée partageant les secrets les plus profonds de cette ville.',
            es: 'Visita guiada privada que comparte los secretos más profundos de esta ciudad.',
            ar: 'جولة إرشادية خاصة تشارك أعمق أسرار هذه المدينة.'
        },
        'Exciting evening exploration and landscape photography.': {
            en: 'Exciting evening exploration and landscape photography.',
            fr: 'Exploration nocturne passionnante et photographie de paysage.',
            es: 'Emocionante exploración nocturna y fotografía de paisajes.',
            ar: 'استكشاف مسائي مثير وتصوير للمناظر الطبيعية.'
        },
        // Tags
        'Signature Suite': {
            en: 'Signature Suite', fr: 'Suite Signature', es: 'Suite Exclusiva', ar: 'جناح مميز'
        },
        'Patio Room': {
            en: 'Patio Room', fr: 'Chambre Patio', es: 'Habitación con Patio', ar: 'غرفة فناء'
        },
        'Moroccan Haute Cuisine': {
            en: 'Moroccan Haute Cuisine', fr: 'Haute Cuisine Marocaine', es: 'Alta Cocina Marroquí', ar: 'المطبخ المغربي الراقي'
        },
        'Mediterranean & Grill': {
            en: 'Mediterranean & Grill', fr: 'Méditerranéen & Grillades', es: 'Mediterráneo y Parrilla', ar: 'مأكولات بحرية ومشويات'
        },
        '4 hours': {
            en: '4 hours', fr: '4 heures', es: '4 horas', ar: '٤ ساعات'
        },
        'Private Cultural Tour': {
            en: 'Private Cultural Tour', fr: 'Visite Culturelle Privée', es: 'Tour Cultural Privado', ar: 'جولة ثقافية خاصة'
        },
        'Half Day': {
            en: 'Half Day', fr: 'Demi-journée', es: 'Medio Día', ar: 'نصف يوم'
        },
        'Outdoor Adventure': {
            en: 'Outdoor Adventure', fr: 'Aventure en Plein Air', es: 'Aventura al Aire Libre', ar: 'مغامرة في الهواء الطلق'
        },
        'MAD': {
            en: 'MAD', fr: 'MAD', es: 'MAD', ar: 'درهم'
        }
    };

    // Regex templates
    private templates: any = {
        en: [
            { regex: /(.+) Royal Resort/i, replace: "$1 Royal Resort" },
            { regex: /Premium luxury stay with panoramic views of (.+)/i, replace: "Premium luxury stay with panoramic views of $1" },
            { regex: /Riad (.+) Authentique/i, replace: "Authentic Riad $1" },
            { regex: /Traditional boutique Riad experience in (.+)/i, replace: "Traditional boutique Riad experience in $1" },
            { regex: /Le Palais de (.+)/i, replace: "The Palace of $1" },
            { regex: /(.+) Ocean Grill/i, replace: "$1 Ocean Grill" },
            { regex: /Premium Guided Discovery: (.+)/i, replace: "Premium Guided Discovery: $1" },
            { regex: /(.+) Sunset Adventure/i, replace: "$1 Sunset Adventure" }
        ],
        fr: [
            { regex: /(.+) Royal Resort/i, replace: "Complexe Royal $1" },
            { regex: /Premium luxury stay with panoramic views of (.+)/i, replace: "Séjour de luxe avec vue panoramique sur $1" },
            { regex: /Riad (.+) Authentique/i, replace: "Riad $1 Authentique" },
            { regex: /Traditional boutique Riad experience in (.+)/i, replace: "Expérience traditionnelle de Riad boutique à $1" },
            { regex: /Le Palais de (.+)/i, replace: "Le Palais de $1" },
            { regex: /(.+) Ocean Grill/i, replace: "$1 Grill Océan" },
            { regex: /Premium Guided Discovery: (.+)/i, replace: "Découverte Guidée Premium : $1" },
            { regex: /(.+) Sunset Adventure/i, replace: "Aventure au Coucher du Soleil à $1" }
        ],
        es: [
            { regex: /(.+) Royal Resort/i, replace: "Resort Real $1" },
            { regex: /Premium luxury stay with panoramic views of (.+)/i, replace: "Estadía de lujo con vistas panorámicas de $1" },
            { regex: /Riad (.+) Authentique/i, replace: "Riad $1 Auténtico" },
            { regex: /Traditional boutique Riad experience in (.+)/i, replace: "Experiencia de Riad boutique tradicional en $1" },
            { regex: /Le Palais de (.+)/i, replace: "El Palacio de $1" },
            { regex: /(.+) Ocean Grill/i, replace: "$1 Parrilla de Océano" },
            { regex: /Premium Guided Discovery: (.+)/i, replace: "Descubrimiento Guiado Premium: $1" },
            { regex: /(.+) Sunset Adventure/i, replace: "Aventura al Atardecer en $1" }
        ],
        ar: [
            { regex: /(.+) Royal Resort/i, replace: "منتجع $1 الملكي" },
            { regex: /Premium luxury stay with panoramic views of (.+)/i, replace: "إقامة فاخرة متميزة مع إطلالات بانورامية على $1" },
            { regex: /Riad (.+) Authentique/i, replace: "رياض $1 الأصيل" },
            { regex: /Traditional boutique Riad experience in (.+)/i, replace: "تجربة رياض تقليدية في $1" },
            { regex: /Le Palais de (.+)/i, replace: "قصر $1" },
            { regex: /(.+) Ocean Grill/i, replace: "مشويات محيط $1" },
            { regex: /Premium Guided Discovery: (.+)/i, replace: "اكتشاف موجه بامتياز: $1" },
            { regex: /(.+) Sunset Adventure/i, replace: "مغامرة غروب الشمس في $1" }
        ]
    };

    constructor(
        private translate: TranslateService,
        private valueTranslate: TranslateValuePipe
    ) {}

    transform(value: string | undefined): string {
        if (!value) return '';

        const lang = this.translate.currentLang || this.translate.defaultLang || 'en';

        // 1. Check exact matches
        if (this.statics[value]) {
            return this.statics[value][lang] || value;
        }

        // 2. Check regex templates
        const langTemplates = this.templates[lang] || this.templates['en'];
        for (const tmpl of langTemplates) {
            const match = value.match(tmpl.regex);
            if (match && match[1]) {
                // translate the captured destination name
                const translatedDestName = this.valueTranslate.transform(match[1]);
                return tmpl.replace.replace("$1", translatedDestName);
            }
        }

        return value;
    }
}
