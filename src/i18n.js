import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "rooms": "Our Rooms",
                "about": "Our Story",
                "contact": "Contact",
                "find_stay": "Book Your Room"
            },
            "hero": {
                "badge": "Despacho Exclusive Residency",
                "title": "DISCOVER YOUR",
                "title_italic": "PRIVATE SANCTUARY.",
                "subtitle": "Discover ultimate comfort in our boutique property. A single destination, designed for the visionary.",
                "trust": {
                    "satisfied": "Happy Residents"
                },
                "search": {
                    "destination": "Room Type",
                    "select_city": "Select Your Room",
                    "move_in": "Check In",
                    "guests": "Residents",
                    "lisbon": "Master Suite",
                    "porto": "Garden Loft",
                    "braga": "Heritage Studio"
                }
            },
            "featured": {
                "badge": "Our Curated Spaces",
                "title": "Featured",
                "title_italic": "Living Rooms.",
                "view_all": "View All Rooms",
                "mo": "mo",
                "rooms_data": {
                    "studio": { "title": "Azure Heritage Suite", "location": "Despacho Main Wing", "tags": ["Premium", "Panoramic View"] },
                    "loft": { "title": "Golden Garden Loft", "location": "Despacho West Wing", "tags": ["Quiet", "Private Deck"] },
                    "suite": { "title": "Elite Master Chamber", "location": "Despacho Penthouse", "tags": ["Ultra-Luxury", "Marble Bath"] }
                }
            },
            "services": {
                "badge": "Boutique Amenities",
                "title": "Premium Services",
                "title_italic": "Tailored for you.",
                "ready": "Ready to experience Despacho living at its finest?",
                "book_now": "Book Your Stay at Despacho Now",
                "items": {
                    "concierge": { "title": "House Manager", "desc": "Dedicated on-site support for all your needs from local tips to logistics." },
                    "wifi": { "title": "Gigabit Fiber", "desc": "Stay connected with ultra-high-speed internet in every room." },
                    "breakfast": { "title": "Chef's Breakfast", "desc": "Daily gourmet breakfast served in our communal dining hall." },
                    "luggage": { "title": "Valet Service", "desc": "We handle your arrival and departure with professional care." },
                    "assistance": { "title": "24/7 Security", "desc": "Your safety is paramount. On-site security available every hour." },
                    "access": { "title": "Digital Key", "desc": "Unlock your room and the main gate with secure mobile access." }
                }
            },
            "how_it_works": {
                "badge": "The Despacho Journey",
                "title": "Your Road To",
                "title_italic": "Ultimate Peace.",
                "steps": {
                    "step1": { "badge": "Virtual Tour", "title": "Choose Your Perfect Room", "desc": "Explore our hand-picked collection of rooms within the Despacho estate. Each space is designed for maximum comfort and style." },
                    "step2": { "badge": "Fast Check", "title": "Secure Your Residency", "desc": "Submit your request. We prioritize long-term residents who value community and excellence." },
                    "step3": { "badge": "Welcome Home", "title": "Seamless Move-In", "desc": "Receive your digital credentials and move into your new sanctuary within 24 hours of approval." }
                }
            },
            "testimonials": {
                "badge": "Resident Stories",
                "title": "THE",
                "title_italic": "LIFESTYLE",
                "title_sub": "CHOICE.",
                "global_presence": "Despacho Life",
                "euro_excellence": "Portuguese Heritage",
                "items": {
                    "liza": { "name": "Liza Duarte", "role": "Resident, Suite 1", "text": "Living at Despacho has been a dream. The property is stunning, and the sense of community among residents is something truly special." },
                    "diego": { "name": "Diego Silva", "role": "Resident, Loft A", "text": "Luxury in every detail. My loft at Despacho is my sanctuary. The House Manager ensures everything is perfect every single day." },
                    "ana": { "name": "Ana Martins", "role": "Resident, Studio 4", "text": "The most seamless rental experience I've ever had. Despacho isn't just a place to stay; it's a home that inspires." },
                    "ricardo": { "name": "Ricardo Costa", "role": "Resident, Suite 2", "text": "The architectural beauty of this property is unmatched. It's rare to find a place that balances heritage and modern luxury so well." },
                    "sofia": { "name": "Sofia Gomes", "role": "Resident, Room 5", "text": "Moving into Despacho was the best decision I made. The level of service and the quality of the room are beyond 10/10." }
                }
            },
            "cities": {
                "badge": "Property Highlights",
                "title": "Explore Our",
                "title_italic": "Exclusive Spaces.",
                "explore": "View Details",
                "rooms_count": "Details",
                "types": {
                    "capital": "Social Spaces",
                    "riverside": "Wellness Area",
                    "heritage": "Garden Sanctuary",
                    "sun": "Private Deck"
                }
            },
            "faq": {
                "badge": "Need Help?",
                "title": "Common",
                "title_italic": "Questions.",
                "items": [
                    { "q": "How do I secure a room at Despacho?", "a": "Simply fill out our inquiry form. Our House Manager will contact you for a private viewing and identity verification within 12 hours." },
                    { "q": "Are utilities included in the rent?", "a": "Yes, all our rooms are all-inclusive. This covers water, electricity, high-speed fiber, and weekly professional cleaning." },
                    { "q": "What is the minimum lease term?", "a": "To maintain our community standards, we typically require a minimum stay of 6 months." },
                    { "q": "Can I visit the property before booking?", "a": "Absolutely. We encourage private viewings. You can also request a 4K virtual walkthrough with our manager." }
                ]
            },
            "footer": {
                "desc": "Redefining boutique living at Despacho. A single, elite property offering a community-driven room rental experience.",
                "quick_explore": "Quick Links",
                "support": "Concierge",
                "lets_connect": "Let's Connect",
                "rights": "All Rights Reserved. © 2026 Despacho.",
                "subscribe": {
                    "title": "Inside Despacho",
                    "desc": "Join our newsletter for updates on available rooms and community events.",
                    "placeholder": "Enter your email",
                    "button": "Join"
                },
                "links": {
                    "rooms": "Our Rooms", "about": "Our Story", "cities": "Our Spaces", "services": "Services", "pricing": "Rates",
                    "help": "Resident Portal", "safety": "House Rules", "guide": "Stay Guide", "terms": "Terms", "privacy": "Privacy"
                }
            },
            "benefits": {
                "badge": "Why Despacho",
                "title": "Boutique Living",
                "title_italic": "Perfected.",
                "desc": "We pride ourselves on providing a bespoke experience that prioritizes your privacy, safety, and ultimate comfort within our walls.",
                "button": "House Safety Standards",
                "items": {
                    "verified": { "title": "Bespoke Rooms", "desc": "Every room is uniquely designed and maintained to the highest luxury standards." },
                    "instant": { "title": "Seamless Stay", "desc": "Experience a frictionless move-in process managed by our dedicated team." },
                    "prime": { "title": "Iconic Property", "desc": "A historic estate updated with modern amenities in a prime location." },
                    "support": { "title": "House Manager", "desc": "Personalized 24/7 assistance for all residents of the property." }
                }
            },
            "booking_form": {
                "title": "Join our",
                "title_italic": "community.",
                "labels": {
                    "name": "Your Name",
                    "email": "Your Email",
                    "phone": "Phone Number",
                    "message": "Preferences"
                },
                "placeholders": {
                    "name": "Enter your name...",
                    "email": "Enter your email...",
                    "phone": "Enter your phone...",
                    "message": "Tell us about your ideal stay..."
                },
                "button": "Apply for Residency",
                "info": {
                    "direct": "Property Manager",
                    "connect": "Get in touch",
                    "visit": "Our Location",
                    "residents": "Residents",
                    "rating": "Score",
                    "support": "Personalized Property Support"
                }
            },
            "about_comp": {
                "badge": "Our Heritage",
                "title": "Despacho",
                "title_italic": "Legacy.",
                "desc1": "Despacho was founded on the belief that a home is more than a room; it's a sanctuary for growth. Our historic property stands as a testament to the fusion of heritage and modern vision.",
                "desc2": "We don't just rent rooms; we host a community of visionaries. Every inch of Despacho is curated for those who seek excellence in their daily living and find inspiration in their surroundings.",
                "stats": {
                    "years": "Years of Hosting Exceptional Residents",
                    "properties": "Signature Rooms",
                    "response": "Manager Response"
                }
            },
            "contact": {
                "hero": {
                    "title": "DISCOVER",
                    "title_italic": "DESPACHO.",
                    "subtitle": "Our House Manager is ready to welcome you to the world's most exclusive boutique residency."
                },
                "tiles": {
                    "phone": { "title": "Manager Call", "label": "Direct House Line" },
                    "email": { "title": "Digital Query", "label": "Response: Under 1h" },
                    "office": { "title": "The Property", "label": "Private Entry Only" }
                },
                "specific": {
                    "title": "A UNIQUE",
                    "title_italic": "REQUEST",
                    "title_end": "?",
                    "desc": "Whether you need specific room modifications or long-term arrival arrangements, we are here to accommodate your vision."
                },
                "form": {
                    "title": "Inquire About Residency",
                    "subtitle": "Your application is private. Our manager will contact you to discuss your move-in.",
                    "name": "Full Name",
                    "email": "Email Address",
                    "interest": {
                        "label": "Interested Room",
                        "options": ["Azure Suite", "Garden Loft", "Heritage Studio", "The Master Chamber"]
                    },
                    "message": "Message",
                    "message_placeholder": "Tell us about your stay requirements...",
                    "send": "Send Inquiry"
                },
                "commitment": {
                    "title": "THE",
                    "title_sub": "CARE.",
                    "items": {
                        "response": { "title": "Direct Contact", "desc": "Our manager responds personally to every inquiry." },
                        "privacy": { "title": "Resident Privacy", "desc": "Discretion and privacy are the cornerstones of Despacho." },
                        "virtual": { "title": "Virtual Walkthrough", "desc": "Request a guided 4K video tour of your future room." }
                    }
                }
            },
            "rooms_page": {
                "hero": {
                    "badge": "Despacho Rooms",
                    "title": "YOUR",
                    "title_italic": "SANCTUARY.",
                    "quote": "A curated collection of bespoke living spaces within a single, historic estate. We offer an unparalleled residency experience for the discerning traveler."
                },
                "philosophy": {
                    "badge": "Section I: The Vision",
                    "title": "BEYOND A",
                    "title_italic": "ROOM.",
                    "desc": "At Despacho, we believe your environment determines your focus. Our entire property is a meticulously designed ecosystem. From the natural light filtering through original skylights to the premium artisanal furniture, every room is a sanctuary for growth.",
                    "blue_standard": {
                        "title": "The Despacho Standard",
                        "desc": "Our rooms aren't just checked; they are curated. Every fabric, sound-dampening panel, and light fixture is selected to meet our signature standard of quality and peace."
                    },
                    "bespoke": {
                        "title": "Artisanal Living",
                        "desc": "We reject the mass-market. Each room at Despacho is a unique masterpiece, featuring custom-made pieces that honor the legacy of our property while embracing the future."
                    }
                },
                "experience": {
                    "badge": "Section II: The House",
                    "title": "A SERVICE THAT",
                    "title_italic": "INSPIRE.",
                    "quote": "Living at Despacho means total peace of mind. Our team manages the house so you can manage your future.",
                    "items": {
                        "concierge": { "title": "On-site Manager", "desc": "A dedicated host available for your every need, from maintenance to local discovery." },
                        "security": { "title": "Private Entry", "desc": "State-of-the-art security and absolute privacy for all our residents." },
                        "housekeeping": { "title": "Signature Cleaning", "desc": "Detail-oriented housekeeping services scheduled to your specific preference." }
                    }
                },
                "invitation": {
                    "title": "JOIN THE",
                    "title_italic": "RESIDENCY.",
                    "desc": "Entry into the Despacho community is by inquiry only. Connect with us to discover your perfect room.",
                    "button": "Apply to Join"
                },
                "signature_suite": {
                    "badge": "Section III: Signature Space",
                    "title": "THE MASTER",
                    "title_italic": "EXPERIENCE.",
                    "desc": "A harmonious blend of architectural heritage and avant-garde luxury. The Master Suite at Despacho is not just a room; it's a statement of achievement and refined taste.",
                    "features": [
                        "Panoramic Garden Views",
                        "Hand-Crafted Italian Marble",
                        "Private Library & Studio"
                    ]
                }
            },
            "about_page": {
                "hero": {
                    "title": "OUR HOUSE,",
                    "title_italic": "YOUR STORY.",
                    "est": "EST. 2026 • THE DESPACHO ESTATE"
                },
                "heritage": {
                    "badge": "Our Story",
                    "title": "CURATING",
                    "title_italic": "COMFORT.",
                    "desc": "Despacho was born from the desire to create a sanctuary where heritage and high-end living converge. We transformed this historic property into a boutique residency for those who value both history and innovation.",
                    "quote": "We didn't just build rooms; we built a launchpad for the ambitious.",
                    "stat_label": "Signature Rooms"
                },
                "pillars": {
                    "badge": "Our House Pillars",
                    "title": "WHAT",
                    "title_italic": "DEFINES US.",
                    "items": {
                        "precision": {
                            "title": "Design",
                            "desc": "Every room is a scientific study in comfort and ergonomic luxury.",
                            "stat": "Hand-Picked"
                        },
                        "transparency": {
                            "title": "Integrity",
                            "desc": "Simple, all-inclusive terms. No surprises, just excellence in residency.",
                            "stat": "100% Verified"
                        },
                        "humanity": {
                            "title": "Community",
                            "desc": "We prioritize the resident's well-being and social inspiration.",
                            "stat": "Curated Care"
                        }
                    }
                },
                "team": {
                    "badge": "The Team",
                    "title": "THE HANDS",
                    "title_italic": "ON HOUSE.",
                    "desc": "Our team is a small, dedicated group of hospitality experts and property historians committed to your experience.",
                    "excellence": { "title": "House Heritage", "desc": "Custodians of exceptional living." },
                    "passion": { "title": "Resident Success", "desc": "Committed to your comfort every day." }
                },
                "mission": {
                    "title": "ONE HOUSE,",
                    "title_italic": "YOUR HOME.",
                    "quote": "Our mission is to build a world where anyone can feel at home, anywhere, with zero compromise on luxury.",
                    "button": "Discover Despacho"
                }
            }
        }
    },
    pt: {
        translation: {
            "nav": {
                "home": "Início",
                "rooms": "Os Nossos Quartos",
                "about": "A Nossa História",
                "contact": "Contacto",
                "find_stay": "Reserve o seu Quarto"
            },
            "hero": {
                "badge": "Residência Exclusiva Despacho",
                "title": "DESCUBRA A SUA",
                "title_italic": "SANTUÁRIO PRIVADO.",
                "subtitle": "Descubra o conforto supremo na nossa propriedade boutique. Um destino único, projetado para o visionário.",
                "trust": {
                    "satisfied": "Residentes Felizes"
                },
                "search": {
                    "destination": "Tipo de Quarto",
                    "select_city": "Selecione o seu Quarto",
                    "move_in": "Entrada",
                    "guests": "Residentes",
                    "lisbon": "Master Suite",
                    "porto": "Garden Loft",
                    "braga": "Heritage Studio"
                }
            },
            "featured": {
                "badge": "Os Nossos Espaços Curados",
                "title": "Destaque",
                "title_italic": "Quartos de Assinatura.",
                "view_all": "Ver Todos os Quartos",
                "mo": "mês",
                "rooms_data": {
                    "studio": { "title": "Azure Heritage Suite", "location": "Ala Principal Despacho", "tags": ["Premium", "Vista Panorâmica"] },
                    "loft": { "title": "Golden Garden Loft", "location": "Ala Oeste Despacho", "tags": ["Sossego", "Deck Privado"] },
                    "suite": { "title": "Elite Master Chamber", "location": "Penthouse Despacho", "tags": ["Ultra-Luxo", "Banheira em Mármore"] }
                }
            },
            "services": {
                "badge": "Comodidades Boutique",
                "title": "Serviços Premium",
                "title_italic": "Feito para si.",
                "ready": "Pronto para experimentar a vida no Despacho no seu melhor?",
                "book_now": "Reserve a sua estadia no Despacho agora",
                "items": {
                    "concierge": { "title": "Gestor da Casa", "desc": "Suporte dedicado no local para todas as suas necessidades, desde dicas locais a logística." },
                    "wifi": { "title": "Fibra Gigabit", "desc": "Mantenha-se ligado com internet de ultra-alta velocidade em todos os quartos." },
                    "breakfast": { "title": "Pequeno-almoço do Chef", "desc": "Pequeno-almoço gourmet diário servido no nosso salão de jantar comum." },
                    "luggage": { "title": "Serviço de Valet", "desc": "Tratamos da sua chegada e partida com cuidado profissional." },
                    "assistance": { "title": "Segurança 24/7", "desc": "A sua segurança é primordial. Segurança no local disponível a cada hora." },
                    "access": { "title": "Chave Digital", "desc": "Abra o seu quarto e o portão principal com acesso seguro via telemóvel." }
                }
            },
            "how_it_works": {
                "badge": "A Jornada Despacho",
                "title": "O Seu Caminho Para o",
                "title_italic": "Paz Suprema.",
                "steps": {
                    "step1": { "badge": "Visita Virtual", "title": "Escolha o seu Quarto Perfeito", "desc": "Explore a nossa coleção de quartos dentro da propriedade Despacho. Cada espaço é projetado para o máximo conforto e estilo." },
                    "step2": { "badge": "Verificação Rápida", "title": "Garanta a sua Residência", "desc": "Envie o seu pedido. Priorizamos residentes de longa duração que valorizam a comunidade e a excelência." },
                    "step3": { "badge": "Bem-vindo a Casa", "title": "Entrada Sem Complicações", "desc": "Receba as suas credenciais digitais e entre no seu novo santuário em menos de 24 horas após a aprovação." }
                }
            },
            "testimonials": {
                "badge": "Histórias de Residentes",
                "title": "A",
                "title_italic": "ESTILO DE VIDA",
                "title_sub": "DE ELITE.",
                "global_presence": "Vida no Despacho",
                "euro_excellence": "Herança Portuguesa",
                "items": {
                    "liza": { "name": "Liza Duarte", "role": "Residente, Suite 1", "text": "Viver no Despacho tem sido um sonho. A propriedade é deslumbrante e o sentido de comunidade entre os residentes é algo verdadeiramente especial." },
                    "diego": { "name": "Diego Silva", "role": "Residente, Loft A", "text": "Luxo em cada detalhe. O meu loft no Despacho é o meu santuário. O Gestor da Casa garante que tudo esteja perfeito todos os dias." },
                    "ana": { "name": "Ana Martins", "role": "Residente, Estúdio 4", "text": "A experiência de aluguer mais simples que já tive. O Despacho não é apenas um lugar para ficar; é um lar que inspira." },
                    "ricardo": { "name": "Ricardo Costa", "role": "Residente, Suite 2", "text": "A beleza arquitetónica desta propriedade é inigualável. É raro encontrar um lugar que equilibre tão bem a herança e o luxo moderno." },
                    "sofia": { "name": "Sofia Gomes", "role": "Residente, Quarto 5", "text": "Mudar-me para o Despacho foi a melhor decisão que tomei. O nível de serviço e a qualidade do quarto estão além de 10/10." }
                }
            },
            "cities": {
                "badge": "Destaques da Propriedade",
                "title": "Explore os Nossos",
                "title_italic": "Espaços Exclusivos.",
                "explore": "Ver Detalhes",
                "rooms_count": "Detalhes",
                "types": {
                    "capital": "Espaços Sociais",
                    "riverside": "Área de Bem-estar",
                    "heritage": "Jardim Santuário",
                    "sun": "Deck Privado"
                }
            },
            "faq": {
                "badge": "Precisa de Ajuda?",
                "title": "Questões",
                "title_italic": "Comuns.",
                "items": [
                    { "q": "Como garanto um quarto no Despacho?", "a": "Basta preencher o nosso formulário de consulta. O nosso Gestor da Casa entrará em contacto para uma visita privada e verificação de identidade em menos de 12 horas." },
                    { "q": "As despesas estão incluídas no aluguer?", "a": "Sim, todos os nossos quartos são 'all-inclusive'. Isto cobre água, eletricidade, fibra de alta velocidade e limpeza profissional semanal." },
                    { "q": "Qual é o período mínimo de contrato?", "a": "Para manter os nossos padrões comunitários, normalmente exigimos uma estadia mínima de 6 meses." },
                    { "q": "Posso visitar a propriedade antes de reservar?", "a": "Absolutamente. Incentivamos visitas privadas. Também pode solicitar uma visita virtual guiada em 4K com o nosso gestor." }
                ]
            },
            "footer": {
                "desc": "Redefinindo o conceito de alojamento boutique no Despacho. Uma única propriedade de elite que oferece uma experiência de aluguer de quartos focada na comunidade.",
                "quick_explore": "Links Rápidos",
                "support": "Concierge",
                "lets_connect": "Conectemo-nos",
                "rights": "Todos os Direitos Reservados. © 2026 Despacho.",
                "subscribe": {
                    "title": "Dentro do Despacho",
                    "desc": "Junte-se à nossa newsletter para atualizações sobre quartos disponíveis e eventos da comunidade.",
                    "placeholder": "Introduza o seu e-mail",
                    "button": "Aderir"
                },
                "links": {
                    "rooms": "Os Nossos Quartos", "about": "A Nossa História", "cities": "Espaços", "services": "Serviços", "pricing": "Tarifas",
                    "help": "Portal do Residente", "safety": "Regras da Casa", "guide": "Guia de Estadia", "terms": "Termos", "privacy": "Privacidade"
                }
            },
            "benefits": {
                "badge": "Porquê o Despacho",
                "title": "Vida Boutique",
                "title_italic": "Aperfeiçoada.",
                "desc": "Orgulhamo-nos de oferecer uma experiência personalizada que prioriza a sua privacidade, segurança e conforto final dentro das nossas paredes.",
                "button": "Padrões de Segurança",
                "items": {
                    "verified": { "title": "Quartos Exclusivos", "desc": "Cada quarto é desenhado de forma única e mantido sob os mais altos padrões de luxo." },
                    "instant": { "title": "Estadia Sem Falhas", "desc": "Experimente um processo de entrada fluido gerido pela nossa equipa dedicada." },
                    "prime": { "title": "Propriedade Icónica", "desc": "Um edifício histórico atualizado com comodidades modernas numa localização privilegiada." },
                    "support": { "title": "Gestor da Casa", "desc": "Assistência personalizada 24/7 para todos os residentes da propriedade." }
                }
            },
            "booking_form": {
                "title": "Junte-se à nossa",
                "title_italic": "comunidade.",
                "labels": {
                    "name": "O Seu Nome",
                    "email": "O Seu E-mail",
                    "phone": "Número de Telefone",
                    "message": "Preferências"
                },
                "placeholders": {
                    "name": "Introduza o seu nome...",
                    "email": "Introduza o seu e-mail...",
                    "phone": "Introduza o seu telefone...",
                    "message": "Conte-nos sobre a sua estadia ideal..."
                },
                "button": "Candidatar-se à Residência",
                "info": {
                    "direct": "Gestor da Propriedade",
                    "connect": "Entre em contacto",
                    "visit": "Localização",
                    "residents": "Residentes",
                    "rating": "Pontuação",
                    "support": "Suporte Personalizado da Propriedade"
                }
            },
            "about_comp": {
                "badge": "A Nossa Herança",
                "title": "Despacho",
                "title_italic": "Legado.",
                "desc1": "No Despacho, acreditamos que a sua casa é mais do que um quarto; é um santuário para o crescimento. A nossa propriedade histórica é um testemunho da fusão entre herança e visão moderna.",
                "desc2": "Não alugamos apenas quartos; acolhemos uma comunidade de visionários. Cada centímetro do Despacho é curado para aqueles que procuram a excelência na sua vida quotidiana.",
                "stats": {
                    "years": "Anos a Acolher Residentes Excecionais",
                    "properties": "Quartos de Assinatura",
                    "response": "Resposta do Gestor"
                }
            },
            "contact": {
                "hero": {
                    "title": "DESCUBRA O",
                    "title_italic": "DESPACHO.",
                    "subtitle": "O nosso Gestor da Casa está pronto para lhe dar as boas-vindas à residência boutique mais exclusiva."
                },
                "tiles": {
                    "phone": { "title": "Chamada para o Gestor", "label": "Linha Direta da Casa" },
                    "email": { "title": "Consulta Digital", "label": "Resposta: Menos de 1h" },
                    "office": { "title": "A Propriedade", "label": "Entrada Privada Apenas" }
                },
                "specific": {
                    "title": "UM PEDIDO",
                    "title_italic": "ÚNICO",
                    "title_end": "?",
                    "desc": "Quer necessite de modificações específicas no quarto ou acordos de chegada de longo prazo, estamos aqui para acomodar a sua visão."
                },
                "form": {
                    "title": "Consultar sobre Residência",
                    "subtitle": "A sua candidatura é privada. O nosso gestor entrará em contacto para discutir a sua entrada.",
                    "name": "Nome Completo",
                    "email": "Endereço de E-mail",
                    "interest": {
                        "label": "Quarto de Interesse",
                        "options": ["Azure Suite", "Garden Loft", "Heritage Studio", "The Master Chamber"]
                    },
                    "message": "Mensagem",
                    "message_placeholder": "Conte-nos sobre os seus requisitos de estadia...",
                    "send": "Enviar Consulta"
                },
                "commitment": {
                    "title": "O",
                    "title_sub": "CUIDADO.",
                    "items": {
                        "response": { "title": "Contacto Direto", "desc": "O nosso gestor responde pessoalmente a cada consulta." },
                        "privacy": { "title": "Privacidade do Residente", "desc": "Discrição e privacidade são os pilares do Despacho." },
                        "virtual": { "title": "Visita Virtual", "desc": "Solicite uma visita guiada em 4K do seu futuro quarto." }
                    }
                }
            },
            "rooms_page": {
                "hero": {
                    "badge": "Quartos Despacho",
                    "title": "O SEU",
                    "title_italic": "SANTUÁRIO.",
                    "quote": "Uma coleção curada de espaços de vida dentro de uma única propriedade histórica. Oferecemos uma experiência de residência inigualável para o viajante exigente."
                },
                "philosophy": {
                    "badge": "Secção I: A Visão",
                    "title": "ALÉM DE UM",
                    "title_italic": "QUARTO.",
                    "desc": "No Despacho, acreditamos que o seu ambiente determina o seu foco. Toda a nossa propriedade é um ecossistema meticulosamente desenhado. Da luz natural à mobília artesanal premium, cada quarto é um santuário.",
                    "blue_standard": {
                        "title": "O Padrão Despacho",
                        "desc": "Os nossos quartos não são apenas verificados; são curados. Cada tecido e detalhe é selecionado para cumprir o nosso padrão de assinatura de qualidade e paz."
                    },
                    "bespoke": {
                        "title": "Vida Artesanal",
                        "desc": "Rejeitamos o mercado de massa. Cada quarto no Despacho é uma obra-prima única, com peças feitas à medida que honram o legado da nossa propriedade."
                    }
                },
                "experience": {
                    "badge": "Secção II: A Casa",
                    "title": "SERVIÇO QUE",
                    "title_italic": "INSPIRA.",
                    "quote": "Viver no Despacho significa total paz de espírito. A nossa equipa gere a casa para que possa gerir o seu futuro.",
                    "items": {
                        "concierge": { "title": "Gestor no Local", "desc": "Um anfitrião dedicado disponível para todas as suas necessidades, da manutenção à descoberta local." },
                        "security": { "title": "Entrada Privada", "desc": "Sistemas de segurança de última geração e privacidade absoluta para todos os nossos residentes." },
                        "housekeeping": { "title": "Limpeza de Assinatura", "desc": "Serviços de limpeza orientados ao detalhe, agendados de acordo com a sua preferência." }
                    }
                },
                "invitation": {
                    "title": "ADIRA À",
                    "title_italic": "RESIDÊNCIA.",
                    "desc": "A entrada na comunidade Despacho é feita apenas por consulta. Contacte-nos para descobrir o seu quarto perfeito.",
                    "button": "Candidatar-se"
                },
                "signature_suite": {
                    "badge": "Secção III: Espaço de Assinatura",
                    "title": "A EXPERIÊNCIA",
                    "title_italic": "MASTER.",
                    "desc": "Uma mistura harmoniosa de herança arquitetónica e luxo vanguardista. A Master Suite no Despacho não é apenas um quarto; é uma afirmação de conquista e gosto refinado.",
                    "features": [
                        "Vistas Panorâmicas de Jardim",
                        "Mármore Italiano Feito à Mão",
                        "Biblioteca e Estúdio Privados"
                    ]
                }
            },
            "about_page": {
                "hero": {
                    "title": "A NOSSA CASA,",
                    "title_italic": "A SUA HISTÓRIA.",
                    "est": "EST. 2026 • A PROPRIEDADE DESPACHO"
                },
                "heritage": {
                    "badge": "A Nossa História",
                    "title": "CURANDO O",
                    "title_italic": "CONFORTO.",
                    "desc": "O Despacho nasceu do desejo de criar um santuário onde a herança e a vida de alto nível convergem. Transformámos esta propriedade histórica numa residência boutique para those que valorizam tanto a história como a inovação.",
                    "quote": "Não construímos apenas quartos; construímos uma plataforma para os ambiciosos.",
                    "stat_label": "Quartos de Assinatura"
                },
                "pillars": {
                    "badge": "Pilares da Casa",
                    "title": "O QUE NOS",
                    "title_italic": "DEFINE.",
                    "items": {
                        "precision": {
                            "title": "Design",
                            "desc": "Cada quarto é um estudo científico em conforto e luxo ergonómico.",
                            "stat": "Selecionados"
                        },
                        "transparency": {
                            "title": "Integridade",
                            "desc": "Termos simples e tudo incluído. Sem surpresas, apenas excelência na residência.",
                            "stat": "100% Verificado"
                        },
                        "humanity": {
                            "title": "Comunidade",
                            "desc": "Priorizamos o bem-estar do residente e a inspiração social.",
                            "stat": "Cuidado Curado"
                        }
                    }
                },
                "team": {
                    "badge": "A Equipa",
                    "title": "AS MÃOS",
                    "title_italic": "NA CASA.",
                    "desc": "A nossa equipa é um pequeno grupo dedicado de especialistas em hospitalidade e historiadores de propriedades comprometidos com a sua experiência.",
                    "excellence": { "title": "Herança da Casa", "desc": "Custódios de uma vida excecional." },
                    "passion": { "title": "Sucesso do Residente", "desc": "Comprometidos com o seu conforto todos os dias." }
                },
                "mission": {
                    "title": "UMA CASA,",
                    "title_italic": "O SEU LAR.",
                    "quote": "A nossa missão é construir um mundo onde qualquer pessoa se sinta em casa, em qualquer lugar, sem comprometer o luxo.",
                    "button": "Descobrir o Despacho"
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
