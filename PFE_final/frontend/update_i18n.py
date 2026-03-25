import json
import os

base_dir = r"c:\Users\dell\IdeaProjects\Safar Morocco VF\PFE_final\frontend\public\assets\i18n"

def update_lang(lang_code, translations):
    path = os.path.join(base_dir, f'{lang_code}.json')
    try:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f'Error reading {lang_code}: {e}')
        return
    
    data.update(translations)
    
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f'Updated {lang_code}.json')

en = {
  'help_center': {
    'title': 'Help Center',
    'welcome_title': 'Welcome to the Safar Morocco Help Center',
    'welcome_desc': 'Everything you need to know about using our platform.',
    'navigate_title': 'How to Navigate the Platform',
    'navigate_desc': 'Our platform is designed to be intuitive. Use the navigation bar to explore destinations, find upcoming events, or view your personalized itineraries on the interactive map.',
    'itineraries_title': 'Creating Itineraries',
    'itineraries_desc': 'Go to the "Itineraries" section to start planning your trip. You can add destinations, set dates, and organize your daily activities easily.',
    'events_title': 'Booking Events',
    'events_desc': 'Discover local festivals, workshops, and tours in the "Events" section. Simply select an event and follow the booking process to secure your spot.',
    'reservations_title': 'Managing Reservations',
    'reservations_desc': 'Access your profile to view and manage all your active reservations, past trips, and saved destinations.'
  },
  'terms_of_service': {
    'title': 'Terms of Service',
    'acceptance_title': '1. Acceptance of Terms',
    'acceptance_desc': 'By accessing and using Safar Morocco, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
    'license_title': '2. Use License',
    'license_desc': 'Permission is granted to temporarily download one copy of the materials on Safar Morocco\'s website for personal, non-commercial transitory viewing only.',
    'usage_title': '3. Platform Usage',
    'usage_desc': 'Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their account.',
    'content_title': '4. Content',
    'content_desc': 'Users may post reviews and photos. By doing so, you grant Safar Morocco a non-exclusive, royalty-free license to use, reproduce, and display such content.',
    'modifications_title': '5. Modifications',
    'modifications_desc': 'Safar Morocco may revise these terms of service for its website at any time without notice.'
  },
  'privacy_policy': {
    'title': 'Privacy Policy',
    'collection_title': '1. Information Collection',
    'collection_desc': 'We collect information you provide directly to us, such as when you create an account, make a reservation, or contact us for support.',
    'use_title': '2. Use of Information',
    'use_desc': 'We use the information we collect to provide, maintain, and improve our services, including processing your reservations and sending you travel updates.',
    'handling_title': '3. Data Handling',
    'handling_desc': 'Your reservation details and personal information are handled with strict confidentiality and are only shared with relevant partners (like event organizers) to facilitate your bookings.',
    'reviews_title': '4. Reviews and Ratings',
    'reviews_desc': 'Public reviews and ratings you provide will be visible to other users of the platform to help them make informed travel decisions.',
    'security_title': '5. Security',
    'security_desc': 'We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.'
  }
}

