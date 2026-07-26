import {
  CUSTOM_GENOME_CATEGORY,
  getEditedGenomeLabel,
  getGenomePickerCategories,
} from '../genomePicker';

describe('genome picker custom entries', () => {
  test('adds Custom before catalog categories only when a custom genome exists', () => {
    const catalog = ['Manual', 'Evolution'] as const;

    expect(getGenomePickerCategories(catalog, false)).toEqual(catalog);
    expect(getGenomePickerCategories(catalog, true)).toEqual([
      CUSTOM_GENOME_CATEGORY,
      ...catalog,
    ]);
  });

  test('uses the requested names for shared and new genome edits', () => {
    expect(getEditedGenomeLabel('shared', 'Shared')).toBe('Shared (edited)');
    expect(getEditedGenomeLabel('url', 'Shared')).toBe('Shared (edited)');
    expect(getEditedGenomeLabel('new', 'New')).toBe('New (edited)');
  });

  test('keeps the existing label convention for other edited genomes', () => {
    expect(getEditedGenomeLabel('catalog', 'Dumbbell')).toBe('Edited: Dumbbell');
    expect(getEditedGenomeLabel('upload', 'example.yaml')).toBe(
      'Edited: example.yaml'
    );
  });
});
