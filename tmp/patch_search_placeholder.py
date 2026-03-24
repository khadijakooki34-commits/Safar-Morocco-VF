import json
import os

frontend_i18n = r"c:\Users\dell\IdeaProjects\Safar Morocco VF\PFE_final\frontend\public\assets\i18n"

additions = {
    "en": "Type (City, Desert, Oasis...)",
    "fr": "Type (Ville, Désert, Oasis...)",
    "es": "Tipo (Ciudad, Desierto, Oasis...)",
    "ar": "النوع (مدينة، صحراء، واحة...)"
}

for lang, text in additions.items():
    f_path = os.path.join(frontend_i18n, f'{lang}.json')
    if os.path.exists(f_path):
        with open(f_path, 'r', encoding='utf-8') as f:
            content = json.load(f)
        
        list_node = content.get("DESTINATIONS", {}).get("LIST", {})
        list_node["SEARCH_TYPE_PLACEHOLDER"] = text
        
        if "DESTINATIONS" in content and "LIST" in content["DESTINATIONS"]:
            content["DESTINATIONS"]["LIST"] = list_node
        
        with open(f_path, 'w', encoding='utf-8') as f:
            json.dump(content, f, ensure_ascii=False, indent=4)
            
print("Search placeholder patched successfully.")
