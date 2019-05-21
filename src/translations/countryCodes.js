// Add here the translations of the country names using key nameXX e.g. nameFi
// prettier-ignore
const countryCodes = [
  { code: 'AF', en: 'Afghanistan', fr: 'Afghanistan', es: 'Afganistán' },
  { code: 'AX', en: 'Åland Islands', fr: 'Îles Åland', es: 'Islas Áland' },
  { code: 'AL', en: 'Albania', fr: 'Albanie', es: 'Albania' },
  { code: 'DZ', en: 'Algeria', fr: 'Algérie', es: 'Argel' },
  { code: 'AS', en: 'American Samoa', fr: 'Samoa américaines', es: 'Samoa Americana' },
  { code: 'AD', en: 'Andorra', fr: 'Andorre', es: 'Andorra' },
  { code: 'AO', en: 'Angola', fr: 'Angola', es: 'Angola' },
  { code: 'AI', en: 'Anguilla', fr: 'Anguilla', es: 'Anguila' },
  { code: 'AQ', en: 'Antarctica', fr: 'Antarctique', es: 'Antártida' },
  { code: 'AG', en: 'Antigua and Barbuda', fr: 'Antigua-et-Barbuda', es: 'Antigua y Barbuda', },
  { code: 'AR', en: 'Argentina', fr: 'Argentine', es: 'Argentina' },
  { code: 'AM', en: 'Armenia', fr: 'Arménie', es: 'Armenia' },
  { code: 'AW', en: 'Aruba', fr: 'Aruba', es: 'Aruba' },
  { code: 'AU', en: 'Australia', fr: 'Australie', es: 'Australia' },
  { code: 'AT', en: 'Austria', fr: 'Autriche', es: 'Austria' },
  { code: 'AZ', en: 'Azerbaijan', fr: 'Azerbaïdjan', es: 'Azerbaiyán' },
  { code: 'BS', en: 'Bahamas', fr: 'Bahamas', es: 'Bahamas' },
  { code: 'BH', en: 'Bahrain', fr: 'Bahreïn', es: 'Bahréin' },
  { code: 'BD', en: 'Bangladesh', fr: 'Bangladesh', es: 'Bangladesh' },
  { code: 'BB', en: 'Barbados', fr: 'Barbade', es: 'Barbados' },
  { code: 'BY', en: 'Belarus', fr: 'Biélorussie', es: 'Belarús' },
  { code: 'BE', en: 'Belgium', fr: 'Belgique', es: 'Bélgica' },
  { code: 'BZ', en: 'Belize', fr: 'Belize', es: 'Belice' },
  { code: 'BJ', en: 'Benin', fr: 'Bénin', es: 'Benin' },
  { code: 'BM', en: 'Bermuda', fr: 'Bermudes', es: 'Bermudas' },
  { code: 'BT', en: 'Bhutan', fr: 'Bhoutan', es: 'Bhután' },
  { code: 'BO', en: 'Bolivia, Plurinational State of', fr: 'Bolivie', es: 'Bolivia' },
  { code: 'BQ', en: 'Bonaire, Sint Eustatius and Saba', fr: null, es: null },
  { code: 'BA', en: 'Bosnia and Herzegovina', fr: 'Bosnie-Herzégovine', es: 'Bosnia y Herzegovina', },
  { code: 'BW', en: 'Botswana', fr: 'Botswana', es: 'Botsuana' },
  { code: 'BV', en: 'Bouvet Island', fr: 'Île Bouvet', es: 'Isla Bouvet' },
  { code: 'BR', en: 'Brazil', fr: 'Brésil', es: 'Brasil' },
  { code: 'IO', en: 'British Indian Ocean Territory', fr: 'Territoire britannique de l’Océan Indien', es: 'Territorio Británico del Océano Índico', },
  { code: 'BN', en: 'Brunei Darussalam', fr: 'Brunei Darussalam', es: 'Brunéi' },
  { code: 'BG', en: 'Bulgaria', fr: 'Bulgarie', es: 'Bulgaria' },
  { code: 'BF', en: 'Burkina Faso', fr: 'Burkina Faso', es: 'Burkina Faso' },
  { code: 'BI', en: 'Burundi', fr: 'Burundi', es: 'Burundi' },
  { code: 'KH', en: 'Cambodia', fr: 'Cambodge', es: 'Camboya' },
  { code: 'CM', en: 'Cameroon', fr: 'Cameroun', es: 'Camerún' },
  { code: 'CA', en: 'Canada', fr: 'Canada', es: 'Canadá' },
  { code: 'CV', en: 'Cape Verde', fr: 'Cap-Vert', es: 'Cabo Verde' },
  { code: 'KY', en: 'Cayman Islands', fr: 'Iles Cayman', es: 'Islas Caimán' },
  { code: 'CF', en: 'Central African Republic', fr: 'République centrafricaine', es: 'República Centro-Africana', },
  { code: 'TD', en: 'Chad', fr: 'Tchad', es: 'Chad' },
  { code: 'CL', en: 'Chile', fr: 'Chili', es: 'Chile' },
  { code: 'CN', en: 'China', fr: 'Chine', es: 'China' },
  { code: 'CX', en: 'Christmas Island', fr: 'Île Christmas', es: 'Islas Christmas' },
  { code: 'CC', en: 'Cocos (Keeling) Islands', fr: 'Îles Cocos', es: 'Islas Cocos' },
  { code: 'CO', en: 'Colombia', fr: 'Colombie', es: 'Colombia' },
  { code: 'KM', en: 'Comoros', fr: 'Comores', es: 'Comoros' },
  { code: 'CG', en: 'Congo', fr: 'République du Congo', es: 'Congo' },
  { code: 'CD', en: 'Congo, the Democratic Republic of the', fr: 'République démocratique du Congo', es: 'República democrática del Congo', },
  { code: 'CK', en: 'Cook Islands', fr: 'Îles Cook', es: 'Islas Cook' },
  { code: 'CR', en: 'Costa Rica', fr: 'Costa Rica', es: 'Costa Rica' },
  { code: 'CI', en: "Côte d'Ivoire", fr: 'Côte d’Ivoire', es: 'Costa de Marfil' },
  { code: 'HR', en: 'Croatia', fr: 'Croatie', es: 'Croacia' },
  { code: 'CU', en: 'Cuba', fr: 'Cuba', es: 'Cuba' },
  { code: 'CW', en: 'Curaçao', fr: null, es: null },
  { code: 'CY', en: 'Cyprus', fr: 'Chypre', es: 'Chipre' },
  { code: 'CZ', en: 'Czech Republic', fr: 'République tchèque', es: 'República Checa' },
  { code: 'DK', en: 'Denmark', fr: 'Danemark', es: 'Dinamarca' },
  { code: 'DJ', en: 'Djibouti', fr: 'Djibouti', es: 'Yibuti' },
  { code: 'DM', en: 'Dominica', fr: 'Dominique', es: 'Domínica' },
  { code: 'DO', en: 'Dominican Republic', fr: 'République dominicaine', es: 'República Dominicana', },
  { code: 'EC', en: 'Ecuador', fr: 'Équateur', es: 'Ecuador' },
  { code: 'EG', en: 'Egypt', fr: 'Égypte', es: 'Egipto' },
  { code: 'SV', en: 'El Salvador', fr: 'Salvador', es: 'El Salvador' },
  { code: 'GQ', en: 'Equatorial Guinea', fr: 'Guinée équatoriale', es: 'Guinea Ecuatorial', },
  { code: 'ER', en: 'Eritrea', fr: 'Érythrée', es: 'Eritrea' },
  { code: 'EE', en: 'Estonia', fr: 'Estonie', es: 'Estonia' },
  { code: 'ET', en: 'Ethiopia', fr: 'Éthiopie', es: 'Etiopía' },
  { code: 'FK', en: 'Falkland Islands (Malvinas)', fr: 'Îles Falkland', es: 'Islas Malvinas', },
  { code: 'FO', en: 'Faroe Islands', fr: 'Îles Féroé', es: 'Islas Faroe' },
  { code: 'FJ', en: 'Fiji', fr: 'Fidji', es: 'Fiji' },
  { code: 'FI', en: 'Finland', fr: 'Finlande', es: 'Finlandia' },
  { code: 'FR', en: 'France', fr: 'France', es: 'Francia' },
  { code: 'GF', en: 'French Guiana', fr: 'Guyane française', es: 'Guayana Francesa' },
  { code: 'PF', en: 'French Polynesia', fr: 'Polynésie française', es: 'Polinesia Francesa', },
  { code: 'TF', en: 'French Southern Territories', fr: 'Terres australes et antarctiques françaises', es: 'Territorios Australes Franceses', },
  { code: 'GA', en: 'Gabon', fr: 'Gabon', es: 'Gabón' },
  { code: 'GM', en: 'Gambia', fr: 'Gambie', es: 'Gambia' },
  { code: 'GE', en: 'Georgia', fr: 'Géorgie', es: 'Georgia' },
  { code: 'DE', en: 'Germany', fr: 'Allemagne', es: 'Alemania' },
  { code: 'GH', en: 'Ghana', fr: 'Ghana', es: 'Ghana' },
  { code: 'GI', en: 'Gibraltar', fr: 'Gibraltar', es: 'Gibraltar' },
  { code: 'GR', en: 'Greece', fr: 'Grèce', es: 'Grecia' },
  { code: 'GL', en: 'Greenland', fr: 'Groenland', es: 'Groenlandia' },
  { code: 'GD', en: 'Grenada', fr: 'Grenade', es: 'Granada' },
  { code: 'GP', en: 'Guadeloupe', fr: 'Guadeloupe', es: 'Guadalupe' },
  { code: 'GU', en: 'Guam', fr: 'Guam', es: 'Guam' },
  { code: 'GT', en: 'Guatemala', fr: 'Guatemala', es: 'Guatemala' },
  { code: 'GG', en: 'Guernsey', fr: 'Guernesey', es: 'Guernsey' },
  { code: 'GN', en: 'Guinea', fr: 'Guinée', es: 'Guinea' },
  { code: 'GW', en: 'Guinea-Bissau', fr: 'Guinée-Bissau', es: 'Guinea-Bissau' },
  { code: 'GY', en: 'Guyana', fr: 'Guyane', es: 'Guayana' },
  { code: 'HT', en: 'Haiti', fr: 'Haïti', es: 'Haití' },
  { code: 'HM', en: 'Heard Island and McDonald Islands', fr: 'Îles Heard-et-MacDonald', es: 'Islas Heard y McDonald', },
  { code: 'VA', en: 'Holy See (Vatican City State)', fr: 'Saint-Siège (Vatican)', es: 'Ciudad del Vaticano', },
  { code: 'HN', en: 'Honduras', fr: 'Honduras', es: 'Honduras' },
  { code: 'HK', en: 'Hong Kong', fr: 'Hong Kong', es: 'Hong Kong' },
  { code: 'HU', en: 'Hungary', fr: 'Hongrie', es: 'Hungría' },
  { code: 'IS', en: 'Iceland', fr: 'Islande', es: 'Islandia' },
  { code: 'IN', en: 'India', fr: 'Inde', es: 'India' },
  { code: 'ID', en: 'Indonesia', fr: 'Indonésie', es: 'Indonesia' },
  { code: 'IR', en: 'Iran, Islamic Republic of', fr: 'Iran', es: 'Irán' },
  { code: 'IQ', en: 'Iraq', fr: 'Irak', es: 'Irak' },
  { code: 'IE', en: 'Ireland', fr: 'Irlande', es: 'Irlanda' },
  { code: 'IM', en: 'Isle of Man', fr: 'Ile de Man', es: 'Isla de Man' },
  { code: 'IL', en: 'Israel', fr: 'Israël', es: 'Israel' },
  { code: 'IT', en: 'Italy', fr: 'Italie', es: 'Italia' },
  { code: 'JM', en: 'Jamaica', fr: 'Jamaïque', es: 'Jamaica' },
  { code: 'JP', en: 'Japan', fr: 'Japon', es: 'Japón' },
  { code: 'JE', en: 'Jersey', fr: 'Jersey', es: 'Jersey' },
  { code: 'JO', en: 'Jordan', fr: 'Jordanie', es: 'Jordania' },
  { code: 'KZ', en: 'Kazakhstan', fr: 'Kazakhstan', es: 'Kazajstán' },
  { code: 'KE', en: 'Kenya', fr: 'Kenya', es: 'Kenia' },
  { code: 'KI', en: 'Kiribati', fr: 'Kiribati', es: 'Kiribati' },
  { code: 'KP', en: "Korea, Democratic People's Republic of", fr: 'Corée du Nord', es: 'Corea del Norte', },
  { code: 'KR', en: 'Korea, Republic of', fr: 'Corée du Sud', es: 'Corea del Sur' },
  { code: 'KW', en: 'Kuwait', fr: 'Koweït', es: 'Kuwait' },
  { code: 'KG', en: 'Kyrgyzstan', fr: 'Kirghizistan', es: 'Kirguistán' },
  { code: 'LA', en: "Lao People's Democratic Republic", fr: 'Laos', es: 'Laos' },
  { code: 'LV', en: 'Latvia', fr: 'Lettonie', es: 'Letonia' },
  { code: 'LB', en: 'Lebanon', fr: 'Liban', es: 'Líbano' },
  { code: 'LS', en: 'Lesotho', fr: 'Lesotho', es: 'Lesotho' },
  { code: 'LR', en: 'Liberia', fr: 'Libéria', es: 'Liberia' },
  { code: 'LY', en: 'Libya', fr: 'Libye', es: 'Libia' },
  { code: 'LI', en: 'Liechtenstein', fr: 'Liechtenstein', es: 'Liechtenstein' },
  { code: 'LT', en: 'Lithuania', fr: 'Lituanie', es: 'Lituania' },
  { code: 'LU', en: 'Luxembourg', fr: 'Luxembourg', es: 'Luxemburgo' },
  { code: 'MO', en: 'Macao', fr: 'Macao', es: 'Macao' },
  { code: 'MK', en: 'Macedonia, the Former Yugoslav Republic of', fr: 'Macédoine', es: 'Macedonia', },
  { code: 'MG', en: 'Madagascar', fr: 'Madagascar', es: 'Madagascar' },
  { code: 'MW', en: 'Malawi', fr: 'Malawi', es: 'Malawi' },
  { code: 'MY', en: 'Malaysia', fr: 'Malaisie', es: 'Malasia' },
  { code: 'MV', en: 'Maldives', fr: 'Maldives', es: 'Maldivas' },
  { code: 'ML', en: 'Mali', fr: 'Mali', es: 'Mali' },
  { code: 'MT', en: 'Malta', fr: 'Malte', es: 'Malta' },
  { code: 'MH', en: 'Marshall Islands', fr: 'Îles Marshall', es: 'Islas Marshall' },
  { code: 'MQ', en: 'Martinique', fr: 'Martinique', es: 'Martinica' },
  { code: 'MR', en: 'Mauritania', fr: 'Mauritanie', es: 'Mauritania' },
  { code: 'MU', en: 'Mauritius', fr: 'Maurice', es: 'Mauricio' },
  { code: 'YT', en: 'Mayotte', fr: 'Mayotte', es: 'Mayotte' },
  { code: 'MX', en: 'Mexico', fr: 'Mexique', es: 'México' },
  { code: 'FM', en: 'Micronesia, Federated States of', fr: 'Micronésie', es: 'Micronesia', },
  { code: 'MD', en: 'Moldova, Republic of', fr: 'Moldavie', es: 'Moldova' },
  { code: 'MC', en: 'Monaco', fr: 'Monaco', es: 'Mónaco' },
  { code: 'MN', en: 'Mongolia', fr: 'Mongolie', es: 'Mongolia' },
  { code: 'ME', en: 'Montenegro', fr: 'Monténégro', es: 'Montenegro' },
  { code: 'MS', en: 'Montserrat', fr: 'Montserrat', es: 'Montserrat' },
  { code: 'MA', en: 'Morocco', fr: 'Maroc', es: 'Marruecos' },
  { code: 'MZ', en: 'Mozambique', fr: 'Mozambique', es: 'Mozambique' },
  { code: 'MM', en: 'Myanmar', fr: 'Myanmar', es: 'Myanmar' },
  { code: 'NA', en: 'Namibia', fr: 'Namibie', es: 'Namibia' },
  { code: 'NR', en: 'Nauru', fr: 'Nauru', es: 'Nauru' },
  { code: 'NP', en: 'Nepal', fr: 'Népal', es: 'Nepal' },
  { code: 'NL', en: 'Netherlands', fr: 'Pays-Bas', es: 'Países Bajos' },
  { code: 'NC', en: 'New Caledonia', fr: 'Nouvelle-Calédonie', es: 'Nueva Caledonia' },
  { code: 'NZ', en: 'New Zealand', fr: 'Nouvelle-Zélande', es: 'Nueva Zelanda' },
  { code: 'NI', en: 'Nicaragua', fr: 'Nicaragua', es: 'Nicaragua' },
  { code: 'NE', en: 'Niger', fr: 'Niger', es: 'Níger' },
  { code: 'NG', en: 'Nigeria', fr: 'Nigeria', es: 'Nigeria' },
  { code: 'NU', en: 'Niue', fr: 'Niue', es: 'Niue' },
  { code: 'NF', en: 'Norfolk Island', fr: 'Île Norfolk', es: 'Islas Norkfolk' },
  { code: 'MP', en: 'Northern Mariana Islands', fr: 'Îles Mariannes du Nord', es: 'Islas Marianas del Norte', },
  { code: 'NO', en: 'Norway', fr: 'Norvège', es: 'Noruega' },
  { code: 'OM', en: 'Oman', fr: 'Oman', es: 'Omán' },
  { code: 'PK', en: 'Pakistan', fr: 'Pakistan', es: 'Pakistán' },
  { code: 'PW', en: 'Palau', fr: 'Palau', es: 'Islas Palaos' },
  { code: 'PS', en: 'Palestine, State of', fr: 'Palestine', es: 'Palestina' },
  { code: 'PA', en: 'Panama', fr: 'Panama', es: 'Panamá' },
  { code: 'PG', en: 'Papua New Guinea', fr: 'Papouasie-Nouvelle-Guinée', es: 'Papúa Nueva Guinea', },
  { code: 'PY', en: 'Paraguay', fr: 'Paraguay', es: 'Paraguay' },
  { code: 'PE', en: 'Peru', fr: 'Pérou', es: 'Perú' },
  { code: 'PH', en: 'Philippines', fr: 'Philippines', es: 'Filipinas' },
  { code: 'PN', en: 'Pitcairn', fr: 'Pitcairn', es: 'Islas Pitcairn' },
  { code: 'PL', en: 'Poland', fr: 'Pologne', es: 'Polonia' },
  { code: 'PT', en: 'Portugal', fr: 'Portugal', es: 'Portugal' },
  { code: 'PR', en: 'Puerto Rico', fr: 'Puerto Rico', es: 'Puerto Rico' },
  { code: 'QA', en: 'Qatar', fr: 'Qatar', es: 'Qatar' },
  { code: 'RE', en: 'Réunion', fr: 'Réunion', es: 'Reunión' },
  { code: 'RO', en: 'Romania', fr: 'Roumanie', es: 'Rumanía' },
  { code: 'RU', en: 'Russian Federation', fr: 'Russie', es: 'Rusia' },
  { code: 'RW', en: 'Rwanda', fr: 'Rwanda', es: 'Ruanda' },
  { code: 'BL', en: 'Saint Barthélemy', fr: 'Saint-Barthélemy', es: 'San Bartolomé' },
  { code: 'SH', en: 'Saint Helena, Ascension and Tristan da Cunha', fr: 'Sainte-Hélène', es: 'Santa Elena', },
  { code: 'KN', en: 'Saint Kitts and Nevis', fr: 'Saint-Kitts-et-Nevis', es: 'San Cristóbal y Nieves', },
  { code: 'LC', en: 'Saint Lucia', fr: 'Sainte-Lucie', es: 'Santa Lucía' },
  { code: 'MF', en: 'Saint Martin (French part)', fr: 'Saint-Martin (partie française)', es: 'San Martín (parte francesa)', },
  { code: 'PM', en: 'Saint Pierre and Miquelon', fr: 'Saint-Pierre-et-Miquelon', es: 'San Pedro y Miquelón', },
  { code: 'VC', en: 'Saint Vincent and the Grenadines', fr: 'Saint-Vincent-et-les Grenadines', es: 'San Vicente y las Granadinas', },
  { code: 'WS', en: 'Samoa', fr: 'Samoa', es: 'Samoa' },
  { code: 'SM', en: 'San Marino', fr: 'Saint-Marin', es: 'San Marino' },
  { code: 'ST', en: 'Sao Tome and Principe', fr: 'Sao Tomé-et-Principe', es: 'Santo Tomé y Príncipe', },
  { code: 'SA', en: 'Saudi Arabia', fr: 'Arabie Saoudite', es: 'Arabia Saudita' },
  { code: 'SN', en: 'Senegal', fr: 'Sénégal', es: 'Senegal' },
  { code: 'RS', en: 'Serbia', fr: 'Serbie', es: 'Serbia y Montenegro' },
  { code: 'SC', en: 'Seychelles', fr: 'Seychelles', es: 'Seychelles' },
  { code: 'SL', en: 'Sierra Leone', fr: 'Sierra Leone', es: 'Sierra Leona' },
  { code: 'SG', en: 'Singapore', fr: 'Singapour', es: 'Singapur' },
  { code: 'SX', en: 'Sint Maarten (Dutch part)', fr: 'Saint-Martin (partie néerlandaise)', es: 'San Martín (parte neerlandesa)', },
  { code: 'SK', en: 'Slovakia', fr: 'Slovaquie', es: 'Eslovaquia' },
  { code: 'SI', en: 'Slovenia', fr: 'Slovénie', es: 'Eslovenia' },
  { code: 'SB', en: 'Solomon Islands', fr: 'Îles Salomon', es: 'Islas Solomón' },
  { code: 'SO', en: 'Somalia', fr: 'Somalie', es: 'Somalia' },
  { code: 'ZA', en: 'South Africa', fr: 'Afrique du Sud', es: 'Sudáfrica' },
  { code: 'GS', en: 'South Georgia and the South Sandwich Islands', fr: 'Géorgie du Sud et les îles Sandwich du Sud', es: 'Georgia del Sur e Islas Sandwich deSur', },
  { code: 'SS', en: 'South Sudan', fr: 'Sud-Soudan', es: 'Sudán del Sur' },
  { code: 'ES', en: 'Spain', fr: 'Espagne', es: 'España' },
  { code: 'LK', en: 'Sri Lanka', fr: 'Sri Lanka', es: 'Sri Lanka' },
  { code: 'SD', en: 'Sudan', fr: 'Soudan', es: 'Sudán' },
  { code: 'SR', en: 'Suriname', fr: 'Suriname', es: 'Surinam' },
  { code: 'SJ', en: 'Svalbard and Jan Mayen', fr: 'Svalbard et Jan Mayen', es: 'Islas Svalbard y Jan Mayen', },
  { code: 'SZ', en: 'Swaziland', fr: 'Eswatini', es: 'Suazilandia' },
  { code: 'SE', en: 'Sweden', fr: 'Suède', es: 'Suecia' },
  { code: 'CH', en: 'Switzerland', fr: 'Suisse', es: 'Suiza' },
  { code: 'SY', en: 'Syrian Arab Republic', fr: 'Syrie', es: 'Siria' },
  { code: 'TW', en: 'Taiwan, Province of China', fr: 'Taiwan', es: 'Taiwán' },
  { code: 'TJ', en: 'Tajikistan', fr: 'Tadjikistan', es: 'Tayikistán' },
  { code: 'TZ', en: 'Tanzania, United Republic of', fr: 'Tanzanie', es: 'Tanzania' },
  { code: 'TH', en: 'Thailand', fr: 'Thaïlande', es: 'Tailandia' },
  { code: 'TL', en: 'Timor-Leste', fr: 'Timor-Leste', es: 'Timor-Leste' },
  { code: 'TG', en: 'Togo', fr: 'Togo', es: 'Togo' },
  { code: 'TK', en: 'Tokelau', fr: 'Tokelau', es: 'Tokelau' },
  { code: 'TO', en: 'Tonga', fr: 'Tonga', es: 'Tonga' },
  { code: 'TT', en: 'Trinidad and Tobago', fr: 'Trinité-et-Tobago', es: 'Trinidad y Tobago', },
  { code: 'TN', en: 'Tunisia', fr: 'Tunisie', es: 'Túnez' },
  { code: 'TR', en: 'Turkey', fr: 'Turquie', es: 'Turquía' },
  { code: 'TM', en: 'Turkmenistan', fr: 'Turkménistan', es: 'Turkmenistán' },
  { code: 'TC', en: 'Turks and Caicos Islands', fr: 'Îles Turques-et-Caïques', es: 'Islas Turcas y Caicos', },
  { code: 'TV', en: 'Tuvalu', fr: 'Tuvalu', es: 'Tuvalu' },
  { code: 'UG', en: 'Uganda', fr: 'Ouganda', es: 'Uganda' },
  { code: 'UA', en: 'Ukraine', fr: 'Ukraine', es: 'Ucrania' },
  { code: 'AE', en: 'United Arab Emirates', fr: 'Émirats Arabes Unis', es: 'Emiratos Árabes Unidos', },
  { code: 'GB', en: 'United Kingdom', fr: 'Royaume-Uni', es: 'Reino Unido' },
  { code: 'US', en: 'United States', fr: 'États-Unis', es: 'Estados Unidos de América', },
  { code: 'UM', en: 'United States Minor Outlying Islands', fr: 'Îles mineures éloignées des États-Unis', es: 'Islas Ultramarinas Menores de Estados Unidos', },
  { code: 'UY', en: 'Uruguay', fr: 'Uruguay', es: 'Uruguay' },
  { code: 'UZ', en: 'Uzbekistan', fr: 'Ouzbékistan', es: 'Uzbekistán' },
  { code: 'VU', en: 'Vanuatu', fr: 'Vanuatu', es: 'Vanuatu' },
  { code: 'VE', en: 'Venezuela, Bolivarian Republic of', fr: 'Venezuela', es: 'Venezuela', },
  { code: 'VN', en: 'Viet Nam', fr: 'Viêt Nam', es: 'Vietnam' },
  { code: 'VG', en: 'Virgin Islands, British', fr: 'British Virgin Islands', es: 'Islas Vírgenes Británicas', },
  { code: 'VI', en: 'Virgin Islands, U.S.', fr: 'Îles Vierges américaines', es: 'Islas Vírgenes de los Estados Unidos de América', },
  { code: 'WF', en: 'Wallis and Futuna', fr: 'Wallis-et-Futuna', es: 'Wallis y Futuna', },
  { code: 'EH', en: 'Western Sahara', fr: 'Sahara occidental', es: 'Sahara Occidental', },
  { code: 'YE', en: 'Yemen', fr: 'Yémen', es: 'Yemen' },
  { code: 'ZM', en: 'Zambia', fr: 'Zambie', es: 'Zambia' },
  { code: 'ZW', en: 'Zimbabwe', fr: 'Zimbabwe', es: 'Zimbabue' },
];

const getCountryCodes = lang => {
  // Add the lnew locale here so that the correct translations will be returned.
  // If locale is unknown or the translation is missing, this will default to english coutnry name.
  const codes = countryCodes.map(c => {
    const countryName = c[lang] ? c[lang] : c['en'];
    const counryCode = c.code;

    return { code: counryCode, name: countryName };
  });
  return codes;
};

export default getCountryCodes;
