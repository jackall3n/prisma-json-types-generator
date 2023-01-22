export const JSON_REGEX = /^\s*\[(.*?)\]/m;

/**
 * A list of regexes to match all types and subtypes generated by prisma for a specific model
 */
export function regexForPrismaType(name: string) {
  return [
    new RegExp(`^${name}CountAggregate$`, 'm'),
    // new RegExp(`^${name}CountAggregateOutputType$`, 'm'), `number` fields
    // new RegExp(`^${name}CountOrderByAggregateInput$`, 'm'), `SortOrder` fields
    // new RegExp(`^${name}CountAggregateInputType$`, 'm'), `true` fields

    new RegExp(`^${name}Group$`, 'm'),
    new RegExp(`^${name}GroupByOutputType$`, 'm'),
    // new RegExp(`^${name}OrderByWithRelationInput$`, 'm'), `SortOrder` fields
    // new RegExp(`^${name}OrderByWithAggregationInput$`, 'm'), `SortOrder` fields

    new RegExp(`^${name}(?:Scalar)?Where$`, 'm'),
    new RegExp(`^${name}(?:Scalar)?WhereInput$`, 'm'),
    new RegExp(`^${name}(?:Scalar)?WhereWithAggregatesInput$`, 'm'),

    new RegExp(`^${name}(?:Unchecked)?CreateInput$`, 'm'),
    new RegExp(`^${name}(?:Unchecked)?CreateManyInput$`, 'm'),
    new RegExp(`^${name}(?:Unchecked)?CreateWithout(?:\\w+?)Input$`, 'm'),
    new RegExp(`^${name}(?:Unchecked)?CreateMany(?:\\w+?)Input$`, 'm'),

    new RegExp(`^${name}(?:Unchecked)?UpdateInput$`, 'm'),
    new RegExp(`^${name}(?:Unchecked)?UpdateManyInput$`, 'm'),
    new RegExp(`^${name}(?:Unchecked)?UpdateManyMutationInput$`, 'm'),
    new RegExp(`^${name}(?:Unchecked)?UpdateWithout(?:\\w+?)Input$`, 'm')
  ];
}

/**
 * If the provided type is a update one variant
 */
export function isUpdateOne(type: string) {
  return type.match(/UpdateInput$/m) || type.match(/UpdateWithout(?:\\w+?)Input$/m);
}
