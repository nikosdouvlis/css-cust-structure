export const makeSlots = <T extends readonly string[]>(
  root: string,
  slots?: T
): { root: string } & Record<T[number], string[]> => {
  return {
    root,
    ...Object.fromEntries((slots || []).map((slot) => [slot, [root, slot]])),
  } as any;
};
