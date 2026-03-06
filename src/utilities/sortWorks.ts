import type { CollectionEntry } from 'astro:content';
type WorkEntry = CollectionEntry<'works'>;

export async function sortWorks(entries: WorkEntry[]): Promise<WorkEntry[]> {
  return entries.sort((a, b) => {
    // 1. 優先度の高い順にソート。優先度が指定されていない場合は0とみなす。
    const aPriority = a.data.priority ?? 0;
    const bPriority = b.data.priority ?? 0;
    if (aPriority !== bPriority) {
      return bPriority - aPriority;
    }

    // 2. 優先度が同じ場合は、日付の新しい順にソート。日付が指定されていない場合は、エントリーIDの降順でソート。
    const aDate = new Date(`${a.data.year}-${a.data.month}-01`);
    const bDate = new Date(`${b.data.year}-${b.data.month}-01`);
    if (aDate.getTime() !== bDate.getTime()) {
      return bDate.getTime() - aDate.getTime();
    }
    // 3. 日付も同じ場合は、エントリーIDの降順でソート。
    return b.id.localeCompare(a.id);
  });
}