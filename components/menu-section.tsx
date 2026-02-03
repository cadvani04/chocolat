"use client"

import { useState } from "react"

const menuData = {
  lunch: {
    title: "LUNCH",
    subtitle: "Wed-Fri 12pm-2:30pm",
    items: [
      { name: "fuyu persimmon & butternut squash soup", description: "toasted walnuts, paprika, olive oil", price: "cup 12, bowl 18" },
      { name: "chicken orzo soup", description: "with shiitake & cream", price: "cup 15, bowl 19" },
      { name: "ozzie salad", description: "mixed greens, house vinaigrette & parmesan", price: "17", addons: "add chicken 15, add fish 17, add steak 24" },
      { name: "caesar salad", description: "focaccia croutons, parmesan", price: "19", addons: "add chicken 15/ add fish 17/ add steak 24" },
      { name: "chicory salad", description: "apples, walnuts, sesame dressing", price: "19", addons: "add chicken 15 | add fish 17| add steak 24" },
      { name: "sautéed greens & farro", price: "20", addons: "add chicken 15| add fish 17| add steak 24 | add egg 5 | add 2 eggs 8" },
      { name: "oswald chicken breast sandwich", description: "with cheddar, avocado & bacon", price: "23", note: "choice of fries or ozzie salad| add caesar 3" },
      { name: "grilled portabello mushroom sandwich", description: "with comte & ozzie salad", price: "22" },
      { name: "veggie and cheddar omelette", description: "with ozzie salad", price: "20", addons: "add bacon 5" },
      { name: "fried chicken", description: "with ozzie salad 25, with caesar 28", price: "25", note: "as a sandwich with Calabrian chili aioli, pickled onions, arugula ozzie salad or fries 25" },
      { name: "fish & chips", description: "with tartar sauce & malt vinegar", price: "25" },
      { name: "ozzie burger & fries", description: "with caramelized onion, blue cheese or cheddar & aioli", price: "34" },
      { name: "spaghetti carbonara", description: "with bacon, peas, garlic, chili flake & grana", price: "24", addons: "add shrimp 7" },
      { name: "skirt steak", description: "with sautéed greens, fries & compound butter", price: "36" },
      { name: "prawn sandwich", description: "frisee, pickled onions, aioli", price: "23", note: "choice of fries or ozzie salad" },
    ],
    desserts: [
      { name: "chocolate souffle", price: "18" },
      { name: "vanilla crème brûlée", price: "15" },
    ]
  },
  dinner: {
    title: "DINNER",
    subtitle: "5pm-close",
    appetizers: [
      { name: "focaccia otd", price: "10", description: "olive oil & vinegar", addons: "add compound butter 2" },
      { name: "seared ahi cornbread crostini", price: "13 each", description: "sesame, avocado" },
      { name: "beef tartare cornbread crostini", price: "9 each" },
      { name: "mushroom soup", description: "creme fraiche, green onions", price: "cup 12, bowl 17" },
      { name: "chicken orzo soup", description: "shiitake, cream, pea shoot oil", price: "cup 14, bowl 18" },
      { name: "ozzie salad", description: "mixed greens, house vinaigrette & parmesan", price: "19" },
      { name: "caesar salad", description: "focaccia croutons, parmesan", price: "21", addons: "add chicken 15/ add fish 17/ add steak 27" },
      { name: "chicory salad", description: "frisee, endive, radicchio, apples, walnuts, toasted sesame dressing", price: "22" },
      { name: "fried squid and shrimp", description: "frisee and meyer lemon aioli", price: "23" },
    ],
    entrees: [
      { name: "sauteed greens and farro", price: "20", addons: "add chicken 15 l add fish 17 l add steak 27" },
      { name: "wild mushroom risotto", description: "golden chanterelle and porcini mushrooms, butter, parmesan", price: "23", addons: "add chicken 15/ add fish 17/ add steak 27" },
      { name: "local black cod", description: "soy marinade, jasmine coconut rice grilled bok choy", price: "42" },
      { name: "airline chicken", description: "sweet potato puree, bok choy, carrots, mint vinaigrette", price: "38" },
      { name: "skirt steak", description: "potato gratin, roasted carrots compound butter", price: "59" },
    ],
    pubGrub: [
      { name: "burger & fries", description: "caramelized onion, blue cheese aioli", price: "34" },
      { name: "macaroni and cheese", description: "with ozzie salad", price: "25" },
      { name: "fried chicken", description: "with ozzie salad", price: "25" },
      { name: "beef lasagna", description: "house-ground beef, marinara, jack, parmesan with ozzie salad", price: "35" },
      { name: "chicken lasagna", description: "spinach, cream sauce, ricotta, mozzarella, parmesan with ozzie salad", price: "35" },
      { name: "wild mushroom baked polenta", description: "parmesan & mozzarella with ozzie salad", price: "29" },
    ],
    sides: [
      { name: "roasted potatoes", price: "13" },
      { name: "fries", price: "13" },
      { name: "roasted vegetables", price: "13" },
      { name: "sauteed greens", price: "15" },
    ],
    desserts: [
      { name: "chocolate souffle", price: "18" },
      { name: "vanilla crème brûlée", price: "15" },
      { name: "almond custard torte", description: "with coffee reduction & vanilla ice cream", price: "18" },
      { name: "apple crisp", description: "with whipped cream", price: "17" },
      { name: "white wine poached pear", description: "goat cheese ice cream pistachio brittle", price: "17" },
      { name: "Alta coffee affogato", description: "with chocolate ice cream", price: "10" },
    ],
    note: "*minimal substitutions on friday & saturday*",
    dessertNote: "*desserts available to dine in guests only*"
  },
  tuesday: {
    title: "TUESDAY DINNER",
    subtitle: "5PM-8:30PM",
    prixFixe: {
      title: "TUESDAY PRIX FIXE SPECIAL",
      price: "two courses $38",
      courses: [
        { course: "first course:", items: ["caesar salad", "focaccia bread crumbs, parmesan"] },
        { course: "second course:", items: ["skirt steak & fries", "compound butter"] },
      ]
    },
    appetizers: [
      { name: "focaccia of the day", price: "10", description: "extra virgin olive oil and vinegar", addons: "+ compound butter 2" },
      { name: "fuyu persimmon & butternut squash soup", description: "toasted walnut, paprika, olive oil", price: "cup 12 bowl 17" },
      { name: "chicken orzo soup", description: "shiitake, cream, pea sprout oil", price: "cup 14 bowl 18" },
      { name: "ozzie salad", description: "mixed greens, house vinaigrette, parmesan", price: "19" },
      { name: "caesar salad", description: "focaccia bread croutons, parmesan", price: "21", addons: "+ trout 17 / + chicken 15/ + steak 27" },
    ],
    specialEntree: {
      name: "marinated black cod",
      description: "vegetables, coconut-ginger broth",
      price: "34"
    },
    sides: [
      { name: "fries", price: "13" },
      { name: "roasted potatoes", price: "13" },
      { name: "roasted vegetables", price: "13" },
      { name: "sauteed greens", price: "15" },
    ],
    pubGrub: [
      { name: "macaroni and cheese", description: "with ozzie salad", price: "25" },
      { name: "fried chicken", description: "with ozzie salad", price: "25" },
      { name: "house-made beef lasagna", description: "with ozzie salad", price: "33" },
      { name: "white chicken lasagna", description: "spinach, ricotta, mozzarella ozzie salad", price: "35" },
      { name: "burger & fries", description: "caramelized onion blue cheese, aioli", price: "34" },
    ]
  },
  happyHour: {
    title: "HAPPY HOUR",
    subtitle: "Wednesday-Thursday 5pm-7pm",
    items: [
      { name: "warm olives", price: "7" },
      { name: "fries", price: "8" },
      { name: "mixed green salad", price: "12" },
      { name: "eggplant, tomato, goat cheese tartine", price: "12" },
      { name: "ahi-avocado toast", price: "12" },
      { name: "macaroni & cheese", price: "18" },
      { name: "fried chicken", price: "18" },
      { name: "house-made beef lasagna", price: "21" },
      { name: "burger & fries", description: "caramelized onion, blue cheese, aioli or tomato, lettuce, pickle, cheddar, aioli", price: "21" },
    ],
    drinks: [
      { name: "happy hour cocktail", price: "11" },
      { name: "red, white or rosé wine", price: "8" },
      { name: "beer", price: "7" },
    ]
  },
  cocktails: {
    title: "COCKTAILS",
    signature: [
      { name: "apio gimlet", description: "tequila, celery, lime, yuzu. up.", price: "14" },
      { name: "rose glow", description: "gin, select, grapefruit, ginger, lemon. up.", price: "15" },
      { name: "cosmojito", description: "vodka, cranberry, mint, lime. up.", price: "14" },
      { name: "morning sun", description: "gin, peach & elderflower liqueur, lemon, soda, rocks.", price: "15" },
      { name: "violet hombre", description: "dos hombres mezcal, lime, serrano, ginger, hibiscus. rocks.", price: "17" },
    ],
    modernClassics: [
      { name: "smoked maple & walnut old fashioned", description: "rye, maple syrup, black walnut & orange bitters, smoked glass. on a rock", price: "16" },
      { name: "el bandito", description: "el tesoro blanco tequila, select, orgeat, mezcal rinse, lime. rocks.", price: "16" },
      { name: "oswald negroni", description: "plymouth gin, select aperitivo, carpano antica. up.", price: "17" },
      { name: "the gali", description: "banks rum, zacapa solera rum, orange, lime, ginger, cherry heering, velvet falernum. up", price: "16" },
    ],
    mocktails: [
      { name: "virgin mojito", description: "mint, lime, sweet & sour, soda", price: "8" },
      { name: "fresh-squeezed lemonade", description: "lemon, sweet & sour, soda", price: "8" },
      { name: "blood orange, pomegranate spritzer", description: "lime, soda", price: "8" },
    ]
  },
  wine: {
    title: "WINE",
    byGlass: {
      white: [
        { name: "2022 Babich Sauvignon Blanc", description: "Marlborough, New Zealand", price: "9" },
        { name: "2023 Paso a Paso Verdejo", description: "La Mancha, Spain", price: "10" },
        { name: "2023 Chateau de Campuget Prestige Rose", description: "Costieres de Nimes, France", price: "10" },
        { name: "2022 Ogier Lirac Le Petit Paradoxe Blanc", description: "(Clariette/Bourboulenc/Grenache), Rhone Valley, France", price: "11" },
        { name: "NV Ackerman Cremant de Loire Bulle Royale Brut", description: "(Sparkling), France", price: "12" },
        { name: "2022 Louis Jadot Macon Villages", description: "(Chardonnay), Burgundy", price: "13" },
        { name: "2022 Talbott Sleepy Hollow Vineyard Chardonnay", description: "Santa Lucia Highlands, CA", price: "16" },
      ],
      red: [
        { name: "2022 Messer del Fauno Nero D'Avola", description: "Sicily, Italy", price: "10" },
        { name: "2021 Balletto Zinfandel", description: "Sonoma County, CA", price: "15" },
        { name: "2022 La Solitude Cotes du Rhone Arte", description: "(Grenache/Syrah/Mourvedre/ Cinsault), France", price: "17" },
        { name: "2021 Brady Vineyard Cabernet", description: "Paso Robles, CA", price: "15" },
        { name: "2021 Bodegas Volver Tempranillo", description: "La Mancha, Spain", price: "13" },
        { name: "2022 Big Basin Dune and Mountain Pinot Noir", description: "Gabilan Mountains, CA", price: "15" },
      ]
    },
    byBottle: {
      corkage: "$25 per 750ml bottle. Waived on a 1:1 ratio if you buy a bottle.",
      white: {
        sparkling: [
          { name: "NV Cleto Chiarli Lambrusco di Sorbara Secco", description: "Emilia-Romagna, Italy", price: "46" },
          { name: "NV Nino Franco Rustico Prosecco Superior", description: "Valdobbiadene, Italy", price: "53" },
          { name: "NV Bailey-Lapierre Blanc de Noir Cremant Brut", description: "Burgundy, France", price: "56" },
          { name: "NV Drappier Blanc de Blanc", description: "Champagne, France", price: "140" },
        ],
        northAmerica: [
          { name: "2022 Girasole Pinot Blanc", description: "Mendocino, CA", price: "40" },
          { name: "2021 Dry Creek Vineyard Dry Chenin Blanc", description: "Sonoma, CA", price: "42" },
          { name: "2022 Acrobat Pinot Gris", description: "Oregon", price: "42" },
          { name: "2022 Ancient Peaks Chardonnay", description: "Paso Robles, CA", price: "50" },
          { name: "2021 McIntyre Chardonnay", description: "Santa Lucia Highlands, CA", price: "52" },
          { name: "2017 Big Basin Howard Family Vineyard Chardonnay", description: "Santa Cruz Mountains, CA", price: "58" },
          { name: "2022 Bonterra Estate Collection Organic Chardonnay", description: "Mendocino, CA", price: "60" },
          { name: "2022 The Paring Chardonnay", description: "Santa Barbara County, CA", price: "64" },
          { name: "2020 Outerbound Chardonnay", description: "Sonoma, CA", price: "66" },
          { name: "2021 Pahlmeyer Jayson Chardonnay", description: "Napa Valley, CA", price: "90" },
        ],
        france: [
          { name: "2021 Cristia Collection Riviera Rose", description: "Cotes de Provence", price: "34" },
          { name: "2021 Chateau De La Roche Sauvignon Blanc", description: "Touraine, Loire", price: "40" },
          { name: "2017 Les Rocailles Apremont Vielles Vignes Jacquere", description: "Savoie", price: "42" },
          { name: "2022 Louis Jadot Macon Villages", description: "Burgundy", price: "50" },
          { name: "2021 Campuget 1753 Viognier", description: "Southern France", price: "62" },
          { name: "2023 Hubert Brochard Sancerre Tradition", description: "Loire Valley", price: "78" },
          { name: "2022 Joseph Drouhin Montagny", description: "Burgundy", price: "78" },
        ],
        italy: [
          { name: "2020 Violetta Langhe Arneis", description: "Piedmont", price: "34" },
          { name: "2018 Lagaria Pinot Grigio delle Dolomiti", description: "Tipica", price: "36" },
          { name: "2019 Famiglia Pasqua Passione Sentimento Bianco", description: "Veneto", price: "40" },
          { name: "2021 Pieropan Soave Classico", description: "Veneto", price: "42" },
          { name: "2022 Enrico Serafino Grifo del Quartaro Gavi di Gavi", description: "Piedmont", price: "58" },
          { name: "2022 Canayli Vermentino Di Gallura Superior", description: "Sardenia, Italy", price: "58" },
          { name: "2022 Allegrini Lugana", description: "Lombardy", price: "62" },
          { name: "2021 Tornatore Etna Bianco", description: "Sicily", price: "62" },
        ],
        spain: [
          { name: "2021 Izadi-Larrosa Rose", description: "Rioja", price: "38" },
          { name: "2021 Flor de Vetus Verdejo", description: "Rueda", price: "42" },
        ],
        germany: [
          { name: "2011 Selbach Oster Riesling Kabinett", description: "Mosel", price: "40" },
          { name: "2011 Meulenhof \"Wehlener Sonnenuhr\" Riesling", description: "Spatlese, Mosel", price: "52" },
          { name: "2013 Christoffel, Riesling Spatlese", description: "Mosel", price: "55" },
          { name: "2022 Dr Loosen \"Blue Slate\" Riesling Kabinett", description: "Mosel", price: "56" },
        ],
        newZealand: [
          { name: "2023 The Better Half Sauvignon Blanc", description: "Marlborough", price: "42" },
          { name: "2022 Icon Rock Sauvignon Blanc", description: "Marlborough", price: "46" },
          { name: "2022 Whitehaven Sauvignon Blanc", description: "Marlborough", price: "46" },
        ],
        australia: [
          { name: "2021 Yalumba Organic Viognier", description: "Angaston", price: "48" },
        ]
      },
      red: {
        northAmerica: [
          { name: "2021 Brady Cabernet Sauvignon", description: "Paso Robles, CA", price: "50" },
          { name: "2020 Barra Reserve Petite Sirah", description: "Mendocino County, CA", price: "54" },
          { name: "2021 Browne Forest Project Cabernet Sauvignon", description: "Paso Robles, CA", price: "54" },
          { name: "2016 Hatcher Dolcetto", description: "Calaveras County, CA", price: "56" },
          { name: "2018 Rusack Syrah Ballard Canyon Estate", description: "Solvang, CA", price: "56" },
          { name: "2018 Big Basin Vineyards Gabilan Mountains GSM", description: "Boulder Creek, CA", price: "58" },
          { name: "2023 Row 503 Pinot Noir", description: "Willamette Valley, OR", price: "58" },
          { name: "2020 Trefethen Eschol Red Blend", description: "Napa, CA", price: "60" },
          { name: "2021 Hilltop Cabernet Sauvignon", description: "J. Lohr, Paso Robles, CA", price: "66" },
          { name: "2021 The Paring Pinot Noir", description: "Santa Barbara County, CA", price: "64" },
          { name: "2021 Integrity Pinot Noir", description: "Santa Lucia Highlands, CA", price: "70" },
        ],
        france: [
          { name: "2018 Chateau Subilaux Bordeaux Rouge", price: "40" },
          { name: "2016 Gerard Bertrand Art de Vivre", description: "Vin Rouge, Languedoc", price: "45" },
          { name: "2021 Domaine de La Solitude Cotes du Rhone", description: "Rhone", price: "48" },
          { name: "2020 Vignerons de Buxy Mercurey", description: "Buxy", price: "62" },
          { name: "2022 Jean-Francois Merieau Cot (Malbec) Cent Visages", description: "Touraine", price: "66" },
        ],
        italy: [
          { name: "2021 Poggio delle Robinie Valpolicella Ripasso DOC Superiore", description: "Veneto", price: "50" },
          { name: "2019 Antica Hirpinia Aglianico", description: "Piedmonte", price: "64" },
          { name: "2018 Supremus Rosso", description: "Super Tuscan", price: "74" },
        ],
        spain: [
          { name: "2021 Bodega Lanzaga Corriente", description: "Rioja", price: "54" },
          { name: "2019 Flor de Vetus Tempranillo", description: "Toro", price: "62" },
        ],
        portugal: [
          { name: "2021 Vicente Faria Animus Red Blend", description: "Doura, Portugal", price: "42" },
        ],
        argentina: [
          { name: "2019 Tapiz Alta Collection", description: "Mendoza", price: "46" },
        ],
        chile: [
          { name: "2021 Vino San Pedro 1865 Cabernet Sauvignon", price: "48" },
        ]
      }
    }
  },
  beer: {
    title: "BEER",
    draft: {
      title: "DRAFT BEER",
      note: "Rotating Drafts (you may inquire by phone)"
    },
    bottled: {
      title: "BOTTLED BEER",
      american: [
        { name: "Other Brother Tropic Desert Sour", price: "10" },
        { name: "North Coast Pranqster Ale", price: "8" },
        { name: "Tanuki Cider Ru & Lou vol. 2", price: "9" },
      ],
      belgian: [
        { name: "Delirium Ale", price: "10" },
        { name: "Monk's Cafe Flemish Sour", price: "12" },
      ],
      german: [
        { name: "Weihenstephaner", price: "7" },
        { name: "Erdinger Weissbrau", price: "7" },
        { name: "Erdinger N/A", price: "6" },
      ],
      england: [
        { name: "Samuel Smith's Imperial Stout", price: "9" },
      ],
      italy: [
        { name: "Menabrea", price: "7" },
      ]
    }
  }
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("dinner")

  const tabs = [
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "tuesday", label: "Tuesday" },
    { id: "happyHour", label: "Happy Hour" },
    { id: "cocktails", label: "Cocktails" },
    { id: "wine", label: "Wine" },
    { id: "beer", label: "Beer" },
  ]

  const MenuItem = ({ item }: { item: any }) => (
    <div className="py-3 border-b border-border/30 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-foreground mb-1">{item.name}</h4>
          {item.description && (
            <p className="text-sm text-muted-foreground font-light mb-1">{item.description}</p>
          )}
          {item.addons && (
            <p className="text-xs text-muted-foreground font-light italic">{item.addons}</p>
          )}
          {item.note && (
            <p className="text-xs text-muted-foreground font-light italic">{item.note}</p>
          )}
        </div>
        <div className="text-right">
          <span className="text-foreground font-light">{item.price}</span>
        </div>
      </div>
    </div>
  )

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4 font-light">
            Our Menu
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Dining & Drinks
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-light tracking-wider uppercase transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto">
          {/* Lunch Menu */}
          {activeTab === "lunch" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.lunch.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">{menuData.lunch.subtitle}</p>
              </div>
              <div className="space-y-1">
                {menuData.lunch.items.map((item, idx) => (
                  <MenuItem key={idx} item={item} />
                ))}
              </div>
              {menuData.lunch.desserts && (
                <div className="mt-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Desserts</h4>
                  <div className="space-y-1">
                    {menuData.lunch.desserts.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Dinner Menu */}
          {activeTab === "dinner" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.dinner.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">{menuData.dinner.subtitle}</p>
              </div>
              
              {menuData.dinner.appetizers && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Appetizers</h4>
                  <div className="space-y-1">
                    {menuData.dinner.appetizers.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {menuData.dinner.entrees && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Entrees</h4>
                  <div className="space-y-1">
                    {menuData.dinner.entrees.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {menuData.dinner.pubGrub && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Pub Grub</h4>
                  <div className="space-y-1">
                    {menuData.dinner.pubGrub.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {menuData.dinner.sides && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Sides</h4>
                  <div className="space-y-1">
                    {menuData.dinner.sides.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {menuData.dinner.desserts && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Desserts</h4>
                  <div className="space-y-1">
                    {menuData.dinner.desserts.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                  {menuData.dinner.dessertNote && (
                    <p className="text-xs text-muted-foreground font-light italic mt-4">
                      {menuData.dinner.dessertNote}
                    </p>
                  )}
                </div>
              )}

              {menuData.dinner.note && (
                <p className="text-xs text-muted-foreground font-light italic mt-6">
                  {menuData.dinner.note}
                </p>
              )}
            </div>
          )}

          {/* Tuesday Menu */}
          {activeTab === "tuesday" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.tuesday.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">{menuData.tuesday.subtitle}</p>
              </div>

              {menuData.tuesday.prixFixe && (
                <div className="mb-12 p-6 bg-secondary rounded-sm">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-4">
                    {menuData.tuesday.prixFixe.title}
                  </h4>
                  <p className="text-foreground mb-6">{menuData.tuesday.prixFixe.price}</p>
                  {menuData.tuesday.prixFixe.courses.map((course, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">{course.course}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {course.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {menuData.tuesday.appetizers && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Appetizers</h4>
                  <div className="space-y-1">
                    {menuData.tuesday.appetizers.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {menuData.tuesday.specialEntree && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Special Entree</h4>
                  <MenuItem item={menuData.tuesday.specialEntree} />
                </div>
              )}

              {menuData.tuesday.sides && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Sides</h4>
                  <div className="space-y-1">
                    {menuData.tuesday.sides.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {menuData.tuesday.pubGrub && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Pub Grub</h4>
                  <div className="space-y-1">
                    {menuData.tuesday.pubGrub.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Happy Hour */}
          {activeTab === "happyHour" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.happyHour.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">{menuData.happyHour.subtitle}</p>
              </div>
              <div className="space-y-1 mb-12">
                {menuData.happyHour.items.map((item, idx) => (
                  <MenuItem key={idx} item={item} />
                ))}
              </div>
              {menuData.happyHour.drinks && (
                <div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Drinks</h4>
                  <div className="space-y-1">
                    {menuData.happyHour.drinks.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Cocktails */}
          {activeTab === "cocktails" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.cocktails.title}
                </h3>
              </div>
              {menuData.cocktails.signature && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Signature Cocktails</h4>
                  <div className="space-y-1">
                    {menuData.cocktails.signature.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}
              {menuData.cocktails.modernClassics && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Modern Classics</h4>
                  <div className="space-y-1">
                    {menuData.cocktails.modernClassics.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}
              {menuData.cocktails.mocktails && (
                <div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">Mocktails (non-alcoholic)</h4>
                  <div className="space-y-1">
                    {menuData.cocktails.mocktails.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Wine */}
          {activeTab === "wine" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.wine.title}
                </h3>
              </div>

              {/* By the Glass */}
              <div className="mb-12">
                <h4 className="font-serif text-xl font-medium text-foreground mb-6">By The Glass</h4>
                {menuData.wine.byGlass.white && (
                  <div className="mb-8">
                    <h5 className="font-medium text-foreground mb-4">White</h5>
                    <div className="space-y-1">
                      {menuData.wine.byGlass.white.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}
                {menuData.wine.byGlass.red && (
                  <div>
                    <h5 className="font-medium text-foreground mb-4">Red</h5>
                    <div className="space-y-1">
                      {menuData.wine.byGlass.red.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* By the Bottle */}
              <div>
                <h4 className="font-serif text-xl font-medium text-foreground mb-6">By The Bottle</h4>
                <p className="text-sm text-muted-foreground font-light mb-8">{menuData.wine.byBottle.corkage}</p>

                <h5 className="font-medium text-foreground mb-4">White</h5>
                
                {menuData.wine.byBottle.white.sparkling && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Sparkling</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.sparkling.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.northAmerica && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">North America</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.northAmerica.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.france && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">France</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.france.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.italy && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Italy</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.italy.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.spain && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Spain</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.spain.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.germany && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Germany</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.germany.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.newZealand && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">New Zealand</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.newZealand.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.white.australia && (
                  <div className="mb-12">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Australia</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.white.australia.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                <h5 className="font-medium text-foreground mb-4 mt-8">Red</h5>

                {menuData.wine.byBottle.red.northAmerica && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">North America</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.northAmerica.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.red.france && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">France</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.france.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.red.italy && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Italy</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.italy.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.red.spain && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Spain</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.spain.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.red.portugal && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Portugal</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.portugal.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.red.argentina && (
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Argentina</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.argentina.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {menuData.wine.byBottle.red.chile && (
                  <div>
                    <h6 className="text-sm font-medium text-muted-foreground mb-3">Chile</h6>
                    <div className="space-y-1">
                      {menuData.wine.byBottle.red.chile.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Beer */}
          {activeTab === "beer" && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {menuData.beer.title}
                </h3>
              </div>

              {menuData.beer.draft && (
                <div className="mb-12">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-2">
                    {menuData.beer.draft.title}
                  </h4>
                  {menuData.beer.draft.note && (
                    <p className="text-sm text-muted-foreground font-light mb-6">{menuData.beer.draft.note}</p>
                  )}
                </div>
              )}

              {menuData.beer.bottled && (
                <div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-6">
                    {menuData.beer.bottled.title}
                  </h4>

                  {menuData.beer.bottled.american && (
                    <div className="mb-8">
                      <h5 className="font-medium text-foreground mb-4">American</h5>
                      <div className="space-y-1">
                        {menuData.beer.bottled.american.map((item, idx) => (
                          <MenuItem key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  )}

                  {menuData.beer.bottled.belgian && (
                    <div className="mb-8">
                      <h5 className="font-medium text-foreground mb-4">Belgian</h5>
                      <div className="space-y-1">
                        {menuData.beer.bottled.belgian.map((item, idx) => (
                          <MenuItem key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  )}

                  {menuData.beer.bottled.german && (
                    <div className="mb-8">
                      <h5 className="font-medium text-foreground mb-4">German</h5>
                      <div className="space-y-1">
                        {menuData.beer.bottled.german.map((item, idx) => (
                          <MenuItem key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  )}

                  {menuData.beer.bottled.england && (
                    <div className="mb-8">
                      <h5 className="font-medium text-foreground mb-4">England</h5>
                      <div className="space-y-1">
                        {menuData.beer.bottled.england.map((item, idx) => (
                          <MenuItem key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  )}

                  {menuData.beer.bottled.italy && (
                    <div>
                      <h5 className="font-medium text-foreground mb-4">Italy</h5>
                      <div className="space-y-1">
                        {menuData.beer.bottled.italy.map((item, idx) => (
                          <MenuItem key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
