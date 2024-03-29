const feedstocks = {
  'bedded-dairy': { label: 'Bedded Dairy', moisture: 65, carbon: 43, nitrogen: 2.5, phosphorus: 1.38, density: 0.47, materialType: 'Animal Manure' },
  'bedded-horse': { label: 'Bedded Horse', moisture: 55, carbon: 46, nitrogen: 1.2, phosphorus: 0.1886, density: 0.38, materialType: 'Animal Manure' },
  'bedded-sheep': { label: 'Bedded Sheep', moisture: 60, carbon: 43, nitrogen: 2, phosphorus: 4.14, density: 0.47, materialType: 'Animal Manure' },
  'bedded-swine': { label: 'Bedded Swine', moisture: 60, carbon: 45, nitrogen: 2.5, phosphorus: 2.3, density: 0.53, materialType: 'Animal Manure' },
  'cattle-bedded': { label: 'Cattle Bedded', moisture: 65, carbon: 45, nitrogen: 2, phosphorus: 2.3, density: 0.47, materialType: 'Animal Manure' },
  'manure-cattle': { label: 'Manure, Cattle', moisture: 81, carbon: 41.27, nitrogen: 2.4, phosphorus: 3.22, density: 0.77, materialType: 'Animal Manure' },
  'manure-dairy-cow': { label: 'Manure, Dairy Cow', moisture: 80, carbon: 37.93, nitrogen: 3, phosphorus: 1.84, density: 0.77, materialType: 'Animal Manure' },
  'manure-horse': { label: 'Manure, Horse', moisture: 65, carbon: 43.44, nitrogen: 1.6, phosphorus: 0.23, density: 0.71, materialType: 'Animal Manure' },
  'manure-poultry': { label: 'Manure, Poultry', moisture: 69, carbon: 47.78, nitrogen: 8, phosphorus: 22.08, density: 0.89, materialType: 'Animal Manure' },
  'manure-sheep': { label: 'Manure, Sheep', moisture: 69, carbon: 39.1, nitrogen: 2.7, phosphorus: 5.06, density: 0.71, materialType: 'Animal Manure' },
  'manure-swine': { label: 'Manure, Swine', moisture: 80, carbon: 41.67, nitrogen: 3.1, phosphorus: 3.22, density: 0.89, materialType: 'Animal Manure' },
  'poultry-bedded': { label: 'Poultry Bedded', moisture: 53, carbon: 51.64, nitrogen: 5.35, phosphorus: 21.16, density: 0.53, materialType: 'Animal Manure' },
  'turkey-manure': { label: 'Turkey Manure', moisture: 55, carbon: 39, nitrogen: 3.8, phosphorus: 5.52, density: 0.53, materialType: 'Animal Manure' },
  'turkey-manure-bedding': { label: 'Turkey Manure: Bedding', moisture: 29, carbon: 43, nitrogen: 3.4, phosphorus: 4.6, density: 0.46, materialType: 'Animal Manure' },
  'apple-filter-cake': { label: 'Apple filter cake', moisture: 60, carbon: 15.6, nitrogen: 1.2, phosphorus: 0.13, density: 0.7, materialType: 'Crop Residuals, fruits, vegetables' },
  'apple-pomace': { label: 'Apple, Pomace', moisture: 90, carbon: 52.8, nitrogen: 1.1, phosphorus: 0.13, density: 0.91, materialType: 'Crop Residuals, fruits, vegetables' },
  'apple-process-sludge': { label: 'Apple, process sludge', moisture: 60, carbon: 19.6, nitrogen: 2.8, phosphorus: 0.13, density: 0.84, materialType: 'Crop Residuals, fruits, vegetables' },
  'vegetable-produce': { label: 'Vegetable, produce', moisture: 90, carbon: 45, nitrogen: 1.6, phosphorus: 0.3, density: 0.95, materialType: 'Crop Residuals, fruits, vegetables' },
  'blood-wastes': { label: 'Blood wastes', moisture: 90, carbon: 43.875, nitrogen: 13.5, phosphorus: 1.5, density: 0.9, materialType: 'Fish and Meat Processing' },
  'crab-and-lobster-wastes': { label: 'Crab and Lobster wastes', moisture: 50, carbon: 30.5, nitrogen: 6.1, phosphorus: 2.3, density: 0.15, materialType: 'Fish and Meat Processing' },
  'fish-processing-sludge': { label: 'Fish, processing sludge', moisture: 0.9, carbon: 35.36, nitrogen: 6.8, phosphorus: 1.5, density: 0.95, materialType: 'Fish and Meat Processing' },
  'fish-wastes-gurry-racks-ect': { label: 'Fish, wastes (gurry, racks, ect.)', moisture: 75, carbon: 39.6, nitrogen:   11, phosphorus: 1.5, density: 0.7, materialType: 'Fish and Meat Processing' },
  'paunch-manure': { label: 'Paunch manure', moisture: 82.5, carbon: 45, nitrogen: 1.8, phosphorus: 0.6, density: 0.89, materialType: 'Fish and Meat Processing' },
  'shrimp-waste': { label: 'Shrimp Waste', moisture: 75, carbon: 18.36, nitrogen: 5.4, phosphorus: 3.358, density: 0.89, materialType: 'Fish and Meat Processing' },
  'activated-sludge': { label: 'Activated Sludge', moisture: 77, carbon: 33.6, nitrogen: 5.6, phosphorus: 2.3, density: 0.89, materialType: 'Municipal Wastes' },
  'digested-sludge': { label: 'Digested sludge', moisture: 75, carbon: 80, nitrogen: 5, phosphorus: 2.3, density: 0.92, materialType: 'Municipal Wastes' },
  'food-waste': { label: 'Food Waste', moisture: 70, carbon: 38.25, nitrogen: 2.55, phosphorus: 0.4, density: 0.74, materialType: 'Municipal Wastes' },
  'mixed-food-green-waste': { label: 'Mixed food/green waste', moisture: 70, carbon: 48, nitrogen: 3.5, phosphorus: 0.4, density: 0.59, materialType: 'Municipal Wastes' },
  'night-soil': { label: 'Night soil', moisture: 85, carbon: 48, nitrogen: 6, phosphorus: 4, density: 0.86, materialType: 'Municipal Wastes' },
  'paper-from-domestic-use': { label: 'Paper from domestic use', moisture: 19, carbon: 31, nitrogen: 0.2, phosphorus: 0.1, density: 0.25, materialType: 'Municipal Wastes' },
  'primary-sludge': { label: 'Primary Sludge', moisture: 75, carbon: 63, nitrogen: 6, phosphorus: 2.3, density: 0.88, materialType: 'Municipal Wastes' },
  'straw-general': { label: 'Straw, general', moisture: 12, carbon: 56, nitrogen: 0.7, phosphorus: 0, density: 0.14, materialType: 'Straw, Hay, Silage' },
  'water': { label: 'Water', moisture: 100, carbon: 0, nitrogen: 0, phosphorus: 0, density: 1, materialType: 'Water' },
  'bark-hardwoods': { label: 'Bark hardwoods', moisture: 0, carbon: 38, nitrogen: 0.25, phosphorus: 0.1, density: 0.3, materialType: 'Wood and Paper' },
  'bark-softwoods': { label: 'Bark softwoods', moisture: 0, carbon: 45, nitrogen: 0.14, phosphorus: 0.1, density: 0.3, materialType: 'Wood and Paper' },
  'corrugated-cardboard': { label: 'Corrugated cardboard', moisture: 8, carbon: 35, nitrogen: 0.1, phosphorus: 0.1, density: 0.15, materialType: 'Wood and Paper' },
  'dry-shavings': { label: 'Dry Shavings', moisture: 55, carbon: 38, nitrogen: 0.12, phosphorus: 0.2, density: 0.15, materialType: 'Wood and Paper' },
  'newsprint': { label: 'Newsprint', moisture: 5.5, carbon: 30, nitrogen: 0.1, phosphorus: 0.1, density: 0.13, materialType: 'Wood and Paper' },
  'paper-occ-sludge': { label: 'Paper OCC sludge', moisture: 65, carbon: 36, nitrogen: 1.13, phosphorus: 0.2, density: 0.68, materialType: 'Wood and Paper' },
  'sawdust': { label: 'Sawdust', moisture: 40, carbon: 40, nitrogen: 0.12, phosphorus: 0.1, density: 0.25, materialType: 'Wood and Paper' },
  'wood-hardwoods': { label: 'Wood, hardwoods', moisture: 45, carbon: 35, nitrogen: 0.09, phosphorus: 0.1, density: 0.33, materialType: 'Wood and Paper' },
  'wood-softwoods': { label: 'Wood, softwoods', moisture: 45, carbon: 38, nitrogen: 0.12, phosphorus: 0.1, density: 0.27, materialType: 'Wood and Paper' },
  'woodchips': { label: 'Woodchips', moisture: 45, carbon: 38, nitrogen: 0.12, phosphorus: 0.1, density: 0.33, materialType: 'Wood and Paper' },
  'compacted-and-moist': { label: 'Compacted and Moist', moisture: 55, carbon: 47, nitrogen: 0.9, phosphorus: 0.10718, density: 0.3, materialType: 'Yard waste and Other Vegetation' },
  'compacted-grass-clippings': { label: 'Compacted grass clippings', moisture: 80, carbon: 58, nitrogen: 3.4, phosphorus: 1, density: 0.3, materialType: 'Yard waste and Other Vegetation' },
  'grass-clippings': { label: 'Grass Clippings', moisture: 80, carbon: 57.8, nitrogen: 3.4, phosphorus: 1, density: 0.13, materialType: 'Yard waste and Other Vegetation' },
  'leaves': { label: 'Leaves', moisture: 38, carbon: 49.5, nitrogen: 0.9, phosphorus: 0.10718, density: 0.21, materialType: 'Yard waste and Other Vegetation' },
  'loose-dry-leaves': { label: 'Loose dry leaves', moisture: 0, carbon: 47, nitrogen: 0.9, phosphorus: 0.10718, density: 0.17, materialType: 'Yard waste and Other Vegetation' },
  'loose-grass-clippings': { label: 'Loose Grass Clippings', moisture: 80, carbon: 58, nitrogen: 3.4, phosphorus: 1, density: 0.13, materialType: 'Yard waste and Other Vegetation' },
  'seaweed': { label: 'Seaweed', moisture: 50, carbon: 36.1, nitrogen: 1.9, phosphorus: 0, density: 0.47, materialType: 'Yard waste and Other Vegetation' },
  'shrub-trimmings': { label: 'Shrub trimmings', moisture: 15, carbon: 50, nitrogen: 1, phosphorus: 0.1, density: 0.43, materialType: 'Yard waste and Other Vegetation' },
  'tree-trimmings': { label: 'Tree trimmings', moisture: 70, carbon: 49.6, nitrogen: 3.1, phosphorus: 0.1, density: 0.09, materialType: 'Yard waste and Other Vegetation' },
  'water-hyacinth': { label: 'Water hyacinth', moisture: 90, carbon: 0, nitrogen: 0, phosphorus: 0.1, density: 0.29, materialType: 'Yard waste and Other Vegetation' },
};

export default feedstocks;
