import type { Station } from "@/types";

// Lista oficial — 60 postos da Rede Cacique extraídos do "Cartão Frotas 2025"
// Coordenadas aproximadas por bairro/cidade — refinar via Google Maps quando necessário
const defaultServices = ["Gasolina Comum", "Gasolina Aditivada", "Etanol", "Diesel S-10", "Diesel S-500"];

export const stations: Station[] = [
  // ============ TERESINA - PI ============
  { id: "1", name: "Posto Cacique 1", address: "Av. Miguel Rosa, 3833/S - Bairro Piçarra", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0918, lng: -42.7980, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "2", name: "Posto Cacique 2", address: "Av. Presidente Kennedy, 1944 - Bairro São Cristóvão", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0716, lng: -42.7977, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "3", name: "Posto Cacique 3", address: "Av. Miguel Rosa, 3768/S - Bairro Piçarra", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0916, lng: -42.7975, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "4", name: "Posto Cacique 4", address: "Av. Miguel Rosa, 6185/S - Bairro Macaúba", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1056, lng: -42.7912, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "5", name: "Posto Cacique 5", address: "Av. Miguel Rosa, 5178/S - Bairro Vermelha", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1009, lng: -42.7972, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "6", name: "Posto Cacique 6", address: "Rua Rui Barbosa, 1662 - Bairro Vila Operária", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0873, lng: -42.8061, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "7", name: "Posto Cacique 7", address: "Av. Duque de Caxias, 2448 - Bairro Primavera", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0775, lng: -42.7818, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "8", name: "Posto Cacique 8", address: "Av. Universitária, 900 - Bairro Cidade Universitária", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0561, lng: -42.8003, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "9", name: "Posto Cacique 9", address: "Rua Olavo Bilac, 989 - Centro", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0892, lng: -42.8016, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "10", name: "Posto Cacique 10", address: "Av. Lindolfo Monteiro, 990 - Bairro de Fátima", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0782, lng: -42.7910, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "11", name: "Posto Cacique 11", address: "Av. Deputado Paulo Ferraz, 2907 - Bairro São Raimundo", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0680, lng: -42.7765, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "12", name: "Posto Cacique 12", address: "Av. Prefeito Wall Ferraz, 15900 - Bairro Angelim", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1500, lng: -42.7714, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "13", name: "Posto Cacique 13", address: "Rua Rui Barbosa, 1947 - Bairro Matinha", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0874, lng: -42.8062, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "14", name: "Posto Cacique 14", address: "Av. Deputado Paulo Ferraz, 1910 - Bairro Tancredo Neves", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0628, lng: -42.8128, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "15", name: "Posto Cacique 15", address: "Av. Maranhão, 3399 - Bairro São Pedro", city: "Teresina", state: "PI", zipCode: "64018-100", phone: "", lat: -5.0689, lng: -42.7833, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ INTERIOR PI/MA/PE ============
  { id: "16", name: "Posto Cacique 16", address: "Av. Zito Batista, 110 - KM 58 - BR 316 - Bairro Piçarreira", city: "Monsenhor Gil", state: "PI", zipCode: "", phone: "", lat: -5.5650, lng: -42.6020, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ TERESINA - PI (continuação) ============
  { id: "17", name: "Posto Cacique 17", address: "Av. Prefeito Wall Ferraz, 15100 - Bairro Angelim", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1490, lng: -42.7720, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ INTERIOR PI ============
  { id: "18", name: "Posto Cacique 18", address: "Rua Maria dos Anjos, 691-727", city: "Cocal de Telha", state: "PI", zipCode: "", phone: "", lat: -4.5547, lng: -41.9744, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ TERESINA - PI ============
  { id: "19", name: "Posto Cacique 19", address: "Rua Jaime da Silveira, 864 - Bairro Santa Isabel", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0967, lng: -42.8045, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "20", name: "Posto Cacique 20", address: "Av. Frei Serafim, 2540 - Centro", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0905, lng: -42.8030, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "21", name: "Posto Cacique 21", address: "Av. João XXIII, 805 - Bairro Noivos", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0858, lng: -42.7783, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "22", name: "Posto Cacique 22", address: "Av. Universitária, 880 - Bairro Ininga", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0512, lng: -42.7975, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "23", name: "Posto Cacique 23", address: "Rodovia BR 343, S/N, KM 15 - Área Rural de Teresina", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0200, lng: -42.7400, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "24", name: "Posto Cacique 24", address: "Rua Imperatriz Teresina Cristina, 9479 - Quadra 30 - Lote 01 - Núcleo Urbano Santana", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0500, lng: -42.8500, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ INTERIOR PI/MA ============
  { id: "25", name: "Posto Cacique 25", address: "Rodovia BR 343 KM 258 S/N", city: "Campo Maior", state: "PI", zipCode: "", phone: "", lat: -4.8281, lng: -42.1689, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "26", name: "Posto Cacique 26", address: "Rodovia BR-316 SN KM: 550,3 - Volta Redonda", city: "Caxias", state: "MA", zipCode: "", phone: "", lat: -4.8597, lng: -43.3553, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "27", name: "Posto Cacique 27", address: "Avenida dos Gaúchos, 200 - Santa Rosa", city: "Uruçuí", state: "PI", zipCode: "", phone: "", lat: -7.2289, lng: -44.5550, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "28", name: "Posto Cacique 28", address: "Rodovia Transcerrados, S/N, KM 240 - Serra do Quilombo", city: "Bom Jesus", state: "PI", zipCode: "", phone: "", lat: -9.0741, lng: -44.3589, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "29", name: "Posto Cacique 29", address: "Avenida José Cavalcante, 1360 - Tibají", city: "Uruçuí", state: "PI", zipCode: "", phone: "", lat: -7.2295, lng: -44.5560, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "30", name: "Posto Cacique 30", address: "Rodovia PI-247, KM 25,5 - Zona Rural", city: "Uruçuí", state: "PI", zipCode: "", phone: "", lat: -7.2400, lng: -44.5800, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "31", name: "Posto Cacique 31", address: "Av. Ari Rocha, 1044 - Bairro Santa Luzia", city: "Baixa Grande do Ribeiro", state: "PI", zipCode: "", phone: "", lat: -7.8553, lng: -45.1822, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "32", name: "Posto Cacique 32", address: "Rodovia BR 343, 805-A - Compasa", city: "Água Branca", state: "PI", zipCode: "", phone: "", lat: -5.8867, lng: -42.6347, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "33", name: "Posto Cacique 33", address: "Avenida Produtividade, 100 - Portal dos Cerrados", city: "Uruçuí", state: "PI", zipCode: "", phone: "", lat: -7.2310, lng: -44.5570, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "34", name: "Posto Cacique 34", address: "Rodovia BR 316 KM 404,1, S/N - Povoado Matinha", city: "Alto Alegre do Maranhão", state: "MA", zipCode: "", phone: "", lat: -4.2675, lng: -44.4233, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "35", name: "Posto Cacique 35", address: "Rodovia BR 316 KM 58, 141 - Centro", city: "Trindade", state: "PE", zipCode: "", phone: "", lat: -7.7611, lng: -40.2658, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "36", name: "Posto Cacique 36", address: "Rua Piauí, 01, Quadra 02 Lateral Loteamento - Novo Horizonte 03", city: "Antônio Almeida", state: "PI", zipCode: "", phone: "", lat: -7.4253, lng: -44.0394, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "37", name: "Posto Cacique 37", address: "Rodovia PI 247, S/N, KM 06, Zona Rural", city: "Ribeiro Gonçalves", state: "PI", zipCode: "", phone: "", lat: -7.5611, lng: -45.2400, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ TERESINA - PI ============
  { id: "38", name: "Posto Cacique 38", address: "Avenida Prefeito Wall Ferraz, 9365 - Lourival Parente", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1411, lng: -42.7956, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ INTERIOR MA ============
  { id: "39", name: "Posto Cacique 39", address: "BR 135 Pov. Entroncamento S/N KM 95", city: "Itapecuru-Mirim", state: "MA", zipCode: "", phone: "", lat: -3.3939, lng: -44.3556, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "40", name: "Posto Cacique 40", address: "Av. FC Carlos Jansen, 1291 - Parque Piauí", city: "Timon", state: "MA", zipCode: "", phone: "", lat: -5.0944, lng: -42.8367, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "41", name: "Posto Cacique 41", address: "Rua Aquiles Lisboa, 47 - Centro", city: "Timon", state: "MA", zipCode: "", phone: "", lat: -5.0950, lng: -42.8370, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "42", name: "Posto Cacique 42", address: "Rod. BR 316, 2421 - Itapecuruzinho", city: "Caxias", state: "MA", zipCode: "", phone: "", lat: -4.8610, lng: -43.3580, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ TERESINA - PI ============
  { id: "43", name: "Posto Cacique 43", address: "Av. Frei Serafim, 2461 - Centro (Sul)", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0902, lng: -42.8027, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "44", name: "Posto Cacique 44", address: "Av. Cajuína, 100 - Noivos", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0860, lng: -42.7780, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "45", name: "Posto Cacique 45", address: "Av. Henry Wal de Carvalho, 10750 - Angelim", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1510, lng: -42.7720, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "46", name: "Posto Cacique 46", address: "Av. Mar. Castelo Branco, 2134 - Primavera", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0780, lng: -42.7820, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "47", name: "Posto Cacique 47", address: "R. Dom Bôsco, 3067 - Satélite", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1306, lng: -42.7700, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "48", name: "Posto Cacique 48", address: "Av. Zequinha Freire, 530 - Uruguai", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0894, lng: -42.8011, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ INTERIOR PI ============
  { id: "50", name: "Posto Cacique 50", address: "Avenida da Integração - Bom Lugar", city: "Floriano", state: "PI", zipCode: "", phone: "", lat: -6.7669, lng: -43.0228, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ TERESINA - PI ============
  { id: "51", name: "Posto Cacique 51", address: "R. Azar Chaib, 1160 - Morada do Sol", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0944, lng: -42.7944, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "52", name: "Posto Cacique 52", address: "Av. Homero Castelo Branco, 1945 - Fátima", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0785, lng: -42.7905, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "53", name: "Posto Cacique 53", address: "Av. Presidente Kennedy - São Cristóvão", city: "Teresina", state: "PI", zipCode: "64052-345", phone: "", lat: -5.0720, lng: -42.7980, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "54", name: "Posto Cacique 54", address: "Alameda Parnaíba, 2526 - Marquês", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.0790, lng: -42.7969, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "55", name: "Posto Cacique 55", address: "Av. Nossa Sr.ª de Fátima, 2727 A - Fátima", city: "Teresina", state: "PI", zipCode: "64049-528", phone: "", lat: -5.0788, lng: -42.7912, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "56", name: "Posto Cacique 56", address: "Av. Dr. Nicanor Barreto, 4955 QD 01 - Vale Quem Tem", city: "Teresina", state: "PI", zipCode: "64057-105", phone: "", lat: -5.0581, lng: -42.7917, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "57", name: "Posto Cacique 57", address: "Av. Miguel Rosa, 2084 A - Centro", city: "Teresina", state: "PI", zipCode: "64000-480", phone: "", lat: -5.0900, lng: -42.7990, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "58", name: "Posto Cacique 58", address: "Av. Prefeito Wall Ferraz, 9420-9508 - Parque Piauí", city: "Teresina", state: "PI", zipCode: "", phone: "", lat: -5.1405, lng: -42.7950, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },

  // ============ INTERIOR MA/PI ============
  { id: "59", name: "Posto Cacique 59", address: "R. Vicente Faustino do Nascimento, 06 QD. 19 - Parque Alvorada", city: "Timon", state: "MA", zipCode: "65633-270", phone: "", lat: -5.0960, lng: -42.8380, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "60", name: "Posto Cacique 60", address: "BR-343, Capitão de Campos", city: "Capitão de Campos", state: "PI", zipCode: "64270-000", phone: "", lat: -4.4647, lng: -41.4628, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
  { id: "61", name: "Posto Cacique 61", address: "BR-222, KM 26 S/N", city: "São João da Fronteira", state: "PI", zipCode: "64243-000", phone: "", lat: -4.1239, lng: -41.0903, services: defaultServices, hours: "24 horas", hasConvenience: false, hasLubrificants: false, isActive: true },
];

export const cities = Array.from(new Set(stations.map((s) => s.city))).sort();
