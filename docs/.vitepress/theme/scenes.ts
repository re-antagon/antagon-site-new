/**
 * Route -> backdrop scene mapping.
 * Scenes 1..10 select a colour palette in GrainyBackdrop.vue, so every
 * section of the wiki gets its own atmosphere. Scene 7 is the neutral
 * brand (amber) default.
 */
const SCENE_RULES: Array<[RegExp, number]> = [
  [/^\/gods\/items\/1_infinitum|^\/gods\/1_infinitum|^\/guide\/mechanics\/(infinitum-spells|automatons)/, 1],
  [/^\/gods\/items\/2_mater|^\/gods\/2_mater/, 2],
  [/^\/gods\/items\/3_fungus|^\/gods\/3_fungus|^\/guide\/mechanics\/second_stomach/, 3],
  [/^\/gods\/items\/4_finis|^\/gods\/4_finis/, 4],
  [/^\/gods\/items\/5_bellum|^\/gods\/5_bellum/, 5],
  [/^\/gods\/items\/6_cosm|^\/gods\/6_cosm|^\/guide\/mechanics\/(star_armor|star_dragon)/, 6],
  [/^\/gods\/items\/7_distorta|^\/gods\/7_distorta|^\/guide\/mechanics\/(distortion-spells|necromancy|turn_undead|cursed_golden_swords)/, 8],
  [/^\/gods\/items\/8_ignos|^\/gods\/8_ignos/, 9],
  [/^\/gods\/purgatory|^\/guide\/places/, 10]
]

export const DEFAULT_SCENE = 7

export function sceneForPath(path: string | undefined | null): number {
  const clean = (path || '/').split('?')[0].split('#')[0]
  for (const [pattern, scene] of SCENE_RULES) {
    if (pattern.test(clean)) return scene
  }
  return DEFAULT_SCENE
}