fr = {
  'help_center': {
    'title': 'Centre d\'Aide',
    'welcome_title': 'Bienvenue sur le Centre d\'Aide de Safar Morocco',
    'welcome_desc': 'Tout ce que vous devez savoir sur l\'utilisation de notre plateforme.',
    'navigate_title': 'Comment Naviguer sur la Plateforme',
    'navigate_desc': 'Notre plateforme est conçue pour être intuitive. Utilisez la barre de navigation pour explorer les destinations, trouver les événements à venir ou afficher vos itinéraires personnalisés sur la carte interactive.',
    'itineraries_title': 'Création d\'Itinéraires',
    'itineraries_desc': 'Allez dans la section "Itinéraires" pour commencer à planifier votre voyage. Vous pouvez ajouter des destinations, définir des dates et organiser facilement vos activités quotidiennes.',
    'events_title': 'Réservation d\'Événements',
    'events_desc': 'Découvrez les festivals locaux, les ateliers et les visites dans la section "Événements". Sélectionnez simplement un événement et suivez le processus de réservation pour garantir votre place.',
    'reservations_title': 'Gestion des Réservations',
    'reservations_desc': 'Accédez à votre profil pour voir et gérer toutes vos réservations actives, vos anciens voyages et vos destinations enregistrées.'
  },
  'terms_of_service': {
    'title': 'Conditions d\'Utilisation',
    'acceptance_title': '1. Acceptation des Conditions',
    'acceptance_desc': 'En accédant et en utilisant Safar Morocco, vous acceptez d\'être lié par les présentes Conditions d\'Utilisation et par toutes les lois et réglementations applicables.',
    'license_title': '2. Licence d\'Utilisation',
    'license_desc': 'L\'autorisation est accordée de télécharger temporairement une copie du matériel sur le site Web de Safar Morocco pour une visualisation transitoire personnelle et non commerciale uniquement.',
    'usage_title': '3. Utilisation de la Plateforme',
    'usage_desc': 'Les utilisateurs sont responsables de maintenir la confidentialité de leurs comptes et de toutes les activités qui se produisent sous leur compte.',
    'content_title': '4. Contenu',
    'content_desc': 'Les utilisateurs peuvent publier des avis et des photos. En ce faisant, vous accordez à Safar Morocco une licence non exclusive et libre de droits pour utiliser, reproduire et afficher ce contenu.',
    'modifications_title': '5. Modifications',
    'modifications_desc': 'Safar Morocco peut réviser ces conditions d\'utilisation de son site Web à tout moment sans préavis.'
  },
  'privacy_policy': {
    'title': 'Politique de Confidentialité',
    'collection_title': '1. Collecte des Informations',
    'collection_desc': 'Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, effectuez une réservation ou nous contactez pour obtenir de l\'aide.',
    'use_title': '2. Utilisation des Informations',
    'use_desc': 'Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, y compris le traitement de vos réservations et l\'envoi de mises à jour de voyage.',
    'handling_title': '3. Traitement des Données',
    'handling_desc': 'Les détails de votre réservation et vos informations personnelles sont traités avec la plus stricte confidentialité et ne sont partagés qu\'avec des partenaires pertinents (comme les organisateurs d\'événements) pour faciliter vos réservations.',
    'reviews_title': '4. Avis et Évaluations',
    'reviews_desc': 'Les avis publics et les évaluations que vous fournissez seront visibles par les autres utilisateurs de la plateforme pour les aider à prendre des décisions de voyage éclairées.',
    'security_title': '5. Sécurité',
    'security_desc': 'Nous mettons en œuvre diverses mesures de sécurité pour maintenir la sécurité de vos informations personnelles lorsque vous entrez, soumettez ou accédez à vos informations personnelles.'
  }
}

es = {
  'help_center': {
    'title': 'Centro de Ayuda',
    'welcome_title': 'Bienvenido al Centro de Ayuda de Safar Morocco',
    'welcome_desc': 'Todo lo que necesita saber sobre el uso de nuestra plataforma.',
    'navigate_title': 'Cómo Navegar por la Plataforma',
    'navigate_desc': 'Nuestra plataforma está diseñada para ser intuitiva. Use la barra de navegación para explorar destinos, encontrar próximos eventos o ver sus itinerarios personalizados en el mapa interactivo.',
    'itineraries_title': 'Creación de Itinerarios',
    'itineraries_desc': 'Vaya a la sección "Itinerarios" para comenzar a planificar su viaje. Puede agregar destinos, establecer fechas y organizar sus actividades diarias fácilmente.',
    'events_title': 'Reserva de Eventos',
    'events_desc': 'Descubra festivales locales, talleres y recorridos en la sección "Eventos". Simplemente seleccione un evento y siga el proceso de reserva para asegurar su lugar.',
    'reservations_title': 'Gestión de Reservas',
    'reservations_desc': 'Acceda a su perfil para ver y administrar todas sus reservas activas, viajes anteriores y destinos guardados.'
  },
  'terms_of_service': {
    'title': 'Términos de Servicio',
    'acceptance_title': '1. Aceptación de los Términos',
    'acceptance_desc': 'Al acceder y utilizar Safar Morocco, acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables.',
    'license_title': '2. Licencia de Uso',
    'license_desc': 'Se otorga permiso para descargar temporalmente una copia de los materiales en el sitio web de Safar Morocco únicamente para visualización transitoria personal y no comercial.',
    'usage_title': '3. Uso de la Plataforma',
    'usage_desc': 'Los usuarios son responsables de mantener la confidencialidad de sus cuentas y de todas las actividades que ocurran bajo su cuenta.',
    'content_title': '4. Contenido',
    'content_desc': 'Los usuarios pueden publicar reseñas y fotos. Al hacerlo, otorga a Safar Morocco una licencia no exclusiva y libre de regalías para usar, reproducir y mostrar dicho contenido.',
    'modifications_title': '5. Modificaciones',
    'modifications_desc': 'Safar Morocco puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso.'
  },
  'privacy_policy': {
    'title': 'Política de Privacidad',
    'collection_title': '1. Recopilación de Información',
    'collection_desc': 'Recopilamos la información que nos proporciona directamente, como cuando crea una cuenta, hace una reserva o se comunica con nosotros para obtener asistencia.',
    'use_title': '2. Uso de la Información',
    'use_desc': 'Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, incluido el procesamiento de sus reservas y el envío de actualizaciones de viaje.',
    'handling_title': '3. Manejo de Datos',
    'handling_desc': 'Los detalles de su reserva y la información personal se manejan con estricta confidencialidad y solo se comparten con socios relevantes (como los organizadores de eventos) para facilitar sus reservas.',
    'reviews_title': '4. Reseñas y Calificaciones',
    'reviews_desc': 'Las reseñas y calificaciones públicas que proporcione serán visibles para otros usuarios de la plataforma para ayudarlos a tomar decisiones de viaje informadas.',
    'security_title': '5. Seguridad',
    'security_desc': 'Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal cuando ingresa, envía o accede a su información personal.'
  }
}

