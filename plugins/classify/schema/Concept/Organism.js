export default {
  name: 'Organism',
  //
  children: {},
  //
  categories: {
    mapping: [
      'agamidae',
      'american inventions',
      'angiosperm orders',
      'animal dance',
      'animal phyla',
      'berries',
      'bird families',
      'birds by common name',
      'calidris',
      'cimolodonts',
      'commercial fish',
      'corvus (genus)',
      'cretaceous mammals',
      'crops originating from the americas',
      'crops',
      'ducks',
      'edge species',
      'edible nuts and seeds',
      'entheogens',
      'epiphytic orchids',
      'flowers',
      'fruits originating in asia',
      'geckos',
      'geese',
      'herbs',
      'indian spices',
      'insects in culture',
      'invasive plant species',
      'leaf vegetables',
      'living fossils',
      'mammal families',
      'marine edible fish',
      'megafauna',
      'multituberculates',
      'non-timber forest products',
      'ornamental trees',
      'paleocene genus extinctions',
      'paleocene mammals',
      'phelsuma',
      'pinus',
      'plants and pollinators',
      'ptilodontoids',
      'root vegetables',
      'setophaga',
      'shorebirds',
      'skinks',
      'spices',
      'taxa named by carl linnaeus',
      'taxa named by john edward gray',
      'taxa named by leopold fitzinger',
      'tropical agriculture',
      'tropical fruit',
      'urban animals',
    ],
    patterns: [
      /(funghi|reptiles|flora|fauna|fish|birds|trees|mammals|plants) of ./,
      / first appearances/,
      / . described in [0-9]{4}/,
      /. (phyla|genera)$/,
      /. taxonomic families$/,
      /plants used in ./,
      / (funghi|reptiles|flora|fauna|fish|birds|trees|mammals|plants)$/,
    ],
  },
  //
  descriptions: {
    patterns: [],
  },
  //
  infoboxes: {
    mapping: [
      'speciesbox',
      'automatic_taxobox',
      'dogbreed',
      'dog_breed',
      'cat_breed',
      'grape_variety',
      'taxobox',
      'subspeciesbox',
      'mycomorphbox',
      'paraphyletic_group',
      'nutritional_value',
      'infraspeciesbox',
      'horse',
      'haplogroup',
      'bird',
      'bird/population',
      'medical_resources',
      'nc_name',
      'pig_breed',
      'botanical_product',
      'cattle_breed',
      'horse_breed',
      'poultry_breed',
    ],
    patterns: [],
  },
  //
  sections: {
    mapping: [
      'habitat',
      'morphology',
      'phylogeny',
      'distribution and diversity',
      'distribution and habitat',
      'reproduction and development',
      'taxonomy and phylogeny',
    ],
    patterns: [],
  },
  //
  templates: {
    mapping: [
      'taxonbar',
      'wikispecies',
      'animalia',
      'chordata',
      'cnidaria',
      'porifera',
      'epicaridea',
      'mammals',
      'phlyctaeniidae',
      'carnivora',
      'clade',
      'life on earth',
      'orders of insects',
      'coleoptera',
      'insects in culture',
      'living things in culture',
      'eukaryota classification',
      'iucn status',
      'extinct',
      'fossil range',
      'internetbirdcollection',
      'vireo',
      'angle bracket',
      'wikispecies-inline',
      'iucn map',
      'xeno-canto species',
      'avibase',
      'cladex',
      'birdlife',
      'fossilrange',
    ],
    patterns: [],
  },
  //
  titles: {
    mapping: ['plant', 'genus', 'fish', 'bird'],
    patterns: [],
  },
}
