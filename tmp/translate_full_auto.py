import json
import os
from deep_translator import GoogleTranslator

frontend_i18n = r"c:\Users\dell\IdeaProjects\Safar Morocco VF\PFE_final\frontend\public\assets\i18n"
fr_path = os.path.join(frontend_i18n, 'fr.json')

with open(fr_path, 'r', encoding='utf-8') as f:
    fr_data = json.load(f)

descriptions_fr = fr_data["DESTINATIONS"]["DESCRIPTION"]

def translate_dict(d, target_lang):
    translated = {}
    translator = GoogleTranslator(source='fr', target=target_lang)
    for k, v in d.items():
        print(f"Translating {k} to {target_lang}...")
        try:
            translated[k] = translator.translate(v)
        except Exception as e:
            print(f"Error on {k}: {e}")
            translated[k] = v
    return translated

en_dict = translate_dict(descriptions_fr, 'en')
es_dict = translate_dict(descriptions_fr, 'es')
ar_dict = translate_dict(descriptions_fr, 'ar')

def update_json(lang_code, new_descriptions):
    f_path = os.path.join(frontend_i18n, f'{lang_code}.json')
    if not os.path.exists(f_path):
        return
    with open(f_path, 'r', encoding='utf-8') as f:
        content = json.load(f)
    if "DESTINATIONS" not in content:
        content["DESTINATIONS"] = {}
    content["DESTINATIONS"]["DESCRIPTION"] = new_descriptions
    with open(f_path, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=4)
        
update_json('en', en_dict)
update_json('es', es_dict)
update_json('ar', ar_dict)
print("Translations updated successfully.")
