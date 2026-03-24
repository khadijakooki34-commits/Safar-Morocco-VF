import json
import os

frontend_i18n = r"c:\Users\dell\IdeaProjects\Safar Morocco VF\PFE_final\frontend\public\assets\i18n"

additions = {
    "en": {
        "DAYS": { "0": "Sun", "1": "Mon", "2": "Tue", "3": "Wed", "4": "Thu", "5": "Fri", "6": "Sat" },
        "CONDITIONS": { "01": "Clear sky", "02": "Few clouds", "03": "Scattered clouds", "04": "Overcast", "09": "Shower rain", "10": "Rain", "11": "Thunderstorm", "13": "Snow", "50": "Mist" }
    },
    "fr": {
        "DAYS": { "0": "Dim", "1": "Lun", "2": "Mar", "3": "Mer", "4": "Jeu", "5": "Ven", "6": "Sam" },
        "CONDITIONS": { "01": "Ciel dégagé", "02": "Peu nuageux", "03": "Nuageux", "04": "Couvert", "09": "Averses", "10": "Pluie", "11": "Orage", "13": "Neige", "50": "Brouillard" }
    },
    "es": {
        "DAYS": { "0": "Dom", "1": "Lun", "2": "Mar", "3": "Mié", "4": "Jue", "5": "Vie", "6": "Sáb" },
        "CONDITIONS": { "01": "Cielo despejado", "02": "Pocas nubes", "03": "Nubes dispersas", "04": "Nublado", "09": "Aguaceros", "10": "Lluvia", "11": "Tormenta", "13": "Nieve", "50": "Niebla" }
    },
    "ar": {
        "DAYS": { "0": "الأحد", "1": "الإثنين", "2": "الثلاثاء", "3": "الأربعاء", "4": "الخميس", "5": "الجمعة", "6": "السبت" },
        "CONDITIONS": { "01": "سماء صافية", "02": "غيوم متفرقة", "03": "غائم جزئيا", "04": "غائم", "09": "زخات مطر", "10": "مطر", "11": "عاصفة رعدية", "13": "ثلج", "50": "ضباب" }
    }
}

for lang, data in additions.items():
    f_path = os.path.join(frontend_i18n, f'{lang}.json')
    if os.path.exists(f_path):
        with open(f_path, 'r', encoding='utf-8') as f:
            content = json.load(f)
        
        weather_node = content.get("DESTINATIONS", {}).get("DETAIL", {}).get("WEATHER", {})
        weather_node["DAYS"] = data["DAYS"]
        weather_node["CONDITIONS"] = data["CONDITIONS"]
        
        # assign back just to be sure if references are tricky, though dicts update in place
        if "DESTINATIONS" in content and "DETAIL" in content["DESTINATIONS"]:
            content["DESTINATIONS"]["DETAIL"]["WEATHER"] = weather_node
        
        with open(f_path, 'w', encoding='utf-8') as f:
            json.dump(content, f, ensure_ascii=False, indent=4)
            
print("Weather i18n patched successfully.")
