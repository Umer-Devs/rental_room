import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "rooms": "Rooms",
                "about": "About Us",
                "contact": "Contact",
                "find_stay": "Find Your Stay"
            },
            "hero": {
                "badge": "Europe Premium Rentals",
                "title": "DISCOVER YOUR",
                "title_italic": "ELITE HOME.",
                "subtitle": "Curated residencies across Portugal's most iconic destinations. Designed for the global visionary.",
                "trust": {
                    "satisfied": "Satisfied Residents"
                },
                "search": {
                    "destination": "Destination",
                    "select_city": "Select Room",
                    "move_in": "Move In",
                    "guests": "Guests",
                    "lisbon": "Lisbon",
                    "porto": "Porto",
                    "braga": "Braga"
                }
            },
            "featured": {
                "badge": "Curated Selection",
                "title": "Featured",
                "title_italic": "Living Spaces.",
                "view_all": "View All Listings",
                "mo": "mo",
                "rooms_data": {
                    "studio": { "title": "Alfama View Studio", "location": "Lisbon, Portugal", "tags": ["Premium", "Near Metro"] },
                    "loft": { "title": "Ribeira River Loft", "location": "Porto, Portugal", "tags": ["Historic", "Riverside"] },
                    "suite": { "title": "Braga Heritage Suite", "location": "Braga, Portugal", "tags": ["Quiet", "Academic"] }
                }
            },
            "services": {
                "badge": "Luxury Amenities",
                "title": "Premium Services",
                "title_italic": "Just for you.",
                "ready": "Ready to experience Portugal living at its finest?",
                "book_now": "Book Your Stay in Portugal Now",
                "items": {
                    "concierge": { "title": "Personal Concierge", "desc": "Dedicated support for all your needs from local tips to logistics." },
                    "wifi": { "title": "Ultra-Fast Fiber", "desc": "Stay connected with high-speed internet in every premium room." },
                    "breakfast": { "title": "Daily Breakfast", "desc": "Optional gourmet breakfast delivered directly to your doorstep." },
                    "luggage": { "title": "Storage Solutions", "desc": "Moving between cities? We provide secure luggage storage for free." },
                    "assistance": { "title": "24/7 Assistance", "desc": "Never left alone. Emergency support available every single hour." },
                    "access": { "title": "Smart Access", "desc": "Unlock your world with secure mobile-based digital key entry." }
                }
            },
            "how_it_works": {
                "badge": "The Elite Journey",
                "title": "Your Road To",
                "title_italic": "Ultimate Comfort.",
                "steps": {
                    "step1": { "badge": "AI-Curated", "title": "Explore Premium Listings", "desc": "Discover hand-picked, luxury accommodations across Portugal. Our AI-driven engine matches your elite preferences with precision." },
                    "step2": { "badge": "Instant Verification", "title": "Secure Digital Booking", "desc": "Skip the bureaucracy. Submit your identity and secure your stay through our exclusive, high-end verification console." },
                    "step3": { "badge": "Concierge Entry", "title": "Seamless Move-In", "desc": "Receive your digital keys and welcome package. Step into your new home within 24 hours of approval." }
                }
            },
            "testimonials": {
                "badge": "Verified Testimonials",
                "title": "THE",
                "title_italic": "ELITE",
                "title_sub": "CHOICE.",
                "global_presence": "Global Presence",
                "euro_excellence": "European Excellence",
                "items": {
                    "liza": { "name": "Liza Duarte", "role": "Student, Lisbon", "text": "Finding a room in Lisbon was stressing me out until I found EuroRent. The verification process gave me peace of mind, and the support was exceptional." },
                    "diego": { "name": "Diego Silva", "role": "Scholar, Porto", "text": "Luxury is an understatement. My studio in Ribeira is everything I dreamed of. EuroRent truly redefines living for international students in Portugal." },
                    "ana": { "name": "Ana Martins", "role": "Researcher, Coimbra", "text": "Seamless booking, elite properties, and transparent pricing. I've moved between Lisbon and Coimbra with EuroRent effortlessly." },
                    "ricardo": { "name": "Ricardo Costa", "role": "Architect, Braga", "text": "The selection of properties is unparalleled. It's rare to find such high-fidelity listings that actually match the real-world experience." },
                    "sofia": { "name": "Sofia Gomes", "role": "Erasmus, Algarve", "text": "Coming to Portugal for Erasmus was scary, but EuroRent made my housing search the easiest part of my whole move. 10/10 service!" }
                }
            },
            "cities": {
                "badge": "Portugal Destinations",
                "title": "Explore Portugal's",
                "title_italic": "Most Iconic Spots.",
                "explore": "Explore Stays",
                "rooms_count": "Rooms",
                "types": {
                    "capital": "Capital Living",
                    "riverside": "Riverside Charm",
                    "heritage": "Heritage & Art",
                    "sun": "Sun & Relax"
                }
            },
            "faq": {
                "badge": "Need Help?",
                "title": "Common",
                "title_italic": "Questions.",
                "items": [
                    { "q": "How do I verify my student status?", "a": "You can upload your university acceptance letter or student ID directly through our booking portal. Verification usually takes less than 12 hours." },
                    { "q": "Is there a minimum stay requirement?", "a": "Most of our premium stays have a minimum requirement of 3 months to ensure a stable and high-quality community environment." },
                    { "q": "What is included in the monthly price?", "a": "The price is all-inclusive: utility bills, high-speed fiber internet, weekly professional cleaning, and 24/7 concierge support." },
                    { "q": "Can I move between different Portugal cities?", "a": "Yes! Our 'PortugalPass' program allows you to move between our properties in different cities with a simple 30-day notice." }
                ]
            },
            "footer": {
                "desc": "Redefining Portuguese living for the modern explorer. Premium, verified, and community-driven room rentals.",
                "quick_explore": "Quick Explore",
                "support": "Support",
                "lets_connect": "Let's Connect",
                "rights": "All Rights Reserved.",
                "subscribe": {
                    "title": "Stay Updated",
                    "desc": "Join our elite newsletter for exclusive property releases and Portugal living guides.",
                    "placeholder": "Enter your email",
                    "button": "Subscribe"
                },
                "links": {
                    "rooms": "Rooms", "about": "About Us", "cities": "Cities", "services": "Services", "pricing": "Pricing",
                    "help": "Help Center", "safety": "Safety & Security", "guide": "Booking Guide", "terms": "Terms of Service", "privacy": "Privacy Policy"
                }
            },
            "benefits": {
                "badge": "Why EuroRent",
                "title": "Luxury Living",
                "title_italic": "Made Simple.",
                "desc": "We pride ourselves on providing a seamless experience that prioritizes your comfort, safety, and ultimate satisfaction across Portugal.",
                "button": "Learn More About Safety",
                "items": {
                    "verified": { "title": "Verified Housing", "desc": "Every room undergoes a rigorous 50-point inspection before listing." },
                    "instant": { "title": "Instant Booking", "desc": "Secure your room in minutes with our elite high-speed booking engine." },
                    "prime": { "title": "Prime Locations", "desc": "Strategic properties located within minutes of city landmarks." },
                    "support": { "title": "Student Support", "desc": "Dedicated 24/7 concierge for international student assistance." }
                }
            },
            "booking_form": {
                "title": "Say",
                "title_italic": "hello!",
                "labels": {
                    "name": "Your Name",
                    "email": "Your Email",
                    "phone": "Phone Number",
                    "message": "Message"
                },
                "placeholders": {
                    "name": "Enter your name here...",
                    "email": "Enter your email here...",
                    "phone": "Enter your phone number here...",
                    "message": "Enter your message"
                },
                "button": "Send Your Message",
                "info": {
                    "direct": "Direct Channel",
                    "connect": "Connect with us",
                    "visit": "Visit Our HQ",
                    "residents": "Residents",
                    "rating": "Rating",
                    "support": "24/7 Global Support Available"
                }
            },
            "about_comp": {
                "badge": "Our Story",
                "title": "Room Rental",
                "title_italic": "Redefined.",
                "desc1": "At EuroRent Portugal, we believe that your home is the foundation of your journey. Founded in the heart of Lisbon, our mission has always been to simplify the complexities of Portuguese room rentals.",
                "desc2": "We don't just list rooms; we curate experiences. Each property in our portfolio is meticulously verified for safety, luxury, and proximity to local culture, ensuring that you can focus on what truly matters—your growth and discovery in Portugal.",
                "stats": {
                    "years": "Years of Curating Perfect Stays in Portugal",
                    "properties": "Premium Properties",
                    "response": "Concierge Response"
                }
            },
            "contact": {
                "hero": {
                    "title": "CONNECT WITH",
                    "title_italic": "EXCELLENCE.",
                    "subtitle": "Our dedicated consultants are standing by to guide your journey into the world's most exclusive residencies."
                },
                "tiles": {
                    "phone": { "title": "Direct Line", "label": "24/7 Elite Support" },
                    "email": { "title": "Digital Inquiry", "label": "Average Response: 15m" },
                    "office": { "title": "Privé Office", "label": "By Appointment Only" }
                },
                "specific": {
                    "title": "HAVE A",
                    "title_italic": "SPECIFIC",
                    "title_end": "REQUEST?",
                    "desc": "Whether you're looking for a corporate relocation or a private sanctuary, our team is equipped to handle the most complex requirements."
                },
                "form": {
                    "title": "Request a Consultation",
                    "subtitle": "Your privacy is our priority. A consultant will reach out via your preferred method.",
                    "name": "Full Name",
                    "email": "Email Address",
                    "interest": {
                        "label": "Interested In",
                        "options": ["Bespoke Penthouse", "Executive Suite", "Artisan Studio", "Corporate Housing"]
                    },
                    "message": "Message",
                    "message_placeholder": "Describe your perfect residency...",
                    "send": "Send Private Inquiry"
                },
                "commitment": {
                    "title": "THE",
                    "title_sub": "COMMITMENT.",
                    "items": {
                        "response": { "title": "Guaranteed Response", "desc": "Consultants respond within 2 hours during business sets." },
                        "privacy": { "title": "Privacy First", "desc": "Your data is encrypted and never shared with third parties." },
                        "virtual": { "title": "Virtual Viewings", "desc": "Request a guided 4K walkthrough via encrypted video link." }
                    }
                }
            },
            "rooms_page": {
                "hero": {
                    "badge": "The Elite Residency",
                    "title": "LIVING",
                    "title_italic": "REDEFINED.",
                    "quote": "A collection of bespoke living spaces where heritage meets modern luxury. We don't just provide rooms; we curate experiences for the world's most discerning residents."
                },
                "philosophy": {
                    "badge": "Section I: The Philosophy",
                    "title": "BEYOND THE",
                    "title_italic": "ORDINARY.",
                    "desc": "At EuroRent, our philosophy is rooted in the belief that your environment shapes your future. Every residence in our exclusive Portugal portfolio is hand-selected not just for its architectural beauty, but for its spirit and soul. We focus on natural light, premium materials, and intentional design to create a sanctuary for growth and inspiration.",
                    "blue_standard": {
                        "title": "The Blue Standard",
                        "desc": "Our properties are evaluated against a 200-point integrity check. From the acoustics of the living room to the quality of the marble in the suite, every detail is scrutinized to ensure it meets the EuroRent signature standard."
                    },
                    "bespoke": {
                        "title": "Bespoke Curation",
                        "desc": "We do not offer mass-market inventory. Each room is a unique masterpiece, furnished with custom-designed pieces and world-class technology, reflecting the pinnacle of Portuguese craftsmanship."
                    }
                },
                "experience": {
                    "badge": "Section II: The Experience",
                    "title": "A SERVICE THAT",
                    "title_italic": "NEVER SLEEPS.",
                    "quote": "Living with us means entering a world of effortless luxury. Our dedicated concierge team handles the complexities of relocation, so you can focus on making your mark on history.",
                    "items": {
                        "concierge": { "title": "24/7 Concierge", "desc": "Private assistants available for any request, from travel to home maintenance." },
                        "security": { "title": "Secured Access", "desc": "State-of-the-art security systems and private entry protocols for all residences." },
                        "housekeeping": { "title": "Elite Housekeeping", "desc": "Professional cleaning and linens management, scheduled to your lifestyle." }
                    }
                },
                "invitation": {
                    "title": "JOIN THE",
                    "title_italic": "INNER CIRCLE.",
                    "desc": "Entry into our private portfolio is by inquiry only. We invite you to connect with our consultants and discover a residence that perfectly aligns with your journey.",
                    "button": "Request Private View"
                }
            },
            "about_page": {
                "hero": {
                    "title": "THE FUTURE OF",
                    "title_italic": "RESIDENCY.",
                    "est": "EST. 2026 • PORTUGAL GLOBAL HUB"
                },
                "heritage": {
                    "badge": "Since Our Inception",
                    "title": "CRAFTING",
                    "title_italic": "LEGACIES.",
                    "desc": "EuroRent was born from a singular vision: to bridge the gap between high-end hospitality and long-term residency. We realized that for the global elite, a \"room\" is more than just four walls—it is a launchpad for innovation and a sanctuary for restoration.",
                    "quote": "We don't just find you a space; we find you a home that understands your ambition.",
                    "stat_label": "Prime Cities"
                },
                "pillars": {
                    "badge": "Our Core Pillars",
                    "title": "WHAT WE",
                    "title_italic": "STAND FOR.",
                    "items": {
                        "precision": {
                            "title": "Precision",
                            "desc": "Every residence is evaluated with scientific rigor to ensure peak performance.",
                            "stat": "200+ Point Check"
                        },
                        "transparency": {
                            "title": "Transparency",
                            "desc": "No hidden fees. No surprises. Just clear, elite-level service agreements.",
                            "stat": "100% Verified"
                        },
                        "humanity": {
                            "title": "Humanity",
                            "desc": "We prioritize the resident's mental and physical well-being above all else.",
                            "stat": "Global Care"
                        }
                    }
                },
                "team": {
                    "badge": "Our Leadership",
                    "title": "THE BRAINS",
                    "title_italic": "BEHIND IT.",
                    "desc": "Our team comprises award-winning architects, hospitality veterans, and real estate visionaries. We are united by a common goal: to rewrite the rules of modern living.",
                    "excellence": { "title": "Curated Excellence", "desc": "Winner of Portugal Real Estate 2025" },
                    "passion": { "title": "Passion Driven", "desc": "Deeply committed to resident success." }
                },
                "mission": {
                    "title": "ONE VISION,",
                    "title_italic": "INFINITE STAYS.",
                    "quote": "Our mission is to build a world where anyone can feel at home, anywhere, with zero compromise on luxury.",
                    "button": "Learn More About Us"
                }
            }
        }
    },
    pt: {
        translation: {
            "nav": {
                "home": "Início",
                "rooms": "Quartos",
                "about": "Sobre Nós",
                "contact": "Contacto",
                "find_stay": "Encontre a sua estadia"
            },
            "hero": {
                "badge": "Alugueres Premium na Europa",
                "title": "DESCUBRA A SUA",
                "title_italic": "CASA DE ELITE.",
                "subtitle": "Residências selecionadas nos destinos mais icónicos de Portugal. Projetadas para o visionário global.",
                "trust": {
                    "satisfied": "Residentes Satisfeitos"
                },
                "search": {
                    "destination": "Destino",
                    "select_city": "Selecionar Cidade",
                    "move_in": "Entrada",
                    "guests": "Hóspedes",
                    "lisbon": "Lisboa",
                    "porto": "Porto",
                    "braga": "Braga"
                }
            },
            "featured": {
                "badge": "Seleção Curada",
                "title": "Destaque",
                "title_italic": "Espaços de Vida.",
                "view_all": "Ver Todas as Listas",
                "mo": "mês",
                "rooms_data": {
                    "studio": { "title": "Estúdio com Vista Alfama", "location": "Lisboa, Portugal", "tags": ["Premium", "Perto do Metro"] },
                    "loft": { "title": "Loft Ribeira Rio", "location": "Porto, Portugal", "tags": ["Histórico", "Beira-rio"] },
                    "suite": { "title": "Suite Heritage Braga", "location": "Braga, Portugal", "tags": ["Sossego", "Académico"] }
                }
            },
            "services": {
                "badge": "Comodidades de Luxo",
                "title": "Serviços Premium",
                "title_italic": "Só para si.",
                "ready": "Pronto para experimentar o melhor de Portugal?",
                "book_now": "Reserve a sua estadia em Portugal agora",
                "items": {
                    "concierge": { "title": "Concierge Pessoal", "desc": "Suporte dedicado para todas as suas necessidades, desde dicas locais a logística." },
                    "wifi": { "title": "Fibra Ultra-Rápida", "desc": "Mantenha-se ligado com internet de alta velocidade em todos os quartos premium." },
                    "breakfast": { "title": "Pequeno-almoço Diário", "desc": "Pequeno-almoço gourmet opcional entregue diretamente à sua porta." },
                    "luggage": { "title": "Soluções de Armazenamento", "desc": "A mudar-se entre cidades? Oferecemos armazenamento seguro de bagagem gratuitamente." },
                    "assistance": { "title": "Assistência 24/7", "desc": "Nunca fique sozinho. Suporte de emergência disponível a cada hora." },
                    "access": { "title": "Acesso Inteligente", "desc": "Abra o seu mundo com entrada segura por chave digital via telemóvel." }
                }
            },
            "how_it_works": {
                "badge": "A Jornada de Elite",
                "title": "O Seu Caminho Para o",
                "title_italic": "Conforto Supremo.",
                "steps": {
                    "step1": { "badge": "Curadoria por IA", "title": "Explore Anúncios Premium", "desc": "Descubra alojamentos de luxo selecionados a dedo em Portugal. O nosso motor movido por IA faz corresponder as suas preferências de elite com precisão." },
                    "step2": { "badge": "Verificação Instantânea", "title": "Reserva Digital Segura", "desc": "Pule a burocracia. Envie a sua identificação e garanta a sua estadia através da nossa exclusiva consola de verificação de alto nível." },
                    "step3": { "badge": "Entrada Concierge", "title": "Entrada Sem Complicações", "desc": "Receba as suas chaves digitais e o pacote de boas-vindas. Entre na sua nova casa em menos de 24 horas após a aprovação." }
                }
            },
            "testimonials": {
                "badge": "Testemunhos Verificados",
                "title": "A",
                "title_italic": "ESCOLHA",
                "title_sub": "DE ELITE.",
                "global_presence": "Presença Global",
                "euro_excellence": "Excelência Europeia",
                "items": {
                    "liza": { "name": "Liza Duarte", "role": "Estudante, Lisboa", "text": "Encontrar um quarto em Lisboa estava a deixar-me stressada até encontrar a EuroRent. O processo de verificação deu-me paz de espírito e o suporte foi excecional." },
                    "diego": { "name": "Diego Silva", "role": "Bolseiro, Porto", "text": "Luxo é um eufemismo. O meu estúdio na Ribeira é tudo o que sonhei. A EuroRent redefine verdadeiramente o conceito de habitação para estudantes internacionais em Portugal." },
                    "ana": { "name": "Ana Martins", "role": "Investigadora, Coimbra", "text": "Reserva simples, propriedades de elite e preços transparentes. Mudei-me entre Lisboa e Coimbra com a EuroRent sem qualquer esforço." },
                    "ricardo": { "name": "Ricardo Costa", "role": "Arquiteto, Braga", "text": "A seleção de propriedades é inigualável. É raro encontrar anúncios de tão alta fidelidade que correspondam realmente à experiência do mundo real." },
                    "sofia": { "name": "Sofia Gomes", "role": "Erasmus, Algarve", "text": "Vir para Portugal para o Erasmus era assustador, mas a EuroRent tornou a procura de casa a parte mais fácil de toda a minha mudança. Serviço 10/10!" }
                }
            },
            "cities": {
                "badge": "Destinos em Portugal",
                "title": "Explore os locais",
                "title_italic": "mais icónicos de Portugal.",
                "explore": "Explorar Estadias",
                "rooms_count": "Quartos",
                "types": {
                    "capital": "Viver na Capital",
                    "riverside": "Charme à Beira-rio",
                    "heritage": "Património e Arte",
                    "sun": "Sol e Relaxamento"
                }
            },
            "faq": {
                "badge": "Precisa de Ajuda?",
                "title": "Questões",
                "title_italic": "Comuns.",
                "items": [
                    { "q": "Como verifico o meu estatuto de estudante?", "a": "Pode carregar a sua carta de aceitação da universidade ou cartão de estudante diretamente através do nosso portal de reservas. A verificação demora normalmente menos de 12 horas." },
                    { "q": "Existe um requisito de estadia mínima?", "a": "A maioria das nossas estadias premium tem um requisito mínimo de 3 meses para garantir um ambiente comunitário estável e de alta qualidade." },
                    { "q": "O que está incluído no preço mensal?", "a": "O preço é com tudo incluído: contas de serviços públicos, internet de fibra de alta velocidade, limpeza profissional semanal e suporte de concierge 24/7." },
                    { "q": "Posso mudar-me entre diferentes cidades de Portugal?", "a": "Sim! O nosso programa 'PortugalPass' permite que se mude entre as nossas propriedades em diferentes cidades com um simples aviso prévio de 30 dias." }
                ]
            },
            "footer": {
                "desc": "Redefinindo o conceito de habitação em Portugal para o explorador moderno. Aluguer de quartos premium, verificados e focados na comunidade.",
                "quick_explore": "Exploração Rápida",
                "support": "Suporte",
                "lets_connect": "Conectemo-nos",
                "rights": "Todos os Direitos Reservados.",
                "subscribe": {
                    "title": "Mantenha-se Atualizado",
                    "desc": "Junte-se à nossa newsletter de elite para lançamentos exclusivos de propriedades.",
                    "placeholder": "Introduza o seu e-mail",
                    "button": "Subscrever"
                },
                "links": {
                    "rooms": "Quartos", "about": "Sobre Nós", "cities": "Cidades", "services": "Serviços", "pricing": "Preços",
                    "help": "Centro de Ajuda", "safety": "Segurança e Proteção", "guide": "Guia de Reserva", "terms": "Termos de Serviço", "privacy": "Política de Privacidade"
                }
            },
            "benefits": {
                "badge": "Porquê a EuroRent",
                "title": "Vida de Luxo",
                "title_italic": "Simplicada.",
                "desc": "Orgulhamo-nos de oferecer uma experiência perfeita que prioriza o seu conforto, segurança e satisfação final em todo o Portugal.",
                "button": "Saiba Mais Sobre Segurança",
                "items": {
                    "verified": { "title": "Habitação Verificada", "desc": "Cada quarto passa por uma rigorosa inspeção de 50 pontos antes de ser listado." },
                    "instant": { "title": "Reserva Instantânea", "desc": "Garanta o seu quarto em minutos com o nosso motor de reservas de alta velocidade." },
                    "prime": { "title": "Localizações Prime", "desc": "Propriedades estratégicas localizadas a minutos dos marcos da cidade." },
                    "support": { "title": "Suporte ao Estudante", "desc": "Concierge dedicado 24/7 para assistência a estudantes internacionais." }
                }
            },
            "booking_form": {
                "title": "Diga",
                "title_italic": "olá!",
                "labels": {
                    "name": "O Seu Nome",
                    "email": "O Seu E-mail",
                    "phone": "Número de Telefone",
                    "message": "Mensagem"
                },
                "placeholders": {
                    "name": "Introduza o seu nome aqui...",
                    "email": "Introduza o seu e-mail aqui...",
                    "phone": "Introduza o seu telefone aqui...",
                    "message": "Introduza a sua mensagem"
                },
                "button": "Enviar a Sua Mensagem",
                "info": {
                    "direct": "Canal Direto",
                    "connect": "Conecte-se connosco",
                    "visit": "Visite a Nossa Sede",
                    "residents": "Residentes",
                    "rating": "Classificação",
                    "support": "Suporte Global 24/7 Disponível"
                }
            },
            "about_comp": {
                "badge": "A Nossa História",
                "title": "Aluguer de Quartos",
                "title_italic": "Redefinido.",
                "desc1": "Na EuroRent Portugal, acreditamos que o seu lar é a base da sua jornada. Fundada no coração de Lisboa, a nossa missão sempre foi simplificar as complexidades do aluguer de quartos em Portugal.",
                "desc2": "Não apenas listamos quartos; curamos experiências. Cada propriedade no nosso portfólio é meticulosamente verificada quanto à segurança, luxo e proximidade com a cultura local.",
                "stats": {
                    "years": "Anos a Curar Estadias Perfeitas em Portugal",
                    "properties": "Propriedades Premium",
                    "response": "Resposta de Concierge"
                }
            },
            "contact": {
                "hero": {
                    "title": "CONECTE-SE COM",
                    "title_italic": "EXCELÊNCIA.",
                    "subtitle": "Os nossos consultores dedicados estão à disposição para guiar a sua jornada pelas residências mais exclusivas do mundo."
                },
                "tiles": {
                    "phone": { "title": "Linha Direta", "label": "Suporte de Elite 24/7" },
                    "email": { "title": "Inquérito Digital", "label": "Resposta Média: 15min" },
                    "office": { "title": "Escritório Privado", "label": "Apenas por Marcação" }
                },
                "specific": {
                    "title": "TEM UM",
                    "title_italic": "PEDIDO",
                    "title_end": "ESPECÍFICO?",
                    "desc": "Quer esteja à procura de uma recolocação corporativa ou de um santuário privado, a nossa equipa está preparada para lidar com os requisitos mais complexos."
                },
                "form": {
                    "title": "Solicitar uma Consulta",
                    "subtitle": "A sua privacidade é a nossa prioridade. Um consultor entrará em contacto através do seu método preferido.",
                    "name": "Nome Completo",
                    "email": "Endereço de E-mail",
                    "interest": {
                        "label": "Interessado em",
                        "options": ["Penthouse Sob Medida", "Suite Executiva", "Estúdio Artesanal", "Alojamento Corporativo"]
                    },
                    "message": "Mensagem",
                    "message_placeholder": "Descreva a sua residência ideal...",
                    "send": "Enviar Inquérito Privado"
                },
                "commitment": {
                    "title": "O",
                    "title_sub": "COMPROMISSO.",
                    "items": {
                        "response": { "title": "Resposta Garantida", "desc": "Os consultores respondem em menos de 2 horas durante o horário comercial." },
                        "privacy": { "title": "Privacidade em Primeiro Lugar", "desc": "Os seus dados são encriptados e nunca partilhados com terceiros." },
                        "virtual": { "title": "Visitas Virtuais", "desc": "Solicite uma visita guiada em 4K através de um link de vídeo encriptado." }
                    }
                }
            },
            "rooms_page": {
                "hero": {
                    "badge": "A Residência de Elite",
                    "title": "VIDA",
                    "title_italic": "REDEFINIDA.",
                    "quote": "Uma coleção de espaços de vida feitos à medida, onde o património se une ao luxo moderno. Não fornecemos apenas quartos; curamos experiências para os residentes mais exigentes do mundo."
                },
                "philosophy": {
                    "badge": "Secção I: A Filosofia",
                    "title": "ALÉM DO",
                    "title_italic": "ORDINÁRIO.",
                    "desc": "Na EuroRent, a nossa filosofia baseia-se na crença de que o seu ambiente molda o seu futuro. Cada residência no nosso portfólio exclusivo em Portugal é selecionada manualmente, não apenas pela sua beleza arquitetónica, mas pelo seu espírito e alma. Focamo-nos na luz natural, materiais premium e design intencional para criar um santuário de crescimento e inspiração.",
                    "blue_standard": {
                        "title": "O Padrão Azul",
                        "desc": "As nossas propriedades são avaliadas através de uma verificação de integridade de 200 pontos. Da acústica da sala de estar à qualidade do mármore na suite, cada detalhe é escrutinado para garantir que cumpre o padrão de assinatura da EuroRent."
                    },
                    "bespoke": {
                        "title": "Curadoria Personalizada",
                        "desc": "Não oferecemos inventário de mercado de massa. Cada quarto é uma obra-prima única, mobilada com peças desenhadas à medida e tecnologia de classe mundial, refletindo o auge do artesanato português."
                    }
                },
                "experience": {
                    "badge": "Secção II: A Experiência",
                    "title": "A SERVICE THAT", // Fixed typo "NEVER SLEEPS" to match English
                    "title_italic": "NUNCA DORME.",
                    "quote": "Viver connosco significa entrar num mundo de luxo sem esforço. A nossa equipa de concierge dedicada trata das complexidades da mudança, para que se possa focar em deixar a sua marca na história.",
                    "items": {
                        "concierge": { "title": "Concierge 24/7", "desc": "Assistentes privados disponíveis para qualquer solicitação, desde viagens a manutenção doméstica." },
                        "security": { "title": "Acesso Seguro", "desc": "Sistemas de segurança de última geração e protocolos de entrada privada para todas as residências." },
                        "housekeeping": { "title": "Limpeza de Elite", "desc": "Gestão profissional de limpeza e roupas de cama, agendada de acordo com o seu estilo de vida." }
                    }
                },
                "invitation": {
                    "title": "JUNTE-SE AO",
                    "title_italic": "CÍRCULO INTERNO.",
                    "desc": "A entrada no nosso portfólio privado é feita apenas por convite. Convidamo-lo a ligar-se aos nossos consultores e descobrir uma residência que se alinhe perfeitamente com a sua jornada.",
                    "button": "Solicitar Visita Privada"
                }
            },
            "about_page": {
                "hero": {
                    "title": "O FUTURO DA",
                    "title_italic": "RESIDÊNCIA.",
                    "est": "EST. 2026 • HUB GLOBAL DE PORTUGAL"
                },
                "heritage": {
                    "badge": "Desde a Nossa Criação",
                    "title": "CRIANDO",
                    "title_italic": "LEGADOS.",
                    "desc": "A nossa história começou nos becos escondidos de Alfama e nas ruas históricas do Porto. Percebemos que, para o cidadão global, um quarto não é apenas um lugar para dormir — é a base da sua ambição. A EuroRent foi construída para colmatar a lacuna entre a hospitalidade tradicional portuguesa e as necessidades do residente moderno e exigente.",
                    "quote": "Não lhe encontramos apenas um espaço; encontramos-lhe um lar que entende a sua ambição.",
                    "stat_label": "Cidades Prime"
                },
                "pillars": {
                    "badge": "Os Nossos Pilares",
                    "title": "PELO QUE",
                    "title_italic": "NOS BATEMOS.",
                    "items": {
                        "precision": {
                            "title": "Precisão",
                            "desc": "Cada residência é avaliada com rigor científico para garantir o máximo desempenho.",
                            "stat": "Verificação de 200+ Pontos"
                        },
                        "transparency": {
                            "title": "Transparência",
                            "desc": "Sem taxas ocultas. Sem surpresas. Apenas acordos de serviço claros e de nível elite.",
                            "stat": "100% Verificado"
                        },
                        "humanity": {
                            "title": "Humanidade",
                            "desc": "Priorizamos o bem-estar mental e físico do residente acima de tudo.",
                            "stat": "Cuidado Global"
                        }
                    }
                },
                "team": {
                    "badge": "A Nossa Liderança",
                    "title": "OS CÉREBROS",
                    "title_italic": "POR DETRÁS.",
                    "desc": "A nossa equipa é composta por arquitetos premiados, veteranos da hospitalidade e visionários do setor imobiliário. Estamos unidos por um objetivo comum: reescrever as regras da vida moderna.",
                    "excellence": { "title": "Excelência Curada", "desc": "Vencedor do Portugal Real Estate 2025" },
                    "passion": { "title": "Foco na Paixão", "desc": "Profundamente comprometidos com o sucesso do residente." }
                },
                "mission": {
                    "title": "UMA VISÃO,",
                    "title_italic": "ESTADIAS INFINITAS.",
                    "quote": "A nossa missão é construir um mundo onde qualquer pessoa se sinta em casa, em qualquer lugar, sem comprometer o luxo.",
                    "button": "Saiba Mais Sobre Nós"
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