ar = {
  'help_center': {
    'title': 'مركز المساعدة',
    'welcome_title': 'مرحبًا بك في مركز مساعدة سفر المغرب',
    'welcome_desc': 'كل ما تحتاج لمعرفته حول استخدام منصتنا.',
    'navigate_title': 'كيفية تصفح المنصة',
    'navigate_desc': 'تم تصميم منصتنا لتكون بديهية. استخدم شريط التنقل لاستكشاف الوجهات، أو العثور على الأحداث القادمة، أو عرض مسارات رحلاتك المخصصة على الخريطة التفاعلية.',
    'itineraries_title': 'إنشاء مسارات الرحلات',
    'itineraries_desc': 'الجأ إلى قسم "مسارات الرحلات" لبدء التخطيط لرحلتك. يمكنك إضافة الوجهات، وتحديد التواريخ، وتنظيم أنشطتك اليومية بسهولة.',
    'events_title': 'حجز الأحداث',
    'events_desc': 'اكتشف المهرجانات المحلية، وورش العمل، والجولات في قسم "الأحداث". ما عليك سوى اختيار حدث واتباع عملية الحجز لتأمين مكانك.',
    'reservations_title': 'إدارة الحجوزات',
    'reservations_desc': 'ادخل إلى ملفك الشخصي لعرض وإدارة جميع حجوزاتك النشطة، والرحلات السابقة، والوجهات المحفوظة.'
  },
  'terms_of_service': {
    'title': 'شروط الخدمة',
    'acceptance_title': '1. قبول الشروط',
    'acceptance_desc': 'من خلال الوصول إلى واستخدام سفر المغرب، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها.',
    'license_title': '2. ترخيص الاستخدام',
    'license_desc': 'يُمنح الإذن لتنزيل نسخة واحدة من المواد الموجودة على موقع الويب الخاص بسفر المغرب مؤقتًا للعرض الشخصي وغير التجاري العابر فقط.',
    'usage_title': '3. استخدام المنصة',
    'usage_desc': 'المستخدمون مسؤولون عن الحفاظ على سرية حساباتهم وعن جميع الأنشطة التي تحدث تحت حسابهم.',
    'content_title': '4. المحتوى',
    'content_desc': 'يجوز للمستخدمين نشر المراجعات والصور. وبذلك، فإنك تمنح سفر المغرب ترخيصًا غير حصري وخاليًا من حقوق الملكية لاستخدام هذا المحتوى وإعادة إنتاجه وعرضه.',
    'modifications_title': '5. التعديلات',
    'modifications_desc': 'قد يقوم سفر المغرب بمراجعة شروط الخدمة هذه لموقع الويب الخاص به في أي وقت دون إشعار مسبق.'
  },
  'privacy_policy': {
    'title': 'سياسة الخصوصية',
    'collection_title': '1. جمع المعلومات',
    'collection_desc': 'نقوم بجمع المعلومات التي تقدمها لنا مباشرة، كما هو الحال عند إنشاء حساب، أو إجراء حجز، أو الاتصال بنا للحصول على الدعم.',
    'use_title': '2. استخدام المعلومات',
    'use_desc': 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا والحفاظ عليها وتحسينها، بما في ذلك معالجة حجوزاتك وإرسال تحديثات السفر إليك.',
    'handling_title': '3. التعامل مع البيانات',
    'handling_desc': 'يتم التعامل مع تفاصيل الحجز والمعلومات الشخصية الخاصة بك بسرية تامة ولا تتم مشاركتها إلا مع الشركاء المعنيين (مثل منظمي الأحداث) لتسهيل حجوزاتك.',
    'reviews_title': '4. المراجعات والتقييمات',
    'reviews_desc': 'ستكون المراجعات والتقييمات العامة التي تقدمها مرئية لمستخدمي المنصة الآخرين لمساعدتهم في اتخاذ قرارات سفر مستنيرة.',
    'security_title': '5. الأمان',
    'security_desc': 'نقوم بتنفيذ مجموعة متنوعة من إجراءات الأمان للحفاظ على سلامة معلوماتك الشخصية عند إدخالك أو تقديمك أو وصولك إلى معلوماتك الشخصية.'
  }
}

update_lang('en', en)
update_lang('fr', fr)
update_lang('es', es)
update_lang('ar', ar)
